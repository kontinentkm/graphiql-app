interface ILocalizationStrings {
  en: {
    loginBtn: string;
    registerBtn: string;
    signOutBtn: string;
    welcome: string;
    ourTeam: string;
    developers: Developer[];
    project_title: string;
    project_text: string;
    course_title: string;
    course_text: string;
    main: string;
    prettify_btn: string;
    results_btn: string;
    edit_btn: string;
    edit_btn_results: string;
    variables_btn: string;
    headers_btn: string;

    execute_btn: string;
    query: string;
    variables: string;
    headers: string;
    input: string;

    schema_btn: string;
    no_schema_msg: string;
  };
  ru: {
    loginBtn: string;
    registerBtn: string;
    signOutBtn: string;
    welcome: string;
    ourTeam: string;
    developers: Developer[];
    project_title: string;
    project_text: string;
    course_title: string;
    course_text: string;
    main: string;
    prettify_btn: string;
    results_btn: string;
    edit_btn: string;
    edit_btn_results: string;
    variables_btn: string;
    headers_btn: string;

    execute_btn: string;
    query: string;
    variables: string;
    headers: string;
    input: string;

    schema_btn: string;
    no_schema_msg: string;
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
