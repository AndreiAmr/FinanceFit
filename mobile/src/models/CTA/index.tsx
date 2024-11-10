export class CTAModel {
  label: string;
  handlePress: () => void;

  constructor(label: string, handlePress: () => void) {
    this.label = label;
    this.handlePress = handlePress;
  }
}
