import { Navigate, Route } from 'react-router-dom';

import EPages from '@src/types/enums/EPages';

import Main from '@src/pages/Main/Main';
import Welcome from '@src/pages/Welcome/Welcome';
import Login from '@src/pages/Login/Login';
import Register from '@src/pages/Register/Register';

export const privateRoutes: JSX.Element[] = [
  <Route key={'0'} path="/" element={<Navigate to={EPages.WELCOME} />} />,
  <Route key={'1'} path={EPages.MAIN} element={<Main />} />,
  <Route key={'2'} path={EPages.WELCOME} element={<Welcome />} />,
  <Route
    key={'3'}
    path={EPages.LOGIN}
    element={<Navigate to={`/${EPages.MAIN}`} />}
  />,
  <Route
    key={'4'}
    path={EPages.REGISTER}
    element={<Navigate to={`/${EPages.MAIN}`} />}
  />,
];

export const publicRoutes: JSX.Element[] = [
  <Route key={'0'} path="/" element={<Navigate to={EPages.WELCOME} />} />,
  // <Route
  //   key={'1'}
  //   path={EPages.MAIN}
  //   element={<Navigate to={`/${EPages.WELCOME}`} />}
  // />,
  <Route key={'1'} path={EPages.MAIN} element={<Main />} />,
  <Route key={'2'} path={EPages.WELCOME} element={<Welcome />} />,
  <Route key={'3'} path={EPages.LOGIN} element={<Login />} />,
  <Route key={'4'} path={EPages.REGISTER} element={<Register />} />,
];
