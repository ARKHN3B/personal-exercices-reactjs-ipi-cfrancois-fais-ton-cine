import React, { Component }        from 'react'
import { InputLabel, InputTypes } from '../commons';

export class Signin extends Component {
  render() {
    return (
      <div>
        <h3>Hello Signin</h3>
        <InputLabel inputType={InputTypes.Email} inputName={InputTypes.Email}/>
      </div>
    )
  }
}