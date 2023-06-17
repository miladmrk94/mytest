import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineException } from "react-icons/ai";
import { AiOutlineFileSearch } from "react-icons/ai";

function Layout() {
  return (
    <div className="flex flex-col-reverse sm:flex-row h-screen md:p-10 sm:p-6 relative">
      <aside className="w-auto md:w-56 rounded-2xl m-2 bg-indigo-700 flex flex-col  justify-center items-center sticky  z-10">
        <nav className="w-full p-4">
          <ul className="flex flex-col xs:flex-row gap-28 xs:gap-12  justify-evenly items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-gray-500"
                }
              >
                <AiOutlineHome className="text-4xl" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/table"
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-gray-500"
                }
              >
                <AiOutlineException className="text-4xl" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/searchBar"
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-gray-500"
                }
              >
                <AiOutlineFileSearch className="text-4xl" />
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex p-2 flex-col w-full h-full justify-start items-center overflow-y-scroll">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
