import MainLayout from "../layouts/MainLayout";
import {
  FaTrophy,
  FaCheckCircle,
  FaFileAlt,
  FaCheckDouble,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaArrowRotateRight } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useQuiz from "../hooks/useQuiz";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";

export default function Result() {
  const { questions, score, restartQuiz, quitToDashboard } = useQuiz();
  const [isRetryModalOpen, setIsRetryModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const percentage = (score.correct / questions.length) * 100;
  const totalQuestion = questions.length;
  const status = score.correct > 75 ? "Lulus" : "Tidak Lulus";
  const username = localStorage.getItem("user");

  const handleRetryQuiz = async () => {
    setIsLoading(true);
    const success = await restartQuiz();

    if (success) {
      setIsRetryModalOpen(false);
      navigate("/quiz");
    } else {
      alert("Gagal memuat ulang kuis.");
      setIsRetryModalOpen(false);
    }
    setIsLoading(false);
  };

  const handleBackToDashboard = () => {
    navigate("/dashboard");
    quitToDashboard();
  };

  useEffect(() => {
    if (questions.length < 1) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <MainLayout>
      <div className="min-h-screen pt-28 lg:pt-36 mb-12 lg:pb-12">
        <div className="heading flex flex-col justify-center items-center mb-6">
          <div
            className={`p-3 rounded-full w-fit mb-4 ${
              status === "Lulus" ? "bg-amber-400/20" : "bg-red-400/20"
            }`}
          >
            <FaTrophy
              className={`text-2xl ${
                status === "Lulus" ? "text-amber-300" : "text-red-400"
              }`}
            />
          </div>

          <div className="w-full lg:w-2/5 text-center">
            <h3 className="text-4xl font-bold mb-3">
              {status === "Lulus" ? "Kerja Bagus, " : "Tetap Semangat, "}
              <span className="capitalize">{username}</span>
            </h3>

            <span className="text-white/50">
              {status === "Lulus"
                ? "Kamu telah menguasai topik ini! Berikut adalah performa kamu pada kuis Computer Science."
                : "Jangan berkecil hati. Evaluasi hasilmu dan coba lagi untuk meningkatkan skor di kuis Computer Science."}
            </span>
          </div>
        </div>

        <div className="performance lg:w-2/3 mx-auto mb-5">
          <div className="grid grid-col-1 lg:grid-cols-2 border border-slate-500/15 rounded-3xl overflow-hidden">
            <div className="col-span-1 flex flex-col items-center justify-center text-center border border-slate-500/15 bg-blue-800/10 p-8 rounded-t-3xl lg:rounded-t-none lg:rounded-l-3xl">
              <span className="uppercase text-secondary mb-5 block">
                Skor Akhir
              </span>
              <span className="percentage text-6xl font-bold mb-8 block">
                {percentage || 0}%
              </span>
              <div
                className={`status text-sm flex items-center gap-2 py-1.5 px-6 w-fit rounded-full
    ${
      status === "Lulus"
        ? "bg-green-400/10 border border-green-400/20 text-green-400"
        : "bg-red-400/10 border border-red-400/20 text-red-400"
    }`}
              >
                <FaCheckCircle />
                <span>{status}</span>
              </div>
            </div>
            <div className="col-span-1 border border-slate-500/15 bg-blue-950/10 p-8 rounded-b-3xl lg:rounded-b-none lg:rounded-r-3xl">
              <h4 className="text-bold mb-6">Detail Performa</h4>
              <div className="flex flex-col gap-3">
                <div className="py-2 px-4 border border-slate-400/15 rounded-xl flex items-center gap-4">
                  <div className="p-2 rounded-md bg-blue-800/15 w-fit">
                    <FaFileAlt className="text-secondary text-xl" />
                  </div>
                  <div className="flex flex-col">
                    <h6 className="uppercase text-white/80">
                      Total Pertanyaan
                    </h6>
                    <span className="block font-bold text-2xl">
                      {totalQuestion}
                    </span>
                  </div>
                </div>
                <div className="py-2 px-4 border border-green-400/15 bg-green-300/10 rounded-xl flex items-center gap-4">
                  <div className="p-2 rounded-md bg-green-600/15 w-fit">
                    <FaCheckDouble className="text-green-300 text-xl" />
                  </div>
                  <div className="flex flex-col text-green-600/70">
                    <h6 className="uppercase">Jawaban Benar</h6>
                    <span className="block font-bold text-2xl text-green-300">
                      {score.correct}
                    </span>
                  </div>
                </div>
                <div className="py-2 px-4 border border-red-400/15 bg-red-300/10 rounded-xl flex items-center gap-4">
                  <div className="p-2 rounded-md bg-red-600/15 w-fit">
                    <IoClose className="text-red-300 text-xl" />
                  </div>
                  <div className="flex flex-col text-red-700/70">
                    <h6 className="uppercase">Jawaban Salah</h6>
                    <span className="block font-bold text-2xl text-red-300">
                      {score.wrong}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="button flex flex-col md:flex-row justify-center items-center w-3/4 lg:w-full mx-auto gap-3">
          <button
            onClick={() => setIsRetryModalOpen(true)}
            className="flex items-center justify-center gap-2 py-2.5 px-4 w-full md:w-fit bg-secondary rounded-lg"
          >
            <FaArrowRotateRight />
            <span>Ulangi kuis</span>
          </button>
          <button
            onClick={handleBackToDashboard}
            className="flex items-center justify-center gap-2 py-2.5 px-4 w-full md:w-fit bg-slate-500/20 border border-slate-300/20 rounded-lg"
          >
            <MdDashboard />
            <span>Kembali ke Dashboard</span>
          </button>
        </div>
      </div>

      <Modal
        isOpen={isRetryModalOpen}
        onClose={() => setIsRetryModalOpen(false)}
        onConfirm={handleRetryQuiz}
        title="Ulangi Kuis Sekarang?"
        subtitle="Skor kamu saat ini akan direset, dan kamu akan mendapatkan soal baru untuk topik Computer Science."
        confirmText={isLoading ? "Menyiapkan..." : "Ya, Mulai Lagi"}
      />
    </MainLayout>
  );
}
