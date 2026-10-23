import { useState , createContext } from "react";

export const SearchContext = createContext();

function SearchProvider({children}){
   const[searchInput , setSearchInput] = useState("");
    const [search , setSearch] = useState("");
    return(
 <SearchContext.Provider value={{search , setSearch , searchInput , setSearchInput}}>
    {children}
 </SearchContext.Provider>
    )
}

export default SearchProvider;