'use client'

import useDarkMode from '../../hooks/darkmode';

export default function Footer() {
    const [isDark, toggleDarkMode] = useDarkMode();
    return (
        <div className="flex items-center justify-center bg-gray-200 text-gray-800 p-4 gap-4">
            <p>© 2025 Yayan All Right Reserved</p>
            <button onClick={toggleDarkMode}>{isDark ? '🌙 Dark' : '☀️ Light'}</button>
        </div>
    )
}