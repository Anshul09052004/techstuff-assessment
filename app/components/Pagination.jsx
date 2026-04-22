export default function Pagination(props) {
  const { next, prev, onPageChange } = props;

  const baseBtn =
    "px-5 py-2 rounded-lg font-medium transition";

  const activeStyle =
    "bg-blue-500 text-white hover:bg-blue-600 shadow-md";

  const disabledStyle =
    "bg-gray-200 text-gray-400 cursor-not-allowed";

  return (
    <div className="flex justify-center items-center gap-6 mt-8">
      
      {/* Previous Button */}
      <button
        onClick={() => {
          if (prev) onPageChange(prev);
        }}
        disabled={!prev}
        className={`${baseBtn} ${prev ? activeStyle : disabledStyle}`}
      >
        Prev
      </button>

      {/* Next Button */}
      <button
        onClick={() => {
          if (next) onPageChange(next);
        }}
        disabled={!next}
        className={`${baseBtn} ${next ? activeStyle : disabledStyle}`}
      >
        Next
      </button>

    </div>
  );
}