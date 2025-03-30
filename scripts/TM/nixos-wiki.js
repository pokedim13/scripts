// ==UserScript==
// @name        nixos.wiki -> wiki.nixos.org
// @namespace   sportshead.dev
// @match       https://nixos.wiki/*
// @grant       none
// @version     1.0
// @author      sportshead
// @description Redirect nixos.wiki URLs to wiki.nixos.org
// @updateURL   https://gist.github.com/sportshead/6a212d03952f7e5ef27907a5ab90e72c/raw/nixos-wiki.user.js
// @downloadURL https://gist.github.com/sportshead/6a212d03952f7e5ef27907a5ab90e72c/raw/nixos-wiki.user.js
// ==/UserScript==

window.location.host = "wiki.nixos.org";