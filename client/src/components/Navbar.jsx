import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { MenuIcon, SearchIcon, TicketPlus, XIcon } from 'lucide-react';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();

  return (
    <div>
      <div className="fixed top-0 left-0 z-50 w-full flex items-cente r justify-between px-6 md:px-16 lg:px-36 py-5">
        <Link to="/" className="max-md:flex-1">
          <img src={assets.logo} className="w-36 h-auto" alt="" />
        </Link>

        <div
          className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 min-md:px-8 py-3 max-md:h-screen min-md:rounded-full backdrop-blur bg-black/70 md:bg-white/10 md:border border-gray-300/20 overflow-hidden transition-[width] duration-300 ${
            isOpen ? 'max-md:w-full' : 'max-md:w-0'
          }`}
        >
          <XIcon
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden absolute top-6 right-6 size-6 cursor-pointer"
          />

          <Link
            onClick={() => {
              scrollTo(0, 0);
              setIsOpen(false);
            }}
            to="/"
          >
            Home
          </Link>
          <Link
            onClick={() => {
              scrollTo(0, 0);
              setIsOpen(false);
            }}
            to="/movies"
          >
            Movies
          </Link>
          <Link
            onClick={() => {
              scrollTo(0, 0);
              setIsOpen(false);
            }}
            to="/"
          >
            Theaters
          </Link>
          <Link
            onClick={() => {
              scrollTo(0, 0);
              setIsOpen(false);
            }}
            to="/"
          >
            Releases
          </Link>
          <Link
            onClick={() => {
              scrollTo(0, 0);
              setIsOpen(false);
            }}
            to="/favourite"
          >
            Favourites
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <SearchIcon className="max-md:hidden size-6 cursor-pointer" />
          {!user ? (
            <button
              onClick={openSignIn}
              className="px-4 py-1 rounded-full font-medium cursor-pointer sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition"
            >
              Login
            </button>
          ) : (
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="My Bookings"
                  labelIcon={<TicketPlus width={15} />}
                  onClick={() => navigate('/my-bookings')}
                />
              </UserButton.MenuItems>
            </UserButton>
          )}
        </div>
        <MenuIcon
          onClick={() => setIsOpen(!isOpen)}
          className="max-md:ml-4 md:hidden size-8 cursor-pointer"
        />
      </div>
    </div>
  );
};
export default Navbar;
