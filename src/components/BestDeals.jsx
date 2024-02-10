import house1 from "../assets/house8.webp";
import house2 from "../assets/house9.jpg";
import house3 from "../assets/house10.jpg";
import house4 from "../assets/house11.jpg";
import {IoLocationOutline} from 'react-icons/io5'



const  BestDeals = () => {
  return (
    <div>
      <div className=" w-11/12 md:w-1/2 space-y-4 m-auto text-center py-10 ">
        <h1 className=" font-black text-4xl font-poppins text-[#716969]">Best Deals Not Be Missed</h1>
        <p className=" text-xs text-gray-400 font-poppins">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis temporibus debitis ipsa delectus dolor commodi minus voluptatem tempore! Error, quidem.
        </p>
      </div>
      <div className="deals w-full grid lg:grid-flow-col grid-rows-2 gap-8 px-7">
        <div className="deal relative col-span-2 row-span-2">
          <img src={house1} loading="lazy" alt="" className=" w-full h-full rounded-xl object-cover"/>
          <div className=" w-full  absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-1">
            <h1 className=" text-xl font-bold font-poppins">place</h1>
            <p className="flex items-center gap-1 text-sm font-poppins"><IoLocationOutline/>Kissimmee.Florida US</p>
          </div>
        </div>

        <div className="deal relative col-span-1 row-span-2">
          <img src={house2} loading="lazy" alt="" className=" w-full h-full rounded-xl object-cover"/>
          <div className=" w-full  absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-1">
            <h1 className=" text-xl font-bold font-poppins">place</h1>
            <p className="flex items-center gap-1 text-sm font-poppins"><IoLocationOutline/>Kissimmee.Florida US</p>
          </div>
        </div>

        <div className="deal relative col-span-1 row-span-1">
          <img src={house3} loading="lazy" alt="" className=" w-full h-full rounded-xl object-cover"/>
          <div className=" w-full  absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-1">
            <h1 className=" text-xl font-bold font-poppins">place</h1>
            <p className="flex items-center gap-1 text-sm font-poppins"><IoLocationOutline/>Kissimmee.Florida US</p>
          </div>
        </div>

        <div className="deal relative col-span-1 row-span-1">
          <img src={house4} loading="lazy" alt="" className=" w-full h-full rounded-xl object-cover"/>
          <div className=" w-full  absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-1">
            <h1 className=" text-xl font-bold font-poppins">place</h1>
            <p className="flex items-center gap-1 text-sm font-poppins"><IoLocationOutline/>Kissimmee.Florida US</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BestDeals