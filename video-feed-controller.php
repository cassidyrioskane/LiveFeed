<?php
require 'vendor/autoload.php';
$ffmpeg = FFMpeg\FFMpeg::create();
$video = $ffmpeg->open('rtsp://192.168.80.9/profile2/media.smp');