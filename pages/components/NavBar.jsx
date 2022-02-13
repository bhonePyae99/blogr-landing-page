import { useState } from "react";
const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [submenu, setSubMenu] = useState(false);
  const [underMenu, setUnderMenu] = useState(false);
  return (
    <>
      <nav className="w-5/6 mx-auto flex justify-between">
        <div className="flex items-center w-1/3 justify-between">
          <h1 className="text-4xl font-bold">Blogr</h1>
          <ul className="list-none md:flex hidden justify-between text-ft ml-20">
            <li className="mr-8">
              <div className="flex items-center justify-center">
                <span className="mr-1">Product</span>
                <img
                  src="/images/icon-arrow-light.svg"
                  className="w-3"
                  alt=""
                />
              </div>
            </li>
            <li className="mr-8">
              <div className="flex items-center justify-center">
                <span className="mr-1">Company</span>
                <img
                  src="/images/icon-arrow-light.svg"
                  className="w-3"
                  alt=""
                />
              </div>
            </li>
            <li>
              <div className="flex items-center justify-center">
                <span className="mr-1">Connect</span>
                <img
                  src="/images/icon-arrow-light.svg"
                  className="w-3 cursor-pointer"
                  alt=""
                  onClick={() => {
                    setUnderMenu(!underMenu);
                  }}
                />
              </div>
              {underMenu && (
                <div className="bg-white mt-5 absolute p-5 w-40 transform -translate-x-4 rounded shadow-lg">
                  <ul className="list-none">
                    <li className="text-black hover:font-bold cursor-pointer">
                      Contact
                    </li>
                    <li className="text-black hover:font-bold mt-2 cursor-pointer">
                      Newsletter
                    </li>
                    <li className="text-black hover:font-bold mt-2 cursor-pointer">
                      Linkdln
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
        <div className="items-center md:flex hidden">
          <button className="mr-6">Login</button>
          <button className="py-2 font-bold px-8 rounded-full bg-white text-primary-50">
            Sign Up
          </button>
        </div>
        <div
          className="flex items-center cursor-pointer md:hidden"
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <img
            src={
              menu === true
                ? "/images/icon-close.svg"
                : "/images/icon-hamburger.svg"
            }
            alt=""
          />
        </div>
      </nav>
      {menu && (
        <div className="w-5/6 mt-5 mx-auto bg-white left-1/2 -translate-x-1/2 text-black absolute rounded-lg text-center p-5 z-100">
          <ul className="list-none font-bold">
            <li>
              <div className="flex items-center justify-center">
                <span className="mr-1">Product</span>
                <img src="/images/icon-arrow-dark.svg" className="w-3" alt="" />
              </div>
            </li>
            <li className="mt-3">
              <div className="flex items-center justify-center">
                <span className="mr-1">Company</span>
                <img src="/images/icon-arrow-dark.svg" className="w-3" alt="" />
              </div>
            </li>
            <li className="mt-3">
              <div className="flex items-center justify-center">
                <span className="mr-1">Connect</span>
                <img
                  src="/images/icon-arrow-dark.svg"
                  className="w-3 cursor-pointer"
                  alt=""
                  onClick={() => {
                    setSubMenu(!submenu);
                  }}
                />
              </div>
              {submenu && (
                <div className="bg-gray-200 rounded-lg p-5 mt-3">
                  <ul className="list-none">
                    <li className="text-gray-600">Contact</li>
                    <li className="mt-3 text-gray-600">Newsletter</li>
                    <li className="mt-3 text-gray-600">Linkedln</li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
          <div className="border-t-2 p-5 border-gray-200 mt-5 flex flex-col items-center">
            <button>Login</button>
            <button className="btn bg-primary-100">Sign Up</button>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
