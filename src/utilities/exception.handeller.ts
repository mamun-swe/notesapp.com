import { ToasterMessage } from 'src/components/toaster';

interface ErrorData {
  [key: string]: string[];
}

interface ErrorResponse {
  response?: {
    data?: {
      errors?: ErrorData;
    };
  };
}

export const ExceptionHandeller = (error: ErrorResponse): void => {
  if (
    error &&
    error.response &&
    error.response.data &&
    error.response.data.errors
  ) {
    const obj = error.response.data.errors;

    // Show errors in toaster message
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (obj[key].length) {
          console.log(obj[key][0]);

          return ToasterMessage.Error({ message: obj[key][0] });
        }
      }
    }
  } else {
    return ToasterMessage.Error({ message: 'Something went wrong' });
  }
};
