let alertViewer = $("#viewAlert")
function alert(message, type) {
    let alert = $('<div><div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message +"</div>")
    alert.fadeOut(0);
    alert.fadeIn(100)
    alertViewer.append(alert)
}
if ($("#msg")) {
    $("#msg").click(function (e) {
        e.preventDefault();
        if (alertViewer.children().length == 0) {
            alert('To view the messages, you must <a href="signin.html" class="alert-link">Sign in</a>!', 'danger')
        }
    });
}
setTimeout(() => {
    alert('You have new messages! To view them, you must <a href="signin.html" class="alert-link">sign in</a>', 'danger')
}, 3000);