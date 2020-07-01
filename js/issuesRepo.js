var repoPath = "leachim6/hello-world" //

$(document).ready(function() {
    $.ajax({
        url: `https://api.github.com/repos/${repoPath}/issues`,
        type: "GET",
        crossDomain: true,
        success: function (response) {
            tbody = "";
            response.forEach(issue => {
                tbody += `<tr><td>${issue.number}</td><td>${issue.title}</td><td>${issue.created_at}</td><td>${issue.state}</td></tr>`;
            });
            $('#output-element').html(tbody);
        },
        error: function (xhr, status) {
            alert("error: " + JSON.stringify(xhr));
        }
    });
});
