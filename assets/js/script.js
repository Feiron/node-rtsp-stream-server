$(function () {

    let url = 'ws://10.10.6.124:8082';
    window.Player = new PlayerEngine('#player', url);

    setInterval(function () {
        let obDate = new Date();
        let $contaienr = $('.time');

        $('.hours', $contaienr).text(obDate.getHours());
        $('.minutes', $contaienr).text(obDate.getMinutes() < 10 ? ('0' + obDate.getMinutes()) : obDate.getMinutes());
    }, 1000);

});

function grayScale(context, canvas) {
    var imgData = context.getImageData(0, 0, canvas.width, canvas.height);
    var pixels = imgData.data;
    for (var i = 0, n = pixels.length; i < n; i += 4) {
        var grayscale = pixels[i] * .3 + pixels[i + 1] * .59 + pixels[i + 2] * .11;
        pixels[i] = grayscale;        // red
        pixels[i + 1] = grayscale;        // green
        pixels[i + 2] = grayscale;        // blue
        //pixels[i+3]              is alpha
    }
    //redraw the image in black & white
    context.putImageData(imgData, 0, 0);
}