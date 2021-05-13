$(document).ready(function () {
    let host = window.location.href;
    $("#api").text(" " + host + "api/{bin}");
});

function search() {
    var bin = $("#bin").val();
    $("#result").hide();
    $("#error").hide();
    $("#loader").show();
    $.ajax({
        type: "GET",
        url: "/api/" + bin,
        success: function (data) {
            $("#loader").hide();
            var resp = JSON.parse(JSON.stringify(data));
            if (resp.result) {
                $("#binn").text(resp.data.bin);
                $("#vendor").text(resp.data.vendor);
                $("#type").text(resp.data.type);
                $("#level").text(resp.data.level);
                $("#bank").text(resp.data.bank);
                $("#country").text(resp.data.country);
                $("#result").show();
            } else {
                $("#error").text(resp.message);
                $("#error").show();
            }
        },
    });
}
