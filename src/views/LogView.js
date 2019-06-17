import React from 'react'
import PropTypes from 'prop-types'

class LogView extends React.Component {
  static propTypes = {
    log: PropTypes.array.isRequired
  }



  render() {
    return (
      <div className='log'>
        {this.props.log.map((logStatement, index) => {
          return <p className='logStatement' key={index}>{logStatement}</p>
        })}
      </div>
    )
  }
}

export default LogView
