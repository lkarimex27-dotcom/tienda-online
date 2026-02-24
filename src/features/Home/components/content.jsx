import { useState } from "react"

function Product({ product, onAdd }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={product.image} className="card-img-top" />
        <div className="card-body">
          <h5>{product.name}</h5>
          <p className="fw-bold">COP ${product.price}</p>
          <button
            className="btn btn-primary"
            onClick={() => onAdd(product)}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Content() {

  const products = [
    {
      id: 1,
      name: "Auriculares Bluetooth",
      price: 159900,
      image: "/images/auriculares.jpeg"
    },
    {
      id: 2,
      name: "Teclado Mecánico",
      price: 249000,
      image: "/images/teclado.jpeg"
    },
    {
      id: 3,
      name: "Smartwatch Deportivo",
      price: 329000,
      image: "/images/smartwatch.jpeg"
    }
  ]

  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const total = cart.reduce((acc, item) => acc + item.price, 0)

  return (
    <div>

      {/* HERO SECTION */}
      <section className="bg-dark text-white text-center d-flex align-items-center"
         style={{
           height: "70vh",
           backgroundImage: "url('../../../../public/images/hero.png')",
           backgroundSize: "cover",
           backgroundPosition: "center"
         }}>

  <div className="container">
    <h1 className="display-4 fw-bold">Bienvenida a Mi Tienda</h1>
    <p className="lead">Los mejores productos tecnológicos al mejor precio</p>
    <a href="#productos" className="btn btn-primary btn-lg mt-3">
      Ver Productos
    </a>
  </div>
</section>
      {/* PRODUCTOS */}
      <div className="container mt-5" id="productos">
        <h2 className="mb-4 text-center">Nuestros Productos</h2>

        <div className="row">
          {products.map(product => (
            <Product
              key={product.id}
              product={product}
              onAdd={addToCart}
            />
          ))}
        </div>

        {/* TOTAL */}
        <div className="mt-4 text-end">
          <h4>Total carrito: COP ${total}</h4>
        </div>

      </div>
    </div>
  )
}