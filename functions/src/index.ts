import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const onTextCreate = functions.database
  .ref('users/{userId}/texts/{textId}')
  .onCreate((snapshot) => {
    const textData = snapshot.val();
    const reversedText = reverseString(textData.content);

    return snapshot.ref.update({
      content: reversedText,
      isPending: false,
    });
  });

function reverseString(str: string): string {
  return Array.from(str).reverse().join('');
}
