import { createContext, useContext, useState } from "react";

export const StepFormContext = createContext(null)

// const StepperContext = createContext({ userData: "", setUserData: null });

// export function UseContextProvider({ children }) {
//     const [userData, setUserData] = useState("");

//     return (
//         <StepperContext.Provider value={{ userData, setUserData }}>
//             {children}
//         </StepperContext.Provider>
//     );
// }

// export function useStepperContext() {
//     const { userData, setUserData } = useContext(StepperContext);

//     return { userData, setUserData };
// }