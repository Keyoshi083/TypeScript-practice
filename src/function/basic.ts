//アロー関数
export const logMessage = (message: string): void => {
  console.log("Function basic sample 1 : ", message);
};

//名前付き関数
export function logMessage3(message: string): void {
  console.log("Function basic sample 2 : ", message);
}

export const alwaysThrowError = (message: string): never => {
  throw new Error(message);
};
