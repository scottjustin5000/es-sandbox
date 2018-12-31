import styled from 'styled-components'

const AcInput = styled.input`
   border: 1px solid #999;
  padding: 0.5rem;
  background-color: #172b3a;
  color: #ffffff;
  ::-webkit-input-placeholder { color: #ffffff }
  width: ${props => props.width ? props.width : '100px'};
`
const Suggestions = styled.ul`
  position: absolute;
  z-index: 10;
  border: 1px solid #999;
  background-color: #172b3a;
  color: #ffffff;
  border-top-width: 0;
  list-style: none;
  margin-top: 0;
  max-height: 150px;
  overflow-y: auto;
  padding-left: 0;
  width: ${props => props.width ? `calc(${props.width} + 1rem)` : `calc(100px + 1rem)`};
  font-size: 12px;
`

const NoResults = styled.div`
   background-color: #172b3a;
  color: #ffffff;
  padding: 0.5rem;
`
const SuggestionItem = styled.li`
  padding: 0.5rem;
  ${props => (props.index === props.selectedIndex ? 'background-color: #193549;cursor: pointer;' : '')};
  &:hover {
    background-color: #193549;
    cursor: pointer;
  }
`
export { AcInput, Suggestions, NoResults, SuggestionItem }
