import { useState } from 'react';
import { FunctionComponent as FC } from 'react';
import IEdit from './IEdit';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import './Edit.css';
import localizationStrings from '@src/constants/localizationStrings';
import { selectLocalization } from '@src/store/LocalizationSlice/LocalizationSlice';
import { Localization } from '@src/types/types';
import { useSelector } from 'react-redux';

const Edit: FC<IEdit> = ({}) => {
  const lang: Localization = useSelector(selectLocalization);

  const [queryValue, setQueryValue] = useState('');
  const [showQuery, setshowQuery] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [activeButton, setActiveButton] = useState('query');

  const handleBtnQueryClick = () => {
    setActiveButton('query');
    setshowQuery(true);
    setShowResults(false);
  };

  const handleBtnResultsClick = () => {
    setActiveButton('results');
    setshowQuery(false);
    setShowResults(true);
  };

  return (
    <div className="edit_blocks">
      <div className="edit_btns">
        <div
          className={`edit_btn edit_btn_query ${
            activeButton === 'query' ? 'active_btn' : ''
          }`}
          onClick={handleBtnQueryClick}
        >
          {localizationStrings[lang].edit_btn}
        </div>
        <div
          className={`edit_btn edit_btn_results ${
            activeButton === 'results' ? 'active_btn' : ''
          }`}
          onClick={handleBtnResultsClick}
        >
          {localizationStrings[lang].edit_btn_results}
        </div>
      </div>

      {showQuery && (
        <CodeMirror
          onChange={(editor, data, value) => setQueryValue(value)}
          value={queryValue}
          options={{
            mode: 'xml',
            theme: 'material',
            lineNumbers: true,
          }}
        />
      )}
      {showResults && (
        <div className="edit_block_results">Загрузка данных...</div>
      )}
    </div>
  );
};

export default Edit;
