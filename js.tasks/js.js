const nameInput = document.querySelector(".name");
const ageInput = document.querySelector(".age");
const jobInput = document.querySelector(".job");
const submitBtn = document.querySelector("button");

submitBtn.addEventListener("click", function () {

    if (
        nameInput.value === "" &
        ageInput.value === "" &
        jobInput.value === ""
    ) {
        alert("Please fill all fields");
        return;
    }

    console.log("Name:", nameInput.value);
    console.log("Age:", ageInput.value);
    console.log("Job:", jobInput.value);

    if (Number(ageInput.value) < 18) {
        alert("You are under age");
    } else {
        alert("Registration Completed");
    }

});