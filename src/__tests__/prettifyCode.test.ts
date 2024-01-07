import { prettifyCode } from '@src/utils/prettifyCode';

describe('prettifyCode function', () => {
  test('should format the query correctly', () => {
    const unformattedQuery = 'query{ asdas asdasd asd }';
    const expectedFormattedQuery = 'query {\n  asdasasdasdasd\n}';
    const formattedQuery = prettifyCode(unformattedQuery);
    expect(formattedQuery).toEqual(expectedFormattedQuery);
  });
});
