import styles from './styles.module.scss'

const orders = [
  {
    id: 1,
    name: 'order 1',
  },
  {
    id: 2,
    name: 'order 2',
  },
  {
    id: 3,
    name: 'order 3',
  },
]

const Orders = () => {
  return (
    <div className={styles.Orders}>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>{order.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Orders
