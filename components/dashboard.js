import React from 'react'
import fetch from 'isomorphic-fetch'
import SlidePanel from './drawer'
import JsonTree from './json-tree'
import JsonView from './json-view'
import SelectBar from './select-bar'
import Toasts from './toast'

import { QueryHeader, ChevronLeft, ChevronRight, PlayButton, UrlInput, SidebarContainer, Header } from './styles/dashboard'

class Dashboard extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      docked: true,
      open: true,
      shadow: true,
      checked: false,
      url: '',
      selectedMethod: 'GET',
      queryData: {},
      toasts: []
    }
    this.onCloseClick = this.onCloseClick.bind(this)
    this.onOpenClick = this.onOpenClick.bind(this)
    this.toggle = this.toggle.bind(this)
    this.search = this.search.bind(this)
    this.onMethodChanged = this.onMethodChanged.bind(this)
    this.urlChanged = this.urlChanged.bind(this)
    this.queryDataChanged = this.queryDataChanged.bind(this)
    this.headerDataChanged = this.headerDataChanged.bind(this)
    this.removeToast = this.removeToast.bind(this)
  }

  onCloseClick () {
    this.setState({
      docked: false,
      open: false
    }
    )
  }

  onOpenClick () {
    this.setState({
      docked: true,
      open: true
    }
    )
  }

  onMethodChanged (v) {
    this.setState({
      selectedMethod: v
    })
  }

  urlChanged (e) {
    this.setState({
      url: e.target.value
    })
  }

  queryDataChanged (queryData) {
    this.setState({
      queryData
    })
  }

  headerDataChanged (headers) {
    this.setState({
      headers
    })
  }

  removeToast (id) {
    this.setState({
      toasts: this.state.toasts.filter((t) => { return t.id !== id })
    })
  }

  showErrorMessage (message) {
    const toast = Object.assign(message, {id: this.state.toasts.length++})
    const toasts = this.state.toasts.map((toast) => { return toast })
    toasts.push(toast)
    this.setState({
      toasts
    })
  }

  search () {
    if (!this.state.url) {
      return this.showErrorMessage({ text: 'a URL is required!', autoDismiss: true })
    }
    const contentType = { 'Content-Type': 'application/json' }
    const headers = this.state.headers ? Object.assign(contentType, this.state.headers) : contentType

    const data = (this.state.queryData && Object.keys(this.state.queryData)) ? JSON.stringify(this.state.queryData) : undefined
    return fetch(this.state.url, {
      method: this.state.selectedMethod,
      headers,
      body: data
    })
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        this.setState({
          json
        })
      })
      .catch((err) => {
        this.showErrorMessage({ text: err.message, autoDismiss: true })
      })
  }

  toggle () {
    this.setState({
      checked: !this.state.checked
    })
  }

  render () {
    const sidebar = () => {
      return (
        <SidebarContainer>
          <div style={{display: 'flex'}}>
            <QueryHeader><span>Query</span></QueryHeader><ChevronLeft onClick={this.onCloseClick}><polyline points='15 18 9 12 15 6' /></ChevronLeft>
          </div>
          <div><JsonView jsonChanged={this.queryDataChanged} /></div>
          <QueryHeader><span>Headers</span></QueryHeader>
          <JsonView jsonChanged={this.headerDataChanged} defaultText='{}' />
        </SidebarContainer>
      )
    }

    const sidebarProps = {
      sidebar: sidebar(),
      open: this.state.open
    }

    return (
      <div>
        <Header>
          <SelectBar onSelectionChanged={this.onMethodChanged} minWidth='295px' items={[{label: 'GET', value: 'GET'}, {label: 'PST', value: 'POST'}, {label: 'PUT', value: 'PUT'}, {label: 'DEL', value: 'DELETE'}]} />
          <UrlInput onChange={this.urlChanged} value={this.state.url} placeholder='URL' />
        </Header>
        <SlidePanel {...sidebarProps}>
          {!this.state.open &&
          <ChevronRight onClick={this.onOpenClick}> <polyline points='9 18 15 12 9 6' /></ChevronRight>
          }
          {this.state.json &&
          <JsonTree json={this.state.json} />
          }
        </SlidePanel>
        <PlayButton open={this.state.open} onClick={this.search}>
          <svg width='36' height='36' style={{marginLeft: '12px', marginTop: '12px'}} viewBox='0 0 36 36' fill='solid' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polygon points='5 3 19 12 5 21 5 3' /></svg>
        </PlayButton>
        <Toasts removeToast={this.removeToast} toasts={this.state.toasts} />
      </div>
    )
  }
}
export default Dashboard
