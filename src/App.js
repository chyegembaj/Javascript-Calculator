import React, { useState, useEffect, useRef } from "react";
import "./style.css";

export default function App() {
  const [value, setValue] = useState("0");
  const [nextvalue, setNextValue] = useState("0");

  const [operators, setOperators] = useState(false);
  const [decimal, setDecimal] = useState(true);

  const handleClick = e => {
    let val = value;
    let display = document.getElementById("display").value;

    let buttonContent = e.target.innerText;
    if (display === "0") {
      val = buttonContent;
    } else {
      val += buttonContent;
    }

    setValue(val);
  };

  const handleDecimal = e => {
    let deci = e.target.innerText;
    setValue(value + deci);

    /*setDecimal(true);

    if (decimal) {
      setValue(value + deci);
      setDecimal(false);
    } else {
      setValue(value);
      setDecimal(true);
    }*/
    if (value.includes(".") && value.includes("+")) {
      setValue(value + ".");
    } else if (value.includes(".") && value.includes("-")) {
      setValue(value + ".");
    } else if (value.includes(".") && value.includes("/")) {
      setValue(value + ".");
    } else if (value.includes(".") && value.includes("*")) {
      setValue(value + ".");
    } else if (value.includes(".")) {
      setValue(value);
    }
  };

  const handleOperator = e => {
    let val = value;
    let opera = e.target.innerText;
    setValue(val + opera);
    if (val.slice(-1) === "+") {
      setValue(val);
    } else if (val.includes("*-")) {
      setValue(val.replace("*-", "+"));
    }
  };

  const calculate = e => {
    setValue(String(eval(value)));
  };

  const handleClear = () => {
    setValue("0");
  };
  return (
    <div className="container">
      <h1>Javascript Calculator</h1>

      <div className="row">
        <input id="display" className="col-12" disabled value={value} />
        <button id="clear" className="col-6" onClick={handleClear}>
          AC
        </button>
        <button className="col-3" onClick={handleClick}>
          %
        </button>
        <button
          id="divide"
          className="col-3"
          style={{ backgroundColor: "orange" }}
          onClick={handleOperator}
        >
          /
        </button>
      </div>
      <div className="row">
        <button id="seven" className="col-3" onClick={handleClick}>
          7
        </button>
        <button id="eight" className="col-3" onClick={handleClick}>
          8
        </button>
        <button id="nine" className="col-3" onClick={handleClick}>
          9
        </button>
        <button
          id="multiply"
          className="col-3"
          style={{ backgroundColor: "orange" }}
          onClick={handleOperator}
        >
          *
        </button>
      </div>
      <div className="row">
        <button id="four" className="col-3" onClick={handleClick}>
          4
        </button>
        <button id="five" className="col-3" onClick={handleClick}>
          5
        </button>
        <button id="six" className="col-3" onClick={handleClick}>
          6
        </button>
        <button
          id="subtract"
          className="col-3"
          style={{ backgroundColor: "orange" }}
          onClick={handleOperator}
        >
          -
        </button>
      </div>
      <div className="row">
        <button id="one" className="col-3" onClick={handleClick}>
          1
        </button>
        <button id="two" className="col-3" onClick={handleClick}>
          2
        </button>
        <button id="three" className="col-3" onClick={handleClick}>
          3
        </button>
        <button
          id="add"
          className="col-3"
          style={{ backgroundColor: "orange" }}
          onClick={handleOperator}
        >
          +
        </button>
      </div>
      <div className="row">
        <button id="zero" className="col-6" onClick={handleClick}>
          0
        </button>
        <button id="decimal" className="col-3" onClick={handleDecimal}>
          .
        </button>
        <button
          id="equals"
          className="col-3"
          style={{ backgroundColor: "orange" }}
          onClick={calculate}
        >
          =
        </button>
      </div>
    </div>
  );
}
