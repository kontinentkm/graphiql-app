import { FC } from 'react';

// for testing
import { useAppDispatch } from '@src/hooks/reduxHooks';
import { useSelector } from 'react-redux';
import {
  authorize,
  selectAuthorization,
} from '@src/store/AuthorizationSlice/AuthorizationSlice';
//_________________________

const Main: FC = (): JSX.Element => {
  // for testing
  const dispatch = useAppDispatch();
  const authorized = useSelector(selectAuthorization);
  const unauthorizeBTNClick = () => dispatch(authorize(false));
  console.log(`Authorized - ${authorized}`);
  //________________________

  return (
    <div>
      <p>Main Page</p>

      {/*for testing */}
      <button type="button" onClick={unauthorizeBTNClick}>
        Unauthorize
      </button>
      {/*__________________ */}
    </div>
  );
};

export default Main;
