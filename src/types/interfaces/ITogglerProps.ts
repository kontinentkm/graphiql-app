interface ITogglerProps {
  on: string;
  off: string;
  callback: (value: ITogglerProps['on'] | ITogglerProps['off']) => void;
}

export default ITogglerProps;
