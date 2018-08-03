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
  clientID: '1c333c58-91d0-4efc-b6b1-4a87595399e3',
  clientSecret: '/6qR1VMNlvdfZtsyyrAci74v5K+aKC9WaR98Gmi5gI8=',
  identityMetadata: 'https://login.microsoftonline.com/ba3f5887-37f9-46a8-8273-dd0d2cb7789f/v2.0/.well-known/openid-configuration',
  allowHttpForRedirectUrl: true, // For development only
  responseType: 'code',
  validateIssuer: false, // For development only
  responseMode: 'query',
  scope: ['User.Read', 'Mail.Send', 'Files.ReadWrite','Sites.FullControl.All','Calendars.ReadWrite.Shared','Calendars.Read','Calendars.Read.Shared']

};
module.exports = config;
