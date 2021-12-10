// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2gvxplamB3t5vMR_PVGvjt0pl3lxt5n4",
  authDomain: "pearls-beauty-make-up.firebaseapp.com",
  projectId: "pearls-beauty-make-up",
  storageBucket: "pearls-beauty-make-up.appspot.com",
  messagingSenderId: "848856425878",
  appId: "1:848856425878:web:c9f90488d4f7e330c729b7",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

document.getElementById('contactForm').addEventListener('submit',submitForm);

//submit Form
function submitForm(e){
    e.preventDefault();

    //Get values
    var name = getInputVal('name');
    var surname = getInputVal('surname');
    var emailAddress = getIputVal('emailAddress');
    var phoneNumber = getInput('phoneNumber');


    //save message
    savemessage(name, surname, emailAddress, phonenumber, message);

    //show alert
    document.querySelector('.alert').style.display = 'block';

    //hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);
    
    //clear form
    document.getElementById('contact form').reset();


    //function to get from values
    function getinputVal(id){
        return document.getElementById(id).nodeValue;
    }
    
    //save message to firebase
    function saveMessage(name, surname, emailAddress , phoneNumber , message){
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
            name: name,
            surname: surname,
            emailAddress: emailAddress,
            phoneNumber: phoneNumber,
            message: message
        })
    }        