const DoctorMyPatients = () => {
  return (
    <div className="w-full relative [background:linear-gradient(121.5deg,_#eed8ec_23.42%,_#a8edea)] h-[750px] overflow-hidden text-left text-13xl text-rosybrown font-inter">
      <header className="absolute top-[0px] left-[0px] bg-thistle w-[1440px] overflow-hidden flex flex-row items-center justify-center py-2.5 px-0 box-border gap-[500px]">
        <img
          className="w-[200px] relative h-[47.7px] object-cover"
          alt=""
          src="/onlytextlogo-1@2x.png"
        />
        <nav className="m-0 bg-gray-200 overflow-hidden flex flex-row items-center justify-center py-[5px] px-2.5 gap-[10px] text-left text-xl text-rosybrown font-inter">
          <b className="w-[100px] relative flex items-center h-[30px] shrink-0">
            Home
          </b>
          <b className="w-[100px] relative flex items-center h-[30px] shrink-0">
            About
          </b>
          <b className="w-[100px] relative flex items-center h-[30px] shrink-0">
            Contact
          </b>
          <button className="cursor-pointer [border:none] py-[11px] px-[43px] bg-rosybrown rounded-21xl overflow-hidden flex flex-row items-center justify-center">
            <b className="relative text-xl font-inter text-plum text-center">
              Logout
            </b>
          </button>
        </nav>
      </header>
      <b className="absolute top-[103px] left-[90px] flex items-center w-[785px] h-[30px]">
        Hello Dr. Shweta !
      </b>
      <b className="absolute top-[157px] left-[91px] text-xl flex items-center w-[770px] h-[30px]">
        My Patients
      </b>
      <div className="absolute top-[203px] left-[82px] w-[1241px] h-[448px] overflow-hidden flex flex-row flex-wrap items-start justify-start p-2.5 box-border gap-[10px] text-base">
        
        <div className="w-[1200px] bg-gray-100 h-[171px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[5px] px-[29px] box-border gap-[43px]">
          
          <div className="w-[150px] relative rounded-[50%] bg-gainsboro h-[150px]" />
          <div className="w-[383px] h-[146px] overflow-hidden shrink-0 flex flex-col items-center justify-center p-2.5 box-border gap-[10px]">
            <div className="w-[322px] relative flex items-center h-6 shrink-0 text-xl">
              <span className="w-full">
                <b>
                  <span>KOI TOH BANDA</span>
                  <span className="text-base">{` `}</span>
                </b>
                <span className="text-base">
                  <span>(17y)</span>
                </span>
              </span>
            </div>
            <div className="w-[322px] relative flex items-center h-6 shrink-0">
              They / Them
            </div>
            <div className="w-[322px] relative flex items-center h-6 shrink-0">
              <span className="w-full">
                <b>Email</b>
                <span>: banda@gmail.com</span>
              </span>
            </div>
            <div className="w-[322px] relative flex items-center h-6 shrink-0">
              <span className="w-full">
                <b>Contact</b>
                <span>: 9875864857</span>
              </span>
            </div>
          </div>


          <div className="w-[274px] h-[146px] overflow-hidden shrink-0 flex flex-col items-center justify-center p-2.5 box-border">
            <div className="w-[253px] relative inline-block h-[117px] shrink-0">
              <b>{`Primary Concern: `}</b>
              <span>Kuch toh ho gyaa</span>
            </div>
          </div>
          <div className="h-[173px] overflow-hidden flex flex-col items-center justify-start py-[42px] px-0 box-border gap-[10px]">
            <button onClick={()=> window.location.href="http://localhost:3000/doctorviewreport"}
            className="cursor-pointer [border:none] py-[11px] px-[43px] bg-rosybrown rounded-21xl overflow-hidden flex flex-row items-center justify-center">
              <b className="relative text-xl font-inter text-plum text-center">
                View Report
              </b>
            </button>
            <button onClick={()=> window.location.href="http://localhost:3000/doctorsendmessage"} className="cursor-pointer [border:none] py-[11px] px-[43px] bg-rosybrown w-[207px] rounded-21xl overflow-hidden flex flex-row items-center justify-center box-border">
              <b className="relative text-xl font-inter text-plum text-center">
                Message
              </b>
            </button>
          </div>
        </div>


        {/* <div className="w-[1200px] bg-gray-100 h-[171px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[5px] px-[29px] box-border gap-[43px]">
          <div className="w-40 relative rounded-[50%] bg-gainsboro h-40" />
          <div className="w-[383px] h-[146px] overflow-hidden shrink-0 flex flex-col items-center justify-center p-2.5 box-border gap-[10px]">
            <div className="w-[322px] relative flex items-center h-6 shrink-0 text-xl">
              <span className="w-full">
                <b>
                  <span>KOI TOH BANDA</span>
                  <span className="text-base">{` `}</span>
                </b>
                <span className="text-base">
                  <span>(17y)</span>
                </span>
              </span>
            </div>
            <div className="w-[322px] relative flex items-center h-6 shrink-0">
              They / Them
            </div>
            <div className="w-[322px] relative flex items-center h-6 shrink-0">
              <span className="w-full">
                <b>Email</b>
                <span>: banda@gmail.com</span>
              </span>
            </div>
            <div className="w-[322px] relative flex items-center h-6 shrink-0">
              <span className="w-full">
                <b>Contact</b>
                <span>: 9875864857</span>
              </span>
            </div>
          </div>
          <div className="w-[274px] h-[146px] overflow-hidden shrink-0 flex flex-col items-center justify-center p-2.5 box-border">
            <div className="w-[253px] relative inline-block h-[117px] shrink-0">
              <b>{`Primary Concern: `}</b>
              <span>Kuch toh ho gyaa</span>
            </div>
          </div>
          <div className="h-[173px] overflow-hidden flex flex-col items-center justify-start py-[42px] px-0 box-border gap-[10px]">
            <button className="cursor-pointer [border:none] py-[11px] px-[43px] bg-rosybrown rounded-21xl overflow-hidden flex flex-row items-center justify-center">
              <b className="relative text-xl font-inter text-plum text-center">
                View Report
              </b>
            </button>
            <button className="cursor-pointer [border:none] py-[11px] px-[43px] bg-rosybrown w-[207px] rounded-21xl overflow-hidden flex flex-row items-center justify-center box-border">
              <b className="relative text-xl font-inter text-plum text-center">
                Message
              </b>
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default DoctorMyPatients;
