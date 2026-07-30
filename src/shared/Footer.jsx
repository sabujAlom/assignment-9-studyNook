import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="bg-[#020617] border-t border-white/10 mt-20">
      <div className="container mx-auto px-5 md:px-8 lg:px-10 py-14">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="text-center sm:text-left">
            <h2 className="text-3xl font-black tracking-wide text-white">
              Study<span className="text-[#22D3EE]">Nook</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#94A3B8]">
              Find peaceful and fully equipped study rooms designed to help you stay focused, learn efficiently, and achieve your academic goals.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex justify-center sm:justify-start gap-3 flex-wrap">
              <a
                href="https://github.com/sabujAlom"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#22D3EE] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400/10 hover:shadow-[0_8px_30px_rgba(34,211,238,0.25)]"
              >
                <FaGithub size={17} />
              </a>

              <a
                href="https://www.facebook.com/mdsabujalom8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#22D3EE] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400/10 hover:shadow-[0_8px_30px_rgba(34,211,238,0.25)]"
              >
                <FaFacebookF size={17} />
              </a>

              <a
                href="https://www.linkedin.com/in/sabujalom19"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#22D3EE] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400/10 hover:shadow-[0_8px_30px_rgba(34,211,238,0.25)]"
              >
                <FaLinkedinIn size={17} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#22D3EE] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400/10 hover:shadow-[0_8px_30px_rgba(34,211,238,0.25)]"
              >
                <RiTwitterXFill size={17} />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-white">
              Useful Links
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                href="/"
                className="text-[#94A3B8] hover:text-[#22D3EE] transition-all hover:translate-x-1"
              >
                Home
              </Link>

              <Link
                href="/all-rooms"
                className="text-[#94A3B8] hover:text-[#22D3EE] transition-all hover:translate-x-1"
              >
                Rooms
              </Link>

              <Link
                href="/about"
                className="text-[#94A3B8] hover:text-[#22D3EE] transition-all hover:translate-x-1"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="text-[#94A3B8] hover:text-[#22D3EE] transition-all hover:translate-x-1"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Quick Access */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-white">
              Quick Access
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                href="/add-room"
                className="text-[#94A3B8] hover:text-[#22D3EE] transition-all hover:translate-x-1"
              >
                Add Room
              </Link>

              <Link
                href="/my-listings"
                className="text-[#94A3B8] hover:text-[#22D3EE] transition-all hover:translate-x-1"
              >
                My Listings
              </Link>

              <Link
                href="/my-bookings"
                className="text-[#94A3B8] hover:text-[#22D3EE] transition-all hover:translate-x-1"
              >
                My Bookings
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-white">
              Contact Info
            </h3>

            <div className="mt-5 flex flex-col gap-5">
              <div className="flex items-start gap-3 justify-center sm:justify-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 border border-white/10 text-[#22D3EE]">
                  <HiOutlineMail size={18} />
                </div>

                <p className="text-[#94A3B8] break-all">
                  sabujalom@gmail.com
                </p>
              </div>

              <div className="flex items-start gap-3 justify-center sm:justify-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 border border-white/10 text-[#22D3EE]">
                  <HiOutlinePhone size={18} />
                </div>

                <p className="text-[#94A3B8]">
                  +880 1728-195045
                </p>
              </div>

              <div className="flex items-start gap-3 justify-center sm:justify-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 border border-white/10 text-[#22D3EE]">
                  <GrLocation size={18} />
                </div>

                <p className="text-[#94A3B8]">
                  Cumilla, Chattogram,
                  <br />
                  Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#64748B] text-center">
            © 2026 StudyNook. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-[#64748B] hover:text-[#22D3EE] transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-[#64748B] hover:text-[#22D3EE] transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;