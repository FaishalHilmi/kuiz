import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { LuBrainCircuit, LuTrendingUp, LuTrophy } from "react-icons/lu";

export default function Home() {
  return (
    <MainLayout>
      <div className="min-h-screen flex flex-col items-center justify-center pt-24 lg:pt-40 pb-24">
        <div className="mb-11">
          <div className="w-full lg:w-4/5 mx-auto">
            <h1 className="font-extrabold text-5xl lg:text-7xl text-center tracking-tighter leading-tight mb-3">
              Tes Pengetahuan, <span className="text-secondary">Upgrade</span>{" "}
              Skill Kamu
            </h1>
            <div className="w-full lg:w-3/4 mx-auto">
              <span className="text-white/50 text-center font-light block">
                Rasakan pengalaman belajar generasi baru dengan penilaian
                interaktif. Mulai dari sains hingga budaya populer, asah
                ketajaman berpikir Anda dan raih puncak papan peringkat global.
              </span>
            </div>
          </div>
        </div>
        <div className="button mb-28">
          <Link
            to="/login"
            className="py-4 px-10 bg-secondary rounded-lg text-sm shadow-xl shadow-blue-500/20"
          >
            Start Your Journey
          </Link>
        </div>
        <div className="service grid lg:grid-cols-3 gap-4 lg:gap-8">
          <div className="card flex flex-col items-center rounded-3xl p-10 gap-2 bg-gray-400/10 border border-gray-400/20">
            <div className="icon mb-8 p-3 bg-blue-200/20 border border-blue-400/20 rounded-2xl">
              <LuBrainCircuit className="text-4xl text-blue-500" />
            </div>
            <div className="description flex flex-col items-center gap-3.5">
              <span className="font-bold text-xl">Kuis Interaktif</span>
              <span className="text-center text-sm text-white/50">
                Pertanyaan dinamis yang beradaptasi dengan tingkat pengetahuan
                Anda secara real-time untuk pertumbuhan pribadi.
              </span>
            </div>
          </div>
          <div className="card flex flex-col items-center rounded-3xl p-10 gap-2 bg-gray-400/10 border border-gray-400/20">
            <div className="icon mb-8 p-3 bg-green-300/30 border border-green-400/20 rounded-2xl">
              <LuTrendingUp className="text-4xl text-green-500" />
            </div>
            <div className="description flex flex-col items-center gap-3.5">
              <span className="font-bold text-xl">Pelacakan Kemajuan</span>
              <span className="text-center text-sm text-white/50">
                Analitik mendalam dan metrik performa tinggi untuk
                memvisualisasikan kurva belajar harian Anda.
              </span>
            </div>
          </div>
          <div className="card flex flex-col items-center rounded-3xl p-10 gap-2 bg-gray-400/10 border border-gray-400/20">
            <div className="icon mb-8 p-3 bg-yellow-200/20 border border-yellow-400/20 rounded-2xl">
              <LuTrophy className="text-4xl text-yellow-500" />
            </div>
            <div className="description flex flex-col items-center gap-3.5">
              <span className="font-bold text-xl">Peringkat Global</span>
              <span className="text-center text-sm text-white/50">
                Bersaing dengan pelajar profesional di seluruh dunia dan
                dapatkan lencana musiman yang ter verifikasi.
              </span>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
