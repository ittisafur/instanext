import { Fragment } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import classNames from "classnames";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/router";

const AppNavbar = () => {
  const {logOut, user} = useAuth();
  const router = useRouter();

  const goToProfile = () => {
    router.push(`/${user.username}`);
  };
  return (
    <nav className="sticky top-0 left-0 w-full bg-white border-b border-gray-primary">
      <div className="max-w-6xl mx-auto ">
        <div className="flex items-center justify-between h-12">
          <div className="flex px-2 lg:px-0">
            <div className="flex items-center flex-shrink-0">
              <Link href="/">
                <a>
                  <img
                    className="block w-auto h-8 lg:hidden"
                    src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                    alt="Workflow logo"
                  />
                  <img
                    className="hidden w-auto h-8 lg:block"
                    src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                    alt="Workflow logo"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center flex-1 px-2 lg:ml-12">
            <div className="w-full max-w-lg lg:max-w-xs">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  id="search"
                  className="block w-full py-2 pl-10 pr-3 leading-5 placeholder-gray-500 transition duration-150 ease-in-out bg-gray-100 border rounded-md border-gray-primary focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue sm:text-sm"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center lg:hidden">
            {/* Mobile menu button */}
            <button
              className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
              aria-label="Main menu"
              aria-expanded="false"
            >
              {/* Icon when menu is closed. */}
              {/* Menu open: "hidden", Menu closed: "block" */}
              <svg
                className="block w-6 h-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden w-6 h-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {/* icons*/}
          <div className="lg:ml-4 lg:flex lg:items-center">
            <button
              className="flex-shrink-0 p-1 text-gray-700 transition duration-150 ease-in-out border-transparent rounded-full hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="Notifications"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </button>
            <button
              className="flex-shrink-0 p-1 text-gray-700 transition duration-150 ease-in-out border-transparent rounded-full hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="Notifications"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
              </svg>
            </button>
            <button
              className="flex-shrink-0 p-1 text-gray-700 transition duration-150 ease-in-out border-transparent rounded-full hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="Notifications"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </button>
            <button
              className="flex-shrink-0 p-1 text-gray-700 transition duration-150 ease-in-out border-transparent rounded-full hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="Notifications"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            {/* Profile dropdown */}

            <div className="relative flex-shrink-0 ml-4">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="flex transition duration-150 ease-in-out border-gray-700 rounded-full">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={user?.avatar}
                      alt="user"
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 w-56 mt-2 bg-white border rounded-md border-gray-primary focus:outline-none">
                    <Menu.Item onClick={goToProfile}>
                      {({ active }) => (
                        <div
                          className={classNames(
                            "flex p-2 items-center space-x-2 cursor-pointer focus:outline-none",
                            { "bg-gray-100": active }
                          )}
                        >
                          <svg
                            className="text-gray-600 fill-current"
                            aria-label="Profile"
                            height={16}
                            role="img"
                            viewBox="0 0 32 32"
                            width={16}
                          >
                            <path d="M16 0C7.2 0 0 7.1 0 16c0 4.8 2.1 9.1 5.5 12l.3.3C8.5 30.6 12.1 32 16 32s7.5-1.4 10.2-3.7l.3-.3c3.4-3 5.5-7.2 5.5-12 0-8.9-7.2-16-16-16zm0 29c-2.8 0-5.3-.9-7.5-2.4.5-.9.9-1.3 1.4-1.8.7-.5 1.5-.8 2.4-.8h7.2c.9 0 1.7.3 2.4.8.5.4.9.8 1.4 1.8-2 1.5-4.5 2.4-7.3 2.4zm9.7-4.4c-.5-.9-1.1-1.5-1.9-2.1-1.2-.9-2.7-1.4-4.2-1.4h-7.2c-1.5 0-3 .5-4.2 1.4-.8.6-1.4 1.2-1.9 2.1C4.2 22.3 3 19.3 3 16 3 8.8 8.8 3 16 3s13 5.8 13 13c0 3.3-1.2 6.3-3.3 8.6zM16 5.7c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 11c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
                          </svg>

                          <span className="text-gray-600">Profile</span>
                        </div>
                      )}
                    </Menu.Item>
                    <Menu.Item onClick={logOut}>
                      {({ active }) => (
                        <div
                          className={classNames(
                            "flex p-2 items-center space-x-2 cursor-pointer focus:outline-none",
                            { "bg-gray-100": active }
                          )}
                        >
                          <span className="text-gray-600">Logout</span>
                        </div>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;
