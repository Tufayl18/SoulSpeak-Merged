const Navbar = ({ logIn }) => {
  return (
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
        <button onClick={()=> window.location.href="http://localhost:3000/login"} className="cursor-pointer [border:none] py-[11px] px-[43px] bg-rosybrown rounded-21xl overflow-hidden flex flex-row items-center justify-center">
          <b className="relative text-xl font-inter text-plum text-center">
            {logIn}
          </b>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
