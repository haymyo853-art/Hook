
import useCounterZu from "./zustandCalculator";

function Counter() {
  const { count, increase, decrease, reset } = useCounterZu();

  return (
    <div className="counter">
      <h1>Zustand Counter</h1>

      <h2>{count}</h2>

      <div className="buttons">
        <button onClick={increase}>Increase +</button>

        <button onClick={decrease}>Decrease -</button>

        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
