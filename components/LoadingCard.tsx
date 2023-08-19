export default function LoadingCard() {
  return (
    <div className="w-full max-w-sm pt-4 border rounded-lg shadow animate-pulse border-gray-700">
      <div className="flex flex-col items-center pb-2">
        <div className="w-24 h-24 mb-3 rounded-full shadow animate-pulse bg-gray-700"></div>
      </div>
      <div className="flex flex-col items-center">
        <div className="h-2.5 rounded-full bg-gray-700 w-48 mb-4"></div>
        <div className="h-2.5 rounded-full bg-gray-700 w-24 mb-4"></div>
      </div>
    </div>
  );
}
