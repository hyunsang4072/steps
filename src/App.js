import { useState } from "react";
import DateObject from "react-date-object";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
      <Count />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) {
      setStep((step) => step - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      setStep((step) => step + 1);
    }
  }

  function handleClose() {
    setIsOpen((is) => !is);
  }

  return (<div>
    <button className="close" onClick={handleClose}>&times;</button>

    {isOpen && (<div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>

      <p className="message">Step {step}: {messages[step - 1]}</p>

      <div className="buttons">
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={handlePrevious}>Previous</button>
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={handleNext}>Next</button>
      </div>
    </div>)}
  </div>);
}

function Count() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  const date = new DateObject();

  function handleCountMinus() {
    setCount((c) => c - step);
  }

  function handleCountPlus() {
    setCount((c) => c + step);
  }

  function handleStepMinus() {
    setStep((s) => s - 1);
  }

  function handleStepPlus() {
    setStep((s) => s + 1);
  }

  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate() + count;
    return `${month}/${date}/${year}`;
  }

  return (<div>
    <div>
      <button onClick={handleStepMinus}>-</button>
      Step: {step}
      <button onClick={handleStepPlus}>+</button>
    </div>
    <div>
      <button onClick={handleCountMinus}>-</button>
      Count: {count}
      <button onClick={handleCountPlus}>+</button>
    </div>
    <p>{count} days from today is {getDate()}</p>
  </div>)
}