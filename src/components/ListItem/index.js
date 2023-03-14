import {ListItemText, Count, ListItemContainer} from './styledComponents'

const ListItem = props => {
  const {listItemDetails} = props
  const {data} = listItemDetails

  return (
    <ListItemContainer>
      <ListItemText>{data} : </ListItemText>
      <Count>{data.length}</Count>
    </ListItemContainer>
  )
}

export default ListItem
