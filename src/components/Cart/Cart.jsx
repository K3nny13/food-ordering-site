import Modal from '../UI/Modal'
import styles from './Cart.module.css'

const Cart = (props) => {
  const cartItems = [
    {
      id: 'm3',
      name: 'Tuna Hand Roll',
      description: '1 piece',
      price: 45.5,
    },
  ].map((item) => <li key={item.id}>{item.name}</li>)

  return (
    <Modal onClose={props.onHideCart}>
      <ul className={styles['cart-items']}>{cartItems}</ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>R35.62</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={props.onHideCart}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
