const admin = require('firebase-admin');

// firebase service account pk
const type = "service_account";
const project_id = "coursonw3377";
const private_key_id = "aa441e7e3e3bf8e391d38454b722ebd85f835ba3";
const private_key = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCyYktNgG4f3uSb\nJvemZFkGzSuNpF0OY+gS2UWtz/8DCaVfuolJRWgRwlNJsd11w8VmDQQVl+4+ZSwT\n1gC31aodCPZKs1ygFcWS0n8JBdQTdWvbOcM2W5A6fge74+cfAQJKd2zt+bsLYlOu\nRhnVXMMBvGbXul0uW7mRSyQcOW3khp81tE4/wN8R777+iOZR7rHo4TlbPjELGAtD\n0E3MFEuypx9NgAOw9SqJ4uHlUr+fv40Rh9xyrD+28E2iFNfM44y6h/QL2Jo2ouKb\nK+r4bbl7XfcAg3by6PGzHtm/OxzmiyYfkEqkIJ538+FkD3rGfPYYHqbCO+/aUPdD\nQGLaHXBdAgMBAAECggEAH+oACOyaRy9sfOma0vUPDG12hk/KqkFriru+gJs+x39Z\nS+gmmapGNS8sEXo14dTVoy1e9rII2LbnDOFznXAnkCxDTBgM0UMz5tGsEqQtThHq\n6vzJlRcKlbxoi8/5UI2wqDv3jBfqw92ilQJLquV+qffX+m6ILzwP1hO4cShBJeo3\nNFgoIRfFWbMiuXk9XPMadLmC66rxWZAd/5uNjVnK6hFjih07WaSP86/9dyl7e7ss\nibxT8oC1ISl7r/9rokmBZBGOSx0U0X+xvQxeVzzLmeDgl5bjQWh6rsVfo1Fls9Q0\naBP3nkBLGvy5tbzsxMse2rsjs7ROjToAHcL451RPQQKBgQDl6wyjVpVeLWnq6zzN\nCkN32w3gUfSlM+QbMOzZCPUEyupcWwfmcaS6ABqxgT3sUr8KCviqVNnKIwiVHTYt\n2H6xgIl2QU8rPdqq01xsAXaKhGX5sv2F1vhb2aUuIydHNuaxjgGG/iHdXg7p3ryX\nfa6kipO5n4SkjsDBtGlRXuWH7QKBgQDGnqnA2SVsjiNZZoGYSEq2iBhOa9NhxyUZ\nt3V0WXYgJ0nhlzWZQ/HjAbzPci/ilGfYRC1M6P37WwlvbmD0G7aha5RfKmwXKnbh\n2UZv+Tu5EeaqQlV5dD2zMENRPyyjKHNCR4iGxXWb7yA66UlQSMlZIecZQ9DP5r7A\nS19Al4KcMQKBgQDcb3lUeUUIYF42n4dRxs9c8KbjNXBrm87NyyCqDY5tI+eC2LxA\nUyDuO/9bxGAMXmFPTamQFX4h8WjfHny9g94kbOpeeMtg2BL4yWDJJLX0pG/o8ZVk\nZvEDjy5xh7625opUHaSVOr5ZMT73N1h1nkh89WghBjH0W/GvRjvbijJjGQKBgGdB\nGJKu0GvMwMe7KGgYPO8DdU9fcraEJt9lpmPkFirFAf2K9ExHLDqNLrDRdd9es1WU\nq9At18uSGieZxEFjHuBv4uROU37/jmn+4EVZ1hhyG+4rKfBH48OBtZ1JMFVps/Gi\n6nDVujxkZeb6XCimjjYOD+vse2N5W3TwOgaEPVwhAoGBANxFbcUAZMsyMtQHNETw\ngAz9v0ePW2Ir5pGykyFDWvkHnsNdPYBB4y2lo1NCRPEXRrw8/GaOWoP7tUkHW/qz\n99DyfbuThmnEN73VaXm1+l/v1UWH+p/DfpnHsTYrOUtVRm2Wf4YJ8frmQEXlsV90\nZiwkTwdb//D2gafV30lEOxVV\n-----END PRIVATE KEY-----\n";
const client_email = "firebase-adminsdk-hw39t@coursonw3377.iam.gserviceaccount.com";
const client_id = "115484257615027187788";
const auth_uri = "https://accounts.google.com/o/oauth2/auth";
const token_uri = "https://oauth2.googleapis.com/token";
const auth_provider_x509_cert_url = "https://www.googleapis.com/oauth2/v1/certs";
const client_x509_cert_url = "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-hw39t%40coursonw3377.iam.gserviceaccount.com";



// credential grants access to Firebase services
admin.initializeApp({ //use part of that package that is admin and initialize our app and we are going to create here a 'credential' as you can see and we are going to pass in all those vairables that we just declared previously above...
  credential: admin.credential.cert({ //it is an object that we are passing into 'admin.credential.cert'
      type,
      project_id,
      private_key_id,
      private_key:
        private_key.replace(/\\n/g,'\n'), //pretty much all of fields are exactly as defined with the exception of the 'private key' where we are removing a lot of the returns as you can see there
      client_email,
      client_id,
      auth_uri,
      token_uri,
      auth_provider_x509_cert_url,
      client_x509_cert_url
  }),
});

module.exports = admin; //now finally once we are done with that admin variable, we will leverage it - we will levereage this package - from our sderver file on the node backend.
// now once we do that, once we import that package, the only things that are left to do is to verify that token
// and you can see in file index.js a **sample verification**