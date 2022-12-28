// Add a submit event listener to the form
document.getElementById("wifi-form").addEventListener("submit", (e) => {
 // Prevent the form from submitting
 e.preventDefault();

 // Get the WiFi details from the form
 const ssid = document.getElementById("ssid").value;
 const password = document.getElementById("password").value;

 // Set the parameters for the WiFi QR code
 const wifi = {
  ssid: ssid,
  password: password,
 };

 console.log(wifi.ssid);

 //  reset the qr code container so that anytime a new qr code is generated, the old one disappears and only a single qr code is displayed
 document.getElementById("qr-code-container").innerHTML = "";

 // Create a new QR code object
 const qr = new QRCode(document.getElementById("qr-code-container"), {
  text: `WIFI:S:${wifi.ssid};T:<WPA|WEP|>;P:${wifi.password};;`,
 });

 // Clear the form text after qr code is created
 e.target.reset();
});
