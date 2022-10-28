/**
 * Function to log errors to console
 * @param route String
 * @param error Error
 * @param method String
 */
export const logError = (route: string, error: Error, method: string) => {
  console.log(`Error in ${method} ${route} - `, error);
};
