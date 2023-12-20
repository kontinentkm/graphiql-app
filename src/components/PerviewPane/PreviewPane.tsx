import { FunctionComponent as FC } from 'react';

import IPreviewPage from './IPreviewPage';

import './PreviewPage.css';

const PreviewPane: FC<IPreviewPage> = ({ Query, Variables, Headers }) => {
  const code = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <title>Document</title>
    <style>
    body {
      font-size: 14px;
      font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.87);
    }
  </style>
  </head>
  <body>
    ${Query} ${Variables} ${Headers}
  </body>
  </html>
  `;

  return (
    <div className="PreviewPane_container">
      <iframe srcDoc={code} />
    </div>
  );
};

export default PreviewPane;
