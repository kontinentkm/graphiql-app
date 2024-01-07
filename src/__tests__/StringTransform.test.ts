import { capitalize } from '@src/utils/StringTransform';

test('capitalizeFirstLetter returns appropriate value', (): void => {
  const word = 'word';
  const result = 'Word';
  expect(capitalize(word)).toBe(result);
});
