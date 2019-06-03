import React, { Component }     from 'react'
import InputLabelPropsInterface from './InputLabel.props-interface';


export class InputLabel extends Component<InputLabelPropsInterface> {
  /**
   * The state of our component
   * @type {{}}
   */
  public state: any = {
    input: {
      id: ''
    }
  }

  constructor(props: any) {
    super(props);
    /** We bind our context (this) to give it to our method */
    this.showLabel = this.showLabel.bind(this)
  }

  static getDerivedStateFromProps(props: InputLabelPropsInterface, state: any): any {
    const { inputCustomId } = props

    const input = Object.assign(
      {},
      state.input,
      { id: inputCustomId ? inputCustomId : this.randomInputId() }
    )

    return {...state, input}
  }

  static randomInputId(): string {
    return `input-${Date.now()}`
  }

  private showLabel(): any {
    const { showLabel, labelName } = this.props

    if (showLabel)
      return (
        <label htmlFor={ this.state.input.id }>
          { labelName ? labelName : 'Default' }
        </label>
      )
  }

  render(): any {
    const { showLabel, labelDir, inputType } = this.props

    return (
      <div>
        { this.showLabel() }
        <input type={inputType} value={'hello'} id={this.state.input.id}/>
      </div>
    )
  }
}