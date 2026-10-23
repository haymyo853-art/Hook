
import { CalculatorProvider } from "./CalculatorContext";
import Calculator from "./Calculator";
import Reducer from "./ReducerC";
import { ReducerProvider } from "./Reducer";
import Counter from "./zuzu";

function App() {
  return (
    <>
      <CalculatorProvider>
        <h1>Using UseContext</h1>
        <Calculator />
      </CalculatorProvider>

      <ReducerProvider>
        <h1>Using useReducer</h1>
        <Reducer />

      </ReducerProvider>
      <Counter>
        
      </Counter>
    </>
  );
}

export default App;
