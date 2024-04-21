$(document).ready(function() {
    // Function to validate password
    function validatePassword(password) {
        var regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&.])[A-Za-z\d@$!%*#?&.]{8,}$/;
        return regex.test(password);
    }

    // Function to validate phone number
    function validatePhoneNumber(phoneNumber) {
        var regex = /^\d{11}$/; // Assumes phone number should be exactly 11 digits
        return regex.test(phoneNumber);
    }

    // Function to validate email
    function validateEmail(email) {
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Function to validate selected country
    function validateCountry(country) {
        var countriesList = ["Pakistan", "India", "USA"]; // Example list of countries
        return countriesList.includes(country);
    }

    // Function to validate selected city based on the country
    function validateCity(country, city) {
        // Define a map of cities for each country
        var citiesMap = {
            "Pakistan": ["Chiniot", "Faisalabad", "Lahore"],
            "India": ["Mumbai", "Delhi", ""],
            "USA": ["California", "Newyork", "San Fransisco"]
        };
        return citiesMap[country].includes(city);
    }

    $('.form-container form').submit(function(event) {
        event.preventDefault(); // Prevent form submission
        
        var password = $(this).find('input[name="password"]').val();
        var confirmPassword = $(this).find('input[name="confirmPass"]').val();
        var phoneNumber = $(this).find('input[name="phone"]').val();
        var email = $(this).find('input[name="email"]').val();
        var country = $(this).find('select[name="country"]').val();
        var city = $(this).find('select[name="city"]').val();
        console.log(phoneNumber)
        
        if (!validatePassword(password)) {
            alert('Password must be at least 8 characters long and contain at least one letter, one number, and one special character.');
            return;
        }

        
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        
        if (!validatePhoneNumber(phoneNumber)) {
            alert('Invalid phone number.');
            return;
        }

        
        if (!validateEmail(email)) {
            alert('Invalid email address.');
            return;
        }

        
        if (!validateCountry(country)) {
            alert('Please select a valid country.');
            return;
        }


        if (!validateCity(country, city)) {
            alert('Please select a valid city for the selected country.');
            return;
        }

        alert('Signup form submitted successfully.');

    });


    $('#signup-link').click(function () {
        $('.signup-form').show();
        $('.login-form').hide();
        $('.additional-fields').css('display', 'flex');
        $('.form-container').css('max-width', '700px');
    });

    $('#login-link').click(function() {
        $('.login-form').show();
        $('.signup-form').hide();
        $('.form-container').css('max-width', '430px');
    });
});
