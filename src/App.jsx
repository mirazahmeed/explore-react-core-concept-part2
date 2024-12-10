import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import Friends from "./Friends";
import Users from "./users";

function App() {
    function handleClick() {
        alert("Button Clicked!");
    }
    const clickMeAgain = () => {
        alert("Button Clicked Again!");
    };
    const addFive = (five) => {
        alert(five + 5);
    };
    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={clickMeAgain}>Click Me Again</button>
            <button
                onClick={() => {
                    alert("Clicked Again and again");
                }}
            >
                Click Me Again And Again
            </button>
            <button onClick={() => addFive(5)}>Add Five</button>
            <Counter></Counter>
            <Team></Team>
            <Users></Users>
            <Friends></Friends>
        </>
    );
}

export default App;
