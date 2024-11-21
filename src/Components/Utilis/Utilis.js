
const getStoreHeat = ()=>{
    const storedWishList = localStorage.getItem("Wish-list");
    if(storedWishList){
        const storedWish = JSON.parse(storedWishList);
        return storedWish;
    }
    else{
        return [];
    }
    
}
const addToStoredReadList = (id)=>{
    const storeRead = getStoreHeat();
    if(storeRead.includes(id)){
        alert("Aleady Exists");
      }
      else{
        storeRead.push(id);
        const storedWishStr = JSON.stringify(storeRead);
        localStorage.setItem("Wish-list", storedWishStr);
        alert("Added Successfully");

      }
}


/// Removeing the Cart button from local storage 
/// Removeing the Cart button from local storage 

const removeFromCart = (id)=>{
    const allData = getStoreHeat()
    const remaining = allData.filter(cart => cart.id !== id);
    localStorage.setItem("Wish-list", JSON.stringify(remaining));
    alert("Removed Successfully");
}

/// add to cart data saveing in local storage
/// add to cart data saveing in local storage

const getStoreCart = ()=>{
    const storedWishList = localStorage.getItem("Cart-list");
    if(storedWishList){
        const storedWish = JSON.parse(storedWishList);
        return storedWish;
    }
    else{
        return [];
    }
    
}
const addToStoredCartList = (title)=>{
    const storeRead = getStoreCart();
    if(storeRead.includes(title)){
        alert("Aleady Exists");
      }
      else{
        storeRead.push(title);
        const storedWishStr = JSON.stringify(storeRead);
        localStorage.setItem("Cart-list", storedWishStr);
        alert("Added Successfully");

      }
}


export {addToStoredReadList, addToStoredCartList, getStoreHeat, getStoreCart, removeFromCart }