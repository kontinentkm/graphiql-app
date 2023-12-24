export default interface IEditProps {
  queryValue: string;
  resultsValue: string;
  onQueryChange: (value: string) => void;
  onResultChange: (value: string) => void;
}
