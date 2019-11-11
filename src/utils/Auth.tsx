import * as firebase from 'firebase/app';
import 'firebase/auth';
/*
class Auth {
  // username: string = '';

  
}
*/

const githubSignIn = (): Promise<any> => {
  const provider: firebase.auth.GithubAuthProvider = new firebase.auth.GithubAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export default {
  githubSignIn
};
