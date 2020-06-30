var repoPath = "leachim6/hello-world" //

$(document).ready(function() {
    $.ajax({
        url: `https://api.github.com/repos/${repoPath}/comments`,
        type: "GET",
        crossDomain: true,
        success: function (response) {
            tbody = "";
            response.forEach(issue => {
                tbody += `<tr><td>${issue.id}</td><td><a target="_blank" href="">${issue.html_url}</a></td><td>${issue.body}</td></tr>`;
            });
            $('#comments').html(tbody);
        },
        error: function (xhr, status) {
            alert("error: " + JSON.stringify(xhr));
        }
    });
});