import logo from "../assets/2.1.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
// import { NAVIGATION_LINKS } from "../constants"

const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Technologies", href: "#technologies" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contacts", href: "#contacts" },
];

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo" />
      </div>
      <div className="fixed bg-black flex justify-between items-center gap-16 mt-6 py-3 px-10 left-1/2 translate-x-[-50%] top-[20px] rounded-full backdrop-blur-md bg-opacity-60 text-white z-10">
        <ul className="flex gap-6 text-xs">
          {NAVIGATION_LINKS.map(({ label, href }) => (
            <li className="relative group cursor-pointer font-extralight" key={label}>
              <a href={href} className="hover:text-gray-300">
                {label}
              </a>
              <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-gradient-to-r from-[#483248] to-[#301934] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
        <button className="bg-gradient-to-r from-[#483248] to-[#301934] py-1 px-5 rounded-3xl shadow-2xl text-white text-xs font-semibold">Contact</button>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaSquareXTwitter />
      </div>
    </nav>

)
}

export default Navbar