import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import EPages from '@src/types/enums/EPages';

import Layout from '@src/components/Layout/Layout';
import Main from '@src/pages/Main/Main';
import Welcome from '@src/pages/Welcome/Welcome';
import SignIn from '@src/pages/SignIn/SignIn';
import SignUp from '@src/pages/SignUp/SignUp';
import NotFound from '@src/pages/NotFound/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Navigate to={EPages.WELCOME} />}></Route>
      <Route path={EPages.MAIN} element={<Main />}></Route>
      <Route path={EPages.WELCOME} element={<Welcome />} />
      <Route path={EPages.SIGN_IN} element={<SignIn />} />
      <Route path={EPages.SIGN_UP} element={<SignUp />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
