import { useState } from "react";
// import DateObject from "react-date-object";

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

  // const date = new DateObject();

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

  function handleReset() {
    setCount(0);
    setStep(0);
  }

  const today = new Date();
  today.setDate(today.getDate() + count);

  return (<div>
    <div>
      <input type='range' min='0' max='10' value={step} onChange={(e) => setStep(Number(e.target.value))} />
      {/* <button onClick={handleStepMinus}>-</button> */}
      Step: {step}
      {/* <button onClick={handleStepPlus}>+</button> */}
    </div>
    <div>
      <button onClick={handleCountMinus}>-</button>
      <input type='text' value={count} onChange={(e) => setCount(Number(e.target.value))} />
      <button onClick={handleCountPlus}>+</button>
    </div>
    <p>{count} days from today is {today.toDateString()}</p>
    {(step === 0 && count === 0) ? null : <button onClick={handleReset}>Reset</button>}
  </div>)
}