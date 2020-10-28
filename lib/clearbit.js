const authorization = "Bearer sk_f9deb0090ac7688f94eb11ce09fd6a6e";

// 1.select element for 6 elements
const textBox = document.querySelector("#clearbitEmail");
const submit = document.querySelector("#clearbitSubmit");
const name = document.querySelector("#userName");
const email = document.querySelector("#userEmail");
const bio = document.querySelector("#userBio");
const place = document.querySelector("#userLocation");
// 2.listen to a click

const display = (data) => {
  name.innerText = data.person.name.fullName;
  email.innerText = data.person.email;
  bio.innerText = data.person.bio;
  place.innerText = data.person.location;
};

const stalk = (event) => {
  event.preventDefault();
  const url = `https://person.clearbit.com/v2/combined/find?email=${textBox.value}`;
  fetch(url, {
    method: "GET",
    headers: { Authorization: authorization }
  })
  .then(response => response.json())
  .then(data => {
    display(data);
  })
};

submit.addEventListener("click", stalk);





// 3.preventDefault();
//  broccoli = (data) => {
//   dataconst.person.forEach
// };
// 4.fetch an API for clearbit
// 5.display the data that we get from the API
// 6.stalk your exes weirdos!
