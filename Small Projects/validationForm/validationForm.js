
const formName = document.forms.contactForm.elements.name.value;

const validateForm = () => {
    console.log(formName);

    if (formName === "") {
        document.getElementById("nameErr").innerHTML = 'Please Enter Full Name'
    } else {
        let alphaReg = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;

        if (alphaReg.test(formName)) {
            document.getElementById("nameErr").innerHTML = ""
        } else {
            document.getElementById("nameErr").innerHTML = 'Please Enter Valid name';
        }
    }

    const formMail = document.forms.contactForm.elements.email.value;
    console.log(formMail);

    if (formMail === "") {
        document.getElementById("emailErr").innerHTML = 'Please Enter Email Address'
    } else {
        let emailReg = /^[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9_\-]+\.[a-zA-Z0-9_\-\.]+$/;

        if (emailReg.test(formMail)) {
            document.getElementById("emailErr").innerHTML = ""
        } else {
            document.getElementById("emailErr").innerHTML = 'Please Enter Valid Email Address';
        }

    }

    const formNum = document.forms.contactForm.elements.mobile.value;
    console.log(formNum);

    if (formNum === "") {
        document.getElementById("mobileErr").innerHTML = 'Please Enter Mobile Number'
    } else {
        let numReg = /^[0-9]{10}$/;

        if (numReg.test(formNum)) {
            document.getElementById("mobileErr").innerHTML = ""
        } else {
            document.getElementById("mobileErr").innerHTML = 'Please Enter Valid Mobile Number';
        }

    }
    
    const formsCountrySel = document.forms.contactForm.elements.country.value;
    console.log(formsCountrySel);

    if (formsCountrySel === "0") {
        document.getElementById("countryErr").innerHTML = 'Please Select Country';
    } else {
        document.getElementById("countryErr").innerHTML = "";
    }

    const formGender = document.querySelector('input[name="gender"]:checked');
    console.log(formGender);

    if (!formGender) {
        document.getElementById("genderErr").innerHTML = 'Please select a gender';
    } else {
        document.getElementById("genderErr").innerHTML = '';
    }

    const formHobbies = document.querySelectorAll('input[name="hobbies"]:checked');
    console.log(formHobbies);

    if (formHobbies.length < 2) {
        document.getElementById("hobbyErr").innerHTML = 'Please select at least 2 hobbies';
    } else {
        document.getElementById("hobbyErr").innerHTML = '';
    }

    return false;
}

