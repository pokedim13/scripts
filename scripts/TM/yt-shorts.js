
// ==UserScript==
// @name YouTube shorts in normal player
// @version 1.0.1
// @description This script will redirect YouTube shorts URLs to a normal player
// @author andr
// @match https://www.youtube.com/shorts/*
// @match https://youtube.com/shorts/*
// @grant none
// ==/UserScript==

const current_url = document.location.href;
const video_id = current_url.split('shorts/')[1];
const new_url = "https://www.youtube.com/v/" + video_id;
location.replace(new_url);