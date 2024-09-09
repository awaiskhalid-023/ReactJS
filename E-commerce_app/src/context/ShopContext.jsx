import React from 'react'
import { products } from '../assets/assets'

export const shopContext= React.createContext()

const shopContextProvider= (props)=>{
    const currency='Rs.';
    const delivery_charges=150;
    const value={
        products, currency, delivery_charges
    }
    return(
        <shopContext.Provider value={value}>
            {props.children}
        </shopContext.Provider>
    )
}
export default shopContextProvider;


