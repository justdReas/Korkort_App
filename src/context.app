exports.yourCallableFunction = functions.https.onCall((data, context) => {
  // context.app will be undefined if the request doesn't include an
  // App Check token. (If the request includes an invalid App Check
  // token, the request will be rejected with HTTP error 401.)
  if (context.app == undefined) {
    throw new functions.https.HttpsError(
        'failed-precondition',
        'The function must be called from an App Check verified app.')
  }

  // Your function logic follows.
});

exports.yourCallableFunction = functions.
  .runWith({
    allowInvalidAppCheckToken: true  // Opt-out: Requests with invalid App
                                     // Check tokens continue to your code.
  })
  .https.onCall((data, context) => {
  
    if (context.app == undefined) {
     
      const rawToken = context.rawRequest.header['X-Firebase-AppCheck'];
      if (rawToken == undefined) {
        throw new functions.https.HttpsError(
            'failed-precondition',
            'The function must be called from an App Check verified app.'
        );
      } else {
        throw new functions.https.HttpsError(
            'unauthenticated',
            'Provided App Check token failed to validate.'
        );
      }
    }

    // Your function logic follows.
  });