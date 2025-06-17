export default function Tag({children}: { children: React.ReactNode }) {
    return (
        <span className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm bouncy-text">{children}</span>
    )
}