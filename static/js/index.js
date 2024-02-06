document.querySelectorAll("*").forEach(element => {
    element.classList.add("disable-dbl-tap-zoom");
});

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

try {
    document.querySelector("#first_level").addEventListener('click', function(event) {
        document.querySelector("#white").style.zIndex = "11";
        document.querySelector("#white").classList.toggle("transform_end");
        setTimeout(function() {
            window.location.replace('/first_level');
        }, 3000);
    });
}
catch {
    try {
        document.querySelector("#second_level").addEventListener('click', function(event) {
            document.querySelector("#white").style.zIndex = "11";
            document.querySelector("#white").classList.toggle("transform_end");
            setTimeout(function() {
                window.location.replace('/second_level');
            }, 3000);
        });
    }
    catch {
        try{
            document.querySelector("#third_level").addEventListener('click', function(event) {
                document.querySelector("#white").style.zIndex = "11";
                document.querySelector("#white").classList.toggle("transform_end");
                setTimeout(function() {
                    window.location.replace('/third_level');
                }, 3000);
            });
        }
        catch{}
    }
}