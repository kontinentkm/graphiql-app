import { ReactNode, useEffect, useState } from 'react';
import CustomButton from '@src/UI/CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';
import { auth } from '@src/firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import LoadingSpinner from '@src/UI/LoadingSpinner/LoadingSpinner';
import { ILoginInputs } from '@src/types/interfaces/ILoginInputs';
import { FirebaseError } from 'firebase/app';
import localizationStrings from '@src/constants/localizationStrings';
import { selectLocalization } from '@src/store/LocalizationSlice/LocalizationSlice';
import { Localization } from '@src/types/types';
import { useSelector } from 'react-redux';

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
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    trigger,
  } = useForm<ILoginInputs>({ resolver: yupResolver(schema), mode: 'onBlur' });

  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const lang: Localization = useSelector(selectLocalization);

  useEffect(() => {
    trigger();
  }, [setValue, trigger, register]);

  const signIn = async (data: ILoginInputs) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
    } catch (error) {
      setErrorMessage('Check your credentials');
      console.error(`error:`, (error as FirebaseError)?.message);
    }
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex bg-green-400 justify-center items-center h-screen mx-auto p-5 rounded">
      {loading && <LoadingSpinner />}
      {!user ? (
        <div className="w-96">
          <h2 className="text-3xl font-semibold text-center mb-4">
            {localizationStrings[lang].login[0]}
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit(signIn)}>
            <div id="email" className="mb-8">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-indigo-600 mb-2"
              >
                {localizationStrings[lang].login[1]}
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
            <div id="password" className="mb-8">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-indigo-600 mb-2"
              >
                {localizationStrings[lang].login[2]}
              </label>
              <input
                type="password"
                placeholder="Enter your password"
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
                label={localizationStrings[lang].login[3]}
                type="submit"
                disabled={!isValid}
              />
            </div>
          </form>
          {errorMessage && <div className="text-red-800">{errorMessage}</div>}
          <div className="flex flex-col gap-4 text-center mt-4">
            {localizationStrings[lang].login[4]}
            <CustomButton
              label={localizationStrings[lang].login[5]}
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
