import { Navigate, Route } from 'react-router-dom';

import EPages from '@src/types/enums/EPages';

import Main from '@src/pages/Main/Main';
import Welcome from '@src/pages/Welcome/Welcome';
import SignUp from '@src/pages/SignUp/SignUp';
import SignIn from '@src/pages/SignIn/SignIn';

export const privateRoutes: JSX.Element[] = [
  <Route key={'0'} path="/" element={<Navigate to={EPages.WELCOME} />} />,
  <Route key={'1'} path={EPages.MAIN} element={<Main />} />,
  <Route key={'2'} path={EPages.WELCOME} element={<Welcome />} />,
  <Route
    key={'3'}
    path={EPages.SIGN_IN}
    element={<Navigate to={`/${EPages.MAIN}`} />}
  />,
  <Route
    key={'4'}
    path={EPages.SIGN_UP}
    element={<Navigate to={`/${EPages.MAIN}`} />}
  />,
];

export const publicRoutes: JSX.Element[] = [
  <Route key={'0'} path="/" element={<Navigate to={EPages.WELCOME} />} />,
  <Route
    key={'1'}
    path={EPages.MAIN}
    element={<Navigate to={`/${EPages.SIGN_IN}`} />}
  />,
  <Route key={'2'} path={EPages.WELCOME} element={<Welcome />} />,
  <Route key={'3'} path={EPages.SIGN_IN} element={<SignIn />} />,
  <Route key={'4'} path={EPages.SIGN_UP} element={<SignUp />} />,
];
