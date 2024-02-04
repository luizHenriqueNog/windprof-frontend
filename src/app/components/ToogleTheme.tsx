import React, { useState, useEffect } from 'react';
import IconMoon from './icons/IconMoon';
import IconSun from './icons/IconSun';

const ToggleSwitch = () => {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const handleToggle = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="flex items-center">
            <span className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                <IconSun width={14} height={14}/>
            </span>
            <label htmlFor="toggle" className="flex items-center cursor-pointer">
                <div className="relative">
                    <input id="toggle" type="checkbox" className="sr-only" onChange={handleToggle} checked={darkMode}/>
                    <div className="block bg-slate-600 w-11 h-7 rounded-full"></div>
                    <div className="dot absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition"></div>
                </div>
            </label>
            <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                <IconMoon width={14} height={14} />
            </span>
        </div>
    );
};

export default ToggleSwitch;
