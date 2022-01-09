
// initializing our hashmap
const users = new Map();

class account{
    constructor(firstName, lastName, email, address, city, country){
        this.firstName ="";
        this.lastName="";
        this.name=firstName+ " " + lastName;
        this.email = "";
        this.address = "";
        this.city = "";
        this.country = "";
        this.username = firstName+lastName+users.size;

        this.setFirstName=function(newFirst){this.firstName=newFirst;}
        this.setLastName=function(newLast){this.lastName=newLast;}
        this.setEmail=function(newEmail){this.email=newEmail;}
        this.setAddress=function(newAddress){this.address=newAddress;}
        this.setCity=function(newCity){this.city=newCity;}
        this.setCountry=function(newCountry){this.country=newCountry;}
    }
}



class client extends account {
    constructor(username, age, locationRadius, blurb, term1, term2, term3, preferredSalary, educationLevel, strength1, strength2, strength3) {
        // different attributes related to a client
        this.username = "";
        this.name = firstName + " " + lastName;
        this.age = NaN;
        this.locationRadius = NaN;
        this.blurb = "";
        this.terms = [];
        this.preferredSalary = NaN;
        this.educationLevel = "";
        this.strengths = [];

        this.setUsername = function (newUsername) {
            this.username = newUsername;
        };
        this.setName = function (newfirstName,newLastName) {
            this.name = newfirstName + " " + newLastName;
        };
        this.setAge = function (newAge) {
            this.age = newAge;
        };
        this.setLocationRadius = function (newLocationRadius) {
            this.locationRadius = newLocationRadius;
        };
        this.setBlurb = function (newBlurb) {
            this.blurb = newBlurb;
        };
        this.setTerms = function (newTerms) {
            this.terms = newTerms;
        };
        this.setPreferredSalary = function (newPreferredSalary) {
            this.preferredSalary = newPreferredSalary;
        };
        this.setEducationLevel = function (newEducationLevel) {
            this.educationLevel = newEducationLevel;
        };
        this.setStrengths = function (newStrengths) {
            this.strengths = newStrengths;
        };


    }
}


// adding a new account to our database
function addAccount(){
    var newAccount = new client();
    newAccount.setFirstName(document.getElementById("firstName").value);
    newAccount.setLastName(document.getElementById("lastName").value);
    newAccount.setEmail(document.getElementById("email").value);
    newAccount.setAddress(document.getElementById("address").value);
    newAccount.setCity(document.getElementById("city").value);
    newAccount.setCountry(document.getElementById("country").value);


    // adding the user to our database
    users.set(newAccount.username,newAccount);
}



// adding more information to the client's data
function clientProfileInput(username){
    var newClient = users.get(username.value);
    if (!checkPassword){return false;}


    newClient.setName(document.getElementById("clientName").value);
    newClient.setAge(parseInt(document.getElementById("clientAge").value));
    newClient.setLocationRadius(parseInt(document.getElementById("clientRadius").value));
    newClient.setBlurb(document.getElementById("blurb").value);
    newClient.setTerms([document.getElementById("term1").value,document.getElementById("term2").value,document.getElementById("term3").value]);
    newClient.setPreferredSalary(parseInt(document.getElementById("preferredSalary").value));
    newClient.setEducationLevel(document.getElementById("educationLevel").value);
    newClient.setStrengths([document.getElementById(strength1).value,document.getElementById(strength2).value,document.getElementById(strength3).value]);




}

// adding more information to the company's data

function companyProfileInput(username){
    var newCompany = users.get(username.value);
    if (!checkPassword){return false;}


    newCompany.setLocation(parseInt(document.getElementById("clientLocation").value));
    newCompany.setApplicantStrengths([document.getElementById("term1").value,document.getElementById("term2").value,document.getElementById("term3").value]);
    newCompany.setPreferredSalary(parseInt(document.getElementById("preferredSalary").value));
    newCompany.setEducationLevel(document.getElementById("educationLevel").value);
    newCompany.setCompanyStrengths([document.getElementById(strength1).value,document.getElementById(strength2).value,document.getElementById(strength3).value]);




}




// checks to see if both passwords are the same
function checkPassword(){
    password1 = document.getElementById("password1").value;
    password2 = document.getElementById("password2").value;

    if (password1 != password2){
        alert ("\nPasswords do not match. Pleae re-enter your password.")
        return false
    }
}








class company extends account{
    constructor(username, location, term1, term2, term3, preferredSalary, educationLevel, strength1, strength2, strength3) {
        // different attributes related to a company
        this.username = account.username;
        this.location = NaN;
        this.applicantStrengths = [];
        this.preferredSalary = NaN;
        this.educationLevel = "";
        this.companyStrengths = [];

        this.setUsername = function (newUsername) {
            this.username = newUsername;
        };
        this.setName = function (newName) {
            this.name = newName;
        };
        this.setAge = function (newAge) {
            this.age = newAge;
        };
        this.setLocation = function (newLocation) {
            this.location = newLocation;
        };
        this.setApplicantStrengths = function (newApplicantStrengths) {
            this.applicantStrengths = newApplicantStrengths;
        };
        this.setPreferredSalary = function (newPreferredSalary) {
            this.preferredSalary = newPreferredSalary;
        };
        this.setEducationLevel = function (newEducationLevel) {
            this.educationLevel = newEducationLevel;
        };
        this.setCompanyStrengths = function (newCompanyStrengths) {
            this.companyStrengths = newCompanyStrengths;
        };


    }
}






