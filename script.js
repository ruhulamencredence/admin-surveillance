
document.getElementById("date").valueAsDate = new Date();

document.getElementById("surveillanceForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = {};
  formData.forEach((value, key) => { data[key] = value });

  fetch("https://script.google.com/macros/s/AKfycbyi30EQoB0fijdxFM1RmQolXepgT_4cFv8vL9VZr7ndGan2S5X23N6m0P84diAnUqVw/exec", {
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
