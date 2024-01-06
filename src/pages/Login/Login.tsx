import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { auth, login, logout } from '@src/firebase';

import CustomButton from '@src/UI/CustomButton/CustomButton';
import LoadingSpinner from '@src/UI/LoadingSpinner/LoadingSpinner';

import { ILoginInputs } from '@src/types/interfaces/ILoginInputs';
import localizationStrings from '@src/constants/localizationStrings';
import { useSelector } from 'react-redux';
import { toastMessages } from '@src/constants/localizationStrings';
import { Localization } from '@src/types/types';

import toastFuncWrapper from '@src/utils/ToastFuncWrapper';
import { selectLocalization } from '@src/store/LocalizationSlice/LocalizationSlice';

interface ILoginProps {
  children?: ReactNode;
}

const schema = yup.object({
  email: yup
    .string()
    .required(
      `${
        localStorage.getItem('lang') === 'en'
          ? 'Your email is required'
          : 'Введите email'
      }`
    ),
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

const Login: React.FC<ILoginProps> = () => {
  const lang: Localization = useSelector(selectLocalization);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    trigger,
  } = useForm<ILoginInputs>({ resolver: yupResolver(schema), mode: 'onBlur' });

  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    trigger();
  }, [setValue, trigger, register]);

  const signIn = async (data: ILoginInputs) => {
    toastFuncWrapper(
      login,
      toastMessages[lang].loading_msg,
      toastMessages[lang].login_success_msg,
      lang,
      data.email,
      data.password
    );
  };

  const signOutUser = async () => {
    toastFuncWrapper(
      logout,
      toastMessages[lang].loading_msg,
      toastMessages[lang].logout_success_msg,
      lang
    );
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex justify-center items-center mt-20 mx-auto rounded">
      {loading && <LoadingSpinner />}
      {!user ? (
        <div className="w-96">
          <h2 className="text-4xl font-semibold text-center mb-4">
            {localizationStrings[lang]?.login?.[0] || 'Enter your credentials'}
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit(signIn)}>
            <label
              htmlFor="email"
              className="block text-3xl font-medium text-indigo-600 mb-2"
            >
              {localizationStrings[lang]?.login?.[1] || 'Email'}
            </label>
            <input
              type="email"
              placeholder={
                localizationStrings[lang]?.login?.[2] || 'Enter your email'
              }
              required
              {...register('email')}
              id="email"
              className="mt-1 p-2 w-full text-2xl border rounded-md focus:outline-none focus:border-blue-500 text-indigo-600"
            />
            <p className="font-bold text-xl mt-1 text-red-600">
              {errors.email?.message}
            </p>
            <label
              htmlFor="password"
              className="block text-3xl font-medium text-indigo-600 mb-2"
            >
              {localizationStrings[lang]?.login?.[3] || 'Password'}
            </label>
            <input
              type="password"
              placeholder={
                localizationStrings[lang]?.login?.[4] || 'Enter your password'
              }
              required
              {...register('password')}
              id="password"
              className="mt-1 p-2 w-full text-2xl border rounded-md focus:outline-none focus:border-blue-500 text-indigo-600"
            />
            <p className="font-bold text-xl mt-1 text-red-600">
              {errors.password?.message}
            </p>
            <div className="flex justify-center">
              <CustomButton
                label={localizationStrings[lang]?.login?.[5] || 'Login'}
                type="submit"
                disabled={!isValid}
              />
            </div>
          </form>
          <div className="flex flex-col gap-4 text-center mt-4 text-2xl">
            {localizationStrings[lang]?.login?.[6] || 'Don`t have an account?'}
            <CustomButton
              label={localizationStrings[lang]?.login?.[7] || 'Create account'}
              onClick={() => {
                navigate('/register');
              }}
              type="button"
            />
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-3xl font-semibold">Hello, {user.email}</h2>
          <CustomButton label="Log out" onClick={signOutUser} type="button" />
        </div>
      )}
    </div>
  );
};

export default Login;
