var config = {}
config.endpoint = "";
config.primaryKey = "";
config.database = {
  "id":"f0rmdb"
};
config.collection = {
  "id":"Collection1"
};
config.creds= {
  redirectUrl: 'https://web4token.azurewebsites.net/token',
  clientID: 'ade6f96f-968f-4c4a-8897-75b93e62f59a',
  clientSecret: '7fNQMNAjvO3B7lQl90TZiuxH5gKoAANDAxxFGWcIVv8=',
  identityMetadata: 'https://login.microsoftonline.com/ba3f5887-37f9-46a8-8273-dd0d2cb7789f/v2.0/.well-known/openid-configuration',
  allowHttpForRedirectUrl: true, // For development only
  responseType: 'code',
  validateIssuer: false, // For development only
  responseMode: 'query',
  scope: ['User.Read', 'Mail.Send', 'Files.ReadWrite','Sites.FullControl.All','Calendars.ReadWrite.Shared','Calendars.Read','Calendars.Read.Shared']

};
module.exports = config;
