import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector as useSelectorOriginal } from 'react-redux';
import Welcome from '@src/pages/Welcome/Welcome';
import {
  mockLocalizationStrings,
  mockDevelopers,
} from '@src/__tests__/__mocks__/mockData';
import '@testing-library/jest-dom';

jest.mock('@src/store/LocalizationSlice/LocalizationSlice', () => ({
  ...jest.requireActual('@src/store/LocalizationSlice/LocalizationSlice'),
  useSelector: jest.fn(),
}));

jest.mock('@src/constants/localizationStrings', () => ({
  en: mockLocalizationStrings.en,
  ru: mockLocalizationStrings.ru,
}));

describe('Welcome Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders Welcome component with English localization', () => {
    // Настройка мока для хука useSelector
    (useSelectorOriginal as jest.Mock).mockReturnValue('en');

    render(<Welcome />);

    // Проверка отображения текста и элементов
    expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
    expect(screen.getByText(/Our Team/i)).toBeInTheDocument();

    // Проверка отображения информации о разработчиках
    mockDevelopers.forEach((developer) => {
      expect(screen.getByText(developer.name)).toBeInTheDocument();
      expect(screen.getByText(developer.position)).toBeInTheDocument();
      expect(screen.getByText(developer.github)).toBeInTheDocument();
    });
  });
});
