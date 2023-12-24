import { useState } from 'react';
import { FunctionComponent as FC } from 'react';
import { useSelector } from 'react-redux';

import '@src/components/Edit/Edit.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

import 'codemirror/mode/css/css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import { UnControlled as CodeMirror } from 'react-codemirror2';

import IEditProps from '@src/types/interfaces/IEditProps';
import { Localization } from '@src/types/types';

import { selectLocalization } from '@src/store/LocalizationSlice/LocalizationSlice';

import localizationStrings from '@src/constants/localizationStrings';

const Edit: FC<IEditProps> = ({
  queryValue,
  resultsValue,
  onQueryChange,
}): JSX.Element => {
  const lang: Localization = useSelector(selectLocalization);

  const [showQuery, setShowQuery] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [activeButton, setActiveButton] = useState('query');

  const handleBtnQueryClick = (): void => {
    setActiveButton('query');
    setShowQuery(true);
    setShowResults(false);
  };

  const handleBtnResultsClick = (): void => {
    setActiveButton('results');
    setShowQuery(false);
    setShowResults(true);
  };

  const handleQueryChange = (
    editor: CodeMirror.Editor,
    data: CodeMirror.EditorChange,
    value: string
  ): void => onQueryChange(value);

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
          onChange={handleQueryChange}
          value={queryValue}
          options={{
            mode: 'xml',
            theme: 'material',
            lineNumbers: true,
          }}
        />
      )}
      {showResults && <div className="edit_block_results">{resultsValue}</div>}
    </div>
  );
};

export default Edit;
