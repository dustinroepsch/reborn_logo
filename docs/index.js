var image = null;
var fr = null;
var ctx = null;

function settings_changed() {
    ctx.drawImage(image, 0, 0);
}

function add_canvas() {
    var el = document.createElement("canvas");
    el.width = image.width;
    el.height = image.height;
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