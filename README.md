#🔑😲🖤 LOCKOUT-TRACKER a powerful tool to help ease the process of lockouts.

#Inspiration
We at KC used to keep track of lockouts, by hand writing each and everyone, so I though why not automate 
the process and so I built this website that would help track the lockouts.

#What is does
The website helps filter, add and edit the information. Thus providing a much more powerful and time saving tool
then doing it by hand.

#Stack
Backend: Google Firebase
Frontend: React + Javascript
Database: Google Firebase Realtime Database

#Try it for yourself
Create a 'config.js' file in the src directory, and then add the following code:
```
import * as firebase from 'firebase';

const config = {
    apiKey: 'FIREBASE API KEY',
    authDomain: 'FIREBASE AUTH DOMAIN',
    databaseURL: 'FIREBASE DATABASE URL',
    projectId: 'FIREBASE PROJECT ID',
    storageBucket: 'FIREBASE STORAGE BUCKET',
    messagingSenderId: 'FIREBASE MESSAGE SENDER ID',
    appId: 'FIREBASE APP ID'
};

export const app = firebase.initializeApp(config);

```
