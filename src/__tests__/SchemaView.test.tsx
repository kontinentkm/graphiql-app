import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from '@src/store/store';
import SchemaView from '@src/components/SchemaView/SchemaView';

import localizationStrings from '@src/constants/localizationStrings';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('SchemaView', () => {
  test('Renders SchemaView component with english localization', async () => {
    await waitFor(() => {
      (
        jest.requireMock('react-redux') as { useSelector: jest.Mock }
      ).useSelector.mockReturnValue('en');

      render(
        <MemoryRouter>
          <Provider store={store}>
            <SchemaView schema={null} />
          </Provider>
        </MemoryRouter>
      );
    });

    expect(
      screen.getByText(localizationStrings.en.no_schema_msg)
    ).toBeInTheDocument();

    jest.clearAllMocks();
  });

  test('Renders SchemaView component with russian localization', async () => {
    await waitFor(() => {
      (
        jest.requireMock('react-redux') as { useSelector: jest.Mock }
      ).useSelector.mockReturnValue('ru');

      render(
        <MemoryRouter>
          <Provider store={store}>
            <SchemaView schema={null} />
          </Provider>
        </MemoryRouter>
      );
    });

    expect(
      screen.getByText(localizationStrings.ru.no_schema_msg)
    ).toBeInTheDocument();

    jest.clearAllMocks();
  });
});
