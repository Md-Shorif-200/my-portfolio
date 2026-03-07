export default function ProjectsSkeleton() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div
          key={item}
          className="bg-white shadow-md rounded-xl overflow-hidden animate-pulse"
        >
          {/* Image */}
          <div className="h-48 bg-gray-300"></div>

          <div className="p-5 space-y-4">
            {/* Title */}
            <div className="h-5 bg-gray-300 rounded w-3/4"></div>

            {/* Description */}
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>

            {/* Tags */}
            <div className="flex gap-2 pt-2">
              <div className="h-6 w-16 bg-gray-200 rounded"></div>
              <div className="h-6 w-16 bg-gray-200 rounded"></div>
              <div className="h-6 w-16 bg-gray-200 rounded"></div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-4">
              <div className="h-9 w-24 bg-gray-300 rounded"></div>
              <div className="h-9 w-24 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}