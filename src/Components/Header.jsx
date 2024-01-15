import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="sticky top-0 w-screen bg-white shadow-md shadow-fuchsia-200 z-50 ">
        <div className=" max-w-[1180px] mx-auto flex items-center justify-between py-4 px-8 md:px-36">
          <div>
            <h1 className="w-full text-3xl font-bold tracking-wide uppercase">
              Events <span className="text-fuchsia-800">Blog</span>
            </h1>
          </div>
          <div className="flex items-center gap-6">
            <p id="line" className="text-lg font-semibold relative">
              <NavLink to="/">Home</NavLink>
            </p>
            <p className="bg-fuchsia-800 text-white text-lg font-semibold px-4 py-2 rounded-lg cursor-pointer active:bg-fuchsia-600 active:scale-95">
              <NavLink to="create">Add events</NavLink>
            </p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
