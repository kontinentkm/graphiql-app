export type EditorErrorLocation = 'Variables' | 'Headers';

export class EditorError extends Error {
  public editorName: EditorErrorLocation;

  constructor(editorName: EditorErrorLocation, message?: string) {
    super(message);
    this.editorName = editorName;
  }
}

export class APIError extends Error {
  public data: object;

  constructor(data: object, message?: string) {
    super(message);
    this.data = data;
  }
}
