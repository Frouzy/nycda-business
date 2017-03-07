$(document).ready(function () {
	
	$("#dropbtnBook1").click(function(){ 
		// console.log($(this).siblings())
        $("#text1").slideToggle("1000");
    });

$("#dropbtnBook2").click(function(){ 
		// console.log($(this).siblings())
        $("#text2").slideToggle("1000");
    });

$("#dropbtnBook3").click(function(){ 
		// console.log($(this).siblings())
        $("#text3").slideToggle("1000");
    });

});

//drie keer een # maken voor dropbtnBook en voor SlideText. Dan gaan ze niet tegelijk open. 