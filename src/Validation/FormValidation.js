export default function FormValidation() {
    let firstName = document.forms["myForm"]["firstname"].value;
    let lastName = document.forms["myForm"]["lastname"].value;

    // Ensure name starts with a capital letter and is less than 15 characters
    let nameRegex = /^[A-Z][a-zA-Z]{1,14}$/;

    if (!nameRegex.test(firstName)) {
        alert("First name must start with a capital letter and be less than 15 characters.");
        return false; // Prevent form submission
    }
     
    if (!nameRegex.test(lastName)) {
        alert("Last name must start with a capital letter and be less than 15 characters.");
        return false; // Prevent form submission
    }

    return true; // Validation passed (no alert)
}

  