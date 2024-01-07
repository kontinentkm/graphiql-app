import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import ISchemaWindowProps from '@src/types/interfaces/ISchemaWindowProps';

import SchemaWindow from '@src/components/SchemaWindow/SchemaWindow';
import { store } from '@src/store/store';

import { SCHEMA_WINDOW_TEST_ID } from '@src/__tests__/__mocks__/testIDs';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

const mockCallback = jest.fn();
const props: ISchemaWindowProps = {
  schema: null,
  visible: true,
  onCloseClick: mockCallback,
};

describe('SchemaWindow', () => {
  beforeEach(() => {
    (
      jest.requireMock('react-redux') as { useSelector: jest.Mock }
    ).useSelector.mockReturnValue('en');

    render(
      <MemoryRouter>
        <Provider store={store}>
          <SchemaWindow {...props} />
        </Provider>
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test('Renders SchemaWindow', async () => {
    expect(screen.getByTestId(SCHEMA_WINDOW_TEST_ID)).toBeInTheDocument();
    expect(screen.getByText('X')).toBeInTheDocument();
  });
});
