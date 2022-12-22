// Add a submit event listener to the form
document.getElementById('wifi-form').addEventListener('submit', e => {
  // Prevent the form from submitting
  e.preventDefault();
  // Clear the form text
  e.target.reset();

  // Get the WiFi details from the form
  const ssid = document.getElementById('ssid').value;
  const password = document.getElementById('password').value;

  // Set the parameters for the WiFi QR code
  const wifi = {
    ssid: ssid,
    password: password
  };

  // Create a new QR code object
  const qr = new QRCode(document.getElementById('qr-code-container'), {
    text: `WIFI:T:WPA;S:${wifi.ssid};P:${wifi.password};;`
  });
});