var arrImgUrls= [];
    console.log("test");
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyD-9tEzl7wjVSJiMnZPMrcyse3aVv-8KMQ",
        authDomain: "rebay-for-now.firebaseapp.com",
        databaseURL: "https://rebay-for-now.firebaseio.com",
        projectId: "rebay-for-now",
        storageBucket: "rebay-for-now.appspot.com",
        messagingSenderId: "235921736126"
    };
    firebase.initializeApp(config);

    //ref
    const dbRefObject = firebase.database().ref();
    const dbRefList = dbRefObject.child('product');

    var bnamearray = [];
    var offerarray = [];
    var pnamearray = [];
    var pdesarray = [];
    var categoryarray = [];

    var i = 0;
    dbRefList.on('value', snap => {
        snap.forEach(function(baby) {
        console.log(baby.val().bName);
        bnamearray[i] = baby.val().bName;
        offerarray[i] = baby.val().bOffer;
        pnamearray[i] = baby.val().productName;
        pdesarray[i] = baby.val().productDescription;
        categoryarray[i] = baby.val().productCategory;
        i = i + 1;
    });
    });
          
        