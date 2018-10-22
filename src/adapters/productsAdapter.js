export const fetchProducts = () => {
  return(
    fetch('http://localhost:3000/api/v1/products')
      .then(resp => resp.json())
      // .then(res => console.log(res))
  )
}
