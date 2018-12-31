import styled from 'styled-components'

const SelectContainer = styled.div`
  display: grid;
  grid-gap: 5px;
  min-width: ${props => props.minWidth ? props.minWidth : '300px'};
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
`

const SelectItem = styled.button`
padding: 0.5rem 1rem;
border-radius: 3px;
border:${props => props.selected ? '1px solid white' : 'none'};
background-color: ${props => props.selected ? '#412E67' : '#1F4662'};
color: ${props => props.selected ? '#ffffff' : '#ffffff'};
cursor: pointer;
text-align: center;
transition: 'background 100ms ease-in-out, transform 100ms ease';
&:focus {
      outline: 0
    }
`
export { SelectContainer, SelectItem }
