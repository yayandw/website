import { useEffect, useState } from 'react';

type UseDarkModeReturn = [boolean, () => void];

export default function useDarkMode(): UseDarkModeReturn {
    const [isDark, setIsDark] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const saved = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (saved === 'dark' || (!saved && prefersDark)) {
            document.documentElement.classList.add('dark');
            setIsDark(true);
        }
    }, []);

    const toggleDarkMode = (): void => {
        const newMode = !isDark;
        setIsDark(newMode);

        if (newMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return [isDark, toggleDarkMode];
}
