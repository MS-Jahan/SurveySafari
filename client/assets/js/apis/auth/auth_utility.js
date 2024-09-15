// assets/js/apis/auth/login.js

// validate email
function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// show form message
function showFormMessage(message, type) {
    let messageContainer = document.getElementById("messageContainer");
    messageContainer.style.display = 'block';
    // check message type and set css class based on message type
    let types = {
        'error': 'alert alert-danger',
        'success': 'alert alert-success',
        'info': 'alert alert-info',
        'warning': 'alert alert-warning',
    }
    // if check if error or success
    messageContainer.className = types[type];
    messageContainer.innerText = message;

    // after 5 seconds hide message
    setTimeout(() => {
        messageContainer.style.display = 'none';
    }, 5000);
}

// login function
function login(e) {
    e.preventDefault();

    let email = document.getElementById("form2Example1").value;
    let password = document.getElementById("form2Example2").value;

    // Check if any of the fields are empty
    if (email === "" || password === "") {
        showFormMessage("Please fill in all fields", 'error');
        return;
    }

    // Check if email is valid
    if (!validateEmail(email)) {
        showFormMessage("Please enter a valid email address", 'error');
        return;
    }

    let data = {
        email: email,
        password: password
    }

    // Send fetch post to login endpoint and check if 200
    fetch(`${API_HOST}/api/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(data)
    }).then(response => {
        if (response.status === 200) {
            response.json().then(data => {
                console.log(data);
                // get userType
                let userType = data.userType;

                setTimeout(() => {
                    window.location.href = userType === 'author' ? '/pages/author_dashboard.html' : '/pages/explorer_home.html';
                }, 3000);
            });
        } else {
            response.text().then(text => {
                console.log(text);
                if(text.trim() == ""){
                    text = "An error occurred during login.";
                }
                showFormMessage(text, 'error');
                logout();
            });
        }
    }).catch(error => {
        console.error('Error:', error);
        showFormMessage('An error occurred during login.', 'error');
        logout();
    });
}

// signup function
function signup(e) {
    e.preventDefault();

    const firstName = document.getElementById('form3Example1').value.trim();
    const lastName = document.getElementById('form3Example2').value.trim();
    const username = document.getElementById('form3Example5').value.trim();
    const email = document.getElementById('form3Example3').value.trim();
    const password = document.getElementById('form3Example4').value;
    const confirmPassword = document.getElementById('form3Example6').value;
    let role = "";
    try{
        role = document.querySelector('input[name="userType"]:checked').value;
    } catch(e){
        showFormMessage('Please select a role', 'error');
        return;
    }
    

    // Password matching validation
    if (password !== confirmPassword) {
        showFormMessage('Passwords do not match', 'error');
        return;
    }

    // Validate email
    if (!validateEmail(email)) {
        showFormMessage('Please enter a valid email address', 'error');
        return;
    }

    // Check if any of the fields are empty
    if (firstName === "" || lastName === "" || username === "" || email === "" || password === "" || confirmPassword === "" || role === "") {
        showFormMessage('Please fill in all fields', 'error');
        return;
    }


    let data = {
        name: `${firstName} ${lastName}`,  // Full name
        email: email,     // Email
        username: username,  // Username
        password: password,  // Password
        userType: role  // Role (userType in backend)
    }

    fetch(`${API_HOST}/api/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => {
        if (res.status === 200) {
            showFormMessage('User created successfully. Redirecting to login page...', 'success');
            // Redirect to login page after 3 seconds
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 3000);
        } else {
            res.text().then(text => {
                if(text.trim() == ""){
                    text = "An error occurred during signup.";
                }
                showFormMessage(text, 'error');
            });
        }
    }).catch(err => {
        console.error('Error:', err);
        showFormMessage('An error occurred during signup.', 'error');
    });
}

async function logout() {
    // fetch logout from /api/auth/logout and redirect to login page
    return fetch(`${API_HOST}/api/auth/logout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    }).then(response => {
        if (response.status === 200) {
            // return response.json();
            console.log("Logged out successfully");
        } else {
            return response.text().then(text => {
                console.log(text);
                if (text.trim() == "") {
                    text = "An error occurred logging out.";                     
                }
                // showFormMessage(text, 'error');
            });
        }
        // setTimeout(() => {
            window.location.href = '/pages/login.html';
        // }, 3000);
    }).catch(error => {
        console.error('Error:', error);
        // showFormMessage('An error occurred during login.', 'error');
    });
}

async function fetchProfileData() {
    // fetch profile data from /api/auth/user and return
    return fetch(`${API_HOST}/api/auth/user`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    }).then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            logout();
            return response.text().then(text => {
                console.log(text);
                if (text.trim() == "") {
                    text = "An error occurred authenticating user. Logging out.";                     
                }
                // showFormMessage(text, 'error');
            });
        }
    }).catch(error => {
        console.error('Error:', error);
        // showFormMessage('An error occurred during login.', 'error');
        logout();
    });
}

export { login, signup, fetchProfileData };