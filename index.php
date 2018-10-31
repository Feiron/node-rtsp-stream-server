<?php
/**
 * User: Feiron
 * Project: GlobalPost LTD
 * Date: 04.06.2018
 * Time: 15:37
 *
 *
 */

header('Cache-Control: no-store, no-store, must-revalidate');
header('Pragma: no-cache');
header('Expires: 0')

?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Газкомплект</title>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="/assets/js/jsmpeg.min.js"></script>
    <script src="/assets/js/player.js"></script>
    <script src="/assets/js/script.js?1"></script>
    <link rel="stylesheet" href="/assets/css/stylesheet.css">
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
