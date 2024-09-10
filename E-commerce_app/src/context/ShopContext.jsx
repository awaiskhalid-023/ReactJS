import React, {useMemo} from 'react'
import { products } from '../assets/assets'

export const shopContext= React.createContext()

const ShopContextProvider= (props)=>{
    const currency='$';
    const delivery_charges=150;
    const contextValue = useMemo(() => ({
        products,
        currency,
        delivery_charges
      }));
    console.log(products)
    return(
        <shopContext.Provider value={contextValue}>
            {props.children}
        </shopContext.Provider>
    )
}
export default ShopContextProvider;


