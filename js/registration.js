function goToAjax(name, email) {
    

    $.ajax({
            method: "POST",
            url: "https://script.google.com/macros/s/AKfycbz9HKtI89Ym3gvEoDCEl57RXRY0xOm2Ub3dhFzpHdIauVRpQQ/exec",
            data: { name: name, email: email }
        })
        .done(function(msg) {
            console.log(msg);
        });
}

function check() {
	var regName = $("#reg_name").val(),
    	regEmail = $("#reg_email").val(),
    	nameIsCheck = true,
    	emailIsCheck = true;
    
    console.log("name:" + regName);
    if ($.trim(regName) == "") {
    	console.log("~~~~");
    	$("#name_msg").html("Name can't be blank");
    	console.log("----");
    	nameIsCheck = false;
    }
    
    if ($.trim(regEmail) == "") {
    	$("#email_msg").html("Email can't be blank");
    	emailIsCheck = false;
    }
    
    if (!nameIsCheck || !emailIsCheck) {
    	return false;
    }
    
    // goToAjax();
}



$(function(){
	$("#submit_btn").on("click", check);
});
