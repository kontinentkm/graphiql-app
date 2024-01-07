import { ObjectSchema } from 'yup';

import { Localization } from '@src/types/types';

import { getLoginSchema } from '@src/hooks/useLoginSchema';

const lang: Localization = 'en';

describe('getLoginSchema tests', (): void => {
  test('it returns value of concrete class', (): void => {
    const result = getLoginSchema(lang);

    expect(result).toBeInstanceOf(ObjectSchema);
  });
});
