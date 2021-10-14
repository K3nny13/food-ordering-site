import styles from './AvailableMeals.module.css'

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Salmon Roses',
    description: '4 pieces with salmon, mayo caviar',
    price: 71.5,
  },
  {
    id: 'm2',
    name: 'Salmon Hand Rool',
    description: '1 piece',
    price: 45.5,
  },
  {
    id: 'm3',
    name: 'Tuna Hand Roll',
    description: '1 piece',
    price: 45.5,
  },
  {
    id: 'm4',
    name: 'Salmon California',
    description: '4 pieces',
    price: 45.5,
  },
]

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>)

  return (
    <section className={styles.meals}>
      <ul>{mealsList}</ul>
    </section>
  )
}

export default AvailableMeals
