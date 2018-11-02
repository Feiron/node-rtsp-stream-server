<?php
/**
 * User: Feiron
 * Date: 04.06.2018
 * Time: 15:37
 *
 *
 */
if(stristr($_SERVER['HTTP_HOST'], '.lc')){
	define('VIDEO_HOST', 'ws://10.10.6.124');
} else {
    $strHost = substr($_SERVER['HTTP_HOST'], 0, stripos($_SERVER['HTTP_HOST'], ':'));
	define('VIDEO_HOST', 'ws://' . $strHost);
}

define('VIDEO_HOST_PORT', '8082');
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>CDS-Online | Saint-Peterburg</title>
    <meta name="keywords" content="Трансляция, CDS, ЦДС, Виды Санкт-Петербурга"/>
    <meta name="description" content="Сайт онлайн трансляции объекта CDS-Online"/>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="/assets/js/jsmpeg.min.js"></script>
    <script src="/assets/js/player.js"></script>
    <script src="/assets/js/script.js?1"></script>
    <link rel="stylesheet" href="/assets/css/stylesheet.css?2">
    <script>
        window.arSettings = {
            video_host: '<?=VIDEO_HOST?>',
            video_port: '<?=VIDEO_HOST_PORT?>'
        }
    </script>
</head>
<body>
    <div class="logo"></div>
    <div class="time">
        <span class="hours"><?= date('H') ?></span>
        <span class="dots" data-text=":">:</span>
        <span class="minutes"><?= date('i') ?></span>
    </div>
    <canvas id="player"></canvas>
</body>
</html>
