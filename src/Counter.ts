export type CalculatorContextType = {
    result : number;
    add : () => void;
    substract : () => void;
}
export type Action = {
  type: "ADD" | "SUBTRACT";
};
