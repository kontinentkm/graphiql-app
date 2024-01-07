interface ITogglerProps {
  on: string;
  off: string;
  initialState: ITogglerProps['on'] | ITogglerProps['off'];
  callback: (value: ITogglerProps['on'] | ITogglerProps['off']) => void;
}

export default ITogglerProps;
