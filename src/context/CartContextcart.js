
import { useReducer } from "react";
import { createContext } from "react";

export const CartContextcart = createContext()

const cartReducer = (cartstate, action) => {
    switch (action.type) {
        case "AddCart":
            if (cartstate.cart.length === 0) {
                return { ...cartstate, cart: [...cartstate.cart,{ ...action.payload, quantity: 1} ],
                }
            }
            else{
               let val = cartstate.cart.find((data) => data.id === action.payload.id)
               
               if(val){
                   return {...cartstate,
                    cart:cartstate.cart.map((data)=> data.id === action.payload.id ?
                    {...data,quantity:data.quantity+1} : data)}
               }
               else{
                   return {...cartstate,cart:[...cartstate.cart,{...action.payload,quantity:1}],
                }
               }
            }

          

        case "Increment":
            return {
                ...cartstate,
                cart: cartstate.cart.map((data) => data.id === action.payload ?
                    { ...data, quantity: data.quantity + 1 } : data)
            }

        case "Decrement":
            return {
                ...cartstate,
                cart: cartstate.cart.map((data) => data.id === action.payload ?
                    { ...data, quantity: data.quantity - 1 } : data)
            }

        case "Remove":
            console.log(action.payload)
            return { ...cartstate, cart: cartstate.cart.filter((data) => data.id !== action.payload),
                setCartbtn:true}
    }
}

export const CartProvidercart = ({ children }) => {
    const [cartstate, cartdispatch] = useReducer(cartReducer, {
        cart: []
    })
    return (<CartContextcart.Provider value={{ cartstate, cartdispatch }}>
        {children}
    </CartContextcart.Provider>)
}

