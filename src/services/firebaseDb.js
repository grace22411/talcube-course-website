import firebase from '@firebase/app';
import '@firebase/firestore';

const config = {
  apiKey: 'AIzaSyAFUR7r2OJY8IAkcOe_T4w_2doIpeeFLUo',
  projectId: 'talcube-8fef4',
};

firebase.initializeApp(config);

const firebaseDb = firebase.firestore();

export default firebaseDb
