var change_up = 0;
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
        let i_letter = 0
        for (var i = 0; i < document.querySelectorAll('.word_letter').length; ++i) {
            var word_letter = document.querySelectorAll('.word_letter')[i];
            if (word_letter.value == "") {
                if (i_letter == 38) {
                    document.querySelector("#check_word").classList.add("transform_end")
                }
                else {
                    document.querySelector("#check_word").classList.remove("transform_end")
                }
                word_letter.value = this.value;
                break;
            }
            i_letter ++;
        }
    });
});

document.querySelector('#clear').addEventListener('click', function(element) {
    let i_letter = -1
    for (var i = 0; i < document.querySelectorAll('.word_letter').length; ++i) {
        var word_letter = document.querySelectorAll('.word_letter')[i];
        if (word_letter.value == "") {
            document.querySelector("#check_word").classList.remove("transform_end")
            document.querySelectorAll('.word_letter')[i-1].value = "";
            break;
            }
        i_letter ++;
    }
    if (i_letter == 38) {
        document.querySelector("#check_word").classList.remove("transform_end")
        document.querySelectorAll('.word_letter')[document.querySelectorAll('.word_letter').length - 1].value = "";
    }
});

document.querySelector("#check_word").addEventListener('click', function (element){
    let i_letter = 0
    let true_word = "ктоищеттотвсегданайдетприключениянажопу";
    let word = '';
    for (var i = 0; i < document.querySelectorAll('.word_letter').length; ++i) {
        var word_letter = document.querySelectorAll('.word_letter')[i];
        if (word_letter.value != "") {
            i_letter ++;
            word += word_letter.value.toLowerCase();
        }
        else {
            break;
        }
    }
    if (word.length == true_word.length) {

        if (word == true_word) {
            document.querySelector("#word").classList.add("transform_start");
            setTimeout(function() {
                document.querySelector("#done").classList.add("transform_end");
            }, 3000);
            change_up ++;
        }
        else {
            document.querySelector("#word").classList.remove("transform_end");
            document.querySelector("#word").classList.add("transform_start");

            setTimeout(function() {
                document.querySelector("#error").classList.add("transform_end");
            }, 3000);

            setTimeout(function() {
                document.querySelector("#error").classList.add("transform_start");
            }, 3000);

            setTimeout(function() {
                document.querySelector("#error").classList.remove("transform_end");
                document.querySelector("#error").classList.remove("transform_start");
                document.querySelector("#word").classList.remove("transform_start");
                document.querySelector("#word").classList.add("transform_end");
            }, 6000);
            
            setTimeout(function() {
                document.querySelector("#word").classList.remove("transform_end");
            }, 9000);
        }
    }
});
