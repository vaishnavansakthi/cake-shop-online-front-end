// components/Loader.js
export default function Loader() {
  return (
    <div className="loader">
      <div className="spinner"></div>
      <style jsx>{`
        .loader {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .spinner {
          border: 6px solid #f3f3f3;
          border-radius: 50%;
          border-top: 6px solid #3498db;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
