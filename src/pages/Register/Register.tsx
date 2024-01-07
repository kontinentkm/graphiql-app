import { useState, useEffect } from 'react';
import { registerWithEmailAndPassword } from '@src/firebase';
import { UseFormReturn } from 'react-hook-form';
import { useSelector } from 'react-redux';

import CustomButton from '@src/UI/CustomButton/CustomButton';

import { IRegisterInputs } from '@src/types/interfaces/IRegisterInputs';
import { Localization } from '@src/types/types';
import IRegisterProps from '@src/types/interfaces/IRegisterProps';

import { selectLocalization } from '@src/store/LocalizationSlice/LocalizationSlice';
import useRegisterSchema from '@src/hooks/useRegisterSchema';
import toastFuncWrapper from '@src/utils/ToastFuncWrapper';

import localizationStrings from '@src/constants/localizationStrings';
import { toastMessages } from '@src/constants/localizationStrings';

const Register: React.FC<IRegisterProps> = () => {
  const lang: Localization = useSelector(selectLocalization);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    trigger,
  }: UseFormReturn<IRegisterInputs> = useRegisterSchema(lang);

  const [messages, setMessages] = useState({
    email: errors.email?.message,
    password: errors.password?.message,
    name: errors.name?.message,
  });

  useEffect(() => {
    trigger();
    setMessages({
      email: errors.email?.message,
      password: errors.password?.message,
      name: errors.name?.message,
    });
  }, [
    setValue,
    trigger,
    errors.email?.message,
    errors.password?.message,
    errors.name?.message,
    lang,
  ]);

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
    <div className="flex justify-center items-center mt-20 mx-auto p-5 rounded">
      <div className="flex flex-col w-96">
        <h2 className="text-4xl font-semibold text-center mb-4">
          {localizationStrings[lang].register[0]}
        </h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-3xl font-medium text-indigo-600 mb-2"
            >
              {localizationStrings[lang].register[1]}
            </label>
            <input
              type="name"
              placeholder={localizationStrings[lang].register[2]}
              required
              {...register('name')}
              id="name"
              className="mt-1 p-2 text-2xl w-full border rounded-md focus:outline-none focus:border-blue-500 text-indigo-600"
            />
            <p className="font-bold text-xl mt-1 text-red-600">
              {messages.name}
            </p>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-3xl font-medium text-indigo-600 mb-2"
            >
              {localizationStrings[lang].register[3]}
            </label>
            <input
              type="email"
              placeholder={localizationStrings[lang].register[4]}
              required
              {...register('email')}
              id="email"
              className="mt-1 p-2 text-2xl w-full border rounded-md focus:outline-none focus:border-blue-500 text-indigo-600"
            />
            <p className="font-bold text-xl mt-1 text-red-600">
              {messages.email}
            </p>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-3xl font-medium text-indigo-600 mb-2"
            >
              {localizationStrings[lang].register[5]}
            </label>
            <input
              type="password"
              placeholder={localizationStrings[lang].register[6]}
              required
              {...register('password')}
              id="password"
              className="mt-1 p-2 text-2xl w-full border rounded-md focus:outline-none focus:border-blue-500 text-indigo-600"
            />
            <p className="font-bold text-xl mt-1 text-red-600">
              {messages.password}
            </p>
          </div>
          <div className="flex justify-center">
            <CustomButton
              label={localizationStrings[lang].register[7]}
              onClick={handleSubmit(createAccount)}
              type="submit"
              disabled={!isValid}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
