export default interface IVariablesProps {
  variablesValue: string;
  headersValue: string;
  onVariablesChange: (value: string) => void;
  onHeadersChange: (value: string) => void;
}
