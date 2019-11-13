import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const onTextCreate = functions.database
  .ref('users/{userId}/text')
  .onCreate((snapshot, context) => {
    const textData = snapshot.val();
  });
