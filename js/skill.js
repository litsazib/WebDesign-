$(function(){$("#slider-range-min").slider({range:"min",value:80,min:1,max:100,slide:function(n,a){$("#amount").val(a.value+"%")}}),$("#slider-range-min1").slider({range:"min",value:90,min:1,max:100,slide:function(n,a){$("#amount1").val(a.value+"%")}}),$("#slider-range-min2").slider({range:"min",value:60,min:1,max:100,slide:function(n,a){$("#amount2").val(a.value+"%")}}),$("#slider-range-min3").slider({range:"min",value:40,min:1,max:100,slide:function(n,a){$("#amount3").val(a.value+"%")}}),$("#slider-range-min4").slider({range:"min",value:50,min:1,max:100,slide:function(n,a){$("#amount4").val(a.value+"%")}}),$("#slider-range-min5").slider({range:"min",value:65,min:1,max:100,slide:function(n,a){$("#amount5").val(a.value+"%")}}),$("#slider-range-min6").slider({range:"min",value:75,min:1,max:100,slide:function(n,a){$("#amount6").val(a.value+"%")}}),$("#slider-range-min7").slider({range:"min",value:80,min:1,max:100,slide:function(n,a){$("#amount7").val(a.value+"%")}}),$("#slider-range-min8").slider({range:"min",value:85,min:1,max:100,slide:function(n,a){$("#amount8").val(a.value+"%")}}),$("#amount").val($("#slider-range-min").slider("value")+"%"),$("#amount1").val($("#slider-range-min1").slider("value")+"%"),$("#amount2").val($("#slider-range-min2").slider("value")+"%"),$("#amount2").val($("#slider-range-min3").slider("value")+"%"),$("#amount2").val($("#slider-range-min4").slider("value")+"%"),$("#amount2").val($("#slider-range-min5").slider("value")+"%"),$("#amount2").val($("#slider-range-min6").slider("value")+"%"),$("#amount2").val($("#slider-range-min7").slider("value")+"%"),$("#amount2").val($("#slider-range-min8").slider("value")+"%")});