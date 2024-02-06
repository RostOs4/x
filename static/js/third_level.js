var change_up = 0;
level_up = 0;

setTimeout(function() {
    document.querySelector("#white").style.zIndex = "-1";
}, 3000);

document.querySelector("#back").addEventListener('click', function(event) {
    document.querySelector("#white").style.zIndex = "11";
    document.querySelector("#white").classList.toggle("transform_end");
    setTimeout(function() {
        window.location.replace(`/index?level_up=${level_up}&change_up=${change_up}`);
    }, 3000);
});

document.querySelector("#check").addEventListener('click', function(event) {
    var text = document.querySelector("#text").value;
    text = text.toLowerCase().trim()
    if (text == 'по'){
        document.querySelector("#cat_false").classList.remove("transform_end");
        document.querySelector("#cat_true").classList.toggle("transform_end");
        document.querySelector("#check").classList.toggle("block_button");
        document.querySelector("#text").disabled = true;
        change_up = 1
        }
    else{
        document.querySelector("#cat_false").classList.toggle("transform_end");
    }
});