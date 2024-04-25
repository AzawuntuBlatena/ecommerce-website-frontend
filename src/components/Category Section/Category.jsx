import React from "react";
import image1 from "../../assets copy/category/earphone.png";
import image2 from "../../assets copy/category/watch.png";
import image3 from "../../assets copy/category/macbook.png";
import Button from "../Shared/Button";

const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* ffirst col */}
          <div className="py-10 pl-5 bg-gradient-to-r from-black/90 to-black/70 text-white relative h-[320px] rounded-3xl flex items-end">
            <div >
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl mb-[2px] font-semibold">With</p>
                <p className="text-4xl xl:text-5xl mb-2 opacity-20 bold">Earphon</p>
                <Button text="Browse" bgColor="bg-primary" textColor="white" />
              </div>
            </div>
            <img src={image1} alt="" className="w-[320px] absolute bottom-0"/>
          </div>
          {/* second col */}
          <div className="py-10 pl-5 bg-gradient-to-r from-brandYellow to-brandYellow/90 text-white relative h-[320px] rounded-3xl flex items-end">
            <div >
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl mb-[2px] font-semibold">With</p>
                <p className="text-4xl xl:text-5xl mb-2 opacity-40 bold">Gadget</p>
                <Button text="Browse" bgColor="bg-white" textColor="text-brandYellow" />
              </div>
            </div>
            <img src={image2} alt="" className="w-[320px] absolute -right-4 lg:top-[40px]"/>
          </div>
          {/* third col */}
          <div className="col-span-2 py-10 pl-5 bg-gradient-to-r from-primary to-primary/90 text-white relative h-[320px] rounded-3xl flex items-end">
            <div >
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl mb-[2px] font-semibold">With</p>
                <p className="text-4xl xl:text-5xl mb-2 opacity-40 bold">Laptop</p>
                <Button text="Browse" bgColor="bg-white" textColor="text-primary" />
              </div>
            </div>
            <img src={image3} alt="" className="w-[250px] absolute -right-0 top-1/2 -translate-y-1/2"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
