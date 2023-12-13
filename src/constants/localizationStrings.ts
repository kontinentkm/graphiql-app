import ILocalizationStrings from '@src/types/interfaces/ILocalizationStrings';

const localizationStrings: ILocalizationStrings = {
  en: {
    signInBtn: 'Sign In',
    signUpBtn: 'Sign Up',
    signOutBtn: 'Sing Out',
    welcome: 'Welcome',
    ourTeam: 'Our Team',
    developers: [
      {
        id: 1,
        photo: 'https://avatars.githubusercontent.com/u/83360315?v=4',
        name: 'Leonid',
        position: 'Frontend Developer',
        github: 'https://github.com/leanidrymkevich',
      },
      {
        id: 2,
        photo: 'https://avatars.githubusercontent.com/u/98457968?v=4',
        name: 'Maxim',
        position: 'Frontend Developer',
        github: 'https://github.com/kontinentkm',
      },
      {
        id: 3,
        photo: 'https://avatars.githubusercontent.com/u/89194325?v=4',
        name: 'Lev',
        position: 'Frontend Developer',
        github: 'https://github.com/hotimpulse',
      },
    ],
    main: 'Main',
  },
  ru: {
    signInBtn: 'Войти',
    signUpBtn: 'Регистрация',
    signOutBtn: 'Выйти',
    welcome: 'Добро пожаловать',
    ourTeam: 'Наша команда',
    developers: [
      {
        id: 1,
        photo: 'https://avatars.githubusercontent.com/u/83360315?v=4',
        name: 'Леонид',
        position: 'Фронтенд девелопер',
        github: 'https://github.com/leanidrymkevich',
      },
      {
        id: 2,
        photo: 'https://avatars.githubusercontent.com/u/98457968?v=4',
        name: 'Максим',
        position: 'Фронтенд девелопер',
        github: 'https://github.com/kontinentkm',
      },
      {
        id: 3,
        photo: 'https://avatars.githubusercontent.com/u/89194325?v=4',
        name: 'Лев',
        position: 'Фронтенд девелопер',
        github: 'https://github.com/hotimpulse',
      },
    ],
    main: 'Главная',
  },
};

export default localizationStrings;
