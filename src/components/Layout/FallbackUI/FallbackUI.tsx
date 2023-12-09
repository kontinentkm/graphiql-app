import { FC } from 'react';
import { useLocation, useNavigate, useRouteError } from 'react-router-dom';

const FALLBACK_MESSAGE = 'Error occurs!';
const UNKNOWN_ERROR_MESSAGE = 'Unknown error';
const BTN_TEXT = 'Reload';

const FallbackUI: FC = (): JSX.Element => {
  const error = useRouteError();
  const location = useLocation();
  const navigate = useNavigate();
  let message: string;

  if (error instanceof Error) {
    message = error.message || UNKNOWN_ERROR_MESSAGE;
  } else {
    message = UNKNOWN_ERROR_MESSAGE;
  }

  const onBtnClick = (): void => navigate(location.pathname);

  return (
    <div>
      <p>{FALLBACK_MESSAGE}</p>
      <p>{message}</p>
      <button type="button" onClick={onBtnClick}>
        {BTN_TEXT}
      </button>
    </div>
  );
};

export default FallbackUI;
