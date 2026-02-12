import PlainLayout from "../layouts/PlainLayout";
import InputLabel from "../components/InputLabel";
import { useEffect, useEffectEvent, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleChangeUserData = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const succes = login(userData.username, userData.password);
    if (succes) {
      navigate("/dashboard");
    }
  };

  return (
    <PlainLayout>
      <div className="flex justify-center items-center min-h-screen">
        <div className="card bg-gray-400/10 p-10 rounded-2xl border border-gray-400/20">
          <img src="/logo.png" alt="Logo Kuizz" className="mx-auto mb-3 w-12" />
          <div className="flex flex-col items-center mb-10">
            <span className="text-2xl font-bold mb-2">Selamat Datang</span>
            <span className="text-white/50 font-light">
              Silakan masuk untuk mengakses kuis yang tersedia.
            </span>
          </div>
          <form className="max-w-sm mx-auto" onSubmit={handleLogin}>
            <InputLabel
              name="username"
              type="text"
              placeholder="Johndoe"
              onChange={handleChangeUserData}
            />
            <InputLabel
              name="password"
              type="password"
              placeholder="••••••••"
              onChange={handleChangeUserData}
            />
            <button
              type="submit"
              className="py-2.5 px-5 bg-secondary rounded-lg text-sm shadow-lg shadow-blue-500/25 hover:shadow-none transition-all duration-300 ease-in-out w-full"
            >
              Sign In
            </button>
            <div className="flex justify-center mt-4">
              <Link to="/" className="text-white/50 text-sm underline">
                Kembali ke Beranda
              </Link>
            </div>
          </form>
        </div>
      </div>
    </PlainLayout>
  );
}
