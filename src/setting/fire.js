import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAM2vshz53Cwnnxh4qHea-XbYTy1r2m1LI",
    authDomain: "runeterra-cab75.firebaseapp.com",
    databaseURL: "https://runeterra-cab75.firebaseio.com",
    projectId: "runeterra-cab75",
    storageBucket: "runeterra-cab75.appspot.com",
    messagingSenderId: "65211931143",
    appId: "1:65211931143:web:c36127a0995919fbd9a8a2",
    measurementId: "G-RCXLBCY284"
  };

  const fire = firebase.initializeApp(firebaseConfig)

  export default fire