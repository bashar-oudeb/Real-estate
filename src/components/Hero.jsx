import heroImg from "../assets/image6.webp";

const Hero = () => {
  return (
    <div className="">
      <nav className=" flex gap-4 justify-center md:justify-between items-center py-5 font-poppins md:w-4/5 m-auto ">
        <h1 className=" text-xl md:text-2xl font-bold text-[#716969] hover:text-gray-300 cursor-pointer">Real Estate</h1>
        <ul className=" flex items-center space-x-5 text-xs md:text-base text-[#716969] cursor-pointer ml-3 md:ml-0">
          <li className="hover:text-gray-300 ">Features</li>
          <li className="hover:text-gray-300 ">Trending</li>
          <li className="hover:text-gray-300 ">About</li>
        </ul>
        <button className=" text-[#716969] px-5 py-2 rounded-xl text-xs md:text-base hover:text-gray-300">
          Contact
        </button>
      </nav>

      <div className=" h-[500px] relative font-poppins w-11/12 m-auto">
        <img
          src={heroImg}
          alt=""
          className="w-full h-full object-cover rounded-md"
        />
        <div className=" w-full absolute bottom-5">
          <div className=" w-11/12 xl:w-4/5 m-auto bg-white grid grid-cols-2 lg:flex justify-between items-center px-5 py-2 drop-shadow-2xl md:space-x-4 md:rounded-md">
            <div className=" flex flex-col space-y-2">
              <label htmlFor="">Location </label>
              <input type="text" placeholder="Us" className=" outline-none text-xs"/>
            </div>

            <div className=" flex flex-col space-y-2">
              <label htmlFor="Property">Property </label>
              <input type="text" placeholder="Property" className=" outline-none text-xs"/>
            </div>

            <div className=" flex flex-col space-y-2">
              <label htmlFor="">Max Price </label>
              <input type="text" placeholder="$100,000" className=" outline-none text-xs"/>
            </div>
            <div className="">
              <button className=" bg-[#fb8b24] hover:bg-[#fb8a34d4] px-5 py-2 mt-5 md:rounded-md ">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
