function load_canvas() {
    $("#photo-selection-submit-button").prop("disabled", true);
    $("#photo-selection").slideUp("slow", function () {
        $("#photo-options").fadeIn();
    });
    return false;
}