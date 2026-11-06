import { useReducer , useEffect, createContext} from "react";
export const wishlistContext = createContext();
function WishlistReducer( state , action){
switch(action.type){
  case "ADD_TO_WISHLIST": {
            const existingItem = state.find(
                (product) => product.id === action.payload.id
            );

            if (existingItem) {
                return state;
            }

            return [...state, action.payload];
        }
    case "REMOVE_FROM_WISHLIST" : 
    return state.filter((product) => product.id !== action.payload);
    case "CLEAR_WISHLIST" : 
    return [];
    default : 
    return state;
}
}

function WishlistPovider({children}){
    const[wishlist , dispatch] = useReducer(WishlistReducer , [] , () => {
            const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
    });
useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
}, [wishlist]);
    return(
<wishlistContext.Provider value={{wishlist , dispatch}}>
    {children}
</wishlistContext.Provider>
    )
}

export default WishlistPovider;