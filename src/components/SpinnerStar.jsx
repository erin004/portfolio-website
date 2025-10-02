export default function SpinnerStar({ size = 40 }) {
  return (
    <div
      className="animate-spin-slow text-white"
      style={{ width: size, height: size }}
    >
      {/* Bisa pakai simbol ★ atau SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-full h-full"
      >
        <path d="M12 2l2.94 6.03L22 9.24l-5 4.87L18.88 22 12 18.27 5.12 22 7 14.11 2 9.24l7.06-1.21L12 2z" />
      </svg>
    </div>
  );
}
