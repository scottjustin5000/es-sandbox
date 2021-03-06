import styled from 'styled-components'
const JsonItem = styled.div`
  display: block;
  margin-top: 10px;
  padding-left: 20px;
  user-select: none;
  `
const JsonValue = styled.div`
display: inline;
color: ${(props) => {
    if (props.type === 'string') {
      return '#ffffff'
    } else if (props.type === 'boolean') {
      return 'pink'
    } else if (props.type === 'number') {
      return '#ffffff'
    } else {
      return '#ffc600'
    }
  }};
`
const JsonKey = styled.div`
 color: #ffc600;
 padding-left: 8px;
 display: inline;
 &:after {
      content: ': ';
    }
`
const JsonItemCollapsible = styled.div`
  margin-top: 10px;
  padding-left: 20px;
  user-select: none;
  cursor: pointer;
    overflow: hidden;
    position: relative;
    
    /* &::before {
        content: '+';
        position: absolute;
        left: 5px;
    }
     */
    &::after {
        background-color: lightgrey;
        content: '';
        height: 100%;
        left: 9px;
        position: absolute;
        top: 26px;
        width: 1px;
    }
    
    &:hover {
        & > ${JsonKey},
        & > ${JsonItem} {
            text-decoration: underline;
        }
    }
`

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
  &:checked ~ ${JsonItem} {
      display: block;
  }
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
const JsonWrapper = styled.div`
  font-family: 'Source Code Pro', monospace;
  font-size: 12px;
  background-color: #172b3a; 

  & > {
        ${JsonItem} {
            display: block;
        }
  }
`
export { JsonItem, JsonValue, JsonKey, JsonItemCollapsible, JsonWrapper, CheckboxContainer, StyledCheckbox, HiddenCheckbox, Icon, Minus }
