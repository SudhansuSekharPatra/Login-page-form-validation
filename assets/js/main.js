// Hamburger

const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
	document.body.classList.toggle("menu-btn-open");
});

// Form

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	// To remove the whitespaces
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();

	if (emailValue === "") {
		setErrorFor(email, "Email cannot be blank !");
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, "Not a valid email !");
	} else {
		setSuccessFor(email);
	}

	if (passwordValue === "") {
		setErrorFor(password, "Password cannot be blank !");
	} else if (passwordValue.length <= 5) {
		setErrorFor(password, "Password too short !");
	} else {
		setSuccessFor(password);
	}

	successMsg();
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector("small");
	formControl.className = "form-control error";
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = "form-control success";
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		email
	);
}

function successMsg() {
	const formCon = document.getElementsByClassName("form-control");
	const count = formCon.length - 1;
	for (let i = 0; i < formCon.length; i++) {
		if (formCon[i].className === "form-control success") {
			const sRate = 0 + i;
			sendData(sRate, count);
		} else {
			return false;
		}
	}
}

function sendData(sRate, count) {
	if (sRate === count) {
		email.value = "";
		password.value = "";
		alert("You have succesfully signed in!");
	}
	return false;
}
