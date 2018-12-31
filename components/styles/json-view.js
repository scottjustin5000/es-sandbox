import styled from 'styled-components'

const JsonView = styled.div`
  color: #000000; 
  font-size: 12px; 
`
const Pre = styled.pre`
display: block;
min-height: 500px;
padding: 10px 30px; 
margin: 0; 
overflow: scroll;
`
const TextArea = styled.textarea`
  background-color: #193549;
  color: #39ff14; 
  border: 0; 
  padding-left:8px;
  &:focus {
      outline: 0
    }
`
export { JsonView, Pre, TextArea }
