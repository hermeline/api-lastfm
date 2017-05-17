<?php
$json = file_get_contents('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=bob+marley&api_key=81b851def420eaf86acaeb639dcc1464&format=json');
var_dump(json_decode($json,true));
 ?>
