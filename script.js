
document.getElementById("date").valueAsDate = new Date();

document.getElementById("surveillanceForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = {};
  formData.forEach((value, key) => { data[key] = value });

  fetch("https://script.google.com/macros/s/AKfycbw4FZeW04OIkV5VNPcv7rUcXYpC4CNL5ycU30MuGjLuti6uIOndDr1csevT-fLZumwF/exec", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.text())
  .then(result => {
    alert("Submitted successfully!");
    document.getElementById("surveillanceForm").reset();
    document.getElementById("date").valueAsDate = new Date();
  })
  .catch(err => alert("Error submitting form: " + err));
});
