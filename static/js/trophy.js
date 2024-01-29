setTimeout(function() {
    document.querySelector("#white").style.zIndex = "-1";
}, 3000);

document.querySelector("#back").addEventListener('click', function(event) {
    document.querySelector("#white").style.zIndex = "11";
    document.querySelector("#white").classList.toggle("transform_end");
    setTimeout(function() {
        window.location.replace('/index');
    }, 3000);
});