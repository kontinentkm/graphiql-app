import { useState } from 'react';
import { FunctionComponent as FC } from 'react';
import IVariablesProps from '@src/types/interfaces/IVariablesProps';
import './Variables.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as CodeMirror } from 'react-codemirror2';
import localizationStrings from '@src/constants/localizationStrings';
import { selectLocalization } from '@src/store/LocalizationSlice/LocalizationSlice';
import { Localization } from '@src/types/types';
import { useSelector } from 'react-redux';

const Variables: FC<IVariablesProps> = ({
  variablesValue,
  headersValue,
  onVariablesChange,
  onHeadersChange,
}): JSX.Element => {
  const lang: Localization = useSelector(selectLocalization);

  const [showVariables, setshowVariables] = useState(true);
  const [showHeaders, setShowHeaders] = useState(false);
  const [activeButton, setActiveButton] = useState('variables');

  const handleBtnVariablesClick = () => {
    setActiveButton('variables');
    setshowVariables(true);
    setShowHeaders(false);
  };

  const handleBtnHeadersClick = () => {
    setActiveButton('headers');
    setshowVariables(false);
    setShowHeaders(true);
  };

  const handleVariablesChange = (
    editor: CodeMirror.Editor,
    data: CodeMirror.EditorChange,
    value: string
  ): void => onVariablesChange(value);

  const handleHeadersChange = (
    editor: CodeMirror.Editor,
    data: CodeMirror.EditorChange,
    value: string
  ): void => onHeadersChange(value);

  return (
    <div className="variables_block">
      <div className="variables_btns">
        <div
          className={`variables_btn variables_btn_query ${
            activeButton === 'variables' ? 'active_btn' : ''
          }`}
          onClick={handleBtnVariablesClick}
        >
          {localizationStrings[lang].variables_btn}
        </div>
        <div
          className={`variables_btn variables_btn_query ${
            activeButton === 'headers' ? 'active_btn' : ''
          }`}
          onClick={handleBtnHeadersClick}
        >
          {localizationStrings[lang].headers_btn}
        </div>
      </div>

      {showVariables && (
        <CodeMirror
          className="variables_pane font_size"
          onBeforeChange={handleVariablesChange}
          value={variablesValue}
          options={{
            mode: 'xml',
            theme: 'material',
            lineNumbers: true,
          }}
        />
      )}
      {showHeaders && (
        <CodeMirror
          className="font_size"
          onBeforeChange={handleHeadersChange}
          value={headersValue}
          options={{
            mode: 'xml',
            theme: 'material',
            lineNumbers: true,
          }}
        />
      )}
    </div>
  );
};

export default Variables;
