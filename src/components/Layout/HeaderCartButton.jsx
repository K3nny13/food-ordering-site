import { useContext, useEffect, useState } from 'react'

import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'
import styles from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false)
  const cartCtx = useContext(CartContext)

  const { items } = cartCtx

  const numOfCartItems = items.reduce((curNum, item) => {
    return curNum + item.amount
  }, 0)
  console.log(numOfCartItems);
  const btnClasses = `${styles.button} ${buttonIsHighlighted ? styles.bump : ''}`

  useEffect(() => {
    if (items.length === 0) {
      return
    }
    setButtonIsHighlighted(true)

     const timer = setTimeout(() => {
      setButtonIsHighlighted(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton
