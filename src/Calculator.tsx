
import { useContext } from "react";
import { CalculatorContext } from "./CalculatorContext";



function Calculator() {
  const context = useContext(CalculatorContext);

  if (context === null) {
    throw new Error(
      "Calculator must be used inside CalculatorContext.Provider"
    );
  }

  const { result, add, substract } = context;

  return (
    <div>
      <h2>Result: {result}</h2>

      <button onClick={add}>+</button>

      <button onClick={substract}>-</button>
    </div>
  );
}

export default Calculator;

