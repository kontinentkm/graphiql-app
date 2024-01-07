import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import getSchema from '@src/services/ApiSchemaService';

import defaultAPIsUrl from '@src/constants/defaultAPIsURL';

const mockValue = 'value';
const resp = {
  data: {
    data: 'value',
  },
};

jest.mock('graphql', () => ({
  ...jest.requireActual('react-redux'),
  getIntrospectionQuery: jest.fn(() => mockValue),
  buildClientSchema: jest.fn(() => mockValue),
}));

const axiosMock = new MockAdapter(axios);

const source = defaultAPIsUrl[0];

test('should fetch data', async () => {
  axiosMock.onPost(source).reply(200, resp);

  const result = await getSchema(source);
  expect(result).toEqual(mockValue);
});

test('should throw error on network error', async () => {
  axiosMock.onPost(source).networkError();

  expect.assertions(1);
  try {
    await getSchema(source);
  } catch (error) {
    expect(error).toBeTruthy();
  }
});
