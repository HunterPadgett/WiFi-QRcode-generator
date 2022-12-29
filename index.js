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

setTimeout(() => {
  const qrCodeContainer = document.getElementById("qr-code-container");
  const img = qrCodeContainer.querySelector("img");
  const imgSrc = img.src;
  const saveBtn = createSaveBtn(imgSrc);
  qrCodeContainer.appendChild(saveBtn);
// console.log(imgSrc)
}, 500)
 // Clear the form text after qr code is created
 e.target.reset();
});

// function createSaveBtn() {
//   // Create a new button element
//   const saveBtn = document.createElement("button");
//   saveBtn.id = 'saveBtn'

//   // Set the text content of the button to "Save QR Code"
//   saveBtn.textContent = "Save QR Code";

//   // Set the href of the button to the imgSrc
//   saveBtn.href = imgSrc;

//   // Set the download attribute of the button to "wifi-qr-code"
//   saveBtn.download = "wifi-qr-code";

//   // Return the button element
//   return saveBtn;
// }

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


