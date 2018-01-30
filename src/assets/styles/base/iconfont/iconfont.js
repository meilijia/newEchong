(function(window){var svgSprite='<svg><symbol id="icon-xiaoxi" viewBox="0 0 1024 1024"><path d="M511.99488 876.15488c-31.0528 0-61.31712-2.81088-90.73664-7.70048l-212.72576 129.09056 0-214.8864C97.6384 704.80384 26.45504 585.40544 26.45504 451.30752c0-234.65472 217.37472-424.85248 485.53984-424.85248 268.17536 0 485.55008 190.19776 485.55008 424.85248C997.54496 685.93152 780.17024 876.15488 511.99488 876.15488zM511.99488 87.14752c-234.6496 0-424.84736 163.03616-424.84736 364.15488 0 123.40224 71.77728 232.25344 181.33504 298.13248l-1.92512 140.76928 142.83776-85.87776c32.92672 6.9888 67.15392 11.14112 102.59456 11.14112 234.65984 0 424.8576-163.05664 424.8576-364.16C936.85248 250.1888 746.65472 87.14752 511.99488 87.14752zM724.42368 420.96128 299.57632 420.96128c-16.77312 0-30.35136-13.59872-30.35136-30.3616 0-16.75776 13.57312-30.33088 30.35136-30.33088l424.85248 0c16.7424 0 30.35136 13.57312 30.35136 30.33088C754.77504 407.36256 741.16608 420.96128 724.42368 420.96128zM360.26368 542.34624l303.46752 0c16.7424 0 30.34112 13.57312 30.34112 30.35136 0 16.7424-13.59872 30.34624-30.34112 30.34624L360.26368 603.04384c-16.77312 0-30.34112-13.60384-30.34112-30.34624C329.92256 555.91936 343.49056 542.34624 360.26368 542.34624z"  ></path></symbol><symbol id="icon-xiazai16" viewBox="0 0 1024 1024"><path d="M768 384C732.672 384 704 412.672 704 448 704 483.328 732.672 512 768 512 803.328 512 832 483.328 832 448 832 412.672 803.328 384 768 384L768 384ZM512 832C474.624 832 438.528 827.648 403.84 820.256L253.184 910.816 255.2 762.368C139.712 692.928 64 578.112 64 448 64 235.936 264.576 64 512 64 759.424 64 960 235.936 960 448 960 660.096 759.424 832 512 832L512 832ZM512 0C229.248 0 0 200.608 0 448 0 589.408 75.04 715.328 192 797.408L192 1024 416.288 887.904C447.328 893.024 479.264 896 512 896 794.752 896 1024 695.424 1024 448 1024 200.608 794.752 0 512 0L512 0ZM256 384C220.672 384 192 412.672 192 448 192 483.328 220.672 512 256 512 291.328 512 320 483.328 320 448 320 412.672 291.328 384 256 384L256 384ZM512 384C476.672 384 448 412.672 448 448 448 483.328 476.672 512 512 512 547.328 512 576 483.328 576 448 576 412.672 547.328 384 512 384L512 384Z"  ></path></symbol><symbol id="icon-magnifier" viewBox="0 0 1024 1024"><path d="M750.3 198.7C598 46.4 351.1 46.4 198.7 198.7s-152.3 399.2 0 551.5C345.1 896.6 578.8 902.3 732 767.3l172.1 172.1 35.4-35.4-172.1-171.9c135-153.2 129.3-387-17.1-533.4z m39.3 403.8c-17.1 42.1-42.2 80-74.7 112.4-32.5 32.5-70.3 57.6-112.4 74.7-40.7 16.5-83.8 24.9-128 24.9s-87.2-8.4-128-24.9c-42.1-17.1-80-42.2-112.4-74.7s-57.6-70.3-74.7-112.4c-16.5-40.7-24.9-83.8-24.9-128s8.4-87.2 24.9-128c17.1-42.1 42.2-80 74.7-112.4s70.3-57.6 112.4-74.7c40.7-16.5 83.8-24.9 128-24.9s87.2 8.4 128 24.9c42.1 17.1 80 42.2 112.4 74.7 32.5 32.5 57.6 70.3 74.7 112.4 16.5 40.7 24.9 83.8 24.9 128s-8.4 87.3-24.9 128z" fill="" ></path></symbol><symbol id="icon-tubiao-" viewBox="0 0 1024 1024"><path d="M335.985778 767.886222l303.945955-303.945955 48.287289 48.287289-303.968711 303.945955z"  ></path><path d="M335.780978 255.931733l48.264533-48.241777 303.968711 303.9232-48.287289 48.287288z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)