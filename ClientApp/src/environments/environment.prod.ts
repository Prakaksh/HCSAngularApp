// Note : Please configure under angular.json file "configurations" --fileReplacements content
// and   under angular.json  serve --- configurations add for ng ng build --configuration=qa,ci,staging
// etc....please refer angular.json file
export const environment = {
  production: true,
  // Globally add the Api Url here for Prod Env
  apiUrl: 'http://localhost:5001/',
};
