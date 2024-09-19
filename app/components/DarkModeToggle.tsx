
import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'

const DarkModeToggle = () => {
    // Initialize dark mode state to be true by default for dark mode
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            // Check local storage to see if the user has a preference
            return localStorage.getItem('darkMode') !== 'false';
        }
        return true; // Default to dark mode
    });

    // Effect to apply the theme to the document
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        // Store preference in local storage
        localStorage.setItem('darkMode', darkMode.toString());
    }, [darkMode]);

    // Toggle dark mode state
    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <button
            onClick={toggleTheme}
            className="text-blue dark:text-blue"
        >
            {darkMode ? <FaSun className='h-9 w-auto p-0 m-0'/> : <FaMoon className='h-9 w-auto p-0 m-0'/> }
        </button>
    );
};

export default DarkModeToggle;

// go to global.css and change color from white to mild blue for different theme