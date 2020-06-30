
let dadosArquivados = JSON.parse(sessionStorage.getItem('chave'));
let url = 'https://api.github.com/repos/' + dadosArquivados;
console.log(url);
$.ajax({
    type: 'GET',
    url: url,
    success: function (data) {
        $("#fullname").append(data.full_name);
    }
});

function acima100(element) {
    let dadosArquivados = JSON.parse(sessionStorage.getItem('chave'));
    let url = 'https://api.github.com/repos/' + dadosArquivados + '/contributors';
    $.ajax({
        type: 'GET',
        url: url,
        success: function (data) {
            var statusHtml = '';
            $.each(data, function (index, value) {
                var contribuicao = `${value.contributions}`;
                if (contribuicao > 100 && contribuicao < 200) {
                    statusHtml += '<div class="col-12 col-sm-3">';
                    statusHtml += '<div class="card" style="width: 18rem;">';
                    statusHtml += `<img src="${value.avatar_url}" class="card-img-top" alt="...">`;
                    statusHtml += '<div class="card-body">';
                    statusHtml += `<h5 class="card-title">${value.login}</h5>`;
                    statusHtml += `<p class="card-text">Contribuição ${value.contributions}</p>`;
                    statusHtml += '</div>';
                    statusHtml += '</div>';
                    statusHtml += '</div>';
                }
            });
            $('#acima100').html(statusHtml);
        }
    });
}

function acima200(element) {
    let dadosArquivados = JSON.parse(sessionStorage.getItem('chave'));
    let url = 'https://api.github.com/repos/' + dadosArquivados + '/contributors';
    $.ajax({
        type: 'GET',
        url: url,
        success: function (data) {
            var statusHtml = '';
            $.each(data, function (index, value) {
                var contribuicao = `${value.contributions}`;
                if (contribuicao > 200 && contribuicao < 500) {
                    statusHtml += '<div class="col-12 col-sm-3">';
                    statusHtml += '<div class="card" style="width: 18rem;">';
                    statusHtml += `<img src="${value.avatar_url}" class="card-img-top" alt="...">`;
                    statusHtml += '<div class="card-body">';
                    statusHtml += `<h5 class="card-title">${value.login}</h5>`;
                    statusHtml += `<p class="card-text">Contribuição ${value.contributions}</p>`;
                    statusHtml += '</div>';
                    statusHtml += '</div>';
                    statusHtml += '</div>';
                }
            });
            $('#acima200').html(statusHtml);
        }
    });
}

function acima500(element) {
    let dadosArquivados = JSON.parse(sessionStorage.getItem('chave'));
    let url = 'https://api.github.com/repos/' + dadosArquivados + '/contributors';
    $.ajax({
        type: 'GET',
        url: url,
        success: function (data) {
            var statusHtml = '';
            $.each(data, function (index, value) {
                var contribuicao = `${value.contributions}`;
                if (contribuicao > 500) {
                    statusHtml += '<div class="col-12 col-sm-3">';
                    statusHtml += '<div class="card" style="width: 18rem;">';
                    statusHtml += `<img src="${value.avatar_url}" class="card-img-top" alt="...">`;
                    statusHtml += '<div class="card-body">';
                    statusHtml += `<h5 class="card-title">${value.login}</h5>`;
                    statusHtml += `<p class="card-text">Contribuição ${value.contributions}</p>`;
                    statusHtml += '</div>';
                    statusHtml += '</div>';
                    statusHtml += '</div>';
                }
            });
            $('#acima500').html(statusHtml);
        }
    });
}

function issuesAberto(element) {
    let dadosArquivados = JSON.parse(sessionStorage.getItem('chave'));
    let url = 'https://api.github.com/repos/' + dadosArquivados + '/issues';
    $.ajax({
        type: 'GET',
        url: url,
        success: function (data) {
            var statusHtml = '';
            $.each(data, function (index, value) {
                var issuesAberto = `${value.state}`;
                if (issuesAberto = 'open') {
                    statusHtml += `<p><a href="" value="${value.number}" onclick="return commentIssues(${value.number})">${value.title}</a></p>`;
                }
            });
            $('#issuesAberto').html(statusHtml);
        }
    });
}

function issuesFechado(element) {
    let dadosArquivados = JSON.parse(sessionStorage.getItem('chave'));
    let url = 'https://api.github.com/repos/' + dadosArquivados + '/issues';
    $.ajax({
        type: 'GET',
        url: url,
        success: function (data) {
            var statusHtml = '';
            $.each(data, function (index, value) {
                var issuesAberto = `${value.state}`;
                if (issuesAberto = 'closed') {
                    statusHtml += `<p><a href="" value="${value.number}" id="comments" onclick="return commentIssues(this)" >${value.title}</a></p>`;
                }
            });
            $('#issuesAberto').html(statusHtml);
        }
    });
}

function commentIssues(element) {
    //linha que pega o valor do nome para passar para o link abaixo
    debugger;
    var numero = element;
    let dadosArquivados = JSON.parse(sessionStorage.getItem('chave'));


    let url = 'https://api.github.com/repos/' + dadosArquivados + '/issues/' + numero + '/comments';
    $.ajax({
        type: 'GET',
        url: url,
        success: function (data) {
            var dados = JSON.stringify(valor);
            sessionStorage.setItem('number', dados);
            window.location.replace("comments.html");
            var statusHTML = '';
            $.each(data, function (i, status) {

                statusHTML += `<p>'+status.body+'</p>`;
            });
            $('#result').html(statusHtml);
        }
    });
}
