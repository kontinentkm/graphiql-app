import { useEffect, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { login } from '@src/firebase';
import { UseFormReturn } from 'react-hook-form';
import { useSelector } from 'react-redux';

import CustomButton from '@src/UI/CustomButton/CustomButton';

import ILoginInputs from '@src/types/interfaces/ILoginInputs';
import ILoginProps from '@src/types/interfaces/ILoginProps';
import { Localization } from '@src/types/types';

import useLoginSchema from '@src/hooks/useLoginSchema';
import toastFuncWrapper from '@src/utils/ToastFuncWrapper';
import { selectLocalization } from '@src/store/LocalizationSlice/LocalizationSlice';

import localizationStrings from '@src/constants/localizationStrings';
import { toastMessages } from '@src/constants/localizationStrings';

const Login: React.FC<ILoginProps> = () => {
  const lang: Localization = useSelector(selectLocalization);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    trigger,
  }: UseFormReturn<ILoginInputs> = useLoginSchema(lang);

  const [messages, setMessages] = useState({
    email: errors.email?.message,
    password: errors.password?.message,
  });

  const navigate: NavigateFunction = useNavigate();

  useEffect((): void => {
    trigger();
    setMessages({
      email: errors.email?.message,
      password: errors.password?.message,
    });
  }, [
    setValue,
    trigger,
    register,
    errors.email?.message,
    errors.password?.message,
    lang,
  ]);

  const signIn = async (data: ILoginInputs): Promise<void> => {
    toastFuncWrapper(
      login,
      toastMessages[lang].loading_msg,
      toastMessages[lang].login_success_msg,
      lang,
      data.email,
      data.password
    );
  };

  return (
    <div className="flex justify-center items-center mt-20 mx-auto rounded">
      <div className="w-96">
        <h2 className="text-4xl font-semibold text-center mb-4">
          {localizationStrings[lang].login[0]}
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit(signIn)}>
          <div id="email" className="mb-8">
            <label
              htmlFor="email"
              className="block text-3xl font-medium text-indigo-600 mb-2"
            >
              {localizationStrings[lang].login[1]}
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              {...register('email')}
              className="mt-1 p-2 w-full text-2xl border rounded-md focus:outline-none focus:border-blue-500 text-indigo-600"
            />
            <p className="font-bold text-xl mt-1 text-red-600">
              {messages.email}
            </p>
          </div>
          <div id="password" className="mb-8">
            <label
              htmlFor="password"
              className="block text-3xl font-medium text-indigo-600 mb-2"
            >
              {localizationStrings[lang].login[2]}
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              {...register('password')}
              className="mt-1 p-2 w-full text-2xl border rounded-md focus:outline-none focus:border-blue-500 text-indigo-600"
            />
            <p className="font-bold text-xl mt-1 text-red-600">
              {messages.password}
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
        <div className="flex flex-col gap-4 text-center mt-4 text-2xl">
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
    </div>
  );
};

export default Login;
