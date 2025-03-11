import React, { useState, useEffect } from "react";
import {
  RiFacebookCircleLine,
  RiInstagramLine,
  RiMapPin2Line,
  RiPhoneFill,
  RiPinterestLine,
  RiTwitterLine,
  RiTimeLine,
  RiWhatsappLine,
} from "react-icons/ri";

export const Topbar = () => {
  const [dateTime, setDateTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="bg-blue-600 flex items-center justify-between py-2 px-20">
        <div className="flex gap-3">
          <RiInstagramLine className="text-white text-sm" />
          <RiFacebookCircleLine className="text-white text-sm" />
          <RiTwitterLine className="text-white text-sm" />
          <RiPinterestLine className="text-white text-sm" />
          <RiWhatsappLine className="text-white text-sm" />
        </div>
        <div className="flex gap-3">
          <div className="flex gap-1 items-center">
            <RiPhoneFill className="text-white text-sm" />
            <p className="text-white text-sm text-bold ">123-456-7890</p>
          </div>
          <div className="flex gap-1 items-center text-white text-sm font-bold">
            <RiMapPin2Line className="text-white text-sm" />
            <p className="text-white text-sm"> Bharatpur, Chitwan, Nepal</p>
            <RiTimeLine className="text-white text-sm" />
            <div className="flex gap-1 items-center">
              <p className="text-white text-sm font-bold">{dateTime}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
