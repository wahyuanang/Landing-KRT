import React from "react";
import JadwalCamp from "../Assets/images/piket.jpg";
import JadwalSekre from "../Assets/images/piket.jpg";

const JadwalPiket = () => {
  return (
    <div className="lg:px-8 md:px-4 px-4">
      <h1 className="lg:text-4xl md:text-3xl text-xl font-bold text-center">
        Jadwal Piket
      </h1>
      <div className="grid grid-cols-3 gap-10 mt-8 grid-flow-row">
            <div className="bg-[#1199D6] text-center py-5 rounded-[12px] text-white font-bold">
                <a href="#" className="p-2 bg-black rounded-[12px]">Link Presensi</a>
            </div>
            <div className="border-2 rounded-[12px] p-5 border-gray-400">
                <img src={JadwalCamp} alt="jadwal camp" />
            </div>
            <div className="border-2 rounded-[12px] p-5 border-gray-400">
                <img src={JadwalSekre} alt="jadwal sekre" />
            </div>
      </div>
    </div>
  );
};

export default JadwalPiket;
