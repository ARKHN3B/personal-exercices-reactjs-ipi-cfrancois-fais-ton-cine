import React, { Component } from 'react'

export default class InputLabelCommonsComponent extends Component{
  render() {
    return (
      <div>
        <label htmlFor=""></label>
        <input type={'text'} value={'hello'} id={''}/>
      </div>
    )
  }
}