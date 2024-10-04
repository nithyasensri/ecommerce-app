

import { createContext, useReducer } from "react";

export const ProductContext = createContext()

const EcomReducer = (state, action) => {
    // console.log(action.type,action.payload)
    switch (action.type) {
        case "Set-Products":
            return { ...state, products: action.payload }   
        case "LTH":
            return { ...state, price: action.payload }
        case "HTL":
            return { ...state, price: action.payload }
            case "Category":
                return{...state,category:action.payload,brand:[],search:''}
        case "Brand":
            return {
                ...state,
                brand: action.payload.check ? [...state.brand, action.payload.option] :
                    (state.brand.length > 0 ?
                        state.brand.filter(item => item !== action.payload.option) : [])
            }
        case "Selected-Product":
            return { ...state,singleProduct:[action.payload]  }

        case "Remove-Selectedproducts":
            return {...state,singleProduct:[]};

            case "Search":
                // console.log(action.payload)
                return{...state,search:action.payload}

              

        default:
            return state
    }
}

export const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(EcomReducer, {
        products: [],
        price: '',
        category:'all',
        brand: [],
        singleProduct:[],
        search:[]

    })
    return (<ProductContext.Provider value={{ state, dispatch }}>
        {children}
    </ProductContext.Provider>)
}

