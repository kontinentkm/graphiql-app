import { RouterProvider } from 'react-router-dom';

import useCustomRouter from '@src/router/Router';

function App() {
  const router = useCustomRouter();

  return <RouterProvider router={router} />;
}

export default App;
