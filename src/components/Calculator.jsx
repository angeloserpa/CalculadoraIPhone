import React, { useEffect, useState } from "react";
import './Calculator.css';
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

export default function Calculator(){

    const [value, setValue] = useState(0);
    const [firstValue, setFirstValue] = useState("");
    const [result, setResult] = useState(0);
    const [operation, setOperation] = useState("");

    console.log("value: ", value);
    const inputNum = (e) => {
        if (value > 0){
            setValue(value + e.target.value);
        } else {
            setValue(e.target.value);
        }
    };
    useEffect(
        () => {
            setFirstValue(value);
            setValue(0);
        },
        [operation]
    );

    useEffect(
        () => {
            if(value !== 0){
                setResult(value);
            }
        },
        [value]
    );

    const calc = () => {
        if (operation === "plus"){
            setResult((parseFloat(firstValue) + parseFloat(value)).toFixed(2));
            setValue((parseFloat(firstValue) + parseFloat(value)).toFixed(2));
        }
        if (operation === "minus"){
            setResult((parseFloat(firstValue) - parseFloat(value)).toFixed(2));
            setValue((parseFloat(firstValue) - parseFloat(value)).toFixed(2));
        }
        if (operation === "multiplication"){
            setResult((parseFloat(firstValue) * parseFloat(value)).toFixed(2));
            setValue((parseFloat(firstValue) * parseFloat(value)).toFixed(2));
        }
        if (operation === "division"){
            if((parseFloat(firstValue) % parseFloat(value)) === 0)
            {
                setResult((parseFloat(firstValue) / parseFloat(value)));
                setValue((parseFloat(firstValue) / parseFloat(value)));
            } else{
                setResult((parseFloat(firstValue) / parseFloat(value)).toFixed(5));
                setValue((parseFloat(firstValue) / parseFloat(value)).toFixed(5));
            }
        }
    };

    const clean = () => {
        setValue(0);
        setFirstValue(0);
        setResult(0);
        setOperation("");
    }

    const invertValue = () => {
        setValue(value * -1);
    }

    const percent = () => {
        setResult(value / 100);
    }

    return(
        <div>
            <Box m={5}/>    
            <Container maxWidth="xs">
                <div className="wrapper">
                    <h1 className="result">{result}</h1>
                    <button onClick={() => clean()} className="gray">AC</button>
                    <button onClick={() => invertValue()} className="gray">+/-</button>
                    <button onClick={() => percent()} className="gray">%</button>
                    <button onClick={() => setOperation("division")} className="orange">÷</button>
                    <button onClick={inputNum} value={7}>7</button>
                    <button onClick={inputNum} value={8}>8</button>
                    <button onClick={inputNum} value={9}>9</button>
                    <button onClick={() => setOperation("multiplication")} className="orange">x</button>
                    <button onClick={inputNum} value={4}>4</button>
                    <button onClick={inputNum} value={5}>5</button>
                    <button onClick={inputNum} value={6}>6</button>
                    <button onClick={() => setOperation("minus")} className="orange">-</button>
                    <button onClick={inputNum} value={1}>1</button>
                    <button onClick={inputNum} value={2}>2</button>
                    <button onClick={inputNum} value={3}>3</button>
                    <button onClick={() => setOperation("plus")}className="orange">+</button>
                    <button onClick={inputNum} value={0}className="double">0</button>
                    <button onClick={inputNum} value={"."}>,</button>
                    <button onClick={() => calc()} className="orange">=</button>
                </div>
            </Container>
        </div>
    )
}