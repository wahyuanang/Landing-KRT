import React from "react";
import { motion } from "framer-motion";
import {
  Package,
  ExternalLink,
  Instagram,
  Home,
  Building,
  Github,
  Linkedin,
} from "lucide-react";
import FotoZayga from "../assets/images/Zayga.png";
import FotoWahyu from "../assets/images/Wahyu.png";
import FotoKeluarga from "../assets/images/KeluargaAmcc.png";
import JadwalPiket from "../assets/images/2.1.svg";
import JadwalPiketSekre from "../assets/images/2.0.svg";
import PeminjamanInternal from "../assets/images/PeminjamanInternal.png";
import PeminjamanEksternal from "../assets/images/PeminjamanEksternal.png";
import BtnWA from "../Components/BtnWa";

const LandingPage = () => {
  const departments = [
    {
      name: "Muhammad Zayga Ernesto",
      role: "Koor departemen KRT",
      image: FotoZayga,
      socials: {
        instagram: "zaygaernesto",
        github: "ZaygaErnesto",
        linkedin: "muhammad-zayga-ernesto-855187281",
      },
    },
    {
      name: "Wahyu Anang Zulfikri",
      role: "Anggota departemen KRT",
      image: FotoWahyu,
      socials: {
        instagram: "whyuanang__",
        github: "wahyuanang",
        linkedin: "wahyu-anang-zulfikri-07002829a",
      },
      buttonWA: {
        contact: {
          whatsapp: "+62 856-5215-1274",
        },
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/90 z-10" />
        <img
          src={FotoKeluarga}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative z-20 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Departemen KRT
          </h1>
          <p className="text-xl md:text-2xl text-white drop-shadow-lg">
            Manajemen Fasilitas & Kebersihan
          </p>
        </motion.div>
      </motion.header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Jadwal Piket
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all"
            >
              <div className="relative">
                <img
                  src={JadwalPiket}
                  alt="Camp"
                  className="w-full h-52 lg:h-72 md:h-52 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 flex items-end"></div>
              </div>
              <div className="p-6 space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Home className="w-8 h-8 text-black" />
                    <h3 className="text-2xl font-semibold text-black">
                      Piket Camp
                    </h3>
                  </div>
                  <p className="text-gray-600 px-1">
                    Jadwal piket untuk area camp dan sekitarnya
                  </p>
                </div>
                <div className="lg:flex lg:space-x-4">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScxRurn3PXI5y88YYJfCaINDQkbpGvPb_IsFhwjzL6wFlr2uQ/viewform?usp=sf_link"
                    className="block text-[#1599D6] font-medium transition-colors"
                  >
                    ↗ Link Presensi camp
                  </a>
                  <a
                    href="#"
                    className="block text-[#1599D6] font-medium transition-colors"
                  >
                    ↗ SOP Piket Camp
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Secretariat Cleaning Schedule */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all"
            >
              <div className="relative">
                <img
                  src={JadwalPiketSekre}
                  alt="Secretariat"
                  className="w-full h-52 lg:h-72 md:h-52 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 flex items-end"></div>
              </div>
              <div className="p-6 space-y-2">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Building className="w-8 h-8 text-black" />
                    <h3 className="text-2xl font-semibold text-black">
                      Piket Sekre
                    </h3>
                  </div>
                  <p className="text-gray-600 px-1">
                    Jadwal piket untuk area sekretariat
                  </p>
                </div>
                <div className="lg:flex lg:space-x-4">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScxRurn3PXI5y88YYJfCaINDQkbpGvPb_IsFhwjzL6wFlr2uQ/viewform?usp=sf_link"
                    className="block text-[#1599D6] font-medium transition-colors"
                  >
                    ↗ Link Presensi Sekre
                  </a>
                  <a
                    href="#"
                    className="block text-[#1599D6] font-medium transition-colors"
                  >
                    ↗ SOP Piket Sekre
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Borrowing Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Peminjaman Barang
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Internal Borrowing */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative">
                <img
                  src={PeminjamanInternal}
                  alt="Internal Borrowing"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end">
                  <div className="p-6">
                    <Package className="w-12 h-12 text-white mb-2" />
                    <h3 className="text-2xl font-semibold text-white">
                      Peminjaman Internal
                    </h3>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-gray-600">
                  Peminjaman barang untuk internal organisasi
                </p>
                <div className="lg:flex flex-wrap justify-between gap-3">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSciAVXj-j5eqYqT8mIgczsaIeK7SzMdW2ozljL0gxOhfBnJXA/viewform?usp=header"
                    className="block text-[#1599D6] font-medium transition-colors"
                  >
                    ↗ Form Peminjaman Internal
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1UpQWmbCa1_dCvT23TZLoTsOPOogor6Cz/view?usp=sharing"
                    className="block text-[#1599D6] font-medium transition-colors"
                  >
                    ↗ SOP Peminjaman Internal
                  </a>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSd4TiueF5pJ2J-Rec-LfFGiTuusepI1Ebrw_bNdyVIQT1Z__A/viewform?usp=header"
                    className="block text-[#1599D6] font-medium transition-colors"
                  >
                    ↗ Pengembalian Peminjaman Internal
                  </a>
                </div>
              </div>
            </motion.div>

            {/* External Borrowing */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative">
                <img
                  src={PeminjamanEksternal}
                  alt="External Borrowing"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end">
                  <div className="p-6">
                    <ExternalLink className="w-12 h-12 text-white mb-2" />
                    <h3 className="text-2xl font-semibold text-white">
                      Peminjaman Eksternal
                    </h3>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-gray-600">
                  Peminjaman barang untuk pihak eksternal
                </p>
                <div className="lg:flex lg:space-x-4">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScb4vpYE3iTyMdbOMFATrk8EBuDK-FIY_hbMI2M8TkJXBpC1w/viewform?usp=header"
                    className="block text-[#1599D6] font-medium transition-colors"
                  >
                    ↗ Form Peminjaman Eksternal
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1UpQWmbCa1_dCvT23TZLoTsOPOogor6Cz/view?usp=sharing"
                    className="block text-[#1599D6] font-medium transition-colors"
                  >
                    ↗ SOP Peminjaman Eksternal
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Pengurus KRT
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-2xl font-semibold text-white">
                        {member.name}
                      </h3>
                      <p className="text-white/90">{member.role}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-center space-x-6">
                    <motion.a
                      href={`https://instagram.com/${member.socials.instagram}`}
                      className="text-gray-600 transition-colors"
                    >
                      <Instagram className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      href={`https://github.com/${member.socials.github}`}
                      className="text-gray-600 transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      href={`https://www.linkedin.com/in/${member.socials.linkedin}`}
                      className="text-gray-600 transition-colors"
                    >
                      <Linkedin className="w-6 h-6" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1199D6] py-6 ">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-white text-center text-xl font-semibold">
              &copy; 2024/2025 Departemen Kerumahtangaan
            </p>
          </motion.div>
        </div>
        {departments.find((member) => member.buttonWA) && (
          <BtnWA
            phoneNumber={
              departments.find((member) => member.buttonWA).buttonWA.contact
                .whatsapp
            }
          />
        )}
      </footer>
    </div>
  );
};

export default LandingPage;
