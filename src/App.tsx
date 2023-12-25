import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import useCustomRouter from '@src/router/Router';
import LoadingSpinner from '@src/UI/LoadingSpinner/LoadingSpinner';
import { toastContainerSettings } from '@src/constants/toastSettings';

function App() {
  const { routes, isLoading } = useCustomRouter();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <RouterProvider router={routes} />
      <ToastContainer {...toastContainerSettings} />
    </>
  );
}

export default App;
