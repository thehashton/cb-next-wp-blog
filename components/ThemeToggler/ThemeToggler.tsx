import React, {useEffect, useState} from 'react';

const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useState<string|undefined>(typeof window !== 'undefined' ? localStorage.getItem("themeMode") || undefined : null)
    const [theme, setTheme] = React.useState(themeMode);
    const [toggle, setToggle] = useState(false);

    const toggleTheme = (event) => {
        setTheme(toggle === false ? 'synthwave' : 'light');
        setThemeMode(event.target.value)
        window.localStorage.setItem("themeMode", theme );
        setToggle(!toggle)
    };

    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', themeMode);
    }, [theme]);

    return (
        <div className={'flex flex-col justify-center align-baseline'}>
            <label className="swap swap-rotate">
                <input className={"toggle"}
                       onChange={toggleTheme}
                       value={toggle === false ? 'synthwave' : 'light'}
                       type="checkbox"
                       checked={toggle} />
            </label>
        </div>
    );
};

export default ThemeToggler;