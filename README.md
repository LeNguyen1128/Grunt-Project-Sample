Splash Jade Basic Template
version 1.0
notes:
1. CSS:
    - Fonts file will loaded by js to avoid blocking html parsing so all fonts face need put in fonts-face.less (and fonts-chrome.less -fix for chrome on Win 7)
2. JS:
    - JS library (jquery,modernizr,html5shiv,respond or anything script not merge to 1 file ) will put in js/libs folder while all JS plugins will put in js/libs/plugins folder as separate files.
    - All files in folder js/libs/plugins will minified and merge as plugins.min.js
    - Basic plugins are: bxSlider, fancybox, splash common (for cookie,local storage, query string ....)
    
##########################