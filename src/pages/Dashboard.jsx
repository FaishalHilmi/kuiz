import MainLayout from "../layouts/MainLayout";
import { LuFileQuestion, LuTimer } from "react-icons/lu";
import { BsBarChartFill } from "react-icons/bs";
import { IoIosInformationCircle, IoIosCheckmarkCircle } from "react-icons/io";
import { BiSolidNotepad } from "react-icons/bi";
import { MdArrowRight } from "react-icons/md";
import useQuiz from "../hooks/useQuiz";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import { useState } from "react";

export default function Dashboard() {
  const { startQuiz } = useQuiz();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleStartQuiz = async () => {
    setIsLoading(true);
    const succes = await startQuiz();

    if (succes) {
      setIsModalOpen(false);
      navigate("/quiz");
    } else {
      alert("Gagal memuat kuis, coba lagi!");
      setIsModalOpen(false);
    }
    setIsLoading(false);
  };

  return (
    <MainLayout>
      <div className="min-h-screen pt-28 lg:pt-36 mb-12 lg:pb-12">
        <div className="flex flex-col gap-6">
          <div className="header">
            <h2 className="font-bold text-4xl lg:text-5xl mb-2">
              Materi: Ilmu Komputer
            </h2>
            <span className="text-white/60">
              Perhatikan detail dan persyaratan sesi di bawah ini sebelum
              memulai penilaian Anda.
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-5">
            <div className="card col-span-1 p-6 bg-blue-500/5 border border-blue-50/15 rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                <LuFileQuestion className="text-secondary text-xl" />
                <h4 className="uppercase text-white/40">Jumlah Soal</h4>
              </div>
              <span className="font-bold text-2xl lg:text-3xl">10</span>
            </div>
            <div className="card col-span-1 p-6 bg-blue-500/5 border border-blue-50/15 rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                <LuTimer className="text-secondary text-xl" />
                <h4 className="uppercase text-white/40">Durasi Waktu</h4>
              </div>
              <span className="font-bold text-2xl lg:text-3xl">110 Detik</span>
            </div>
            <div className="card col-span-1 p-6 bg-blue-500/5 border border-blue-50/15 rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                <BsBarChartFill className="text-secondary text-xl" />
                <h4 className="uppercase text-white/40">Tingkat Kesulitan</h4>
              </div>
              <span className="font-bold text-2xl lg:text-3xl">Mudah</span>
            </div>
          </div>
          <div className="description p-6 rounded-2xl bg-blue-500/5 border border-blue-50/15">
            <div className="about pb-9">
              <div className="heading flex items-center gap-2 mb-4">
                <IoIosInformationCircle className="text-2xl text-secondary" />
                <h3 className="text-xl font-semibold">Tentang Sesi Ini</h3>
              </div>
              <span className="text-white/60">
                Jelajahi dasar-dasar teknologi yang membentuk dunia digital saat
                ini. Sesi ini mencakup konsep penting dari Ilmu Komputer, mulai
                dari arsitektur perangkat keras, sistem operasi, hingga protokol
                jaringan. Anda akan diuji mengenai wawasan teknis yang menjadi
                fondasi utama bagi setiap pengembang perangkat lunak
                profesional.
              </span>
            </div>
            <div className="instruction py-9 border-t-2 border-b-2 border-white/20">
              <div className="heading flex items-center gap-2 mb-4">
                <BiSolidNotepad className="text-2xl text-secondary" />
                <h3 className="text-xl font-semibold">Instruksi</h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                <div className="flex gap-2 items-start text-white/60">
                  <IoIosCheckmarkCircle className="text-secondary text-md lg:text-xl shrink-0 mt-0.5" />
                  <span>
                    Pastikan koneksi internet yang stabil selama kuis
                    berlangsung.
                  </span>
                </div>
                <div className="flex gap-2 items-start text-white/60">
                  <IoIosCheckmarkCircle className="text-secondary text-md lg:text-xl shrink-0 mt-0.5" />
                  <span>
                    Setelah dimulai, pengatur waktu tidak dapat dihentikan atau
                    diatur ulang.
                  </span>
                </div>
                <div className="flex gap-2 items-start text-white/60">
                  <IoIosCheckmarkCircle className="text-secondary text-md lg:text-xl shrink-0 mt-0.5" />
                  <span>Selesaikan 10 soal dalam waktu 110 detik.</span>
                </div>
                <div className="flex gap-2 items-start text-white/60">
                  <IoIosCheckmarkCircle className="text-secondary text-md lg:text-xl shrink-0 mt-0.5" />
                  <span>
                    Jika jendela ditutup, progres pengerjaan akan otomatis
                    tersimpan dan terkirim.
                  </span>
                </div>
              </div>
            </div>
            <div className="button pt-9">
              <div className="flex justify-end">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center py-2 ps-5 pe-3 bg-secondary rounded-lg text-sm shadow-lg shadow-blue-500/25 hover:shadow-none transition-all duration-300 ease-in-out"
                >
                  <span className="">Mulai Kuis</span>
                  <MdArrowRight className="text-white text-4xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleStartQuiz}
        title="Siap Memulai Kuis?"
        subtitle="Pastikan koneksi stabil. Timer 110 detik akan dimulai segera setelah kuis dimuat."
        confirmText={isLoading ? "Memuat..." : "Ya, Mulai Sekarang"}
      />
    </MainLayout>
  );
}
