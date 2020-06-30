var request = new XMLHttpRequest();

request.open('GET', 'https://api.github.com/repositories', true);

request.onload = function () {
    var data = JSON.parse(this.response);

    var statusHTML = '';

    $.each(data, function (i, status) {

        statusHTML += '<div class="col-12 col-sm-4">';
        statusHTML += '<div class="card"  style="width: 18rem;">';
        statusHTML += `<img src="${status.owner.avatar_url}"/>`;
        statusHTML += '<div class="card-body" id="repositorio">';
        statusHTML += `<h5 class="card-title" id="fullname">${status.full_name}</h5>`;
        statusHTML += `<p class="card-text">${status.description}</p>`;
        statusHTML += `<button type="submit" name="mostrarrep" id="mostrar" value="${status.full_name}" onclick="return mostrarRepo(this)" class="btn btn-primary">Ver Repositório</button>`;
        statusHTML += '</div>';
        statusHTML += '</div>';
        statusHTML += '</div>';
    });
    document.getElementById('foto').innerHTML = statusHTML;
}
request.send();
