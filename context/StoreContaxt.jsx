import { createContext, useEffect}from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextPorvider = (props ) =>{

    const [cartItem,setCartItem] = useState({});

    const addToCart = (itemId) => {
        if (!cartItems[itemId]){
            setCartItem((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    useEffect(()=>{
        console.log(cartItem);
    },[cartItem])

    const contextValue = {
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart
    }
    return(

        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextPorvider;