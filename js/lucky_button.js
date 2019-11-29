const links = [
    "intro", "abbitan", "bar", "carroll_warhola", "chen", "cosinuke",
    "ferris", "fu", "hao", "kohli", "krasniqi",
    "liu", "maloney", "mapa", "pan", "patel",
    "pedoeem", "shah", "toy", "wilborn"
];

const prefix = "";

function random_url(origin) {
    while (true) {
        let chosen = Math.floor(Math.random() * links.length);
        if (! (links[chosen] === origin)) {
            window.location.href = prefix + links[chosen] + ".html";
            break
        }
    }
}

function next_page(current) {
    let indexCurrent = links.indexOf(current);
    let indexNext = (indexCurrent + 1) % links.length;
    window.location.href = prefix + links[indexNext] + ".html";
}

function previous_page(current) {
    let indexCurrent = links.indexOf(current);
    let indexPrevious = (indexCurrent - 1) % links.length;
    window.location.href = prefix + links[indexPrevious] + ".html";
}