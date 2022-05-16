import './directory-item.style.jsx'
import {
  DirectoryItemContainer,
  DirectoryItemBodyContainer,
  BackgroundImageDiv,
} from './directory-item.style.jsx'

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category
  return (
    <DirectoryItemContainer>
      <BackgroundImageDiv imageUrl={imageUrl} />
      <DirectoryItemBodyContainer>
        <h2>{title}</h2>
        <p>Shop now</p>
      </DirectoryItemBodyContainer>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem
