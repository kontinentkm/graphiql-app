import ILocalizedErrorMessage from '@src/types/interfaces/ILocalizedErrorMessage';

export class LocalizedError extends Error {
  public localizedMessages: ILocalizedErrorMessage;

  constructor(localizedMessages: ILocalizedErrorMessage) {
    super(localizedMessages.en);
    this.localizedMessages = localizedMessages;
  }
}
