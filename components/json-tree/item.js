import { JsonItem, JsonKey, JsonValue } from '../styles/json-tree'
const Item = (props) => {
  return (
    <JsonItem>
      <JsonKey>{props.keyName}</JsonKey>
      <JsonValue type={props.type}>{props.value}</JsonValue>
    </JsonItem>
  )
}

export default Item
