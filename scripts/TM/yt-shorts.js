// ==UserScript==
// @name shorts in basic player
// @namespace   akellare.ru
// @version 0.1.0
// @description open shorts in basic player
// @author sweetdogs
// @match https://www.youtube.com/shorts/*
// @match https://youtube.com/shorts/*
// @grant none
// @updateURL   https://gist.github.com/pokedim13/d0705e9504f840bae5893a0754201a80/raw/yt-shorts.js
// @downloadURL https://gist.github.com/pokedim13/d0705e9504f840bae5893a0754201a80/raw/yt-shorts.js
// ==/UserScript==

const current_url = document.location.href;
const video_id = current_url.split('shorts/')[1];
const new_url = "https://www.youtube.com/v/" + video_id;
location.replace(new_url);