import CustomButton from '@src/UI/CustomButton/CustomButton';
import { ReactNode, useState, useEffect } from 'react';
import { registerWithEmailAndPassword, auth } from '@src/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { IRegisterInputs } from '@src/types/interfaces/IRegisterInputs';
import LoadingSpinner from '@src/UI/LoadingSpinner/LoadingSpinner';
import { selectLocalization } from '@src/store/LocalizationSlice/LocalizationSlice';
import { useSelector } from 'react-redux';
import { Localization } from '@src/types/types';
import toastFuncWrapper from '@src/utils/ToastFuncWrapper';
import { toastMessages } from '@src/constants/localizationStrings';

interface IRegisterProps {
  children?: ReactNode;
}

const schema = yup.object({
  name: yup.string().required('Your name is required'),
  email: yup.string().required('Your email is required'),
  password: yup
    .string()
    .min(8)
    .max(32)
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z\d]).{8,}$/,
      'Password must contain at least one number, one uppercase letter, one lowercase letter, and one special character'
    )
    .required('Password is required'),
});

const Register: React.FC<IRegisterProps> = () => {
  const lang: Localization = useSelector(selectLocalization);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    trigger,
  } = useForm<IRegisterInputs>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const [user, loading] = useAuthState(auth);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    trigger();
    setErrorMessage(null);
  }, [setValue, trigger, errorMessage]);

  const createAccount = async (data: IRegisterInputs) => {
    toastFuncWrapper(
      registerWithEmailAndPassword,
      toastMessages[lang].loading_msg,
      toastMessages[lang].registration_success_msg,
      lang,
      data.name,
      data.email,
      data.password
    );
  };

  return (
    <>
      <div className="flex bg-green-400 justify-center items-center h-screen mx-auto p-5 rounded">
        {loading && <LoadingSpinner />}
        {!user ? (
          <>
            <div className="flex flex-col w-96">
              <h2 className="text-3xl font-semibold text-center mb-4">
                Create your account
              </h2>
              <form className="space-y-4">
                <div id="name">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-indigo-600 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="name"
                    placeholder="Enter your name"
                    required
                    {...register('name')}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500 text-indigo-600"
                  />
                  <p className="text-black font-bold text-sm mt-1">
                    {errors.name?.message}
                  </p>
                </div>
                <div id="email">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-indigo-600 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    {...register('email')}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500 text-indigo-600"
                  />
                  <p className="text-black font-bold text-sm mt-1">
                    {errors.email?.message}
                  </p>
                </div>
                <div id="password">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-indigo-600 mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter you password"
                    required
                    {...register('password')}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500 text-indigo-600"
                  />
                  <p className="text-black font-bold text-sm mt-1">
                    {errors.password?.message}
                  </p>
                </div>
                <div className="flex justify-center">
                  <CustomButton
                    label="Create account"
                    onClick={handleSubmit(createAccount)}
                    type="submit"
                    disabled={!isValid}
                  />
                </div>
              </form>
              {errorMessage && (
                <div className="text-red-800">{errorMessage}</div>
              )}
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2>You have successfully logged in as {user.email}</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default Register;
