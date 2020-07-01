function mostrarRepo(element) {
    //linha que pega o valor do nome para passar para o link abaixo
    var valor = element.value;

    var url = 'https://api.github.com/repos/' + valor;
    $.ajax({
        type: 'GET',
        url: url,
        success: function (data) {
            var dados = JSON.stringify(valor);
            sessionStorage.setItem('chave', dados);
            //window.location.replace("buscadeUsuarios.html");
            window.location.href = "buscadeUsuarios.html";
            var statusHTML = '';
            $.each(data, function (i, status) {

                statusHTML += '<div class="col-12 col-sm-4">';
                statusHTML += '<div class="card"  style="width: 18rem;">';
                statusHTML += `<img src="${status.owner.avatar_url}"/>`;
                statusHTML += '<div class="card-body" id="repositorio">';
                statusHTML += `<h5 class="card-title" id="fullname">${status.full_name}</h5>`;
                statusHTML += '</div>';
                statusHTML += '</div>';
                statusHTML += '</div>';
            });
            document.getElementById('result').innerHTML = statusHTML;
        }
    });

}
