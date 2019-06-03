import React, { Component } from 'react'

export default class InputLabel extends Component{
  render() {
    return (
      <div>
        <label htmlFor=""></label>
        <input type={'text'} value={'hello'} id={''}/>
      </div>
    )
  }
}