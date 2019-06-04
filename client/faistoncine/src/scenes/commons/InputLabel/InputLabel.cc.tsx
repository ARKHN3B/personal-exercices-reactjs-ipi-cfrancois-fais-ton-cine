import React, { Component }     from 'react'
import { InputTypes, LabelDir } from './InputLabelProps.enums';
/** Import styles */
import "./InputLabel.cc.css"
/** Material components */
import { TextField }            from '@material-ui/core';
import makeStyles               from '@material-ui/core/styles/makeStyles';

/**
 * Props interface for our component
 */
export interface InputLabelPropsInterface {
  labelDir?: LabelDir,
  labelName?: string,
  inputType: InputTypes,
  inputName: string,
  inputCustomId?: string,
  handleEventInputChange: any
}

export interface InputLabelObjectToChange {
  name: string,
  value: any
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
    this._setRandomInputId = this._setRandomInputId.bind(this)
    this._handleChange      = this._handleChange.bind(this)
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
  
  private _handleChange({ target: t }: any): void {
    const { name, value } = t

    const object: InputLabelObjectToChange = {
      name,
      value
    }
    this.props.handleEventInputChange(object)
  }

  /**
   * Render method
   * @returns {React.ReactNode}
   */
  render(): React.ReactNode {
    const { inputType, inputName, labelName } = this.props
    const { inputId } = this.state

    const useStyles = makeStyles(theme => ({
      textField: {
        width: 100
      }
    }))

    const classes = useStyles()

    return (
      <div className={"input-label-cc-container"}>
        <TextField
          id={ inputId ? inputId : this._setRandomInputId() }
          className={ classes.textField }
          name={ inputName }
          type={ inputType }
          label={ labelName }
          onChange={ this._handleChange }
          margin="normal"
          variant="outlined"
        />
      </div>
    )
  }
}