import { ObjectSchema } from 'yup';

import { Localization } from '@src/types/types';

import { getRegisterSchema } from '@src/hooks/useRegisterSchema';

const lang: Localization = 'en';

describe('getRegisterSchema tests', (): void => {
  test('it returns value of concrete class', (): void => {
    const result = getRegisterSchema(lang);

    expect(result).toBeInstanceOf(ObjectSchema);
  });
});
