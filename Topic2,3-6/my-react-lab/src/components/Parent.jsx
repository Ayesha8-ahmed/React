import './Parent.css'
import { useState } from "react";
import Child from "./Child";

function Parent(){

    const [theme, setTheme] = useState("light");

    return(
        <>
            <button onClick={() => setTheme("light")}>Light Theme</button>
            <button onClick={() => setTheme("dark")}>Dark Theme</button>

            <Child theme={theme}/>
        </>
    );
}

export default Parent;