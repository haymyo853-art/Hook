import { useCalculator } from "./Reducer";
function Reducer() {
  const { result, add, substract } = useCalculator();

  return (
    <div>
      <h2>Result: {result}</h2>
      <button onClick={add}>+</button>
      <button onClick={substract}>-</button>
    </div>
  );
}
export default Reducer;