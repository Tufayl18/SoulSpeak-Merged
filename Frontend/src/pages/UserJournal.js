import Navbar1 from "../components/Navbar1";

const UserJournal = () => {
  return (
    <div className="w-full relative [background:linear-gradient(121.5deg,_#eed8ec_23.42%,_#a8edea)] h-[1163px] text-left text-xl text-rosybrown font-inter">
      {/* <header className="absolute top-[0px] left-[0px] bg-thistle w-[1440px] overflow-hidden flex flex-row items-center justify-center py-2.5 px-0 box-border gap-[500px]">
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
          <button className="cursor-pointer [border:none] py-[11px] px-[43px] bg-rosybrown w-28 rounded-21xl overflow-hidden shrink-0 flex flex-row items-center justify-center box-border">
            <b className="relative text-xl font-inter text-plum text-center">
              Logout
            </b>
          </button>
          <button className="cursor-pointer [border:none] py-[11px] px-[43px] bg-rosybrown w-28 rounded-21xl overflow-hidden shrink-0 flex flex-row items-center justify-center box-border">
            <b className="relative text-xl font-inter text-plum text-center">
              Profile
            </b>
          </button>
        </nav>
      </header> */}
      <Navbar1 />
      <b className="absolute top-[83px] left-[90px] text-13xl flex items-center w-[785px] h-[30px]">
        Hello Meghana !
      </b>

      <div className="absolute top-[161px] left-[41px] w-[1321px] overflow-hidden flex flex-row flex-wrap items-start justify-start py-2.5 px-0 box-border gap-[0px_50px] text-center">

        <div className="w-[281px] h-[511px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[11px]">
          <div className="bg-plum h-[69px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-0 px-[29px] box-border">
            <b className="w-[191px] relative flex items-center justify-center h-[74px] shrink-0">
              Week 1
            </b>
          </div>
          <div className="bg-plum h-[69px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-0 px-[29px] box-border">
            <b className="w-[191px] relative flex items-center justify-center h-[74px] shrink-0">
              Week 2
            </b>
          </div>
        </div>
        <div className="w-[965px] bg-gray-100 overflow-scroll h-[1200px] shrink-0 flex flex-col items-center justify-start pt-0 px-0 pb-3 box-border gap-[12px]">
          <b className="w-[457px] relative flex items-end justify-center h-[37px] shrink-0">
            Here’s a weekly journal waiting for you
          </b>
          <b className="w-[457px] relative flex items-center justify-center h-[23px] shrink-0">
            Date: 27/02/2004
          </b>
          <div className="w-[897px] overflow-hidden flex flex-row items-start justify-center gap-[10px]">
            <div className="w-[402px] overflow-hidden shrink-0 flex flex-col items-center justify-start p-2.5 box-border gap-[25px]">
              <div className="w-[385px] bg-plum overflow-hidden flex flex-col items-center justify-center p-[5px] box-border">
                <b className="w-[271px] relative flex items-center justify-center">
                  1. How am I feeling ?
                </b>
                <textarea value="qwerty" className="w-[359px] max-w-[359px] text-rosybrown bg-transparent relative text-left inline-block h-[90px] shrink-0"/>
                  
                <div className="w-[385px] bg-gray-200 overflow-hidden flex flex-row items-start justify-center py-0 px-[122px] box-border gap-[10px]">
                  <div className="w-10 relative h-10">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:linear-gradient(#926b73,_#926b73),_#926b73] w-10 h-10" />
                    <img
                      className="absolute top-[10px] left-[10px] w-[30px] h-[30px] object-cover"
                      alt=""
                      src="/microphone@2x.png"
                    />
                  </div>
                  <div className="w-10 relative h-10">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:linear-gradient(#926b73,_#926b73),_#926b73] w-10 h-10" />
                    <img
                      className="absolute top-[10px] left-[10px] w-[30px] h-[30px] object-cover"
                      alt=""
                      src="/stop@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[385px] bg-plum overflow-hidden flex flex-col items-center justify-center p-[5px] box-border">
                <b className="w-[363px] relative flex items-center justify-center">
                  3. What's contributing to this feeling ?
                </b>
                <textarea value="qwerty" className="w-[359px] max-w-[359px] text-rosybrown bg-transparent relative text-left inline-block h-[90px] shrink-0"/>
                <div className="w-[385px] bg-gray-200 overflow-hidden flex flex-row items-start justify-center py-0 px-[122px] box-border gap-[10px]">
                  <div className="w-10 relative h-10">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:linear-gradient(#926b73,_#926b73),_#926b73] w-10 h-10" />
                    <img
                      className="absolute top-[10px] left-[10px] w-[30px] h-[30px] object-cover"
                      alt=""
                      src="/microphone@2x.png"
                    />
                  </div>
                  <div className="w-10 relative h-10">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:linear-gradient(#926b73,_#926b73),_#926b73] w-10 h-10" />
                    <img
                      className="absolute top-[10px] left-[10px] w-[30px] h-[30px] object-cover"
                      alt=""
                      src="/stop@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[385px] bg-plum overflow-hidden flex flex-col items-center justify-center p-[5px] box-border">
                <b className="w-[353px] relative flex items-center justify-center">
                  5. If bad then what are 3 things that would make it better ?
                </b>
                <textarea value="qwerty" className="w-[359px] max-w-[359px] text-rosybrown bg-transparent relative text-left inline-block h-[90px] shrink-0"/>
                <div className="w-[385px] bg-gray-200 overflow-hidden flex flex-row items-start justify-center py-0 px-[122px] box-border gap-[10px]">
                  <div className="w-10 relative h-10">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:linear-gradient(#926b73,_#926b73),_#926b73] w-10 h-10" />
                    <img
                      className="absolute top-[10px] left-[10px] w-[30px] h-[30px] object-cover"
                      alt=""
                      src="/microphone@2x.png"
                    />
                  </div>
                  <div className="w-10 relative h-10">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:linear-gradient(#926b73,_#926b73),_#926b73] w-10 h-10" />
                    <img
                      className="absolute top-[10px] left-[10px] w-[30px] h-[30px] object-cover"
                      alt=""
                      src="/stop@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[402px] overflow-hidden shrink-0 flex flex-col items-center justify-start p-2.5 box-border gap-[25px]">
              <div className="w-[385px] bg-plum overflow-hidden flex flex-col items-center justify-center p-[5px] box-border">
                <b className="w-[345px] relative flex items-center justify-center">
                  2. Things you are grateful for
                </b>
                <textarea value="ertyu" className="max-w-[359px] text-rosybrown bg-transparent relative text-left inline-block h-[90px] shrink-0"/>
                  
                <div className="w-[385px] bg-gray-200 overflow-hidden flex flex-row items-start justify-center py-0 px-[122px] box-border gap-[10px]">
                  <div className="w-10 relative h-10">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:linear-gradient(#926b73,_#926b73),_#926b73] w-10 h-10" />
                    <img
                      className="absolute top-[10px] left-[10px] w-[30px] h-[30px] object-cover"
                      alt=""
                      src="/microphone@2x.png"
                    />
                  </div>
                  <div className="w-10 relative h-10">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:linear-gradient(#926b73,_#926b73),_#926b73] w-10 h-10" />
                    <img
                      className="absolute top-[10px] left-[10px] w-[30px] h-[30px] object-cover"
                      alt=""
                      src="/stop@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[385px] bg-plum overflow-hidden flex flex-col items-center justify-center p-[5px] box-border">
                <b className="w-[359px] relative flex items-center justify-center">
                  4. Your Exercise Schedule
                </b>
                <textarea value="qwerty" className="w-[359px] max-w-[359px] text-rosybrown bg-transparent relative text-left inline-block h-[90px] shrink-0"/>
                <div className="w-[385px] bg-gray-200 overflow-hidden flex flex-row items-start justify-center py-0 px-[122px] box-border gap-[10px]">
                  <div className="w-10 relative h-10">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:linear-gradient(#926b73,_#926b73),_#926b73] w-10 h-10" />
                    <img
                      className="absolute top-[10px] left-[10px] w-[30px] h-[30px] object-cover"
                      alt=""
                      src="/microphone@2x.png"
                    />
                  </div>
                  <div className="w-10 relative h-10">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:linear-gradient(#926b73,_#926b73),_#926b73] w-10 h-10" />
                    <img
                      className="absolute top-[10px] left-[10px] w-[30px] h-[30px] object-cover"
                      alt=""
                      src="/stop@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[385px] bg-plum overflow-hidden flex flex-col items-center justify-center p-[5px] box-border">
                <b className="w-[222px] relative flex items-center justify-center">
                  6. Your Insights
                </b>
                <textarea value="qwerty" className="w-[359px] max-w-[359px] text-rosybrown bg-transparent relative text-left inline-block h-[90px] shrink-0"/>
                <div className="w-[385px] bg-gray-200 overflow-hidden flex flex-row items-start justify-center py-0 px-[122px] box-border gap-[10px]">
                  <div className="w-10 relative h-10">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:linear-gradient(#926b73,_#926b73),_#926b73] w-10 h-10" />
                    <img
                      className="absolute top-[10px] left-[10px] w-[30px] h-[30px] object-cover"
                      alt=""
                      src="/microphone@2x.png"
                    />
                  </div>
                  <div className="w-10 relative h-10">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:linear-gradient(#926b73,_#926b73),_#926b73] w-10 h-10" />
                    <img
                      className="absolute top-[10px] left-[10px] w-[30px] h-[30px] object-cover"
                      alt=""
                      src="/stop@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[798px] bg-plum overflow-hidden flex flex-col items-center justify-center p-[5px] box-border">
            <b className="w-[576px] relative flex items-center justify-center">
              7. Help received by your doctor
            </b>
            <textarea value="qwerty" className="w-[738px] max-w-[738px] text-rosybrown bg-transparent relative text-left inline-block h-[90px] shrink-0"/>
            <div className="w-[385px] bg-gray-200 overflow-hidden flex flex-row items-start justify-center py-0 px-[122px] box-border gap-[10px]">
              <div className="w-10 relative h-10">
                <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:linear-gradient(#926b73,_#926b73),_#926b73] w-10 h-10" />
                <img
                  className="absolute top-[10px] left-[10px] w-[30px] h-[30px] object-cover"
                  alt=""
                  src="/microphone@2x.png"
                />
              </div>
              <div className="w-10 relative h-10">
                <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:linear-gradient(#926b73,_#926b73),_#926b73] w-10 h-10" />
                <img
                  className="absolute top-[10px] left-[10px] w-[30px] h-[30px] object-cover"
                  alt=""
                  src="/stop@2x.png"
                />
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-[11px] px-[43px] bg-rosybrown w-28 rounded-21xl overflow-hidden flex flex-row items-center justify-center box-border">
            <b className="relative text-xl font-inter text-plum text-center">
              Submit
            </b>
          </button>
        </div>
      </div>
      <b className="absolute top-[129px] left-[87px] flex items-center w-[770px] h-[30px]">
        Journals
      </b>
    </div>
  );
};

export default UserJournal;
