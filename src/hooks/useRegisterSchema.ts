import { ObjectSchema } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { UseFormReturn, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { IRegisterInputs } from '@src/types/interfaces/IRegisterInputs';
import { Localization } from '@src/types/types';

import { getLoginSchema } from '@src/hooks/useLoginSchema';

import { registerMessages } from '@src/constants/localizationStrings';

const getRegisterSchema = (lang: Localization): ObjectSchema<IRegisterInputs> =>
  yup
    .object({
      name: yup.string().required(registerMessages[lang].empty_name_msg),
    })
    .concat(getLoginSchema(lang));

export const useRegisterSchema = (
  lang: Localization
): UseFormReturn<IRegisterInputs> => {
  const schema = getRegisterSchema(lang);
  const formValidator = useForm<IRegisterInputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  return formValidator;
};

export default useRegisterSchema;
