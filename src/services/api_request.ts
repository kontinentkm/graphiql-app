// class EditorError extends Error {
//   public err: Error;
//   public location: string;

//   constructor(err: Error, location: string, message?: string) {
//     super(message);
//     this.err = err;
//     this.location = location;
//   }
// }

// class APIError extends Error {
//   public data: object;

//   constructor(data: object, message?: string) {
//     super(message);
//     this.data = data;
//   }
// }

// const errorHandler = (err: Error, callback: (message: string) => void) => {
//   if (err instanceof EditorError) {
//     callback(`Error in ${err.location} \n ${err}`);
//   } else if (err instanceof APIError) {
//     callback(
//       `Error on data fetching \n ${JSON.stringify(err.data, undefined, 2)}`
//     );
//   } else {
//     callback(`Unknown error \n ${err}`);
//   }
// };

// const getData = async () => {
//   let variables_obj;
//   let headers_obj;

//   try {
//     try {
//       const value = variables_element.value;
//       variables_obj = value ? JSON.parse(value) : {};
//     } catch (err) {
//       throw new EditorError(err, 'variables editor');
//     }

//     try {
//       const value = headers_element.value;
//       headers_obj = value ? JSON.parse(value) : {};
//     } catch (err) {
//       throw new EditorError(err, 'headers editor');
//     }

//     const response = await fetch(source_element.value, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         query: editor_element.value,
//         variables: variables_obj,
//       }),
//     });

//     const data = await response.json();

//     if (!response.ok) throw new APIError(data);

//     response_element.value = JSON.stringify(data, undefined, 2);
//   } catch (err) {
//     errorHandler(err);
//   }
// };
