import { FunctionComponent as FC } from 'react';
import Editor from './Editor/Editor';
import IEditorsPane from './IEditorsPane';
import '@src/components/EditorsPane/EditorsPane.css';

import localizationStrings from '@src/constants/localizationStrings';
import { selectLocalization } from '@src/store/LocalizationSlice/LocalizationSlice';
import { Localization } from '@src/types/types';
import { useSelector } from 'react-redux';

const EditorsPane: FC<IEditorsPane> = ({
  Query,
  Variables,
  Headers,
  setQuery,
  setVariables,
  setHeaders,
}) => {
  const lang: Localization = useSelector(selectLocalization);
  return (
    <div className="editors_pane">
      <Editor
        lang={localizationStrings[lang].query}
        code={Query}
        setCode={setQuery}
      />
      <Editor
        lang={localizationStrings[lang].variables}
        code={Variables}
        setCode={setVariables}
      />
      <Editor
        lang={localizationStrings[lang].headers}
        code={Headers}
        setCode={setHeaders}
      />
    </div>
  );
};

export default EditorsPane;
