function CheckCreds() {
    console.log("CheckCreds() Started");
    var firstname = document.getElementById("fname").value;//variable for the first name
    var lastname = document.getElementById("lname").value//variable for the last name
    var fullname = firstname + " " + lastname //adds first name and last name togeather
    document.getElementById("loginStatus").innerHTML = fullname;//displays the full name in login status
    var BadgeNumber = document.getElementById("badgeID").value;//variable for badge id

    // validate fullname 
    if (fullname.length > 20 || fullname.length < 2) {//will not let user input more than 20 characters or less than 1
        document.getElementById("loginStatus").innerHTML = "Invalid Name , please resubmit"//displays in the login status if there is a problem with user name
    } 
    else if (BadgeNumber > 999 || BadgeNumber < 1) {// will not let user make badge numer more than 999 or less than 1
        document.getElementById("loginStatus").innerHTML = "invalid badge number, please resubmit"//displays in the login status if there is a problem with user bage number
    }
    else {
        console.log("submission passes!")//tells user they have entered the information correctly
        alert("Access granted! Welcome," + fullname);//gives alert to user they have access to UAT Space page
        location.replace("UATSpace.html");//redirects user to UAT Space Page.
    }


}