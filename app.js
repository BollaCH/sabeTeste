function copyrightYear() {
    var d = new Date();
    var y = d.getFullYear();
    document.getElementById("copyright").innerHTML = 'Copyright &copy; ' + y + ' Sabe Brasil';
}

copyrightYear();

