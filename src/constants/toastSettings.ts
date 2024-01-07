import { ToastContainerProps, ToastOptions, toast } from 'react-toastify';

const toastSettings: ToastOptions = {
  position: toast.POSITION.BOTTOM_CENTER,
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
  className: 'custom_toast',
};

const toastContainerSettings: ToastContainerProps = {
  position: toast.POSITION.BOTTOM_CENTER,
  autoClose: 5000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
  theme: 'dark',
};

export { toastSettings, toastContainerSettings };
