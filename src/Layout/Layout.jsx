import React from "react";
import "./Layout.css";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {

  return (
    <>
      <div className="max-w-[1450px] mx-auto ">
        <div className="">
          <div className="w-full bg-[#444242] text-white flex justify-evenly items-center h-[60px] sticky top-0 z-10">
            <div className="w-[30%]">
            <Link to={"/"}>
              <p>E-commerce</p>
            </Link>
            </div>
              <div className="w-[30%] flex justify-center">
                <ul className="flex gap-[20px]">
                    <Link to={"/"}>
                    <li>Главная</li>
                    </Link>
                    <Link to={"/products"}>
                      <li>Товары</li>
                    </Link>
                </ul>
                 
              </div>

              <div className="w-[30%] text-center">
                  <p>Dark mode</p>
              </div>
          </div>
          <Outlet />
        </div>
        <footer className="pt-[60px] border-t border-[#FFFFFF4D]">
          <div className="max-w-[1450px] mx-auto">
 

        
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
