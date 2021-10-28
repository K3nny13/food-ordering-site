import Card from '../UI/Card'
import styles from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem'

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Salmon Roses',
    description: '4 pieces with salmon, mayo caviar',
    price: 71.5,
  },
  {
    id: 'm2',
    name: 'Salmon Hand Roll',
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
  const mealsList = DUMMY_MEALS.map((meal) => <MealItem id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price} />)

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  )
}

export default AvailableMeals
