function refresh() {
    window.location.replace("#gate");
    $(document).on("pagebeforeshow","#gate", function() {
        window.location.reload();
    });
}

function myFunction() {
    var input, filter, oool, ul, a, i;
    input = document.getElementById('thanWords');
    filter = input.value.toUpperCase();
    oool = document.getElementById("WordList");
    ul = oool.getElementsByTagName('ul');

    for (i = 0; i < ul.length; i++) {
        a = ul[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            ul[i].style.display = "";
        } else {
            ul[i].style.display = "none";
        }
    }
}