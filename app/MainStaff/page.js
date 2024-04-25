import React from "react";
import Image from "next/image";
import logo from "../components/Navbar/unilag_logo.png";
import data from  "../components/Data/Data"

function MainStaff() {
  return (
  <> <div className="text-center m-auto  bg-dark-blue  text-4xl pt-10  text-white bold  max-[600px]:text-2xl  ">
          MEET THE TEAM
        </div> <div className="flex flex-wrap bg-dark-blue pt-1">
            {data.mainStaff.map((item) => (

    <div key={item.key} className="px-2 content-center text-white  bg-dark-blue">
      <div
        
        className=" items-center bg-dark-blue rounded-lg m-4 p-4  md:flex-row md:max-w-xl hover:bg-gray-100 "
      >
        <Image
          className="object-cover  rounded-lg  md:rounded-none md:rounded-s-lg max-[600px]:ml-4"
          src={item.img}
          width={200}
          height={200}
          alt="team image"
        ></Image>{" "}
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
        {item.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 text-justify">
           {item.biography}
          </p>
        </div>
      </div>
    </div>
    
    ))}
    </div></>

  );
}

export default MainStaff;
