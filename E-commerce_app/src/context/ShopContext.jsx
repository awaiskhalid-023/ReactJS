import React, {useMemo, useState} from 'react'
import { products } from '../assets/assets'

export const shopContext= React.createContext()

const ShopContextProvider= (props)=>{
    const currency='$';
    const delivery_charges=150;
    const [search,setSearch]=useState('')
    const [showSearch,setShowSearch]=useState(false)

/*     const filteredProducts = useMemo(() => {
        if (!search) return products; // Return all products if there's no search term
        return products.filter((product) =>
          product.name.toLowerCase().includes(search.toLowerCase())
        );
      }, [search, products]); */

    const contextValue = useMemo(() => ({
        products,
        currency,
        delivery_charges,search,setSearch,showSearch,setShowSearch
      }));
    return(
        <shopContext.Provider value={contextValue}>
            {props.children}
        </shopContext.Provider>
    )
}
export default ShopContextProvider;


