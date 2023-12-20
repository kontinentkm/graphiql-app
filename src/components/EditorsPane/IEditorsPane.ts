export default interface IEditorsPane {
  Query: string;
  Variables: string;
  Headers: string;
  setQuery: (Query: string) => void;
  setVariables: (Variables: string) => void;
  setHeaders: (Headers: string) => void;
}
