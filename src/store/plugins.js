const sessionStoragePlugin = store => {
  store.subscribe((mutation, { cart }) => {
    window.sessionStorage.setItem("products", JSON.stringify(cart.products))
  });
}

export default [sessionStoragePlugin]