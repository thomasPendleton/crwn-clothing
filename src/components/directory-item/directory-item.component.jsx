import { useNavigate } from 'react-router-dom'
import './directory-item.style.jsx'
import {
  DirectoryItemContainer,
  DirectoryItemBodyContainer,
  BackgroundImageDiv,
} from './directory-item.style.jsx'

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category
  const navigate = useNavigate()
  const onNavigateHandler = () => navigate(route)
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImageDiv imageUrl={imageUrl} />
      <DirectoryItemBodyContainer>
        <h2>{title}</h2>
        <p>Shop now</p>
      </DirectoryItemBodyContainer>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem
