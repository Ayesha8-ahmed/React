function ProductCard({ title, price, image }) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={image} width="100" />
      <p>Price: ${price}</p>
    </div>
  )
}

export default ProductCard
