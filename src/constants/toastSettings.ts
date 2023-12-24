import { ToastOptions, toast } from 'react-toastify';

const toastSettings: ToastOptions = {
  position: toast.POSITION.BOTTOM_CENTER,
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
};

export default toastSettings;
