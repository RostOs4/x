var change_up = 0;
var check_row = 0;
var level_up = 0;

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

document.querySelectorAll('.letter').forEach(function(element) {
    element.addEventListener('click', function() {
        if (document.querySelector("#error").classList.contains("transform_end")) {
            document.querySelector("#error").classList.remove("transform_end");
            document.querySelector("#error").classList.add("transform_start");
        }
        let i_letter = 0
        for (var i = 0; i < document.querySelectorAll('.word_letter').length; ++i) {
            var word_letter = document.querySelectorAll('.word_letter')[i];
            if (word_letter.value == "") {
                if ((i_letter - (i_letter % 5)) / 5 == check_row) {
                    word_letter.value = this.value;
                    break;
                }
                else {
                    break;
                }
            }
            i_letter ++;
        }
    });
});

document.querySelector('#clear').addEventListener('click', function(element) {
    if (document.querySelector("#error").classList.contains("transform_end")) {
        document.querySelector("#error").classList.remove("transform_end");
        document.querySelector("#error").classList.add("transform_start");
    }
    let i_letter = -1
    for (var i = 0; i < document.querySelectorAll('.word_letter').length; ++i) {
        var word_letter = document.querySelectorAll('.word_letter')[i];
        if (word_letter.value == "") {
            if ((i_letter - (i_letter % 5)) / 5 == check_row) {
                document.querySelectorAll('.word_letter')[i-1].value = "";
                break;
            }
            break;
        }
        i_letter ++;
    }
    if (i_letter == 24) {
        document.querySelectorAll('.word_letter')[document.querySelectorAll('.word_letter').length - 1].value = "";
    }
});


document.querySelector('#reload').addEventListener('click', function(element) {
    document.querySelector("#white").style.zIndex = "11";
    document.querySelector("#white").classList.toggle("transform_end");
    setTimeout(function() {
        window.location.reload();
    }, 3000);
});