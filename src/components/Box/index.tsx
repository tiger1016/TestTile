import React from 'react'
import './index.css'

interface BoxProps {
  bgColor: string,
  onClick: () => void,
}

class Box extends React.Component<BoxProps> {
  shouldComponentUpdate(nextProps: BoxProps) {
    if (nextProps.bgColor !== this.props.bgColor) return true
    return false
  }

  render() {
    console.log('here')
    return (
      <div className="boxStyle" style={{backgroundColor: this.props.bgColor}} onClick={this.props.onClick}>
      </div>
    )
  }
}
  
export default Box