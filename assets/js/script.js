$(function () {

    let url = arSettings.video_host + ':' + arSettings.video_port;
    window.Player = new PlayerEngine('#player', url);

    setInterval(function () {
        let obDate = new Date();
        let $contaienr = $('.time');

        $('.hours', $contaienr).text(obDate.getHours());
        $('.minutes', $contaienr).text(obDate.getMinutes() < 10 ? ('0' + obDate.getMinutes()) : obDate.getMinutes());
    }, 1000);

});