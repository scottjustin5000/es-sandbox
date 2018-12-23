import styled from 'styled-components'
const Drawer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  `
const SidePanel = styled.div`
    z-index: 2; 
    position: absolute; 
    top: 0px; 
    bottom: 0px; 
    overflow-y: auto; 
    left: 0;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
    ${props => (props.open ? 'transition: -webkit-transform 0.3s ease-out 0s;transform: translateX(0%);' : 'transition: -webkit-transform 0.3s ease-out 0s;transform: translateX(-100%);')};
 `
const PanelContent = styled.div`
    position: absolute;
    top: 0;
    left: ${props => props.open ? props.sideBarWidth + 'px' : '0px'};
    right: 0;
    bottom: 0;
    overflow-y: auto;
    transition: left .3s ease-out, right .3s ease-out;
`

const OverlayContent = styled.div`
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    display: none;
    transition: opacity .3s ease-out, visibility .3s ease-out;
    background-color: rgba(0,0,0,.3);
`
export { Drawer, SidePanel, PanelContent, OverlayContent }
