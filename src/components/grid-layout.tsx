import Image from "next/image"
import React from "react"
const GridLayout = () => {
    return (
      <div className="wrapper lg:flex bg-yellow-200">
      <div className="flex items-center">
     <h3 className="font-semibold text-xl lg:rotate-90 md:whitespace-pre">
        Good Job Done
        </h3>
      </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6 px-2">
      <div className="col-span-2 row-span-2">
      <Image
      src={"/05.png"}
        alt="img1"
        className="w-full h-full"
        width={200}
        height={200}
         />
     </div> 
     <div>
      <Image
      src={"/07.png"}
        alt="img1"
        className="w-full h-full"
        width={200}
        height={200}
         />
     </div> 
     <div>
      <Image
      src={"/09.png"}
        alt="img1"
        className="w-full h-full"
        width={200}
        height={200}
         />
     </div> 
     <div>
      <Image
      src={"/14.png"}
        alt="img1"
        className="w-full h-full"
        width={200}
        height={200}
         />
     </div> 
     <div>
      <Image
      src={"/16.png"}
        alt="img1"
        className="w-full h-full"
        width={200}
        height={200}
         />
     </div> 
     </div>
     </div>
    )
  }
  export default GridLayout;
