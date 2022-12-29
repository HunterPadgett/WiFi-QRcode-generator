const wifiForm = document.getElementById("wifi-form");
const showIcon =  document.getElementById("show-icon");
const hideIcon =  document.getElementById("hide-icon");

// click events to toggle show/hide password functionality 
showIcon.addEventListener("click", visibilityToggle);
hideIcon.addEventListener("click", visibilityToggle);

// Add a submit event listener to the form
wifiForm.addEventListener("submit", (e) => {
 // Prevent the form from submitting
 e.preventDefault();

 // Get the WiFi details from the form
 const ssid = document.getElementById("ssid").value.trim();
 const password = document.getElementById("password").value.trim();

 // Set the parameters for the WiFi QR code
 const wifi = {
  ssid: ssid,
  password: password,
 };

// console.log(showIcon)

 //  reset the qr code container so that anytime a new qr code is generated, the old one disappears and only a single qr code is displayed
 document.getElementById("qr-code-container").innerHTML = "";

 // Create a new QR code object
 const qr = new QRCode(document.getElementById("qr-code-container"), {
  text: `WIFI:T:WPA;S:${wifi.ssid};P:${wifi.password};;`,
 });

 // Clear the form text after qr code is created
 e.target.reset();
});

function visibilityToggle() {
  const passwordInput = document.getElementById("password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordInput.focus()
    showIcon.style.visibility = "hidden"
    hideIcon.style.visibility = "visible"
  } else {
    passwordInput.type = "password";
    passwordInput.focus()
    showIcon.style.visibility = "visible"
    hideIcon.style.visibility = "hidden"
  }
}
