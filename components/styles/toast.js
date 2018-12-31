import styled from 'styled-components'

const ToastContainer = styled.ul`
  bottom: 24px;
  position: fixed;
  right: 24px;
  width: 240px;
`
const ToastItem = styled.li`
  align-items: flex-start;
  background-color: ${props => props.color || '#ff0000'};
  border-radius: 4px;
  color: #ffffff;
  display: flex;
  padding: 16px;
`
const P = styled.p`
  font-family: 'Source Code Pro', monospace;
  flex: 1 1 auto;
  margin: 0 12px 0 0;
  overflow: hidden;
  text-overflow: ellipsis;
`
const Dismiss = styled.button`
 -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  border: 0;
  color: inherit;
  cursor: pointer;
  display: block;
  flex: 0 0 auto;
  font: inherit;
  padding: 0;
`
export { ToastContainer, ToastItem, P, Dismiss }
