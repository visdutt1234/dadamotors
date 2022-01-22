$(document).ready(function() {
    $(".mobileBtn").click(function(){
        $("body").addClass('openNav');
    });
    $(".overLay").click(function(){
        $("body").removeClass('openNav');;
    });
});

if($(window).width() < 1200) {
	$(".hasChild").click(function(){
		if (!$(this).hasClass('openSubMenu')) {
			$(this).addClass('openSubMenu');
			$(this).find('.subMenu').slideDown();
		} else {
			$(this).removeClass('openSubMenu');
			$(this).find('.subMenu').slideUp();
		}
		
	});
}

$('.homeTabSection .tabNav li').click(function() {
    if ($(this).hasClass('active')) {
        //$(this).removeClass('active');
    } else {
        $('.homeTabSection .tabNav li').removeClass('active');
        $(this).addClass('active');
    }
});
$(".enqueryTabNav li").click(function(){
    var thisTab = $(this).parents('.enqueryTabSection');
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        thisTab.find(".enqueryTabBlock").hide("slow");
    } else {
        $('.enqueryTabNav li').removeClass('active');
        $(this).addClass('active');
        $(".enqueryTabBlock").hide("slow");
        thisTab.find(".enqueryTabBlock").eq($(this).index()).show("slow");
    }
});
if ($(window).width() < 1025) {
    $(".enqueryTabSectionMobile li:first-child").trigger("click");
}


$(".dropDown").click(function(e){
    e.stopPropagation();
    if ($(this).find('.sortList').is(':visible')) {
        $(this).find('.sortList').slideUp();
    } else {
        $('.sortList').slideUp();
        $(this).find('.sortList').slideDown();
    }
});
$(".sortList li").click(function(){
    var opt = $(this).find('span').text();
    $(this).parents('.dropDown').find('label').text(opt);
    $(this).parent('.sortList').slideUp();
});
$("body").click(function(){
    if ($('.sortList').is(':visible')) {
        $(this).find('.sortList').slideUp();
    }
});


//finance page for js code
$(".documentInfoBlock .tabNav li").click(function(){
  if (!$(this).hasClass('active')) {
    $(".documentInfoBlock .tabNav li").removeClass('active');
    var tabIndex = $(this).index();
    $(".documentInfoBlock .tabNav li").eq(tabIndex).addClass('active');
    $(".documentInfoBlock .tabBlock").slideUp();
    $(".documentInfoBlock .tabBlock").eq(tabIndex).slideDown();
  }
});

$(".calcuteNow").click(function(){
  var amount = $(".loanEmiBlock .amount").val();
  var interest = $(".loanEmiBlock .interest").val();
  var month;
  //console.log("amount:"+amount+", interest:"+interest);
  //var emiValA = (amount * (interest/1200) * ( 1 + (interest/1200))**12 ) / ((1 + (interest/1200))**12 - 1);
  //console.log("emiValA(12)",emiValA);

  //var emiVal = getValue(amount,interest,month);
  //console.log("emiVal",emiVal);

  var emiValA = getValue(amount,interest,12);
  $(".loanEmiBlock .emiValA").text('Rs. '+emiValA+'/-');
  var emiValB = getValue(amount,interest,24);
  $(".loanEmiBlock .emiValB").text('Rs. '+emiValB+'/-');
  var emiValC = getValue(amount,interest,36);
  $(".loanEmiBlock .emiValC").text('Rs. '+emiValC+'/-');
  var emiValD = getValue(amount,interest,48);
  $(".loanEmiBlock .emiValD").text('Rs. '+emiValD+'/-');
  var emiValE = getValue(amount,interest,60);
  $(".loanEmiBlock .emiValE").text('Rs. '+emiValE+'/-');
  var emiValF = getValue(amount,interest,72);
  $(".loanEmiBlock .emiValF").text('Rs. '+emiValF+'/-');
  var emiValG = getValue(amount,interest,84);
  $(".loanEmiBlock .emiValG").text('Rs. '+emiValG+'/-');

  function getValue(amount,interest,month) {
    var monthVal = (amount * (interest/1200) * ( 1 + (interest/1200))**month ) / ((1 + (interest/1200))**month - 1);
    return Math.round(monthVal).toLocaleString();
  }
});


//custome form validation
$(".customeForm .input, .loanEmiBlock .input").focusout(function(){
  if ($(this).val() !== '') {
    $(this).parent().addClass('fill');
  } else {
    $(this).parent().removeClass('fill');
  }
});

/*var rejexEmail = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
var numbers = /^[0-9]+$/;
$(".customeForm .input").change(function(){
  var $this = $(this);
  formValidation($this);
});
$(".customeForm .input").keydown(function(){
  var $this = $(this);
  setTimeout(function(){
    formValidation($this);
  }, 100);
});
function formValidation($this) {
  if ($this.attr('data-type') == 'email') {
    if (rejexEmail.test($this.val())) {
      $this.parent().find('.error').hide();
    } else {
      $this.parent().find('.error').show();
    }
  } else if ($this.attr('data-type') == 'number') {
    if ($this.val().length == 10 && numbers.test($this.val())) {
      $this.parent().find('.error').hide();
    } else {
      $this.parent().find('.error').show();
    }
  } else {
    if ($this.val() !== '') {
      $this.parent().find('.error').hide();
    } else {
      $this.parent().find('.error').show();
    }
  }
}
$(".customeForm .input").focusout(function(){
  if ($(this).val() !== '') {
    $(this).parent().addClass('fill');
  } else {
    $(this).parent().removeClass('fill');
  }
});

$(".customeForm .submitBtn").click(function(){
  console.log('clcik');
  $(".customeForm .required").each(function(){
    if ($(this).find('.input').val() == '') {
      $(this).find('.error').show();
    } else {
      $(this).find('.error').hide();
    }
  });
});*/


/*var cites = [
      {cityName:"Ajmer"},
      {cityName:"Agra"},
      {cityName:"Jaipur"},
      {cityName:"Pune"},
      {cityName:"Gurgon"},
      {cityName:"Udipur"},
      {cityName:"Amritsar"},
      {cityName:"Goa"},
      {cityName:"Delhi"},
      {cityName:"Faridabad"}
      ];
for (var i = cites.length - 1; i >= 0; i--) {
  $(".dataList").append('<li>'+cites[i].cityName+'</li>');
}
$(".selectCity .input").focus(function(){
  $(".popUpContainer").animate({
        scrollTop: $(this).offset().top - 10
    }, 1000);
});
$(".selectCity .input").focusout(function(){
  setTimeout(function(){
    $(".dataList").hide();
  }, 200);
});
$(".selectCity .input").keyup(function(){
  var keyValue = $(this).val().toLowerCase();
  if (keyValue == "") {
    $(".dataList").hide();
  } else {
    $(".dataList").show();
    $(".dataList li").filter(function(){
      $(this).toggle($(this).text().toLowerCase().indexOf(keyValue) > -1);
    });
  }
});
$(".dataList").on('click','li',function(){
  $(".selectCity .input").val($(this).text());
  $(".dataList").hide();
});
*/