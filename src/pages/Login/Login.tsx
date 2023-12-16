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
import { setStorageItem } from '@src/utils/setStorageItem';
interface ILoginProps {
  children?: ReactNode;
}

const schema = yup.object({
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

  useEffect(() => {
    trigger();
  }, [setValue, trigger]);

  const signIn = async (data: ILoginInputs) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      const userData = data.email;
      setStorageItem('userData', userData);
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
            Enter your credentials
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit(signIn)}>
            <div id="email" className="mb-8">
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
            <div id="password" className="mb-8">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-indigo-600 mb-2"
              >
                Password
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
              <CustomButton label="Login" type="submit" disabled={!isValid} />
            </div>
          </form>
          {errorMessage && <div className="text-red-800">{errorMessage}</div>}
          <div className="flex flex-col gap-4 text-center mt-4">
            Don&apos;t have an account?
            <CustomButton
              label="Create account"
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
