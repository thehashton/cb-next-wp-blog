import { CMS_NAME, CMS_URL } from '../lib/constants'
import React, {useState} from "react";

export default function Intro() {

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
    <div className={'flex flex-col justify-center align-middle mt-16'}>
        <div className={'flex flex-col justify-center align-baseline'}>
            <label className="swap swap-rotate">
                <input className={"toggle"} onChange={toggleTheme}
                       value={theme === 'dark' ? 'dark' : 'light'}
                       type="checkbox"
                       checked={theme !== 'dark'} />
            </label>
        </div>
        <section className="flex-col text-center md:flex-row justify-center mb-16 md:mb-12">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
                CuriousBlog.
            </h1>
            <h4 className="text-center text-lg mt-5 md:pl-8 !pl-0">
                A headless WordPress blog with NextJS 13, Tailwind CSS & DaisyUI
            </h4>
        </section>
    </div>
  )
}
