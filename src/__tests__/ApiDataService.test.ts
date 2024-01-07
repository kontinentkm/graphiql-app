import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import getData from '@src/services/ApiDataService';

import defaultAPIsUrl from '@src/constants/defaultAPIsURL';

const axiosMock = new MockAdapter(axios);

const source = defaultAPIsUrl[0];
const query = 'query';
const variables = '{"number": 1}';
const headers = '{"number": 1}';
const data = { name: 'Bill' };

test('should fetch data', async () => {
  const resp = data;
  axiosMock.onPost(source).reply(200, resp);
  const res = await getData(source, query, variables, headers);

  expect(res).toEqual(JSON.stringify(data, undefined, 4));
});

test('should throw error on not valid variables JSON', async () => {
  const resp = data;
  axiosMock.onPost(source).reply(200, resp);

  expect.assertions(1);
  try {
    await getData(source, query, 'not valid', headers);
  } catch (error) {
    expect(error).toBeTruthy();
  }
});

test('should throw error on not valid headers JSON', async () => {
  const resp = data;
  axiosMock.onPost(source).reply(200, resp);

  expect.assertions(1);
  try {
    await getData(source, query, variables, 'not valid');
  } catch (error) {
    expect(error).toBeTruthy();
  }
});

test('should throw error on network error', async () => {
  axiosMock.onPost(source).networkError();

  expect.assertions(1);
  try {
    await getData(source, query, variables, headers);
  } catch (error) {
    expect(error).toBeTruthy();
  }
});
