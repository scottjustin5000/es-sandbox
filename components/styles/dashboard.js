import styled from 'styled-components'
const QueryHeader = styled.div`
  background-color: #193549; 
  padding: 5px 10px; 
  font-family: 'Source Code Pro',monospace; 
  color: #ffc600; 
`
const ChevronLeft = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
  width:24px;
  height:24px;
  align-self:flex-end;
  margin-left: auto;
  cursor: pointer; 
`
const ChevronRight = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
  width:24px;
  height:24px;
  align-self:flex-end;
  margin-left: auto;
  cursor: pointer; 
`
const PlayButton = styled.button`
  position: absolute;
  top: 150px;
  z-index: 10;
  left: ${props => props.open ? `260px` : `-10px`};
  border: none;
  background-color: rgba(255,255,255,0.4);
  height:60px;
  width:60px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius:50%;
  cursor: pointer;
  &:focus {
      outline: 0
    }
    ${props => (props.open ? 'transition: -webkit-transform 0.3s ease-out 0s;transform: translateX(10%);' : 'transition: -webkit-transform 0.3s ease-out 0s;transform: translateX(-100%);')};
`
const UrlInput = styled.input.attrs({
  type: 'text'
})`
  padding-left: 10px;
  margin-left: 5px; 
  border: 1px solid white; 
  background-color: #172b3a; 
  color: white; 
  width: 100%; 
  height: 30px;
`
const SidebarContainer = styled.div`
  width: 300px;
  overflow: hidden; 
  overflow-y: hidden;
`
const Header = styled.div`
  display: flex; 
  flex-direction: row;
  background-color: #1f4662; 
  margin-left: -5px;
`
export { QueryHeader, ChevronLeft, ChevronRight, PlayButton, UrlInput, SidebarContainer, Header }
