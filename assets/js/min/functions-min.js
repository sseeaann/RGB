$(function(){function o(){$("#ahh")[0].load(),$("#ahh")[0].play()}function c(){$("#ohhh")[0].load(),$("#ohhh")[0].play()}var s=$("body"),t=$("#R, #G, #B"),n={R:!1,G:!1,B:!1};$("#R").mouseenter(function(){s.css("background","#BF2D32"),t.css("color","#BF2D32"),$("#G, #B").css("opacity","0.25")}),$("#R").mouseout(function(){$("#G, #B").css("opacity","1")}),$("#G").mouseenter(function(){s.css("background","#358C3F"),t.css("color","#358C3F"),$("#R, #B").css("opacity","0.25")}),$("#G").mouseout(function(){$("#R, #B").css("opacity","1")}),$("#B").mouseenter(function(){s.css("background","#015F97"),t.css("color","#015F97"),$("#R, #G").css("opacity","0.25")}),$("#B").mouseout(function(){$("#R, #G").css("opacity","1")}),t.mouseenter(function(){n[$(this).attr("id")]=!0,o()}),t.mouseout(function(){n[$(this).attr("id")]=!1,s.css("background","#FFFFFF"),t.css("color","#FFFFFF"),setTimeout(function(){n.R||n.G||n.B||c()},300)})});