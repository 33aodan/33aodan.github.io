function getGreeting() {
    const now = new Date();
    const hour = now.getHours();

    let greeting;

    if (hour >= 4 && hour < 12) {
        greeting = 'Good morning!';
    } else if (hour >= 12 && hour < 17) {
        greeting = 'Good afternoon!';
    } else {
        greeting = 'Good evening!';
    }

    return greeting;
}

document.getElementById('greeting').innerText = getGreeting();

function calculateAge(birthdate='2007-10-28') {
    const currentDate = new Date();
    const birthDate = new Date(birthdate);

    let age = currentDate.getFullYear() - birthDate.getFullYear();

    if (
        currentDate.getMonth() < birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() &&
        currentDate.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    return age;
}

document.getElementById('age').innerText = calculateAge();
