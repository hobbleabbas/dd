export default function LoadingSpinner() {
    return (
        <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            <p className="text-lg text-slate-800 uppercase font-semibold ml-4">Loading...</p>
        </div>
    )
}