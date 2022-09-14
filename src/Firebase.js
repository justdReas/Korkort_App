import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

const messaging = getMessaging();

export const onMessageListener = () => {
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload)
      resolve(payload);
    });
  });
}

export const requestForToken = () => {
  return getToken(messaging, { vapidKey: BODyM83X5CDfeyQWnuEmc5r4uNHDycMF7o3Mk - mR_mTe - VB6SdWwiXZ82QM22cHIDo6iSnjQZtM6PeWXnrWssCk }).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);

    } else {
      console.log('No registration token available. Request permission to generate one.');
    }
  })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
}
// TODO: Replace the following with your app's Firebase project configuration


const index.js = {
  //...
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);