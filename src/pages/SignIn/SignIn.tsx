import { FC } from 'react';

// for testing
import { useAppDispatch } from '@src/hooks/reduxHooks';
import { authorize } from '@src/store/AuthorizationSlice/AuthorizationSlice';
//_________________________

const SignIn: FC = (): JSX.Element => {
  // for testing
  const dispatch = useAppDispatch();
  const authorizeBTNClick = () => dispatch(authorize(true));
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
