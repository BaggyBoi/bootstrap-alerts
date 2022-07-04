let alertViewer = $("#viewAlert")
function alert() {
    let alert = $(`<div class="alert alert-primary" role="alert">New messages!!!</div>`)
    alertViewer.append(alert)

}