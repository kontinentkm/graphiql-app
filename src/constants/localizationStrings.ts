import ILocalizationStrings from '@src/types/interfaces/ILocalizationStrings';
import ILoginMessages from '@src/types/interfaces/ILoginMessages';
import IRegisterMessages from '@src/types/interfaces/IRegisterMessages';
import IToastMessages from '@src/types/interfaces/IToastMessages';

export const toastMessages: IToastMessages = {
  en: {
    loading_msg: 'Handling request...',
    registration_error_msg: 'Error on registration',
    login_error_msg: 'Error on log in',
    registration_success_msg: 'Successfull registration',
    login_success_msg: 'Successfull log in',
    headers_editor_error_msg:
      'SyntaxError while headers parsing! Headers object must be valid JSON!',
    variables_editor_error_msg:
      'SyntaxError while variables parsing! Variables object must be valid JSON!',
    get_data_error: 'Error while data fetching from API',
    get_data_success: 'Successfull data fetching from API',
    logout_error_msg: 'Error on log out',
    logout_success_msg: 'Successfull log out',
    schema_load_err_msg: 'Error on schema loading',
    schema_load_success_msg: 'Successfull schema loading',

    empty_source_err_msg: 'To do request you must enter a API source url!',
  },
  ru: {
    loading_msg: 'Обработка запроса...',
    registration_error_msg: 'Ошибка при регистрации',
    login_error_msg: 'Ошибка при входе',
    registration_success_msg: 'Успешная регистрация',
    login_success_msg: 'Успешный вход',
    headers_editor_error_msg:
      'Синтаксическая ошибка! Заголовки должны быть валидным JSON объектом!',
    variables_editor_error_msg:
      'Синтаксическая ошибка! Переменные должны быть валидным JSON объектом!',
    get_data_success: 'Успешное получение данных от API',
    get_data_error: 'Ошибка при получении данных от API',
    logout_error_msg: 'Ошибка при выходе',
    logout_success_msg: 'Успешный выход',
    schema_load_err_msg: 'Ошибка при загрузке схемы',
    schema_load_success_msg: 'Успешная загрузка схемы',

    empty_source_err_msg:
      'Чтобы делать запросы вы должны ввести url-адрес API!',
  },
};

export const loginMessages: ILoginMessages = {
  en: {
    email_required_msg: 'Your email is required',
    email_mismatch_msg: 'You must enter valid email',
    password_empty_msg: 'You must enter password',
    password_length_msg: 'Password must contain 8-32 symbols',
    password_mismatch_msg:
      'Password must contain at least one number, one uppercase letter, one lowercase letter, and one special character',
  },
  ru: {
    email_required_msg: 'Введите адрес эл. почты',
    email_mismatch_msg: 'Адресс эл. почты должен быть валидным',
    password_empty_msg: 'Введите пароль',
    password_length_msg: 'Пароль должен содержать 8-32 символов',
    password_mismatch_msg:
      'Пароль должен содержать хотя бы одну цифру, одну букву в верхнем регистре, одну в нижнем регистре, специальный символ и быть не короче 8 символов',
  },
};

export const registerMessages: IRegisterMessages = {
  en: {
    empty_name_msg: 'You must enter your name',
  },
  ru: {
    empty_name_msg: 'Введите ваше имя',
  },
};

const localizationStrings: ILocalizationStrings = {
  en: {
    loginBtn: 'Login',
    registerBtn: 'Register',
    signOutBtn: 'Sign Out',
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
      'GraphiQL App is a powerful GraphQL playground and IDE developed by a team of three skilled developers. This application offers advanced features such as robust authorization, authentication capabilities, and the flexibility to work with any specified open GraphQL endpoint.',
    course_title: 'Course',
    course_text:
      'The "RS: React Course" is designed for RS School students and new participants with basic programming experience. The curriculum covers the fundamentals of JavaScript and TypeScript, working with the version control system Git and the GitHub platform, as well as an introduction to modern web development tools such as NPM, Webpack, CSS3, HTML5, Chrome DevTools, and Figma. The course also provides an understanding of REST architecture.',

    main: 'Main',
    prettify_btn: 'Prettify',
    results_btn: 'Get results',
    edit_btn: 'Query',
    edit_btn_results: 'Show results',
    variables_btn: 'Variables',
    headers_btn: 'Headers',

    execute_btn: 'Execute Query',
    query: 'Query',
    variables: 'Query Variables',
    headers: 'HTTP Headers',
    input: 'Type JSON URL',
    login: [
      'Enter your credentials',
      'Email',
      'Password',
      'Login',
      `Don't have an account?`,
      'Create account',
    ],
    register: [
      'Create your account',
      'Name',
      'Email',
      'Password',
      'Create account',
    ],
    schema_btn: 'Schema',
    no_schema_msg: 'There is no schema yet',
  },
  ru: {
    loginBtn: 'Войти',
    registerBtn: 'Регистрация',
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
      'Курс "RS: React Course" предназначен для студентов RS School и новых участников с базовым опытом в программировании. Обучение охватывает основы языков программирования JavaScript и TypeScript, работу с системой контроля версий Git и платформой GitHub, а также знакомство с современными инструментами веб-разработки, такими как NPM, Webpack, CSS3, HTML5, Chrome DevTools и Figma. Курс также предоставляет понимание архитектуры REST.',
    main: 'Главная',
    prettify_btn: 'Выровнить',
    results_btn: 'Получить результаты',
    edit_btn: 'Запрос',
    variables_btn: 'Переменные',
    headers_btn: 'Заголовки',

    execute_btn: 'Извлечь запрос',
    query: 'Запрос',
    edit_btn_results: 'Показать результаты',
    variables: 'Переменные запроса',
    headers: 'HTTP-заголовки',
    input: 'Введите URL-адрес для получения JSON',
    login: [
      'Войдите в свой аккаунт',
      'Эл. почта',
      'Пароль',
      'Войти',
      'Нет аккаунта?',
      'Создать аккаунт',
    ],
    register: [
      'Создайте свой аккаунт',
      'Имя',
      'Эл. почта',
      'Пароль',
      'Создать аккаунт',
    ],
    schema_btn: 'Схема',
    no_schema_msg: 'Пока нет доступной схемы от API',
  },
};

export default localizationStrings;
