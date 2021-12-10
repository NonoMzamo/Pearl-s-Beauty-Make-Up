// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "xxxxxxxxxxx",
  authDomain: "xxxxxxxxx",
  projectId: "xxxxxxxxx",
  storageBucket: "xxxxxxxxx",
  messagingSenderId: "xxxxxxxxxx",
  appId: "xxxxxxxxxxx",
  measurementId: "xxxxxxxxxxx"
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
