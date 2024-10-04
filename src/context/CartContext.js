
import { useReducer } from "react";
import { createContext } from "react";

export const CartContext = createContext()

const cartReducer = (state, action) => {
    // console.log(action.payload.id)
    switch (action.type) {
        case "AddCart":
            if (state.cart.length === 0) {
                return { ...state, cart: [...state.cart,{ ...action.payload, quantity: 1 } ],
                setCartbtn:false}
            }
            else{
               let val = state.cart.find((data) => data.id === action.payload.id)
               
               if(val){
                   return {...state,
                    cart:state.cart.map((data)=> data.id === action.payload.id ?
                    {...data,quantity:data.quantity+1} : data)}
               }
               else{
                   return {...state,cart:[...state.cart,{...action.payload,quantity:1}],
                }
               }
            }

          

        case "Increment":
            return {
                ...state,
                cart: state.cart.map((data) => data.id === action.payload ?
                    { ...data, quantity: data.quantity + 1 } : data)
            }

        case "Decrement":
            return {
                ...state,
                cart: state.cart.map((data) => data.id === action.payload ?
                    { ...data, quantity: data.quantity - 1 } : data)
            }

        case "Remove":
            console.log(action.payload)
            return { ...state, cart: state.cart.filter((data) => data.id !== action.payload),
                setCartbtn:true}
    }
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, {
        cart: [],
        setCartbtn:true
    })
    return (<CartContext.Provider value={{ state, dispatch }}>
        {children}
    </CartContext.Provider>)
}

