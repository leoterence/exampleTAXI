import Image from "next/image"
import { Images } from "@/asset/Images"

export default function page() {
  console.log(Images)
  return (
    <div className="grid grid-cols-5 h-[500px] items-center ">
      <div className=" col-span-3 px-5 ">
        <Image src={Images[0]} alt="voiture " />
      </div>
      <div className=" col-span-2 text-white ">
        <h1 className="text-2xl font-bold md:text-4xl">Find your taxi</h1>
        <div className="mt-3" >
          <h2 className="text-lg semibold">Fast affordable secure</h2>
          <p className="text-xs mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa nemo ullam temporibus animi cumque. Commodi soluta ratione aliquam repellat suscipit!
          </p>
          <div className="mt-16 w-52 -translate-x-9 sm:translate-x-0 sm:mx-auto" >
            <ul className="flex flex-row  h-10 gap-x-3  ">
              <li className="flex flex-row border items-center hover:bg-gray-400 cursor-pointer"> 
                <Image src={Images[1]} alt="playstore " className="w-5 h-5" />
                <p className=" flex flex-col pr-1"><span className="text-[9px]">Download on the</span> <span className="text-[13px]">Google Play</span></p>
                </li>


                <li className="border flex flex-row items-center hover:bg-gray-400 cursor-pointer "> 
                <Image src={Images[2]} alt="playstore " className="w-7 h-7" />
                <p className=" flex flex-col  "><span className="text-[9px]">Download on the</span> <span className="text-[13px]">Google Play</span></p>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}