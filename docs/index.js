var image = null;
var fr = null;
var ctx = null;
var canvas = null;

function download_photo() {
    var dataURL = canvas.toDataURL('image/png');
    $("#downloadButton")[0].href = dataURL;
}

function settings_changed() {
    ctx.drawImage(image, 0, 0);
    var size = $("#labelSize")[0].value;
    var text = "Reborn Dreams By Cindy";
    var numPixels = Math.trunc(image.width * (size / 50) / text.length);
    ctx.font = numPixels + "px Handlee"
    ctx.fillText(text, image.width - ctx.measureText(text).width - 10, image.height - numPixels + 10);
}

function add_canvas() {
    var el = document.createElement("canvas");
    el.width = image.width;
    el.height = image.height;
    el.id = "renderingCanvas"
    canvas = el;
    ctx = el.getContext("2d");
    $("#photoHolder").append(el);
    $("#labelSize").removeAttr("disabled");
    settings_changed();
}

function open_image() {
    image = new Image();
    image.src = fr.result;
    image.onload = add_canvas;
}

function load_canvas() {
    $("#photo-selection-submit-button").prop("disabled", true);
    $("#photo-selection").slideUp("slow", function () {
        $("#photo-options").fadeIn();
    });
    $("#photoHolder").empty();

    var file = $("#formInputPhoto")[0].files[0];
    fr = new FileReader();
    fr.onload = open_image;
    fr.readAsDataURL(file);

    return false;
}