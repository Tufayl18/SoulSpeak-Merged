const DoctorJoinRoom = () => {
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
      <div className="absolute top-[175px] left-[461px] bg-gray-100 w-[482px] h-[400px] overflow-hidden flex flex-col items-center justify-start text-base">
        <b className="w-[468px] relative text-xl flex text-center items-center justify-center h-[58px] shrink-0">
          Appoint time to users for room
        </b>
        <div className="w-[415px] bg-gray-200 h-[90px] overflow-hidden shrink-0 flex flex-col items-start justify-center">
          <b className="w-[140px] relative flex items-center h-[30px] shrink-0">
            Date
          </b>
          <input type="date" className="w-[375px] relative rounded-31xl bg-white h-10 overflow-hidden shrink-0" />
        </div>
        <div className="w-[415px] bg-gray-200 h-[90px] overflow-hidden shrink-0 flex flex-col items-start justify-center">
          <b className="w-[140px] relative flex items-center h-[30px] shrink-0">
            Time
          </b>
          <input type="time" className="w-[375px] relative rounded-31xl bg-white h-10 overflow-hidden shrink-0" />
        </div>
        <div className="w-[415px] bg-gray-200 h-[90px] overflow-hidden shrink-0 flex flex-col items-start justify-center">
          <b className="w-[140px] relative flex items-center h-[30px] shrink-0">
            Organized By
          </b>
          <div className="w-[375px] relative rounded-31xl bg-white h-10 overflow-hidden shrink-0" />
        </div>
        <button className="cursor-pointer [border:none] py-[11px] px-[43px] bg-rosybrown rounded-21xl overflow-hidden flex flex-row items-center justify-center">
          <b className="relative text-xl font-inter text-plum text-center">
            Send Mail to Users
          </b>
        </button>
      </div>
    </div>
  );
};

export default DoctorJoinRoom;
