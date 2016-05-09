
$(function (){
//	$(".inner-td").click(function(){
//		$(".inner-td").css("background-color","");
//		$(this).css("background-color","#00a2d3");
//	})
	// 申请试用页面的产品流程验证
//	$("#cancel").click(function (){
//		$("#inner_table input").removeAttr('checked');
// 		$("[name=username]").val(""); 
//	   	$("input[name=sex]").removeAttr('checked');
//	   	$("[name=province]:selected").attr("selected",false);
//	   	$("[name=industry]:selected").attr("selected",false);
//	   	$("[name=company]").val("");
//	   	$(".address").val("");
//	   	$("[name=iphone]").val("");
//	   	$("[type=email]").val("");
//	});
	$("#submit").click(function (){
		if( check() ){
			var rnd =  Math.random();
			var temp = "productDemonstration=" + ($("#inner_table input:checked").val()) +
					   "&useralias="+ ($("[name=username]").val()) + 
					   "&gender="+($("input[name=sex]").val())+
					   "&province="+($("[name=province]:selected").text())+
					   "&industry="+($("[name=industry]:selected").text())+
					   "&organname="+($("[name=company]").val())+
					   "&address="+($(".address").val())+
					   "&phone="+($("[name=iphone]").val())+
					   "&email="+($("[type=email]").val())+
					   "&applicationType="+ 1 +
					   "&creator="+($("[name=username]").val())+
					   "&token=4028fbc050f9918e0150fac6e0e7000d"
					   ;
			var enResult = strEnc(temp,"wldxmobileapp#365#$");
			var params = {"urlParams":enResult,"rnd":rnd};
 			var coverHeight = $("html").height();
 			$.ajax({
		   		async:true,
			    url: "http://192.168.1.254:8081/Learning3/app/Apply!submit.action",
			    type: "POST",
			    dataType: 'jsonp',
			    jsonp: 'jsoncallback',
			    data: params,
			    success:  function(e){
			    	console.log("success");
			    	console.log(e);
			    	if(e!="" && e!= undefined && e.errorMsg != undefined ){
			    		if("" != e.errorMsg){
			    			$(".cover").height(coverHeight);
							$(".dialog_group").css("display","block");
							$(".dialog2").css("display","none");
							$(".tips").html(e.errorMsg);
							
			    		}else{
			    			$(".cover").height(coverHeight);
							$(".dialog_group").css("display","block");
							$(".dialog1").css("display","none");
							$(".dialog2").css("display","block");
							$(".tips").html(e.resultMsg);
//							$("#inner_table input").removeAttr('checked');
//					   		$("[name=username]").val(""); 
//						   	$("input[name=sex]").removeAttr('checked');
//						   	$("[name=province]:selected").attr("selected",false);
//						   	$("[name=industry]:selected").attr("selected",false);
//						   	$("[name=company]").val("");
//						   	$(".address").val("");
//						   	$("[name=iphone]").val("");
//						   	$("[type=email]").val("");
							
			    		}
			    	}else{
			    		$(".cover").height(coverHeight);
						$(".dialog_group").css("display","block");
						$(".dialog2").css("display","none");
						$(".tips").html("申请试用失败！");
			    	}
			    }
			  //   error: function(xhr){
			  //   	console.log("error");
			  //   	console.log(xhr);
				 //    $(".cover").height(coverHeight);
					// $(".dialog_group").css("display","block");
					// $(".tips").html("e申请试用失败！");
				 //   }		 			   
			});
 		}
	});
// 点击确定2置空表单
	$(".ok2").click(function (){
		window.location.reload();
	});

// 点击确定1隐藏蒙板块

 	$(".ok1").click(function (){
 		$(".cover").unbind();
 		$(".dialog_group").css("display","none");
 	});

	//验证表单
	function check(){
 		var result = true;
 		var coverHeight = $("html").height();
 		//产品类型
 		var flag = 0;
		var $radio = $("#inner_table input");
		for(var i=0; i<$radio.length; i++){
			if( $radio[i].checked ===true){
				flag = 1;
				break;
			}
		}
		if(flag == 0){
 			$(".cover").css("height",coverHeight);
			$(".dialog_group").css("display","block");
			$(".dialog2").css("display","none");
			$(".tips").html("产品类型不能为空");
			return false;
		}
 		//姓名
 		var name = $("[name=username]").val();
 		if(null == name || "" == name){
 			$(".cover").height(coverHeight);
			$(".dialog_group").css("display","block");
			$(".dialog2").css("display","none");
			$(".tips").html("姓名不能为空");
 		    return false;
 		}
		//单位名称
 		var company = $("[name=company]").val();
 		if(null == company || "" == company){
 			$(".cover").height(coverHeight);
			$(".dialog_group").css("display","block");
			$(".dialog2").css("display","none");
			$(".tips").html("单位名称不能为空");
 		    return false;
 		}
 		//联系方式
 		var phone = $("[name=iphone]").val();
 		if(null == phone || "" == phone){
 			$(".cover").height(coverHeight);
			$(".dialog_group").css("display","block");
			$(".dialog2").css("display","none");
			$(".tips").html("联系方式不能为空");
 		    return false;
 		}else{
 			var p1 = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/; 
 	 		var myReg3=/^1([358][0-9]|45|47)[0-9]{8}$/;
 	 		if (!p1.test(phone) && !myReg3.test(phone)){
 	 		$(".cover").height(coverHeight);
			$(".dialog_group").css("display","block");
			$(".dialog2").css("display","none");
			$(".tips").html("您输入的联系方式有错误");
 	 	  	return false;   
 	 	  }
 		}
 		//电子邮箱
 		var email = $("[type=email]").val();
    	var myReg = /^[-._A-Za-z0-9]+@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/; 
	    if(null == email || "" == email){
 			$(".cover").height(coverHeight);
			$(".dialog_group").css("display","block");
			$(".dialog2").css("display","none");
			$(".tips").html("电子邮箱不能为空");
 		    return false;
 		}else{
 	 		if (!myReg.test(email)){
 	 		$(".cover").height(coverHeight);
			$(".dialog_group").css("display","block");
			$(".dialog2").css("display","none");
			$(".tips").html("您输入的电子邮箱有错误");
 	 	  	return false;   
 	 	  }
 		}
 		return result;
 	};
})
