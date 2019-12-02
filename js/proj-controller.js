'use strict'


$(document).ready(function () {
        init();


});

function init() {
        var projects = createProjects();
        renderProjects(projects);
};

function renderProjects(projects) {

        var projects = getProjectsToRender();
        var divs = projects.map(function (project) {
                return `<a class="portfolio-link" data-toggle="modal" onclick="renderModal('${project.id}')" href="#portfolioModal1">
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content">
                    <i class="fa fa-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src="${project.url}" alt="">
              </a>
              <div class="portfolio-caption">
                <h4>${project.name}</h4>
                <p class="text-muted">"${project.desc}"</p>
              </div>`
        })

        document.querySelector(".portfolio-item").innerHTML = divs.join('');
}

function renderModal(id) {
        var currProject = getProjectById(id);
        var date = new Date(currProject.publishedAt);
        date = (date.toLocaleDateString('en-GB'));

        $('.modal-title').text(currProject.title);
        $('.modal-desc').text(currProject.desc);
        $('.modal-date').text(`Created: ${date}`);
        $('.modal-img').attr("src", currProject.url);
        $('.modal-git').attr("href", `https://eyalganor123.github.io/${currProject.title}`);
}

function onSendMail() {
        window.location.assign("email.html", '_blank')
}