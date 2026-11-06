import { Children, createContext , useState } from "react";

export const OrderContext = createContext();





export const OrderProvider = ({children}) => {
    const[orderDetails , setOrderDetails] = useState(() => {
            const savedData = localStorage.getItem("orderDetails");

    return savedData ? JSON.parse(savedData) : null;
    })


    return(
        <OrderContext.Provider value={{orderDetails , setOrderDetails}}>
            {children}
        </OrderContext.Provider>
    )
}