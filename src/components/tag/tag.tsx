export default function Tag({children}: { children: React.ReactNode }) {
    return (
        <span
            className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm bouncy-text hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">{children}</span>
    )
}