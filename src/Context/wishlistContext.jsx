import { useReducer , createContext} from "react";

export const wishlistContext = createContext();

function WishlistReducer( state , action){
switch(action.type){
    case "ADD_TO_WISHLIST" : 
    return[...state , action.payload];

    case "REMOVE_FROM_WISHLIST" : 
    return state.filter((product) => product.id !== action.payload);

    case "CLEAR_WISHLIST" : 
    return [];

    default : 
    return state;
}
}

function WishlistPovider({children}){
    const[wishlist , dispatch] = useReducer(WishlistReducer , []);

    return(
<wishlistContext.Provider value={{wishlist , dispatch}}>
    {children}
</wishlistContext.Provider>
    )
}

export default WishlistPovider;