import React, {useState} from 'react';

const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useState<string|undefined>(typeof window !== 'undefined' ? localStorage.getItem("themeMode") || undefined : null)
    const [theme, setTheme] = React.useState(themeMode);

    const toggleTheme = (event) => {
        setTheme(event.target.checked === false ? 'dark' : 'light');
        setThemeMode(event.target.value)
        localStorage.setItem("themeMode", themeMode );
        console.log(theme)
    };

    React.useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <div className={'flex flex-col justify-center align-baseline'}>
            <label className="swap swap-rotate">
                <input className={"toggle"} onChange={toggleTheme}
                       value={theme === 'dark' ? 'dark' : 'light'}
                       type="checkbox"
                       checked={theme !== 'dark'} />
            </label>
        </div>
    );
};

export default ThemeToggler;