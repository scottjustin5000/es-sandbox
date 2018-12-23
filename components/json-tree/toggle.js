import { HiddenCheckbox, StyledCheckbox, CheckboxContainer, Icon, Minus } from '../styles/json-tree'
const Toggle = ({ className, checked, ...props }) => (
  <CheckboxContainer onClick={props.onClick} className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={!checked}>
      <Icon viewBox='0 0 24 24'>
        <line x1='12' y1='5' x2='12' y2='19' /><line x1='5' y1='12' x2='19' y2='12' />
      </Icon>
      <Minus viewBox='0 0 24 24'>
        <line x1='5' y1='12' x2='19' y2='12' />
      </Minus>
    </StyledCheckbox>
  </CheckboxContainer>
)

export default Toggle
