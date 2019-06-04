import React, { Component }        from 'react'
import { InputLabel, InputTypes } from '../commons';

export class Signin extends Component {
  /**
   * We need to pass by a state if we want that our childs components detect the change of the props
   * @type {{show: boolean}}
   */
  state: any = {
    show: true
  }

  constructor(props: any) {
    super(props)
  }

  render(): React.ReactNode {
    return (
      <div>
        <h3>Hello Signin</h3>
        {/*<InputLabel showLabel={this.state.show} labelName={'E-mail'} inputType={InputTypes.Email} inputName={InputTypes.Email}/>*/}
        <button onClick={ () => { this.setState({show: !this.state.show}) } }>Click</button>
      </div>
    )
  }
}