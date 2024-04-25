import React from "react";
import image1 from "../../assets copy/category/gaming.png";
import image2 from "../../assets copy/category/vr.png";
import image3 from "../../assets copy/category/speaker.png";
import Button from "../Shared/Button";

const Category2 = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* first col */}
          <div className="col-span-2 py-10 pl-5 bg-gradient-to-r from-gray-400/90 to-gray-100 text-white relative h-[320px] rounded-3xl flex items-end">
            <div >
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl mb-[2px] font-semibold">With</p>
                <p className="text-4xl xl:text-5xl mb-2 opacity-40 bold">Laptop</p>
                <Button text="Browse" bgColor="bg-primary" textColor="text-white" />
              </div>
            </div>
            <img src={image1} alt="" className="w-[250px] absolute -right-0 top-1/2 -translate-y-1/2"/>
          </div>
          {/* second col */}
          <div className="py-10 pl-5 bg-gradient-to-r from-brandGreen/90 to-brandGreen/70 text-white relative h-[320px] rounded-3xl flex items-start">
            <div >
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl mb-[2px] font-semibold">With</p>
                <p className="text-4xl xl:text-5xl mb-2 opacity-40 bold">Earphon</p>
                <Button text="Browse" bgColor="bg-white" textColor="text-brandGreen" />
              </div>
            </div>
            <img src={image2} alt="" className="w-[320px] absolute bottom-0"/>
          </div>
          {/* third col */}
          <div className="py-10 pl-5 bg-gradient-to-r from-brandBlue to-brandBlue/90 text-white relative h-[320px] rounded-3xl flex items-start">
            <div >
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl mb-[2px] font-semibold">With</p>
                <p className="text-4xl xl:text-5xl mb-2 opacity-40 bold">Gadget</p>
                <Button text="Browse" bgColor="bg-white" textColor="text-brandBlue" />
              </div>
            </div>
            <img src={image3} alt="" className="w-[200px] absolute bottom-0 right-0"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category2;
