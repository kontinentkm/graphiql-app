import { yupResolver } from '@hookform/resolvers/yup';
import { ObjectSchema } from 'yup';
import * as yup from 'yup';
import { UseFormReturn, useForm } from 'react-hook-form';

import ILoginInputs from '@src/types/interfaces/ILoginInputs';
import { Localization } from '@src/types/types';

import { loginMessages } from '@src/constants/localizationStrings';

export const getLoginSchema = (
  lang: Localization
): ObjectSchema<ILoginInputs> =>
  yup.object({
    email: yup
      .string()
      .required(loginMessages[lang].email_required_msg)
      .email(loginMessages[lang].email_mismatch_msg),
    password: yup
      .string()
      .required(loginMessages[lang].password_empty_msg)
      .min(8, loginMessages[lang].password_length_msg)
      .max(32, loginMessages[lang].password_length_msg)
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z\d]).{8,}$/,
        loginMessages[lang].password_mismatch_msg
      ),
  });

export const useLoginSchema = (
  lang: Localization
): UseFormReturn<ILoginInputs> => {
  const schema = getLoginSchema(lang);
  const formValidator = useForm<ILoginInputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  return formValidator;
};

export default useLoginSchema;
