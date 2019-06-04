import React, { Component }                                               from 'react'
import { InputLabel, InputLabelObjectToChange, InputTypes, SubmitCancel } from '../commons'
import Button                                                             from "@material-ui/core/Button"
/** Import styles */
import "./Signup.css"

export class Signup extends Component {
  constructor(props: any) {
    super(props)
  }

  protected handleInputChanged(o: InputLabelObjectToChange): void {
    console.log("input change", o)
  }

  /**
   * Render method
   * @returns {any}
   */
  render(): React.ReactNode {
    return (
      <div id={"signup-container"}>
        <h3>Sign up</h3>
        <form id={"signup-form"}>
          <InputLabel labelName={ 'E-mail' }
                      inputName={ 'email' }
                      inputType={ InputTypes.Email }
                      handleEventInputChange={ this.handleInputChanged }
          />
          <InputLabel labelName={ 'Identifiant' }
                      inputName={ 'identifiant' }
                      inputType={ InputTypes.Text }
                      handleEventInputChange={ this.handleInputChanged }
          />
          <InputLabel labelName={ 'Password' }
                      inputName={ 'password' }
                      inputType={ InputTypes.Password }
                      handleEventInputChange={ this.handleInputChanged }
          />
          <InputLabel labelName={ 'Confirm password' }
                      inputName={ 'checkPassword' }
                      inputType={ InputTypes.Password }
                      handleEventInputChange={ this.handleInputChanged }
          />
          <SubmitCancel/>
        </form>
      </div>
    )
  }
}