function changeMode(size, weight, transform, background, color) {
    return function () {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }

}

function main () {
    let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green')
    let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white')
    let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black')

    // Add paragraph to the body
    let paragraph = document.createElement("p");
    let textNode = document.createTextNode("Welcome Holberton!");
    paragraph.appendChild(textNode);
    document.body.appendChild(paragraph);

    // Adds button to the body with the text 'Spooky mode'
    let button = document.createElement("button");
    button.innerHTML = "Spooky";
    button.onclick = function () {
        spooky();
    }
    document.body.appendChild(button);

    // Adds button to the body with the text 'Dark mode'
    button = document.createElement("button");
    button.innerHTML = "Dark mode";
    button.onclick = function () {
        darkMode();
    }
    document.body.appendChild(button);

    // Adds button to the body with the text 'Scream mode'
    button = document.createElement("button");
    button.innerHTML = "Scream mode";
    button.onclick = function () {
        screamMode();
    }
    document.body.appendChild(button);
}

main();