import React, { useEffect, useState } from "react";
import './Calculator.css';
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

export default function Calculator(){

    const [value, setValue] = useState(0);
    const [aux, setAux] = useState(0);
    const [aux2, setAux2] = useState("");
    const [result, setResult] = useState("0");
    const [operation, setOperation] = useState("");
    const [isComma, setIsComma] = useState(false);

    console.log("value: ", value);
    console.log("isComma: ", isComma);
    useEffect(
        () => {
            setAux(value);
            setValue(0);
        },
        [operation]
    );

    useEffect(
        () => {
            if(value != 0){
                if(isComma){
                    setResult(`${aux2}` + `,${value}`);
                    setValue(parseFloat(`${aux2}` + `,${value}`));
                    setIsComma(false);
                } else{
                    setResult(value);
                }
            }
        },
        [value]
    );

    const calc = () => {
        if (operation == "plus"){
            setResult(aux + value);
        }
        if (operation == "minus"){
            setResult(aux - value);
        }
        if (operation == "multiplication"){
            setResult(aux * value);
        }
        if (operation == "division"){
            setResult(aux / value);
        }
    };

    const clean = () => {
        setValue(0);
        setAux(0);
        setResult(0);
        setOperation("");
    }

    const invertValue = () => {
        setValue(value * -1);
    }

    const percent = () => {
        setResult(value/100);
    }

    const comma = () => {
        setResult(`${value},`);
        setAux2(value);
        setIsComma(true);
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
                    <button onClick={() => setValue(7)}>7</button>
                    <button onClick={() => setValue(8)}>8</button>
                    <button onClick={() => setValue(9)}>9</button>
                    <button onClick={() => setOperation("multiplication")} className="orange">x</button>
                    <button onClick={() => setValue(4)}>4</button>
                    <button onClick={() => setValue(5)}>5</button>
                    <button onClick={() => setValue(6)}>6</button>
                    <button onClick={() => setOperation("minus")} className="orange">-</button>
                    <button onClick={() => setValue(3)}>3</button>
                    <button onClick={() => setValue(2)}>2</button>
                    <button onClick={() => setValue(1)}>1</button>
                    <button onClick={() => setOperation("plus")}className="orange">+</button>
                    <button onClick={() => setValue(0)} className="double">0</button>
                    <button onClick={() => comma()}>,</button>
                    <button onClick={() => calc()} className="orange">=</button>
                </div>
            </Container>
        </div>
    )
}