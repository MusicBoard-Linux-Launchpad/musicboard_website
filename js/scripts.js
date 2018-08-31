var soundPath = "sounds/";
var vol=1;
function play(name) {
	var sound = new Audio(soundPath + name);
	sound.volume = vol;
	sound.play();
}

function myFunction(value) {
    //console.log(value);
    vol = value;
}

function myFunction1() {
    //console.log(value);
    active_key($("#Rgb"), $("#R").val(), $("#G").val(), $("#B").val());
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
				play($("#btn-k").data("sound"));
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
				play($("#btn-vd").data("sound"));
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
		active_key($(".btn-key-b"), $("#R").val(), $("#G").val(), $("#B").val());
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

    $("#btn-key2").click(function() {
       $("#btn-w").data('sound', "Pno2/2C_B.wav");
       $("#btn-e").data('sound', "Pno2/2D_B.wav");
       $("#btn-t").data('sound', "Pno2/2F_B.wav");
       $("#btn-y").data('sound', "Pno2/2G_B.wav");
       $("#btn-u").data('sound', "Pno2/2A_B.wav");
       $("#btn-o").data('sound', "Pno2/2C2_B.wav");
       $("#btn-p").data('sound', "Pno2/2D2_B.wav");
       $("#btn-b").data('sound', "Pno2/2F2_B.wav");
       $("#btn-a").data('sound', "Pno2/2C.wav");
       $("#btn-s").data('sound', "Pno2/2D.wav");
       $("#btn-d").data('sound', "Pno2/2E.wav");
       $("#btn-f").data('sound', "Pno2/2F.wav");
       $("#btn-g").data('sound', "Pno2/2G.wav");
       $("#btn-h").data('sound', "Pno2/2A.wav");
       $("#btn-j").data('sound', "Pno2/2B.wav");
       $("#btn-k").data('sound', "Pno2/2C2.wav");
       $("#btn-l").data('sound', "Pno2/2D2.wav");
       $("#btn-pct-c").data('sound', "Pno2/2E2.wav");
       $("#btn-gh").data('sound', "Pno2/2F2.wav");
       $("#btn-vd").data('sound', "Pno2/2G2.wav");
        //$("#btn-3").text("skkh");
    });

	$("#btn-key1").click(function() {
       $("#btn-w").data('sound', "Pno1/C_B.wav");
       $("#btn-e").data('sound', "Pno1/D_B.wav");
       $("#btn-t").data('sound', "Pno1/F_B.wav");
       $("#btn-y").data('sound', "Pno1/G_B.wav");
       $("#btn-u").data('sound', "Pno1/A_B.wav");
       $("#btn-o").data('sound', "Pno1/C2_B.wav");
       $("#btn-p").data('sound', "Pno1/D2_B.wav");
       $("#btn-b").data('sound', "Pno1/F2_B.wav");
       $("#btn-a").data('sound', "Pno1/C.wav");
       $("#btn-s").data('sound', "Pno1/D.wav");
       $("#btn-d").data('sound', "Pno1/E.wav");
       $("#btn-f").data('sound', "Pno1/F.wav");
       $("#btn-g").data('sound', "Pno1/G.wav");
       $("#btn-h").data('sound', "Pno1/A.wav");
       $("#btn-j").data('sound', "Pno1/B.wav");
       $("#btn-k").data('sound', "Pno1/C2.wav");
       $("#btn-l").data('sound', "Pno1/D2.wav");
       $("#btn-pct-c").data('sound', "Pno1/E2.wav");
       $("#btn-gh").data('sound', "Pno1/F2.wav");
       $("#btn-vd").data('sound', "Pno1/G2.wav");
        //$("#btn-3").text("skkh");
    });

	$("#btn-key3").click(function() {
       $("#btn-w").data('sound', "Pno3/4_2_CB.wav");
       $("#btn-e").data('sound', "Pno3/4_4_DB.wav");
       $("#btn-t").data('sound', "Pno3/4_7_FB.wav");
       $("#btn-y").data('sound', "Pno3/4_9_GB.wav");
       $("#btn-u").data('sound', "Pno3/4_11_AB.wav");
       $("#btn-o").data('sound', "Pno3/4_14_CB.wav");
       $("#btn-p").data('sound', "Pno3/4_16_DB.wav");
       $("#btn-b").data('sound', "Pno3/4_19_FB.wav");
       $("#btn-a").data('sound', "Pno3/4_1_C.wav");
       $("#btn-s").data('sound', "Pno3/4_3_D.wav");
       $("#btn-d").data('sound', "Pno3/4_5_E.wav");
       $("#btn-f").data('sound', "Pno3/4_6_F.wav");
       $("#btn-g").data('sound', "Pno3/4_8_G.wav");
       $("#btn-h").data('sound', "Pno3/4_10_A.wav");
       $("#btn-j").data('sound', "Pno3/4_12_B.wav");
       $("#btn-k").data('sound', "Pno3/4_13_C.wav");
       $("#btn-l").data('sound', "Pno3/4_15_D.wav");
       $("#btn-pct-c").data('sound', "Pno3/4_17_E.wav");
       $("#btn-gh").data('sound', "Pno3/4_17_1_F.wav");
       $("#btn-vd").data('sound', "Pno3/4_20_G.wav");
        //$("#btn-3").text("skkh");
    });

    $("#btn-set1").click(function() {
       $("#btn-divide").text("Down");
       $("#btn-multiply").text("Wbl");
       $("#btn-minus").text("Wbl");
       $("#btn-7").text("Kick");
       $("#btn-8").text("Snare");
       $("#btn-9").text("Orch");
       $("#btn-plus").text("UpDn");
       $("#btn-4").text("Drop");
       $("#btn-5").text("Bam");
       $("#btn-6").text("Rpt");
       $("#btn-1").text("Wom");
       $("#btn-2").text("Lift");
       $("#btn-3").text("Pass");
       $("#btn-enter").text("Lift");
       $("#btn-0").text("Low");
       $("#btn-pct").text("Wbl");
       $("#btn-divide").data('sound', "Sounds/Down.wav");
       $("#btn-multiply").data('sound', "Sounds/LowEnd_FX_09.wav");
       $("#btn-minus").data('sound', "Sounds/LowEnd_FX_03.wav");
       $("#btn-7").data('sound', "Sounds/TMS3_NuKick_165.wav");
       $("#btn-8").data('sound', "Sounds/TMS3_Snare_002.wav");
       $("#btn-9").data('sound', "Sounds/Orchestra Hit 001 Revved.wav");
       $("#btn-plus").data('sound', "Sounds/LowEnd_FX_01.wav");
       $("#btn-4").data('sound', "Sounds/Bass Drop (Extended) (Louder).wav");
       $("#btn-5").data('sound', "Sounds/ufx_imp_atomic.wav");
       $("#btn-6").data('sound', "Sounds/LowEnd_FX_01.wav");
       $("#btn-1").data('sound', "Sounds/FX4.wav");
       $("#btn-2").data('sound', "Sounds/LowEnd_FX_04.wav");
       $("#btn-3").data('sound', "Sounds/Pass.wav");
       $("#btn-enter").data('sound', "Sounds/LowEnd_FX_14.wav");
       $("#btn-0").data('sound', "Sounds/LowEnd_FX_02.wav");
       $("#btn-pct").data('sound', "Sounds/LowEnd_FX_07.wav	");
    });

    $("#btn-set2").click(function() {
   	   $("#btn-divide").text("Bam");
       $("#btn-multiply").text("Wbl");
       $("#btn-minus").text("Lift");
       $("#btn-7").text("Kick");
       $("#btn-8").text("Snare");
       $("#btn-9").text("Wom");
       $("#btn-plus").text("UpDn");
       $("#btn-4").text("Orch");
       $("#btn-5").text("Rpt");
       $("#btn-6").text("Wbl");
       $("#btn-1").text("Low");
       $("#btn-2").text("Drop");
       $("#btn-3").text("Clk");
       $("#btn-enter").text("Lift");
       $("#btn-0").text("Low");
       $("#btn-pct").text("Wbl");
       $("#btn-divide").data('sound', "Sounds/ufx_imp_atomic.wav");
       $("#btn-multiply").data('sound', "Sounds/LowEnd_FX_01.wav");
       $("#btn-minus").data('sound', "Sounds/LowEnd_FX_02.wav");
       $("#btn-7").data('sound', "Sounds/TMS3_NuKick_165.wav");
       $("#btn-8").data('sound', "Sounds/TMS3_Snare_002.wav");
       $("#btn-9").data('sound', "Sounds/FX4.wav");
       $("#btn-plus").data('sound', "Sounds/LowEnd_FX_03.wav");
       $("#btn-4").data('sound', "Sounds/Orchestra Hit 001 Revved.wav");
       $("#btn-5").data('sound', "Sounds/LowEnd_FX_07.wav");
       $("#btn-6").data('sound', "Sounds/LowEnd_FX_08.wav");
       $("#btn-1").data('sound', "Sounds/LowEnd_FX_09.wav");
       $("#btn-2").data('sound', "Sounds/Bass Drop (Extended) (Louder).wav");
       $("#btn-3").data('sound', "Sounds/FX5.wav");
       $("#btn-enter").data('sound', "Sounds/LowEnd_FX_04.wav");
       $("#btn-0").data('sound', "Sounds/LowEnd_FX_05.wav");
       $("#btn-pct").data('sound', "Sounds/LowEnd_FX_06.wav");
    });

    $("#btn-set3").click(function() {
   	   $("#btn-divide").text("UpDn");
       $("#btn-multiply").text("Wbl");
       $("#btn-minus").text("Lift");
       $("#btn-7").text("Drop");
       $("#btn-8").text("Pass");
       $("#btn-9").text("Lock");
       $("#btn-plus").text("Rpt");
       $("#btn-4").text("Down");
       $("#btn-5").text("Wom");
       $("#btn-6").text("Orch");
       $("#btn-1").text("Bam");
       $("#btn-2").text("Wbl");
       $("#btn-3").text("Lift");
       $("#btn-enter").text("Low");
       $("#btn-0").text("Tble");
       $("#btn-pct").text("Wbl");
       $("#btn-divide").data('sound', "Sounds/LowEnd_FX_17.wav");
       $("#btn-multiply").data('sound', "Sounds/LowEnd_FX_03.wav");
       $("#btn-minus").data('sound', "Sounds/LowEnd_FX_04.wav");
       $("#btn-7").data('sound', "Sounds/Bass Drop (Extended) (Louder).wav");
       $("#btn-8").data('sound', "Sounds/Pass.wav");
       $("#btn-9").data('sound', "Sounds/DROP 07 Scos Sfarsit Scos.wav");
       $("#btn-plus").data('sound', "Sounds/LowEnd_FX_07.wav");
       $("#btn-4").data('sound', "Sounds/Down.wav");
       $("#btn-5").data('sound', "Sounds/FX4.wav");
       $("#btn-6").data('sound', "Sounds/Orchestra Hit 001 Revved.wav");
       $("#btn-1").data('sound', "Sounds/ufx_imp_atomic.wav");
       $("#btn-2").data('sound', "Sounds/LowEnd_FX_01.wav");
       $("#btn-3").data('sound', "Sounds/LowEnd_FX_14.wav");
       $("#btn-enter").data('sound', "Sounds/LowEnd_FX_09.wav");
       $("#btn-0").data('sound', "Sounds/LowEnd_FX_08.wav");
       $("#btn-pct").data('sound', "Sounds/LowEnd_FX_10.wav");
    });

	$("#btn-set4").click(function() {
   	   $("#btn-divide").text("Clk");
       $("#btn-multiply").text("Swp");
       $("#btn-minus").text("Wbl");
       $("#btn-7").text("Kick");
       $("#btn-8").text("Snare");
       $("#btn-9").text("Wom");
       $("#btn-plus").text("Lift");
       $("#btn-4").text("Pass");
       $("#btn-5").text("Drop");
       $("#btn-6").text("Lock");
       $("#btn-1").text("Low");
       $("#btn-2").text("Orch");
       $("#btn-3").text("Bam");
       $("#btn-enter").text("Low");
       $("#btn-0").text("Lift");
       $("#btn-pct").text("Rpt");
       $("#btn-divide").data('sound', "Sounds/LowEnd_FX_01.wav");
       $("#btn-multiply").data('sound', "Sounds/LowEnd_FX_02.wav");
       $("#btn-minus").data('sound', "Sounds/LowEnd_FX_03.wav");
       $("#btn-7").data('sound', "Sounds/TMS3_NuKick_165.wav");
       $("#btn-8").data('sound', "Sounds/TMS3_Snare_002.wav");
       $("#btn-9").data('sound', "Sounds/FX4.wav");
       $("#btn-plus").data('sound', "Sounds/LowEnd_FX_04.wav");
       $("#btn-4").data('sound', "Sounds/Pass.wav");
       $("#btn-5").data('sound', "Sounds/Bass Drop (Extended) (Louder).wav");
       $("#btn-6").data('sound', "Sounds/DROP 07 Scos Sfarsit Scos.wav");
       $("#btn-1").data('sound', "Sounds/Down.wav");
       $("#btn-2").data('sound', "Sounds/Orchestra Hit 001 Revved.wav");
       $("#btn-3").data('sound', "Sounds/ufx_imp_atomic.wav");
       $("#btn-enter").data('sound', "Sounds/LowEnd_FX_05.wav");
       $("#btn-0").data('sound', "Sounds/LowEnd_FX_06.wav");
       $("#btn-pct").data('sound', "Sounds/LowEnd_FX_07.wav");
    });

    $("#btn-set1").mouseup(function() {
       $("#btn-set1").removeClass("btn-set-active");
    });

	$("#btn-set2").mouseup(function() {
       $("#btn-set2").removeClass("btn-set-active");
    });

    $("#btn-set2").mousedown(function() {
       $("#btn-set2").addClass("btn-set-active");
    });

    $("#btn-set1").mousedown(function() {
       $("#btn-set1").addClass("btn-set-active");
    });

   $("#btn-set3").mouseup(function() {
       $("#btn-set3").removeClass("btn-set-active");
    });

	$("#btn-set4").mouseup(function() {
       $("#btn-set4").removeClass("btn-set-active");
    });

    $("#btn-set3").mousedown(function() {
       $("#btn-set3").addClass("btn-set-active");
    });

    $("#btn-set4").mousedown(function() {
       $("#btn-set4").addClass("btn-set-active");
    });


    $("#btn-key1").mouseup(function() {
       $("#btn-key1").removeClass("btn-key-select1");
    });

	$("#btn-key2").mouseup(function() {
       $("#btn-key2").removeClass("btn-key-select1");
    });


	$("#btn-key3").mouseup(function() {
       $("#btn-key3").removeClass("btn-key-select1");
    });

    $("#btn-key1").mousedown(function() {
       $("#btn-key1").addClass("btn-key-select1");
    });

    $("#btn-key2").mousedown(function() {
       $("#btn-key2").addClass("btn-key-select1");
    });

    $("#btn-key3").mousedown(function() {
       $("#btn-key3").addClass("btn-key-select1");
    });

    $("#btn-default").click(function() {
    	$(".btn-key-b").css("background-color", "#9D92D4");
    	$(".separator").css("background-color", "#FF9F9F");
    	$(".under-btn1").css("background-color", "#7E71BF");
    	$("#R").val(157);
    	$("#G").val(146);
    	$("#B").val(215);
    });

     $("#vol").oninput(function() {
     	console.log($(this).val());
     });

     $("#R").click(function(){
     	active_key($("#Rgb"), $("#R").val(), $("#G").val(), $("#B").val());	
     });

     $("#G").click(function(){
     	active_key($("#Rgb"), $("#R").val(), $("#G").val(), $("#B").val());	
     });

     $("#B").click(function(){
     	active_key($("#Rgb"), $("#R").val(), $("#G").val(), $("#B").val());	
     });
});

