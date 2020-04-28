var data1 = {
    photo: "images/nz_01.jpeg",
    title: "Rocks",
    description: "Castle Hill picknic.",
};


var data2 = {
    photo: "images/nz_02.jpeg",
    title: "Castle Hill",
    description: "Black rocks",
};


var data3 = {
    photo: "images/nz_03.jpeg",
    title: "Bridge",
    description: "Ashanee crossing the bridge",
};


var data4 = {
    photo: "images/nz_04.jpeg",
    title: "Meditation",
    description: "Ashanee meditating at the river",
};


var data5 = {
    photo: "images/nz_05.jpeg",
    title: "Glacier rocks",
    description: "Rocks formed by a glacier river",
};


var data6 = {
    photo: "images/nz_06.jpeg",
    title: "Glacier walk",
    description: "Walking to the glacier with friends.",
};


var data7 = {
    photo: "images/nz_07.jpeg",
    title: "Mountain lake",
    description: "Reflections from the mountain lake.",
};


var data8 = {
    photo: "images/nz_08.jpeg",
    title: "Road trip stop",
    description: "Road trip stop and quick meditation at a lake.",
};


let currentPhoto = 0;
let imagesData = [data1, data2, data3, data4, data5, data6, data7, data8];
$('#photo').attr('src', imagesData[currentPhoto].photo);
$('#title').text(imagesData[currentPhoto].title).title;
$('#description').text(imagesData[currentPhoto].description);

function loadPhoto(photoNumber) {
    $("#photo").attr("src", imagesData[photoNumber].photo);
}

function loadTitle(photoNumber) {
    $('#title').text(imagesData[photoNumber].title);
}

function loadDescription(photoNumber) {
    $('#description').text(imagesData[photoNumber].description);
}

loadPhoto(currentPhoto);

$('#nextArrow').click(() => {
    if (currentPhoto < 7) { currentPhoto++; }
    if (currentPhoto === 7) { currentPhoto === 0; }
    loadPhoto(currentPhoto);
    loadTitle(currentPhoto);
    loadDescription(currentPhoto);
})

$('#backArrow').click(() => {
    if (currentPhoto > 0) { currentPhoto--; }
    if (currentPhoto === 0) { currentPhoto === 7; }
    loadPhoto(currentPhoto);
    loadTitle(currentPhoto);
    loadDescription(currentPhoto);
})

//bottom part - hard core


imagesData.forEach((item, index) => {
    $('#photoScroll').append(`
    <div class="imageHolder" data-index="${index}">
    <img class="small1" id="imgSmall" src =${item.photo} data-index="${index}">
    <span class="textOver">${item.title}</span>
    </div>`);
    $('.imageHolder').click((event) => {
        var indexClicked = $(event.target).attr('data-index');
        // indexClicked is now a string! if you need it as a number you have to change it
        // because for example "1" + 1 is going to be "11" and not 2
        var numberIndex = parseInt(indexClicked);
        // now numberIndex is a number
        $('.photoHolder img').attr('src', imagesData[indexClicked].photo);
        $('#title').text(imagesData[indexClicked].title);
        $('#description').text(imagesData[indexClicked].description);
        currentPhoto = indexClicked;
    });
});

function popUp(event) {
    if (event.target.classList.contains("small1")) {
        console.log(event.target);
    }
};
document.getElementById("photoScroll").addEventListener('click', popUp)