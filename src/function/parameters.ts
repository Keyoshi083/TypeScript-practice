/**
 *オプションパラメータを持つ関数
 */
export const isUserSignedIn = (userId: string, username?: string): boolean => {
  if (userId === "001") {
    console.log("Function parameters sample 1 : User is Signed In ", username);
    return true;
  } else {
    console.log("Function parameters sample 1 : User is not Signed In ", username);
    return false;
  }
};

/**
 * デフォルトパラメータを持つ関数
 */
export const isUserSignedIn2 = (userId: string, username = "TestUser"): boolean => {
  if (userId === "001") {
    console.log("Function parameters sample 3 : User is Signed In ", username);
    return true;
  } else {
    console.log("Function parameters sample 4 : User is not Signed In ", username);
    return false;
  }
};
