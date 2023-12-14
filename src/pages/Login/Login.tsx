import { ReactNode, useEffect } from 'react';
import CustomButton from '@src/components/CustomButton/CustomButton.tsx';
import { useNavigate } from 'react-router-dom';
import { auth, logInWithEmailAndPassword } from '@src/firebase';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import LoaderSpinner from '@src/components/LoadingSpinner/LoadingSpinner';
import { ILoginInputs } from '@src/types/interfaces/ILoginInputs';

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
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    trigger();
  }, [setValue, trigger]);

  const signIn = async (data: ILoginInputs) => {
    try {
      await logInWithEmailAndPassword(data.email, data.password);
      navigate('/');
    } catch (error) {
      console.error(error);
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
    return <LoaderSpinner />;
  }

  if (error) {
    return <p>Error!</p>;
  }

  return (
    <div className="flex bg-green-400 justify-center items-center h-screen mx-auto p-5 rounded">
      {!user ? (
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-semibold text-center mb-4">
            Enter your credentials
          </h2>
          <form onSubmit={handleSubmit(signIn)} className="space-y-4">
            <div id="email">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                required
                {...register('email')}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500 text-gray-600"
              />
              <p className="text-black font-bold text-sm mt-1">
                {errors.email?.message}
              </p>
            </div>
            <div id="password">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                required
                {...register('password')}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500 text-gray-600"
              />
              <p className="text-black font-bold text-sm mt-1">
                {errors.password?.message}
              </p>
            </div>
            <div className="flex justify-center">
              <CustomButton
                label="Login"
                type="submit"
                onClick={() => signIn}
                disabled={!isValid}
              />
            </div>
          </form>
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
