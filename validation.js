// Global Email Pattern
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateLogin() {
    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;


    if (email === "admin@gmail.com.in" && password === "123") {
        // Redirect to the admin page
        window.location.href = "orders.html"; // admin page URL
        return false; // Prevent form from submitting
    } else if (email === "user@gmail.com.in" && password === "123") {
            // Redirect to the admin page
            window.location.href = "home page.html"; // admin page URL
            return false; // Prevent form from submitting
        }
        
    else{
        if (email === "") {
            document.getElementById('lmail').innerHTML = "Enter Email";
            return false;
        }else{
            document.getElementById('lmail').innerHTML = "";
        }
        if (password === "") {
            document.getElementById('lpassword').innerHTML = "Enter Password"; // Changed to "Enter Password"
            return false;
        }else{
            document.getElementById('lpassword').innerHTML = "";
        }

        // Simple email validation
        if (!emailPattern.test(email)) {
            document.getElementById('lmail').innerHTML = "Enter in correct format";
            return false;
        }else{
            document.getElementById('lmail').innerHTML = "";
        }

        if (password.length < 6) {
            document.getElementById('lpassword').innerHTML = "Password must be 6 characters long."; // Changed to "Enter Password"
            return false;
        }else{
            document.getElementById('lpassword').innerHTML = "";
        }
        return true; // Valid input
    }
}


function validateRegister() {
    let name = document.getElementById('registerName').value;
    let email = document.getElementById('registerEmail').value;
    let password = document.getElementById('registerPassword').value;
    let cpassword = document.getElementById('confirmPassword').value;

    if (name === "") {
        document.getElementById('rname').innerHTML = "Enter Name";
        return false;
    }else{
        document.getElementById('rname').innerHTML = "";
    }
    if (email === "") {
        document.getElementById('remail').innerHTML = "Enter Email";
        return false;
    }else{
        document.getElementById('remail').innerHTML = "";
    }
    if ( password === "") {
        document.getElementById('rpass').innerHTML = "Enter Password";
        return false;
    }else{
        document.getElementById('rpass').innerHTML = "";
    }
    if (cpassword === "") {
        document.getElementById('rcpass').innerHTML = "Enter Confirm Password";
        return false;
    }else{
        document.getElementById('rcpass').innerHTML = "";
    }

    // Simple email validation
    if (!emailPattern.test(email)) {
        document.getElementById('remail').innerHTML = "Enter Email in correct format";
        return false;
    }else{
        document.getElementById('remail').innerHTML = "";
    }

    if (password.length < 6) {
        document.getElementById('rpass').innerHTML = "Password must be 6 characters long";
        return false;
    }else{
        document.getElementById('rpass').innerHTML = "";
    }

    if (password !== cpassword) {
        document.getElementById('rcpass').innerHTML = "Passwords don't match";
        return false;
    }else{
        document.getElementById('rcpass').innerHTML = "";
    }

    return true; // Valid input
}

// Contact Us Validation
function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name === "") {
        document.getElementById('cname').innerHTML = "Enter Name";
        return false;
    }else{
        document.getElementById('cname').innerHTML = "";
    }
    if (email === "") {
        document.getElementById('cemail').innerHTML = "Enter Email";
        return false;
    }else{
        document.getElementById('cemail').innerHTML = "";
    }
    if ( message === "") {
        document.getElementById('msg').innerHTML = "Enter Message";
        return false;
    }else{
        document.getElementById('msg').innerHTML = "";
    }

    if (!/^[a-zA-Z\s]+$/.test(name)) {
        document.getElementById('cname').innerHTML = "Name must only contain characters";
        return false;
    }else{
        document.getElementById('cname').innerHTML = "";
    }

    // Email validation
    if (!emailPattern.test(email)) {
        document.getElementById('cemail').innerHTML = "Enter Emailin correct format";
        return false;
    }else{
        document.getElementById('cemail').innerHTML = "";
    }

    // Message validation
    if (message.length < 10) {
        document.getElementById('msg').innerHTML = "Message should atleast of 10 characters";
        return false;
    }else{
        document.getElementById('msg').innerHTML = "";
    }

    return true; // All validations passed
}

// Add Dish Validation
function add() {
    let name = document.getElementById('dishName').value;
    let description = document.getElementById('dishDescription').value;
    let ingredients = document.getElementById('dishIngredients1').value;
    let serving = document.getElementById('dishServings').value;
    let price = document.getElementById('dishPrice').value;

    if (name ==="") {
        document.getElementById('aname').innerHTML = "Enter Dish Name";
        return false;
    }else{
        document.getElementById('aname').innerHTML = "";
    }
    if (description==="") {
        document.getElementById('adescription').innerHTML = "Enter Dish Description";
        return false;
    }else{
        document.getElementById('adescription').innerHTML = "";
    }
    if (ingredients==="") {
        document.getElementById('aingredients').innerHTML = "Enter Dish Ingredients";
        return false;
    }else{
        document.getElementById('aingredients').innerHTML = "";
    }
    if (price==="") {
        document.getElementById('aprice').innerHTML = "Enter Dish Price";
        return false;
    }else{
        document.getElementById('aprice').innerHTML = "";
    }
    if (serving==="") {
        document.getElementById('aserving').innerHTML = "Enter Servings";
        return false;
    }else{
        document.getElementById('aserving').innerHTML = "";
    }

    if (description.length < 10) {
        document.getElementById('adescription').innerHTML = "Dish Description should have atleasr 10 characters";
        return false;
    }else{
        document.getElementById('adescription').innerHTML = "";
    }
    if(isNaN(serving))
        {
            document.getElementById('aserving').innerHTML = "Serving should be in numbers only";
            return false;
        }else{
            document.getElementById('aserving').innerHTML = "";
        }
    if(isNaN(price))
    {
        document.getElementById('aprice').innerHTML = "Price should be in numbers only";
        return false;
    }else{
        document.getElementById('aprice').innerHTML = "";
    }
    return true;
}

function update1(event)
{
    event.preventDefault();  // Prevent the form from submitting

    let name=document.getElementById('dish1Name').value;
    let description=document.getElementById('dish1Description').value;
    let ingredients=document.getElementById('dish1Ingredients').value;
    let serving=document.getElementById('dish1Servings').value;
    let price=document.getElementById('dish1Price').value;

    if (name ==="") {
        document.getElementById('dname1').innerHTML = "Enter Dish Name";
        return false;
    }else{
        document.getElementById('dname1').innerHTML = "";
    }
    if (description==="") {
        document.getElementById('ddescription1').innerHTML = "Enter Dish Description";
        return false;
    }else{
        document.getElementById('ddescription1').innerHTML = "";
    }
    if (ingredients==="") {
        document.getElementById('dingredients1').innerHTML = "Enter Dish Ingredients";
        return false;
    }else{
        document.getElementById('dingredients1').innerHTML = "";
    }
    if (price==="") {
        document.getElementById('dprice1').innerHTML = "Enter Dish Price";
        return false;
    }else{
        document.getElementById('dprice1').innerHTML = "";
    }
    if (serving==="") {
        document.getElementById('dserving1').innerHTML = "Enter Servings";
        return false;
    }else{
        document.getElementById('dserving1').innerHTML = "";
    }

    if (description.length < 10) {
        document.getElementById('ddescription1').innerHTML = "Dish Description should have atleasr 10 characters";
        return false;
    }else{
        document.getElementById('ddescription1').innerHTML = "";
    }
    if(isNaN(serving))
        {
            document.getElementById('dserving1').innerHTML = "Serving should be in numbers only";
            return false;
        }else{
            document.getElementById('dserving1').innerHTML = "";
        }
    if(isNaN(price))
    {
        document.getElementById('dprice1').innerHTML = "Price should be in numbers only";
        return false;
    }else{
        document.getElementById('dprice1').innerHTML = "";
    }
    return true;

}

function update2(event)
{
    event.preventDefault();  // Prevent the form from submitting

    let name=document.getElementById('dish2Name').value;
    let description=document.getElementById('dish2Description').value;
    let ingredients=document.getElementById('dish2Ingredients').value;
    let serving=document.getElementById('dish2Servings').value;
    let price=document.getElementById('dish2Price').value;

    if (name ==="") {
        document.getElementById('dname2').innerHTML = "Enter Dish Name";
        return false;
    }
    if (description==="") {
        document.getElementById('ddescription2').innerHTML = "Enter Dish Description";
        return false;
    }
    if (ingredients==="") {
        document.getElementById('dingredients2').innerHTML = "Enter Dish Ingredients";
        return false;
    }
    if (price==="") {
        document.getElementById('dprice2').innerHTML = "Enter Dish Price";
        return false;
    }
    if (serving==="") {
        document.getElementById('dserving2').innerHTML = "Enter Servings";
        return false;
    }

    if (description.length < 10) {
        document.getElementById('ddescription2').innerHTML = "Dish Description should have atleasr 10 characters";
        return false;
    }
    if(isNaN(serving))
        {
            document.getElementById('dserving2').innerHTML = "Serving should be in numbers only";
            return false;
        }
    if(isNaN(price))
    {
        document.getElementById('dprice2').innerHTML = "Price should be in numbers only";
        return false;
    }
    return true;

}

function update3(event)
{
    event.preventDefault();  // Prevent the form from submitting

    let name=document.getElementById('dish3Name').value;
    let description=document.getElementById('dish3Description').value;
    let ingredients=document.getElementById('dish3Ingredients').value;
    let serving=document.getElementById('dish3Servings').value;
    let price=document.getElementById('dish3Price').value;

    if (name ==="") {
        document.getElementById('dname3').innerHTML = "Enter Dish Name";
        return false;
    }
    if (description==="") {
        document.getElementById('ddescription3').innerHTML = "Enter Dish Description";
        return false;
    }
    if (ingredients==="") {
        document.getElementById('dingredients3').innerHTML = "Enter Dish Ingredients";
        return false;
    }
    if (price==="") {
        document.getElementById('dprice3').innerHTML = "Enter Dish Price";
        return false;
    }
    if (serving==="") {
        document.getElementById('dserving3').innerHTML = "Enter Servings";
        return false;
    }

    if (description.length < 10) {
        document.getElementById('ddescription3').innerHTML = "Dish Description should have atleasr 10 characters";
        return false;
    }

    if(isNaN(serving))
        {
            document.getElementById('dserving3').innerHTML = "Serving should be in numbers only";
            return false;
        }

    if(isNaN(price))
    {
        document.getElementById('dprice3').innerHTML = "Price should be in numbers only";
        return false;
    }
    return true;

}

function update4(event)
{
    event.preventDefault();  // Prevent the form from submitting

    let name=document.getElementById('dish4Name').value;
    let description=document.getElementById('dish4Description').value;
    let ingredients=document.getElementById('dish4Ingredients').value;
    let serving=document.getElementById('dish4Servings').value;
    let price=document.getElementById('dish4Price').value;

    if (name ==="") {
        document.getElementById('dname4').innerHTML = "Enter Dish Name";
        return false;
    }
    if (description==="") {
        document.getElementById('ddescription4').innerHTML = "Enter Dish Description";
        return false;
    }
    if (ingredients==="") {
        document.getElementById('dingredients4').innerHTML = "Enter Dish Ingredients";
        return false;
    }
    if (price==="") {
        document.getElementById('dprice4').innerHTML = "Enter Dish Price";
        return false;
    }
    if (serving==="") {
        document.getElementById('dserving4').innerHTML = "Enter Servings";
        return false;
    }
    if(isNaN(serving))
        {
            document.getElementById('dserving4').innerHTML = "Serving should be in numbers only";
            return false;
        }
    if (description.length < 10) {
        document.getElementById('ddescription4').innerHTML = "Dish Description should have atleasr 10 characters";
        return false;
    }

    if(isNaN(serving))
        {
            document.getElementById('dprice4').innerHTML = "Serving should be in numbers only";
            return false;
        }
        
    if(isNaN(price))
    {
        document.getElementById('dprice4').innerHTML = "Price should be in numbers only";
        return false;
    }
    return true;

}

function address(event) {
    let doorFlatNo = document.getElementById('doorFlatNo').value;
    let landmark = document.getElementById('landmark').value;
    let road = document.getElementById('road').value;
    let city = document.getElementById('city').value;
    let pin = document.getElementById('pincode').value;

    if (doorFlatNo === "") {
        document.getElementById('adoor').innerHTML = "Enter doorFlat no.";
        return false;
    }else{
        document.getElementById('adoor').innerHTML = "";
    }

    if (landmark === "") {
        document.getElementById('aland').innerHTML = "Enter Landmark"; 
        return false;
    }else{
        document.getElementById('aland').innerHTML = "";
    }

    if (road === "") {
        document.getElementById('aroad').innerHTML = "Enter Road";
        return false;
    }else{
        document.getElementById('aroad').innerHTML = "";
    }

    if (city === "") {
        document.getElementById('acity').innerHTML = "Enter City"; 
        return false;
    }else{
        document.getElementById('acity').innerHTML = "";
    }

    if (pin === "") {
        document.getElementById('apin').innerHTML = "Enter Pincode"; 
        return false;
    }else{
        document.getElementById('apin').innerHTML = "";
    }
    // Pincode validation (must be numeric)
    let pinpattern = /^[0-9]+$/;
    if (!pinpattern.test(pin)) {
        document.getElementById('apin').innerHTML = "Enter valid pincode"; 
        return false;
    }else{
        document.getElementById('apin').innerHTML = "";
    }

    // Optionally check if the pincode has a specific length, like 6 digits
    if (pin.length !== 6) {
        document.getElementById('apin').innerHTML = "Pincode should be of 6 digits"; 
        return false;
    }else{
        document.getElementById('apin').innerHTML = "";
    }
    return true;
}

function personalDetails(event) {
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;

    if (name === "") {
        document.getElementById('pname').innerHTML = "Enter Name";
        return false;
    }else{
        document.getElementById('pname').innerHTML = "";
    }

    if (phone === "") {
        document.getElementById('pphone').innerHTML = "Enter Phone"; 
        return false;
    }else{
        document.getElementById('pphone').innerHTML = "";
    }

    if (email === "") {
        document.getElementById('pemail').innerHTML = "Enter Email";
        return false;
    }else{
        document.getElementById('pemail').innerHTML = "";
    }

    // Name validation (only letters and spaces)
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        document.getElementById('pname').innerHTML = "Name must contain only characters";
        return false;
    }else{
        document.getElementById('pname').innerHTML = "";
    }

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('pemail').innerHTML = "Enter Email in proper format";
        return false;
    }else{
        document.getElementById('pemail').innerHTML = "";
    }

    if (phone.length !== 10) {
        document.getElementById('pphone').innerHTML = "Enter 10 digit phone number"; 
        return false;
    }else{
        document.getElementById('pphone').innerHTML = "";
    }

    // Phone number validation (only digits)
    let phonePattern = /^[0-9]+$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('pphone').innerHTML = "Phone number must contain only numbers"; 
        return false;
    }else{
        document.getElementById('pphone').innerHTML = "";
    }
    return true;
}

