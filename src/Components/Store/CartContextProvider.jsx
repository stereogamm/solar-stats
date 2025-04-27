import CartContext from "./cart-context"

function CartContextProvider ({children}) {

    const addItemHandler = item => {};
    const removeItemHandler = id => {};


    const cartContext = {
        items: [],
        total: 0,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
    }

    return(
        <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
    )

} 

export default CartContextProvider