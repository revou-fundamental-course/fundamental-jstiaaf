function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-name"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if (name == "" || birthDate == "" || gender == "" || messages == ""){
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
    return false;
}

let indexSlide = 1;
showSlide(1);

function nextSlide(n){
    showSlide(indexSlide += n);
    console.log('IndexSlide' + n);
    console.log(indexSlide + 'Ini NextSlide');
}

function showSlide(n){
    let listImage = document.getElementsByClassName('banner-item');
    if (n > listImage.length) indexSlide = 1;
    console.log(indexSlide - 1 + 'Ini N di ShowSlide');

    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = 'none';
        index++;
    }

    listImage[indexSlide - 1].style.display = 'block';
    console.log(indexSlide - 1 + 'Ini ShowSlide');
}

