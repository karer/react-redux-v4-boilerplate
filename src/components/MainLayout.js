import React from 'react'

class MainLayout extends React.Component {
  render() {
    return (
      <div className="container">
          {this.props.children}
      </div>
    )
  }
}

export default MainLayout
