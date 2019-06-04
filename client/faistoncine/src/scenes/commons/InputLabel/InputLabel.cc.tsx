import React, { Component }     from 'react'
import { InputTypes, LabelDir } from './InputLabelProps.enums';

/**
 * Props interface for our component
 */
export interface InputLabelPropsInterface {
  showLabel?: boolean,
  labelDir?: LabelDir,
  labelName?: string,
  inputType: InputTypes,
  inputName: string,
  inputCustomId?: string
}

/**
 * State interface for our component
 */
export interface InputLabelStateInterface {
  data: InputLabelPropsInterface|null,
  inputId: string|null
}

export class InputLabel extends Component<InputLabelPropsInterface> {
  /**
   * The state of our component
   * @type {{}}
   */
  public state: InputLabelStateInterface = {
    data: null,
    inputId: null
  }

  constructor(props: any) {
    super(props);
    /** We bind our context (this) to give it to our method */
    this._binder()
    this.setState({ data: props })
  }

  /**
   * Called from the constructor to pass our context to our function
   * @private
   */
  private _binder(): void {
    this._showLabel        = this._showLabel.bind(this)
    this._setRandomInputId = this._setRandomInputId.bind(this)
  }

  /**
   * When the component is initialized, update the state
   * @returns {any}
   * @param nextProps
   * @param currentState
   */
  static getDerivedStateFromProps(nextProps: InputLabelPropsInterface, currentState: InputLabelStateInterface): any {
    console.log(nextProps)
  }

  /**
   * Generates a random input id with a timestamp
   * @returns {string}
   */
  private _setRandomInputId(): any {
    let inputId: string|null = null

    this.setState({inputId: `input-${Date.now()}`}, () => { inputId = this.state.inputId })

    return inputId
  }

  /**
   * Display the label tag if the user needs it
   * @returns {any}
   * @private
   */
  private _showLabel(): any {
    const { showLabel, labelName } = this.props
    const { inputId } = this.state

    if (showLabel)
      return (
        <label htmlFor={ inputId ? inputId : this._setRandomInputId()  }>
          { labelName ? labelName : 'Default' } :
        </label>
      )
  }

  /**
   * Render method
   * @returns {React.ReactNode}
   */
  render(): React.ReactNode {
    const { inputType } = this.props
    const { inputId } = this.state

    return (
      <div>
        { this._showLabel() }
        <input type={inputType} id={ inputId ? inputId : this._setRandomInputId() }/>
      </div>
    )
  }
}