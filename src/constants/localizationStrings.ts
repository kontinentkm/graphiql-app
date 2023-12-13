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
    project_title: 'Project',
    project_text:
      'GraphiQL App is a powerful GraphQL playground and IDE developed by a collaborative team of three skilled developers. This application offers advanced features such as robust authorization, authentication capabilities, and the flexibility to work with any specified open GraphQL endpoint.',
    course_title: 'Курс',
    course_text:
      'The "RS: React Course" is designed for RS School students, starting from, and new participants with basic programming experience. The curriculum covers the fundamentals of programming languages JavaScript and TypeScript, working with the version control system Git and the GitHub platform, as well as an introduction to modern web development tools such as NPM, Webpack, CSS3, HTML5, Chrome DevTools, and Figma. The course also provides an understanding of REST architecture.',

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
    project_title: 'Проект',
    project_text:
      'GraphiQL App - это мощная песочница и среда разработки для GraphQL, созданная коллективной командой из трех опытных разработчиков. Это приложение предлагает передовые функции, такие как надежная авторизация, возможности аутентификации и гибкость работы с любым указанным открытым конечным пунктом GraphQL.',
    course_title: 'Курс',
    course_text:
      'Курс "RS: React Course" предназначен для студентов RS School, начиная, и новых участников с базовым опытом в программировании. Обучение охватывает основы языков программирования JavaScript и TypeScript, работу с системой контроля версий Git и платформой GitHub, а также знакомство с современными инструментами веб-разработки, такими как NPM, Webpack, CSS3, HTML5, Chrome DevTools и Figma. Курс также предоставляет понимание архитектуры REST.',
    main: 'Главная',
  },
};

export default localizationStrings;
