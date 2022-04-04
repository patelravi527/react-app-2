import React, { Component } from 'react'
import loadning from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div>
          <div className='flex items-center justify-center h-30 w-full'>
                <img className='max-w-full w-auto' src={loadning} alt="loadning" />
          </div>
      </div>
    )
  }
}

export default Spinner