import {create} from "zustand";
interface ICounter {
    count : number;
    increase:()=>void;
    decrease:()=>void;
    reset:()=>void;



}
const useCounterZu =create<ICounter>((set)=> ({
    count:0,
    increase:() =>set((state)=>({count:state.count+1})),
    decrease:() =>set((state)=>({count:state.count-1})),
     reset: () => set({ count: 0 }),



}));
export default useCounterZu;