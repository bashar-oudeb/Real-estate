import house1 from "../assets/house1.webp";
import house2 from "../assets/house2.webp";
import house3 from "../assets/house3.webp";
import house4 from "../assets/house4.webp";
import house5 from "../assets/house5.webp";
import house6 from "../assets/house6.webp";
import house7 from "../assets/house7.webp";
import house8 from "../assets/house8.webp";

import { CiHeart } from "react-icons/ci";
import { IoBedOutline, IoLocationOutline } from "react-icons/io5";
import { GiBathtub, GiHomeGarage } from "react-icons/gi";
import { AiOutlineDoubleRight } from "react-icons/ai";

const NewestDeals = () => {
  return (
    <div className=" py-10 w-11/12 m-auto">
      <p className=" w-16 px-4 bg-[#fb8b24] rounded-lg text-sm">New</p>
      <h1 className=" text-4xl font-bold text-[#716969] ">NEWEST DEALS</h1>
      <div className="DEALS grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 py-10">
        <div className="DEAL h-[350px] bg-white drop-shadow-2xl rounded-xl">
          <div className=" relative h-[60%]">
            <img src={house1}  alt=" house" className=" w-full h-full object-cover rounded-xl" />
            <div className=" absolute top-0 right-0 p-4">
              <CiHeart size={"1.5rem"} />
            </div>
          </div>

          <div className=" p-4 space-y-4">
            <div className=" flex space-x-5 items-center">
              <div className=" flex items-center space-x-1">
                <IoBedOutline />
                <p className=" text-sm text-gray-500">5bed</p>
              </div>

              <div className=" flex items-center space-x-1">
                <GiBathtub />
                <p className=" text-sm text-gray-500">3 bat</p>
              </div>

              <div className=" flex items-center space-x-1">
                <GiHomeGarage />
                <p className=" text-sm text-gray-500">1 gar</p>
              </div>
            </div>
            <h1 className=" text-xl font-semibold">$100,00</h1>
            <div className=" flex space-x-1 items-center">
              <IoLocationOutline />
              <p className=" text-md font-medium to-gray-600">Kissimee, Florida</p>
            </div>
          </div>
        </div>

        <div className="DEAL h-[350px] bg-white drop-shadow-2xl rounded-xl">
          <div className=" relative h-[60%]">
            <img src={house8}  alt=" house" className=" w-full h-full object-cover rounded-xl" />
            <div className=" absolute top-0 right-0 p-4">
              <CiHeart size={"1.5rem"} />
            </div>
          </div>

          <div className=" p-4 space-y-4">
            <div className=" flex space-x-5 items-center">
              <div className=" flex items-center space-x-1">
                <IoBedOutline />
                <p className=" text-sm text-gray-500">5 bed</p>
              </div>

              <div className=" flex items-center space-x-1">
                <GiBathtub />
                <p className=" text-sm text-gray-500">4 bat</p>
              </div>

              <div className=" flex items-center space-x-1">
                <GiHomeGarage />
                <p className=" text-sm text-gray-500">1 gar</p>
              </div>
            </div>
            <h1 className=" text-xl font-semibold">$110,00</h1>
            <div className=" flex space-x-1 items-center">
              <IoLocationOutline />
              <p className=" text-md font-medium to-gray-600">Kissimee, Florida</p>
            </div>
          </div>
        </div>

        <div className="DEAL h-[350px] bg-white drop-shadow-2xl rounded-xl">
          <div className=" relative h-[60%]">
            <img src={house2}  alt=" house" className=" w-full h-full object-cover rounded-xl" />
            <div className=" absolute top-0 right-0 p-4">
              <CiHeart size={"1.5rem"} />
            </div>
          </div>

          <div className=" p-4 space-y-4">
            <div className=" flex space-x-5 items-center">
              <div className=" flex items-center space-x-1">
                <IoBedOutline />
                <p className=" text-sm text-gray-500">5bed</p>
              </div>

              <div className=" flex items-center space-x-1">
                <GiBathtub />
                <p className=" text-sm text-gray-500">3 bat</p>
              </div>

              <div className=" flex items-center space-x-1">
                <GiHomeGarage />
                <p className=" text-sm text-gray-500">1 gar</p>
              </div>
            </div>
            <h1 className=" text-xl font-semibold">$140,00</h1>
            <div className=" flex space-x-1 items-center">
              <IoLocationOutline />
              <p className=" text-md font-medium to-gray-600">Kissimee, Florida</p>
            </div>
          </div>
        </div>

        <div className="DEAL h-[350px] bg-white drop-shadow-2xl rounded-xl">
          <div className=" relative h-[60%]">
            <img src={house3} loading="lazy" alt=" house" className=" w-full h-full object-cover rounded-xl" />
            <div className=" absolute top-0 right-0 p-4">
              <CiHeart size={"1.5rem"} />
            </div>
          </div>

          <div className=" p-4 space-y-4">
            <div className=" flex space-x-5 items-center">
              <div className=" flex items-center space-x-1">
                <IoBedOutline />
                <p className=" text-sm text-gray-500">6bed</p>
              </div>

              <div className=" flex items-center space-x-1">
                <GiBathtub />
                <p className=" text-sm text-gray-500">3 bat</p>
              </div>

              <div className=" flex items-center space-x-1">
                <GiHomeGarage />
                <p className=" text-sm text-gray-500">2 gar</p>
              </div>
            </div>
            <h1 className=" text-xl font-semibold">$120,00</h1>
            <div className=" flex space-x-1 items-center">
              <IoLocationOutline />
              <p className=" text-md font-medium to-gray-600">Kissimee, Florida</p>
            </div>
          </div>
        </div>

        <div className="DEAL h-[350px] bg-white drop-shadow-2xl rounded-xl">
          <div className=" relative h-[60%]">
            <img src={house4} loading="lazy" alt=" house" className=" w-full h-full object-cover rounded-xl" />
            <div className=" absolute top-0 right-0 p-4">
              <CiHeart size={"1.5rem"} />
            </div>
          </div>

          <div className=" p-4 space-y-4">
            <div className=" flex space-x-5 items-center">
              <div className=" flex items-center space-x-1">
                <IoBedOutline />
                <p className=" text-sm text-gray-500">7 bed</p>
              </div>

              <div className=" flex items-center space-x-1">
                <GiBathtub />
                <p className=" text-sm text-gray-500">4 bat</p>
              </div>

              <div className=" flex items-center space-x-1">
                <GiHomeGarage />
                <p className=" text-sm text-gray-500">2 gar</p>
              </div>
            </div>
            <h1 className=" text-xl font-semibold">$150,00</h1>
            <div className=" flex space-x-1 items-center">
              <IoLocationOutline />
              <p className=" text-md font-medium to-gray-600">Kissimee, Florida</p>
            </div>
          </div>
        </div>

        <div className="DEAL h-[350px] bg-white drop-shadow-2xl rounded-xl">
          <div className=" relative h-[60%]">
            <img src={house5} loading="lazy" alt=" house" className=" w-full h-full object-cover rounded-xl" />
            <div className=" absolute top-0 right-0 p-4">
              <CiHeart size={"1.5rem"} />
            </div>
          </div>

          <div className=" p-4 space-y-4">
            <div className=" flex space-x-5 items-center">
              <div className=" flex items-center space-x-1">
                <IoBedOutline />
                <p className=" text-sm text-gray-500">5bed</p>
              </div>

              <div className=" flex items-center space-x-1">
                <GiBathtub />
                <p className=" text-sm text-gray-500">3 bat</p>
              </div>

              <div className=" flex items-center space-x-1">
                <GiHomeGarage />
                <p className=" text-sm text-gray-500">1 gar</p>
              </div>
            </div>
            <h1 className=" text-xl font-semibold">$99,00</h1>
            <div className=" flex space-x-1 items-center">
              <IoLocationOutline />
              <p className=" text-md font-medium to-gray-600">Kissimee, Florida</p>
            </div>
          </div>
        </div>

        <div className="DEAL h-[350px] bg-white drop-shadow-2xl rounded-xl">
          <div className=" relative h-[60%]">
            <img src={house6} loading="lazy" alt=" house" className=" w-full h-full object-cover rounded-xl" />
            <div className=" absolute top-0 right-0 p-4">
              <CiHeart size={"1.5rem"} />
            </div>
          </div>

          <div className=" p-4 space-y-4">
            <div className=" flex space-x-5 items-center">
              <div className=" flex items-center space-x-1">
                <IoBedOutline />
                <p className=" text-sm text-gray-500">5bed</p>
              </div>

              <div className=" flex items-center space-x-1">
                <GiBathtub />
                <p className=" text-sm text-gray-500">3 bat</p>
              </div>

              <div className=" flex items-center space-x-1">
                <GiHomeGarage />
                <p className=" text-sm text-gray-500">1 gar</p>
              </div>
            </div>
            <h1 className=" text-xl font-semibold">$110,00</h1>
            <div className=" flex space-x-1 items-center">
              <IoLocationOutline />
              <p className=" text-md font-medium to-gray-600">Kissimee, Florida</p>
            </div>
          </div>
        </div>

        <div className="DEAL h-[350px] bg-white drop-shadow-2xl rounded-xl">
          <div className=" relative h-[60%]">
            <img src={house7} loading="lazy" alt=" house" className=" w-full h-full object-cover rounded-xl" />
            <div className=" absolute top-0 right-0 p-4">
              <CiHeart size={"1.5rem"} />
            </div>
          </div>

          <div className=" p-4 space-y-4">
            <div className=" flex space-x-5 items-center">
              <div className=" flex items-center space-x-1">
                <IoBedOutline />
                <p className=" text-sm text-gray-500">5bed</p>
              </div>

              <div className=" flex items-center space-x-1">
                <GiBathtub />
                <p className=" text-sm text-gray-500">3 bat</p>
              </div>

              <div className=" flex items-center space-x-1">
                <GiHomeGarage />
                <p className=" text-sm text-gray-500">1 gar</p>
              </div>
            </div>
            <h1 className=" text-xl font-semibold">$100,00</h1>
            <div className=" flex space-x-1 items-center">
              <IoLocationOutline />
              <p className=" text-md font-medium to-gray-600">Kissimee, Florida</p>
            </div>
          </div>
        </div>
       
      </div>
      <div className=" w-full flex justify-center items-center py-4">
          <button className=" bg-[#fb8b24] hover:bg-[#fb8a34d4] px-5 py-2 rounded-md text-xl flex items-center justify-center gap-2">
            <span>View More</span>
            <AiOutlineDoubleRight />
          </button>
        </div>
    </div>
  );
};

export default NewestDeals;
