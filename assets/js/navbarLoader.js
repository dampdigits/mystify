// navbarLoader.js

$.get("navbar.html", function(data){
    $("#navbar-placeholder").replaceWith(data);
    });
