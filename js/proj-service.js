'use strict'
var gProjects = [];
var gCurrProject = {};


function createProjects() {

    gProjects.push(createProject(getRandomID(), "minesweeper", "minesweeper-master", "try not to get blown up in this classic arcade game", "img/portfolio/minesweeper.jpg", 1575292950179, "excercise for coding academy", ["life simulation", "js"]));
    gProjects.push(createProject(getRandomID(), "Who Is?", "who-is", "let me guess who you're thinking about", "img/portfolio/who-is.jpg", 1575292950179, "excercise for coding academy", ["life simulation", "js"]));
    gProjects.push(createProject(getRandomID(), "Game Of Life", "game-of-life", "watch them grow", "img/portfolio/game-of-life.jpg", 1575292950179, "excercise for coding academy", ["life simulation", "js"]));
    gProjects.push(createProject(getRandomID(), "Touch the Nums", "touch-nums", "touch numbers in order", "img/portfolio/touch.jpg", 1575292950179, "excercise for coding academy", ["life simulation", "js"]));

    saveToStorage("projects", gProjects)
    return gProjects;
}

function createProject(id, name, title, desc, url, publishedAt, labels) {
    return {
        id,
        name,
        title,
        desc,
        url,
        publishedAt,
        labels
    }

}

function getProjectsToRender() {
    return gProjects
}

function getProjectById(id) {
    for (var i = 0; i < gProjects.length; i++) {
        if (gProjects[i].id === id) return gProjects[i];
    }
    return null
}