import React from "react";
// Adjust the path based on your file location

const TiltedImage = () => {
  return (
    <div className="bg-[#050816] h-80 flex justify-center items-end  ">
      <div
        className="transition-transform duration-500 scale rotate-[0deg]"
        style={
          {
            //transform: "rotate(deg)",
            //boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)",
          }
        }
      >
        <img
          src="./hand.png"
          alt="Tilted"
          className=" object-contain rounded-lg "
        />
      </div>
    </div>
  );
};

export default TiltedImage;
