
const people = []; //empty array

function completeForm(event) {
    event.preventDefault();
    const fname = document.getElementById('full-name').value
    const age = document.getElementById('age').value
    const email = document.getElementById('email').value
    const consent = document.getElementById('consent').value
    console.log(fname, age, email, consent );

    const person = {
        // key: value
        first_name: fname,
        age: age,
        email: email,
        consent: consent
    }
    console.log(person);
    people.push(person);
    console.log(people);
}

// Plan out the object
// {
//     // key: value
//     first_name: fname,
//     age: age,
//     email: email,
//     consent: consent
// }
