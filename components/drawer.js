import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Drawer, SidePanel, PanelContent, OverlayContent } from './styles/drawer'

class SlidePanel extends Component {
  constructor (props) {
    super(props)
    this.sidebarRef = React.createRef()
    this.state = {
      sidebarWidth: props.sidebarWidth
    }

    this.overlayClicked = this.overlayClicked.bind(this)
  }

  async componentDidMount () {
    await this.setState({
      sidebarWidth: this.sidebarRef.current.offsetWidth
    })
  }

  overlayClicked () {
    if (this.props.open) {
      this.props.toggleOpen(false)
    }
  }

  render () {
    return (
      <Drawer>
        <SidePanel
          ref={this.sidebarRef}
          open={this.props.open}>
          {this.props.sidebar}
        </SidePanel>
        <OverlayContent onClick={this.overlayClicked} />
        <PanelContent
          sideBarWidth={this.state.sidebarWidth || 200}
          open={this.props.open}
        >
          {this.props.children}
        </PanelContent>
      </Drawer>

    )
  }
}

SlidePanel.propTypes = {
  children: PropTypes.node.isRequired,
  sidebar: PropTypes.node.isRequired,
  docked: PropTypes.bool,
  open: PropTypes.bool,
  toggleOpen: PropTypes.func,
  sidebarWidth: PropTypes.number
}

SlidePanel.defaultProps = {
  open: false,
  applyShadow: true,
  toggleOpen: () => {},
  sidebarWidth: 0
}

export default SlidePanel
