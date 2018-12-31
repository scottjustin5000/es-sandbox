import styled from 'styled-components'

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`
const Icon = styled.svg`
  fill: none;
  stroke: black;
  stroke-width: 2px;
`
const Minus = styled.svg`
  fill: none;
  stroke: black;
  stroke-width: 2px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background:  ${props => props.checked ? '#efefef' : '#efefef'};
  border-color: black;
  border-radius: 3px;
  transition: all 150ms;
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px blue;
  }
  ${Icon} {
    display: ${props => props.checked ? 'block' : 'none'}
  }
  ${Minus} {
    display: ${props => props.checked ? 'none' : 'block'}
  }
`
const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`
export { HiddenCheckbox, StyledCheckbox, CheckboxContainer, Icon, Minus }
