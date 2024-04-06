import Navbar from "../components/Navbar";

const UserSignup = () => {
  return (
    <div className="w-full relative [background:linear-gradient(121.5deg,_#eed8ec_23.42%,_#a8edea)] h-[1063px] overflow-hidden text-center text-5xl text-rosybrown font-inter">
      <Navbar logIn="Log In" />
      <div className="absolute top-[98px] left-[115px] bg-gray-100 w-[1093px] h-[881px] overflow-hidden flex flex-col items-center justify-start py-5 px-2.5 box-border">
        <b className="w-[833px] relative tracking-[0.1em] flex items-center justify-center">
          USER SIGN UP
        </b>
        <div className="w-[956px] h-[742px] overflow-hidden shrink-0 flex flex-row flex-wrap items-center justify-start py-0 px-0.5 box-border gap-[20px_19px] text-left text-base">
          <img
            className="w-[390px] relative h-[247.7px] object-cover"
            alt=""
            src="/signup.png"
          />
          <div className="w-[529px] box-border h-[321px] overflow-hidden shrink-0 flex flex-col items-center justify-start p-2.5 gap-[19px] border-[1px] border-solid border-rosybrown">
            <b className="w-[354px] relative text-xl flex text-center items-center justify-center h-[30px] shrink-0">
              Hello, let us know more about you!
            </b>
            <div className="w-[499px] bg-gray-200 h-[47px] overflow-hidden shrink-0 flex flex-row items-center justify-start p-2.5 box-border gap-[10px]">
              <b className="w-[84px] relative flex items-center h-[30px] shrink-0">
                Name
              </b>
              <input className="w-[375px] relative rounded-31xl bg-white h-10 overflow-hidden shrink-0" />
            </div>
            <div className="w-[499px] bg-gray-200 h-[47px] overflow-hidden shrink-0 flex flex-row items-center justify-start p-2.5 box-border gap-[10px]">
              <b className="w-[84px] relative flex items-center h-[30px] shrink-0">
                Email
              </b>
              <input className="w-[375px] relative rounded-31xl bg-white h-10 overflow-hidden shrink-0" />
            </div>
            <div className="w-[499px] bg-gray-200 h-[47px] overflow-hidden shrink-0 flex flex-row items-center justify-start p-2.5 box-border gap-[10px]">
              <b className="w-[84px] relative flex items-center h-[30px] shrink-0">
                Password
              </b>
              <input className="w-[375px] relative rounded-31xl bg-white h-10 overflow-hidden shrink-0" />
            </div>
            <div className="w-[499px] bg-gray-200 h-[47px] overflow-hidden shrink-0 flex flex-row items-center justify-start p-2.5 box-border gap-[10px]">
              <b className="w-[84px] relative flex items-center h-[30px] shrink-0">
                Contact
              </b>
              <input className="w-[375px] relative rounded-31xl bg-white h-10 overflow-hidden shrink-0" />
            </div>
          </div>
          <div className="w-[458px] box-border h-[330px] overflow-hidden shrink-0 flex flex-col items-center justify-start p-2.5 gap-[19px] border-[1px] border-solid border-rosybrown">
            <b className="w-[354px] relative text-xl flex text-center items-center justify-center h-[30px] shrink-0">
              Personal Information
            </b>
            <div className="w-[400px] bg-gray-200 h-[47px] overflow-hidden shrink-0 flex flex-row items-center justify-start p-2.5 box-border gap-[10px]">
              <b className="w-[84px] relative flex items-center h-[30px] shrink-0">
                Gender
              </b>
              <input className="w-[275px] relative rounded-31xl bg-white h-10 overflow-hidden shrink-0" />
            </div>
            <div className="w-[400px] bg-gray-200 h-[47px] overflow-hidden shrink-0 flex flex-row items-center justify-start p-2.5 box-border gap-[10px]">
              <b className="w-[84px] relative flex items-center h-[30px] shrink-0">
                Date Of Birth
              </b>
              <input type="date" className="w-[275px] relative rounded-31xl bg-white h-10 overflow-hidden shrink-0" />
            </div>
            <div className="w-[400px] bg-gray-200 h-[47px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-0 px-2.5 box-border gap-[10px]">
              <b className="w-[94px] relative flex items-center h-[30px] shrink-0">
                Emergency Contact
              </b>
              <input className="w-[275px] relative rounded-11xl bg-white h-10 overflow-hidden shrink-0" />
            </div>
          </div>
          <div className="w-[458px] box-border h-[327px] overflow-hidden shrink-0 flex flex-col items-center justify-start p-2.5 gap-[19px] border-[1px] border-solid border-rosybrown">
            <b className="w-[354px] relative text-xl flex text-center items-center justify-center h-[30px] shrink-0">
              {" "}
              Medical Information
            </b>
            <div className="w-[400px] bg-gray-200 h-[47px] overflow-hidden shrink-0 flex flex-row items-center justify-start p-2.5 box-border gap-[10px]">
              <b className="w-[84px] relative flex items-center h-[30px] shrink-0">
                Primary Concern
              </b>
              <input className="w-[275px] relative rounded-31xl bg-white h-10 overflow-hidden shrink-0" />
            </div>
            <div className="w-[400px] bg-gray-200 h-[47px] overflow-hidden shrink-0 flex flex-row items-center justify-start p-2.5 box-border gap-[10px]">
              <b className="w-[84px] relative flex items-center h-[30px] shrink-0">
                Preferred Therapist
              </b>
              <select className="w-[275px] relative rounded-31xl bg-white h-10 overflow-hidden shrink-0" >
                <option> mr.shsh</option>
              </select>
            </div>
            <div className="w-[400px] bg-gray-200 h-[119px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-0 px-2.5 box-border gap-[10px]">
              <b className="w-[84px] relative flex items-center h-[30px] shrink-0">
                Treatment History
              </b>
              <textarea className="w-[275px] py-[10px] relative rounded-11xl bg-white h-27 overflow-auto shrink-0" />
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-[11px] px-[43px] bg-rosybrown rounded-21xl overflow-hidden flex flex-row items-center justify-center">
          <b className="relative text-xl font-inter text-plum text-center">
            Sign Me Up
          </b>
        </button>
      </div>
    </div>
  );
};

export default UserSignup;
