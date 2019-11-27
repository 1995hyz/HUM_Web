const links = [
    "abbitan", "bar", "carroll_warhola", "chen", "cosinuke",
    "ferris", "fu", "hao", "kohli", "krasniqi",
    "liu", "maloney", "mapa", "pan", "patel",
    "pedoeem", "shah", "toy", "wilborn"
];

function random_url(origin) {
    const prefix = "./tales/";
    while (true) {
        let chosen = Math.floor(Math.random() * links.length);
        if (! (links[chosen] === origin)) {
            window.location.href = prefix + links[chosen] + ".html";
            break
        }
    }
}