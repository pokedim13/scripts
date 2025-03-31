// ==UserScript==
// @name        switch nixos.wiki to wiki.nixos.org
// @namespace   akellare.ru
// @match       https://nixos.wiki/*
// @grant       none
// @version     0.1.0
// @author      Sweetdogs
// @description Redirect nixos.wiki URLs to wiki.nixos.org
// @updateURL   https://gist.github.com/pokedim13/469a4fc6a3c5b419fe337886e1e3be10/raw/nixos-wiki.js
// @downloadURL https://gist.github.com/pokedim13/469a4fc6a3c5b419fe337886e1e3be10/raw/nixos-wiki.js
// ==/UserScript==

window.location.host = "wiki.nixos.org";