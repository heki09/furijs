let age = prompt("Input your age");
if (isNaN(age)) {
  console.log("NOT NUMBER");
} else {
  let ageInt = parseInt(age);
  if (ageInt < 20) {
    console.log("child");
  } else if (ageInt < 65) {
    console.log("adult");
  } else {
    console.log("old age");
  }
}
