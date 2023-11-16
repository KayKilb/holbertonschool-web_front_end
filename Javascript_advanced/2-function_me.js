function welcomeMessage (fullName) {
    return function () {
        console.log('Welcome ' + fullName);
    }
}

const guillaume = welcomeMessage('Guillaume');
const alex = welcomeMessage('Alex');
const fred = welcomeMessage('Fred');