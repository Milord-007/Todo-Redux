import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import Cart from 'components/Cart/Cart';

function NavBar() {
  return (
    <>
      <div className="max-w-[1450px] mx-auto ">
        <div className="">
          <div className="w-full bg-[white]  flex justify-evenly items-center h-[60px] sticky top-0 z-10">
            <div className="w-[30%] md:hidden">
              <Link to={'/'}>
                <p className="text-[25px] text-[grey] font-[600]">E-commerce</p>
              </Link>
            </div>
            <div className="w-[30%] md:w-[50%] flex justify-center">
              <ul className="flex gap-[20px] text-[18px]   ">
                <Link to={'/'}>
                  <li className="">Главная</li>
                </Link>
              </ul>
            </div>

            <div className="w-[30%] md:w-[49%] flex justify-center gap-x-4 text-center">
              <p>Dark mode</p>
              <Cart />
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default NavBar;
