import './directory.style'
import DirectoryItem from '../directory-item/directory-item.component'
import { Categories } from './directory.style'

const CategoriesContainer = ({ categories }) => {
  return (
    <Categories>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </Categories>
  )
}

export default CategoriesContainer
