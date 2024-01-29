setTimeout(function() {
    document.querySelector("#white").style.zIndex = "-1";
}, 3000);

document.querySelector("#trophy").addEventListener('click', function(event) {
    document.querySelector("#white").style.zIndex = "11";
    document.querySelector("#white").classList.toggle("transform_end");
    setTimeout(function() {
        window.location.replace('/trophy');
    }, 3000);
});

document.querySelector("#map").addEventListener('click', function(event) {
    document.querySelector("#white").style.zIndex = "11";
    document.querySelector("#white").classList.toggle("transform_end");
    setTimeout(function() {
        window.location.replace('/map');
    }, 3000);
});