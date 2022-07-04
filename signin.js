let alertViewer = $("#viewAlert")
function alert(message, type) {
    let alert = $('<div><div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message+"</div>")
    alert.fadeOut(0);
    alert.fadeIn(100)
    alertViewer.append(alert)
}
$("#form").submit(function (e) {
    e.preventDefault();$("#name").val()
    alert(`Welcome back, <b>${$('#name').val()}</b>. Wait for the page to load.`, "success")
    setTimeout(() => {
        window.open("main.html","_self")
    }, 2000);
});