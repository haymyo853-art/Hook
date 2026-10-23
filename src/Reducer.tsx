import type { CalculatorContextType } from "./Counter";
import {
  createContext,
  useContext,
  useReducer,
  type ReactNode,
} from "react";

type State = {
  result: number;
};

type Action = {
  type: "ADD" | "SUBTRACT";
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD":
      return { result: state.result + 1 };

    case "SUBTRACT":
      return { result: state.result - 1 };

    default:
      return state;
  }
}



const CalculatorContext =
  createContext<CalculatorContextType | null>(null);

export function ReducerProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, { result: 0 });

  return (
    <CalculatorContext.Provider
      value={{
        result: state.result,
        add: () => dispatch({ type: "ADD" }),
        substract: () => dispatch({ type: "SUBTRACT" }),
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
}

export function useCalculator() {
  const context = useContext(CalculatorContext);

  if (!context) {
    throw new Error("useCalculator must be used inside CalculatorProvider");
  }

  return context;
}
