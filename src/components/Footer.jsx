import { FaGooglePlay } from "react-icons/fa";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { FiTwitter, FiFacebook } from "react-icons/fi";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiFillGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="mt-16">
      <div className="download w-full py-16 rounded-xl ">
        <div className="flex flex-col justify-center items-center space-y-5 ">
          <h1 className="text-xl md:text-3xl font-bold font-poppins text-[#716969]">
            Download the Real state App{" "}
          </h1>
          <div className=" flex items-center gap-5">
            <div className=" flex items-center gap-3 px-5 py-2 bg-white hover:bg-[#716969] transition-all cursor-pointer rounded drop-shadow-xl">
              <FaGooglePlay size={"1.5rem"} />
              <div className="">
                <p className=" font-poppins">Get on</p>
                <h1 className=" font-poppins">Google Play</h1>
              </div>
            </div>

            <div className=" flex items-center gap-3 px-5 py-2 bg-white hover:bg-[#716969] transition-all cursor-pointer rounded drop-shadow-xl">
              <IoLogoAppleAppstore size={"1.5rem"} />
              <div className="">
                <p className=" font-poppins">Get on</p>
                <h1 className=" font-poppins">App Store</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full py-10 bg-neutral-800  text-white rounded-md font-poppins">
        <div className="w-11/12 md:w-1/3 m-auto flex flex-col items-center text-center space-y-5">
          <h1 className="text-2xl font-bold">RealEstate</h1>
          <ul className="flex items-center space-x-5 text-sm">
            <li  className="hover:text-[#716969] transition-all cursor-pointer">Features</li>
            <li  className="hover:text-[#716969] transition-all cursor-pointer">Trending</li>
            <li  className="hover:text-[#716969] transition-all cursor-pointer">About</li>
          </ul>

          <div className=" flex items-center gap-3">
            <FiTwitter
              size={"1.5rem"}
              className="hover:text-[#716969] transition-all cursor-pointer"
            />
            <AiOutlineInstagram
              size={"2rem"}
              className="hover:text-[#716969] transition-all cursor-pointer"
            />
            <AiOutlineYoutube
              size={"2rem"}
              className="hover:text-[#716969] transition-all cursor-pointer"
            />
            <FiFacebook size={"1.7rem"}  className="hover:text-[#716969] transition-all cursor-pointer"/>
            <AiFillGithub
              size={"1.7rem"}
              className="hover:text-[#716969] transition-all cursor-pointer"
            />
          </div>
          <p className=" w-[400px] text-sm text-gray-400 p-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea,
            officiis. Aliquam suscipit atque nobis aliquid consectetur ea
            dignissimos similique dolorem!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
