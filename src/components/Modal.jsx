// src/components/Modal.jsx
export default function Modal({
  isOpen,
  onClose,
  onConfirm,
  title,
  subtitle,
  confirmText = "Ya, Lanjutkan",
  type = "primary",
}) {
  if (!isOpen) return null;

  const confirmButtonColor =
    type === "danger"
      ? "bg-red-500 hover:bg-red-600"
      : "bg-secondary hover:brightness-110";

  return (
    <div className="fixed inset-0 z-99 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-[#1a1a1a] border border-white/10 p-8 rounded-3xl max-w-sm w-full shadow-2xl transform transition-all">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-slate-400 mb-8 leading-relaxed">{subtitle}</p>

          <div className="flex flex-col gap-3">
            <button
              onClick={onConfirm}
              className={`w-full py-4 rounded-2xl font-bold text-white transition-all ${confirmButtonColor}`}
            >
              {confirmText}
            </button>
            <button
              onClick={onClose}
              className="w-full py-4 rounded-2xl font-bold text-slate-400 hover:text-white hover:bg-white/5 transition-all"
            >
              Batal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
