import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Modal from "./Modal";
import { useState } from "react";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  return (
    <header className="border-b border-gray-200/10 fixed w-full z-20 bg-primary">
      <div className="px-5 md:px-40 py-4 md:py-6 flex justify-between">
        <div className="logo flex items-center gap-2">
          <img src="/logo.png" alt="Logo Kuizz" className="w-9" />
          <h1 className="font-medium text-xl">Kuiz</h1>
        </div>
        <div className="button">
          {!isAuthenticated ? (
            <div className="signin">
              <Link
                to="/login"
                className="py-2.5 px-5 bg-secondary rounded-lg text-sm shadow-lg shadow-blue-500/25"
              >
                Sign In
              </Link>
            </div>
          ) : (
            <div className="logout">
              <button
                onClick={() => setIsLogoutModalOpen(true)}
                className="py-2.5 px-5 bg-secondary rounded-lg text-sm shadow-lg shadow-blue-500/25"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      <Modal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={() => {
          logout();
          setIsLogoutModalOpen(false);
        }}
        title="Keluar dari Kuiz?"
        subtitle="Sesi Anda akan berakhir dan Anda harus login kembali untuk mengerjakan kuis."
        confirmText="Ya, Logout"
        type="danger"
      />
    </header>
  );
}
