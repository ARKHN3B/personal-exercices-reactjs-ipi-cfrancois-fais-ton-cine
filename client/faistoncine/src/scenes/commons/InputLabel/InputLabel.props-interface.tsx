import { InputTypes, LabelDir } from './InputLabel.props-enums';

export default interface InputLabelPropsInterface {
  showLabel?: boolean,
  labelDir?: LabelDir,
  labelName?: string,
  inputType: InputTypes,
  inputName: string,
  inputCustomId?: string
}