import { RouterProvider } from 'react-router-dom';

import useCustomRouter from '@src/router/Router';
import LoadingSpinner from '@src/UI/LoadingSpinner/LoadingSpinner';

function App() {
  const { routes, isLoading } = useCustomRouter();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return <RouterProvider router={routes} />;
}

export default App;
