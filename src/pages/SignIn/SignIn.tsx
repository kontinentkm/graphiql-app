import { FC } from 'react';

// for testing
import { useAppDispatch } from '@src/hooks/reduxHooks';
import { useSelector } from 'react-redux';
import {
  authorize,
  selectAuthorization,
} from '@src/store/AuthorizationSlice/AuthorizationSlice';
//_________________________

const SignIn: FC = (): JSX.Element => {
  // for testing
  const dispatch = useAppDispatch();
  const authorized = useSelector(selectAuthorization);
  const authorizeBTNClick = () => dispatch(authorize(true));
  console.log(`Authorized - ${authorized}`);
  //________________________

  return (
    <div>
      <p>SignIn Page</p>

      {/*for testing */}
      <button type="button" onClick={authorizeBTNClick}>
        Authorize
      </button>
      {/*__________________ */}
    </div>
  );
};

export default SignIn;
