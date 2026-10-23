import { createContext, useState, type ReactNode } from "react";
import type  {CalculatorContextType} from "./Counter"

export const CalculatorContext=createContext<CalculatorContextType | null>(null); 

export function CalculatorProvider({ children }: { children: ReactNode }) {
  const [result, setResult] = useState<number>(0);

  return (
    <CalculatorContext.Provider
      value={{
        result,
        add: () => setResult((prev) => prev + 1),
        substract: () => setResult((prev) => prev - 1),
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
}