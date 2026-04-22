export default function Pagination({ next, prev, onPageChange }) {
  return (
    <div className="flex justify-center items-center gap-6 mt-8">
      
      <button
        disabled={!prev}
        onClick={() => onPageChange(prev)}
        className={`px-5 py-2 rounded-lg font-medium transition 
        ${
          prev
            ? "bg-blue-500 text-white hover:bg-blue-600 shadow-md"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
        }`}
      >
         Prev
      </button>

      <button
        disabled={!next}
        onClick={() => onPageChange(next)}
        className={`px-5 py-2 rounded-lg font-medium transition 
        ${
          next
            ? "bg-blue-500 text-white hover:bg-blue-600 shadow-md"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
        }`}
      >
        Next 
      </button>

    </div>
  );
}