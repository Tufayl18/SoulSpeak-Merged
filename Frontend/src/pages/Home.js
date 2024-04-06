const Home = () => {
  return (
    <div className="w-full relative bg-white h-[1500px] overflow-hidden text-center text-13xl text-rosybrown font-inter">
      <div className="absolute top-[0px] left-[0px] [background:linear-gradient(90deg,_#fdcbf1,_#fdcbf1_1%,_#e6dee9)] w-[100%] h-[1500px] overflow-hidden">
        <img
          className="absolute top-[-480px] left-[-165px] w-[2069px] h-[1813px]"
          alt=""
          src="/bg.svg"
        />
        <header className="absolute top-[0px] left-[0px] bg-thistle w-[100%] overflow-hidden flex flex-row items-center justify-end py-2.5 px-14 box-border">
          <nav className="m-0 bg-gray-200 overflow-hidden flex flex-row items-center justify-center py-[5px] px-0 gap-[23px] text-left text-5xl text-rosybrown font-inter fixed top-2">
            <b className="w-[100px] relative flex items-center h-[30px] shrink-0">
              Home
            </b>
            <b className="w-[100px] relative flex items-center h-[30px] shrink-0">
              About
            </b>
            <b className="w-[100px] relative flex items-center h-[30px] shrink-0">
              Contact
            </b>
            <button className="cursor-pointer [border:none] py-[11px] px-[43px] bg-rosybrown rounded-21xl overflow-hidden flex flex-row items-center justify-center" onClick={()=> window.location.href="http://localhost:3000/login"}>
              <b className="relative text-5xl font-inter text-plum text-center">
                Log In
              </b>
            </button>
          </nav>
        </header>
        <img
          className="fixed absolute top-[-18px] left-[125px] w-[149px] h-[178px]"
          alt=""
          src="/group-8.svg"
        />
        <div className="absolute top-[222px] left-[659px] text-[64px] font-lobster">
          Speak Up, Heal Together...
        </div>
        <div className="absolute top-[369px] left-[686px] w-[665px] overflow-hidden flex flex-row items-center justify-center gap-[10px]">
          <button className="cursor-pointer [border:none] py-[11px] px-[43px] bg-rosybrown w-[185px] rounded-21xl h-[69px] overflow-hidden shrink-0 flex flex-row items-center justify-center box-border" onClick={()=> window.location.href="http://localhost:3000/doctorsignup"}>
            <b className="relative text-5xl font-inter text-plum text-center z-1000">
              Doctor
            </b>
          </button>
          <button className="cursor-pointer [border:none] py-[11px] px-[43px] bg-rosybrown w-[185px] rounded-21xl h-[69px] overflow-hidden shrink-0 flex flex-row items-center justify-center box-border" onClick={()=> window.location.href="http://localhost:3000/usersignup"}>
            <b className="relative text-5xl font-inter text-plum text-center">
              User
            </b>
          </button>
        </div>
        <b className="absolute top-[318px] left-[686px] flex items-center justify-center w-[665px] h-[30px]">
          Sign me up as
        </b>
        <div className="absolute top-[108px] left-[981px] text-xl text-right flex items-center w-[326px] h-[69px]">
          <span className="w-full">
            <p className="m-0">
              <span className="font-inter">{`You `}</span>
              <b className="font-inter">don't</b>
              <span> have</span>
            </p>
            <p className="m-0">
              <span>{`to `}</span>
              <b className="font-inter">struggle</b>
              <span> in silence !</span>
            </p>
          </span>
        </div>
        <div className="absolute top-[459px] left-[976px] text-xl text-right flex items-center w-[326px] h-[101px]">
          <span className="w-full">
            <p className="m-0">
              <span className="font-inter">{`There’s `}</span>
              <b className="font-inter">hope</b>
              <span> when</span>
            </p>
            <p className="m-0">
              <span>{`your `}</span>
              <b className="font-inter">brain</b>
              <span> tells</span>
            </p>
            <p className="m-0">you there isn’t</p>
          </span>
        </div>
        <div className="absolute top-[481px] left-[688px] w-[326px] h-[137px] font-lobster">
          <div className="absolute top-[0px] left-[1px]">
            <span className="whitespace-pre-wrap">{`heal    `}</span>
            <span className="text-xl font-inter">/ hiːl /</span>
          </div>
          <div className="absolute top-[36px] left-[0px] text-xl font-inter text-left flex items-center w-[326px] h-[101px]">
            cause (a wound, injury, or person) to become sound or healthy again.
          </div>
        </div>
        <img
          className="absolute top-[603px] left-[1203px] w-[120px] h-[30px]"
          alt=""
          src="/group-2.svg"
        />
        <img
          className="absolute top-[1338px] left-[1139px] w-[164px] h-[45px]"
          alt=""
          src="/group-9.svg"
        />
        <img
          className="absolute top-[132px] left-[689px] w-[120px] h-[30px]"
          alt=""
          src="/group-2.svg"
        />
      </div>
      <img
        className="absolute top-[-57.6px] left-[504.9px] w-[262.1px] h-[245.8px] object-contain mix-blend-hard-light"
        alt=""
        src="/leaves-blue-2@2x.png"
      />
      <img
        className="absolute top-[276px] left-[473px] w-[276.3px] h-[305.2px] object-contain"
        alt=""
        src="/leaves-1@2x.png"
      />
      <img
        className="absolute top-[143.9px] left-[-50.7px] w-[250.2px] h-72 object-contain"
        alt=""
        src="/leaves-2@2x.png"
      />
      <img
        className="absolute top-[120px] left-[42px] w-[602px] h-[479px] object-cover"
        alt=""
        src="/img5removebgpreview-1@2x.png"
      />
      <div className="absolute top-[538px] left-[982px] w-[147px] h-28">
        <img
          className="absolute top-[0px] left-[47px] w-[100px] h-[100px] object-cover"
          alt=""
          src="/blue-flower-1@2x.png"
        />
        <img
          className="absolute top-[42px] left-[0px] w-[70px] h-[70px] object-cover"
          alt=""
          src="/blue-flower-2@2x.png"
        />
      </div>
      <div className="absolute top-[392px] left-[20px] w-[146px] h-[149px]">
        <img
          className="absolute top-[0px] left-[11px] w-[100px] h-[100px] object-cover"
          alt=""
          src="/blue-flower-1@2x.png"
        />
        <img
          className="absolute top-[67px] left-[76px] w-[70px] h-[70px] object-cover"
          alt=""
          src="/blue-flower-2@2x.png"
        />
        <img
          className="absolute top-[79px] left-[0px] w-[70px] h-[70px] object-cover"
          alt=""
          src="/blue-flower-2@2x.png"
        />
      </div>
      <div className="absolute top-[10px] left-[386px] w-[111px] h-[83px]">
        <img
          className="absolute top-[0px] left-[0px] w-[70px] h-[70px] object-cover"
          alt=""
          src="/blue-flower-2@2x.png"
        />
        <img
          className="absolute top-[33px] left-[61px] w-[50px] h-[50px] object-cover"
          alt=""
          src="/blue-flower-7@2x.png"
        />
      </div>
      <img
        className="absolute top-[436.8px] left-[62.3px] w-[406.7px] h-[397.4px] object-contain mix-blend-hard-light"
        alt=""
        src="/leaves-blue-1@2x.png"
      />
      <img
        className="absolute top-[920px] left-[111px] w-[500px] h-80 object-cover"
        alt=""
        src="/logoremoved-1@2x.png"
      />
      <div className="text-justify absolute top-[959px] left-[638px] text-xl font-semibold text-left flex items-center w-[684px] h-[261px]">
        Welcome to SoulSpeak, your haven for mental wellbeing and emotional
        support. At SoulSpeak, we understand the importance of nurturing your
        inner self and finding solace in the midst of life's challenges. Our
        platform offers a safe and inclusive space where individuals can freely
        express themselves, connect with others, and access resources to support
        their mental health journey. Whether you're seeking guidance,
        inspiration, or simply a listening ear, SoulSpeak is here to accompany
        you every step of the way. Together, let's embark on a journey towards
        inner peace, resilience, and self-discovery.
      </div>
      <button className="cursor-pointer [border:none] py-[11px] px-[43px] bg-rosybrown absolute top-[1253px] left-[891px] rounded-21xl w-[185px] h-[69px] overflow-hidden flex flex-row items-center justify-center box-border">
        <b className="relative text-xl font-inter text-plum text-center">
          Join us now
        </b>
      </button>
    </div>
  );
};

export default Home;
