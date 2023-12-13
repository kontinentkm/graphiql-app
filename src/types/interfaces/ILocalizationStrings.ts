interface ILocalizationStrings {
  en: {
    signInBtn: string;
    signUpBtn: string;
    signOutBtn: string;
    welcome: string;
    ourTeam: string;
    developers: Developer[];
    project: string;
    course: string;

    main: string;
  };
  ru: {
    signInBtn: string;
    signUpBtn: string;
    signOutBtn: string;
    welcome: string;
    ourTeam: string;
    developers: Developer[];
    project: string;
    course: string;

    main: string;
  };
}

interface Developer {
  id: number;
  photo: string;
  name: string;
  position: string;
  github: string;
}

export default ILocalizationStrings;
