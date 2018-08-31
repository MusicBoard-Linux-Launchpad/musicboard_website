var soundPath = "sounds/";

function play(name) {
	var sound = new Audio(soundPath + name);
	sound.play();
}

function active_key(element, r, g, b) {
    $(element).css("background-color", "rgb("+ r +", "+ g +","+ b +")");
}

var r = $("#R").val();
var g = $("#G").val();
var b = $("#B").val();

function get_val(){
	var r = $("#R").val();
    var g = $("#G").val();
    var b = $("#B").val();
}

$( document ).ready(function() {
    $(document).keypress(function(event){
		switch(event.which) {
			case 55:
				$("#btn-7").addClass("btn-img-active");
				play($("#btn-7").data("sound"));
			break;
			case 56:
				$("#btn-8").addClass("btn-img-active");
				play($("#btn-8").data("sound"));
			break;
			case 57:
				$("#btn-9").addClass("btn-img-active");
				play($("#btn-9").data("sound"));
			break;
			case 52:
				$("#btn-4").addClass("btn-img-active");
				play($("#btn-4").data("sound"));
			break;
			case 53:
				$("#btn-5").addClass("btn-img-active");
				play($("#btn-5").data("sound"));
			break;
			case 54:
				$("#btn-6").addClass("btn-img-active");
				play($("#btn-6").data("sound"));
			break;
			case 49:
				$("#btn-1").addClass("btn-img-active");
				play($("#btn-1").data("sound"));
			break;
			case 50:
				$("#btn-2").addClass("btn-img-active");
				play($("#btn-2").data("sound"));
			break;
			case 51:
				$("#btn-3").addClass("btn-img-active");
				play($("#btn-3").data("sound"));
			break;
			case 47:
				$("#btn-divide").addClass("btn-img-active");
				play($("#btn-divide").data("sound"));
			break;
			case 42:
				$("#btn-multiply").addClass("btn-img-active");
				play($("#btn-multiply").data("sound"));
			break;
			case 45:
				$("#btn-minus").addClass("btn-img1-active");
				play($("#btn-minus").data("sound"));
			break;
			case 43:
				$("#btn-plus").addClass("btn-img2-active");
				play($("#btn-plus").data("sound"));
			break;
			case 13:
				$("#btn-enter").addClass("btn-img2-active");
				play($("#btn-enter").data("sound"));
			break;
			case 48:
				$("#btn-0").addClass("btn-img3-active");
				play($("#btn-0").data("sound"));
			break;
			case 46:
				$("#btn-pct").addClass("btn-img1-active");
				play($("#btn-pct").data("sound"));
			break;

			case 97:
				$("#btn-a").addClass("btn-key-active");
				play($("#btn-a").data("sound"));
			break;
			case 115:
				$("#btn-s").addClass("btn-key-active");
				play($("#btn-s").data("sound"));
			break;
			case 100:
				$("#btn-d").addClass("btn-key-active");
				play($("#btn-d").data("sound"));
			break;
			case 102:
				$("#btn-f").addClass("btn-key-active");
				play($("#btn-f").data("sound"));
			break;
			case 103:
				$("#btn-g").addClass("btn-key-active");
				play($("#btn-g").data("sound"));
			break;
			case 104:
				$("#btn-h").addClass("btn-key-active");
				play($("#btn-h").data("sound"));
			break;
			case 106:
				$("#btn-j").addClass("btn-key-active");
				play($("#btn-j").data("sound"));
			break;
			case 107:
				$("#btn-k").addClass("btn-key-active");
				play($("#btn-j").data("sound"));
			break;
			case 108:
				$("#btn-l").addClass("btn-key-active");
				play($("#btn-l").data("sound"));
			break;
			case 59:
				$("#btn-pct-c").addClass("btn-key-active");
				play($("#btn-pct-c").data("sound"));
			break;
			case 39:
				$("#btn-gh").addClass("btn-key-active");
				play($("#btn-gh").data("sound"));
			break;
			case 92:
				$("#btn-vd").addClass("btn-key-active");
				play($("#btn-d").data("sound"));
			break;

			case 119:
				active_key($("#btn-w"), $("#R").val()-50, $("#G").val()-50, $("#B").val()-50);
				play($("#btn-w").data("sound"));
			break;
			case 101:
				active_key($("#btn-e"), $("#R").val()-50, $("#G").val()-50, $("#B").val()-50);
				play($("#btn-e").data("sound"));
			break;
			case 116:
				active_key($("#btn-t"), $("#R").val()-50, $("#G").val()-50, $("#B").val()-50);
				play($("#btn-t").data("sound"));
			break;
			case 121:
				active_key($("#btn-y"), $("#R").val()-50, $("#G").val()-50, $("#B").val()-50);
				play($("#btn-y").data("sound"));
			break;
			case 117:
				active_key($("#btn-u"), $("#R").val()-50, $("#G").val()-50, $("#B").val()-50);
				play($("#btn-u").data("sound"));
			break;
			case 111:
				active_key($("#btn-o"), $("#R").val()-50, $("#G").val()-50, $("#B").val()-50);
				play($("#btn-o").data("sound"));
			break;
			case 112:
				active_key($("#btn-p"), $("#R").val()-50, $("#G").val()-50, $("#B").val()-50);
				play($("#btn-p").data("sound"));
			break;
			case 93:
				active_key($("#btn-b"), $("#R").val()-50, $("#G").val()-50, $("#B").val()-50);
				play($("#btn-b").data("sound"));
			break;
		}
	});

	$(".btn-img").mousedown(function() {
		$(this).addClass("btn-img-active");
		play($(this).data("sound"));
	});

	$(".btn-img1").mousedown(function() {
		$(this).addClass("btn-img1-active");
		play($(this).data("sound"));
	});

    $(".btn-img2").mousedown(function() {
		$(this).addClass("btn-img2-active");
		play($(this).data("sound"));
	});

    $(".btn-img3").mousedown(function() {
		$(this).addClass("btn-img3-active");
		play($(this).data("sound"));
	});

    $(".btn-key-b").mousedown(function() {
		$(this).addClass("btn-key-b-active");
		active_key($(this), $("#R").val()-50, $("#G").val()-50, $("#B").val()-50);
		play($(this).data("sound"));
	});

	$(".btn-key").mousedown(function() {
		$(this).addClass("btn-key-active");
		play($(this).data("sound"));
	});

	$(".btn-sound").mouseup(function() {
		$(this).removeClass("btn-img-active");
		$(this).removeClass("btn-img1-active");
		$(this).removeClass("btn-img2-active");
		$(this).removeClass("btn-img3-active");
		$(this).removeClass("btn-key-active");
		$(this).removeClass("btn-key-b-active");
	});

	$(document).keyup(function(event){
		$(".btn-sound").removeClass("btn-img-active");
		$(".btn-sound").removeClass("btn-img1-active");
		$(".btn-sound").removeClass("btn-img2-active");
		$(".btn-sound").removeClass("btn-img3-active");
		$(".btn-sound").removeClass("btn-key-active");
		$(".btn-sound").removeClass("btn-key-b-active");
		active_key($(".btn-key-b"), $("#R").val(), $("#G").val(), $("#B").val());
	});

    $("#btn-send-keys").click(function() {
    	var r = $("#R").val();
    	var g = $("#G").val();
    	var b = $("#B").val();
    	active_key($("#btn-w"), r, g, b);
    	active_key($("#btn-e"), r, g, b);
    	active_key($("#btn-t"), r, g, b);
    	active_key($("#btn-y"), r, g, b);
    	active_key($("#btn-u"), r, g, b);
    	active_key($("#btn-o"), r, g, b);
    	active_key($("#btn-p"), r, g, b);
    	active_key($("#btn-b"), r, g, b);
    });

    $("#btn-send-line").click(function() {
    	active_key($(".separator"), $("#R").val(), $("#G").val(), $("#B").val());
    });
   
    $("#btn-send-main").click(function() {
    	active_key($(".under-btn1"), $("#R").val(), $("#G").val(), $("#B").val());
    });

    $("#btn-default").click(function() {
    	$(".btn-key-b").css("background-color", "#9D92D4");
    	$(".separator").css("background-color", "#FF9F9F");
    	$(".under-btn1").css("background-color", "#7E71BF");
    	$("#R").val(157);
    	$("#G").val(146);
    	$("#B").val(215);
    });

});

