interface ILocalizationStrings {
  en: {
    signInBtn: string;
    signUpBtn: string;
    signOutBtn: string;
    welcome: string;
    ourTeam: string;
    developers: Developer[];
    project_title: string;
    project_text: string;
    course_title: string;
    course_text: string;

    main: string;
  };
  ru: {
    signInBtn: string;
    signUpBtn: string;
    signOutBtn: string;
    welcome: string;
    ourTeam: string;
    developers: Developer[];
    project_title: string;
    project_text: string;
    course_title: string;
    course_text: string;

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
