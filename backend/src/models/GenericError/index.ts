import { GenericButton } from '../GenericButton';

interface IGenericError {
  message: string;
  title: string;
  firstButton: GenericButton;
}

export class GenericError extends Error {
  title: string;
  description?: string;
  firstButton: GenericButton;

  constructor(props: IGenericError) {
    super(props.message);

    this.description = props.message;
    this.title = props.title;
    this.firstButton = props.firstButton;
  }
}
