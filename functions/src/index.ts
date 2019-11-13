import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const onTextCreate = functions.database
  .ref('users/{userId}/texts/{textId}')
  .onCreate((snapshot, context) => {
    const textData = snapshot.val();
    const reversedText: string = reverseString(
      textData.content
    );
  });

function reverseString(str: string): string {
  return str
    .split('')
    .reverse()
    .join('');
}
