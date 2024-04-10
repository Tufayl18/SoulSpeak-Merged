require('../config/db.js')
const brcypt = require('bcryptjs')
const nodemailer = require("nodemailer");
const { google } = require('googleapis')
const { USER, DOCTOR } = require('../model/usermodel.js')
require('dotenv').config({ path: '../.env' })

app.use(bodyParser.json());
app.use(cors());

exports.registerUser = async (req, res) => {
    const { name, email, password, contact, gender, dob, emergency_contact,
        primary_concern, preferred_therapist, treatment_history } = req.body

    if (!name || !email || !password || !contact || !gender || !dob || !emergency_contact
        || !primary_concern || !preferred_therapist || !treatment_history) {
        return res.status(400).json({ msg: "Please fill all fields" })
    }

    try {
        const findUser = await USER.findOne({ email: email });
        if (findUser) {
            return res.status(422).json({ msg: "User already exists" })
        }

        //const doctorsWithFewPatients = await DOCTOR.find({ patients: { $exists: true, $ne: null }, $expr: { $lt: [{ $size: "$patients" }, 5] } });
        const preferredTherapistDoctor = await DOCTOR.findOne({ _id: preferred_therapist });
        //const preferredTherapistDoctor =  await DOCTOR.findOne(doctor => doctor._id === preferred_therapist);

        if (preferredTherapistDoctor) {
            // if (preferredTherapistDoctor.patients.length >= 5) {
            //     return res.status(422).json({ msg: "Preferred therapist has reached the maximum number of patients" });
            // }
            const newUser = new USER({
                name: name, email: email, password: password, contact: contact, gender: gender, dob: dob,
                emergency_contact: emergency_contact, primary_concern: primary_concern, preferred_therapist: preferred_therapist,
                treatment_history: treatment_history
            })

            console.log("Preferred Therapist", preferred_therapist)
            await newUser.save()

            preferredTherapistDoctor.patients.push(newUser._id);
            await preferredTherapistDoctor.save();
            res.status(200).json({ msg: `Patient added to preferred therapist successfully.` });
        }
        else {
            // If preferred therapist is not found, add patient to any doctor with fewer than 5 patients
            //const otherDoctor = await DOCTOR.findOne(doctor => doctor._id != preferred_therapist);
            const otherDoctor = await DOCTOR.findOne({ _id: { $ne: preferred_therapist } });

            if (otherDoctor && otherDoctor.patients.length < 5) {
                const newUser = new USER({
                    name: name, email: email, password: password, contact: contact, gender: gender, dob: dob,
                    emergency_contact: emergency_contact, primary_concern: primary_concern, preferred_therapist: preferred_therapist,
                    treatment_history: treatment_history
                })

                await newUser.save()
                // Add the patient to another doctor with fewer than 5 patients
                otherDoctor.patients.push(newUser._id);
                await otherDoctor.save();
                res.status(200).json({ msg: `Patient added to another therapist successfully.` });
            }
        }
        if (!newUser) {
            res.json({ status: 500, msg: "Error creating User " })
        }
        res.json({ status: 201, msg: "User added succesfully" })
    } catch (err) {
        console.log("Error at user signup", err)
    }
}

exports.registerDoctor = async (req, res) => {
    const { name, email, password, contact, licenseNumber, experience } = req.body
    console.log(email)
    if (!name || !email || !password || !contact || !licenseNumber || !experience) {
        return res.status(400).json({ msg: "Please fill all fields" })
    }

    try {
        const findDoctor = await DOCTOR.findOne({ email: email });

        if (findDoctor) {
            return res.status(422).json({ msg: "Doctor already exists" })
        }

        const newDoctor = new DOCTOR({
            name: name, email: email, password: password, contact: contact,
            licenseNumber: licenseNumber, experience: experience
        })

        await newDoctor.save()

        if (!newDoctor) {
            res.json({ status: 500, msg: "Error creating Doctor " })
        }
        res.json({ status: 201, msg: "Doctor added succesfully" })
    } catch (err) {
        console.log("Error at doctor registration", err)
    }
}

exports.login = async (req, res) => {
    const { identity, email, password } = req.body

    if (!identity || !email || !password) {
        return res.status(400).json({ msg: "Please fill all fields" })
    }

    try {
        switch (identity.toLowerCase()) {
            case "doctor":
                const doctorExist = await DOCTOR.findOne({ email: email })
                // console.log("donorExist:", email, " ", donorExist)

                if (!doctorExist) {
                    return res.json({ msg: "Account not found" })
                }
                const matchDoctorPassword = await brcypt.compare(password, doctorExist.password)
                if (!matchDoctorPassword) {
                    return res.json({ msg: "Invalid Password" })
                }
                const doctorToken = await doctorExist.generateDoctorTokens(res)
                console.log("Your generated token is: ", doctorToken)
                // console.log("Cookies: ", req.cookies)
                return res.json({ status: 200, msg: "Logged in", token: doctorToken, doctorToken: doctorToken, identity: "doctor" })

            case "user":
                const userExist = await USER.findOne({ email: email })
                if (!userExist) {
                    return res.json({ msg: "Account not found" })
                }
                const matchUserPassword = await brcypt.compare(password, userExist.password)
                if (!matchUserPassword) {
                    return res.json({ msg: "Invalid Password" })
                }
                const userToken = await userExist.generateUserTokens(res)
                console.log("Your generated token is: ", userToken)
                return res.json({ status: 200, msg: "Logged in", token: userToken, userExist: userExist, identity: "user" })

        }
    } catch (err) {
        console.log("Error at login", err)
    }

}

exports.gemini = async (req, res) => {
    const genAI = new GoogleGenerativeAI("AIzaSyD42k_6WF9Clm0v8i7SOnSS7ZryXTdojm0");
    try {
        const { feelings, gratitude, contributingFactors, exerciseSchedule, actionsToImprove, insights, helpReceived } = req.body;
        const prompts = [
            `How am I feeling today? ${feelings}`,
            `Things I am grateful for: ${gratitude}`,
            `Contributing factors to my feelings: ${contributingFactors}`,
            `My exercise schedule: ${exerciseSchedule}`,
            `Actions to improve my mood: ${actionsToImprove}`,
            `Insights I've gained: ${insights}`,
            `Help received from my doctor: ${helpReceived}`,
        ];

        const summarizedResponses = [];
        for (const prompt of prompts) {
            summarizedResponses.push(await summarizePrompt(prompt));
        }

        res.json({ summarizedResponses });
    } catch (error) {
        console.error('Error generating emotions journaling response:', error);
        res.status(500).json({ error: 'An error occurred while generating emotions journaling response.' });
    }

    async function summarizePrompt(prompt) {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();

        // Remove '/n' and '*' characters
        const cleanedText = text.replace(/\/n/g, '').replace(/\*/g, '').trim();

        return cleanedText;
    }
}



