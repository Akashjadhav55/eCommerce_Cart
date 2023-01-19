import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai"
import styles from "./Navbar.module.css"

function Navbar() {
  const [open, setOpen] = React.useState(false)
  return (
    <div className={styles.div}>
        <h1>TeeRex Store</h1>
        <div className={styles.childDiv}  onMouseLeave={() => setOpen(false)}>
            <Link to="/" >
              <p onMouseEnter={() => setOpen(true)} style={ open === true ? { borderBottom: "3px solid #f43397", color: "#f43397"} : {} }>Product</p>
            </Link>
            <Link to="/cart">
                <button className={styles.cartButton}><AiOutlineShoppingCart className={styles.cartIcon}/></button>
            </Link>
        </div>

    </div>
  )
}

export default Navbar