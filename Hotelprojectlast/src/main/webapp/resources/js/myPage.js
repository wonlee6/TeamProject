$(document).ready(function(){
	$("#submit").on("click", function(){
		if($("#pass").val()==""){
			alert("비밀번호를 입력해주세요.");
			$("#pass").focus();
			return false;
		}
		$.ajax({
			url : "passChk",
			type : "POST",
			dataType : "json",
			data : $("#delForm").serializeArray(),
			success: function(data){
				console.log("성공");
				if(data==0){
					alert("패스워드가 틀렸습니다.");
					return;
				}else{
					if(confirm("회원탈퇴하시겠습니까?")){
						$("#delForm").submit();
					}
					
				}
			},errorerror : function(request, status, error) {
				var msg = "ERROR : " + request.status + "<br>"
				msg += +"내용 : " + request.responseText + "<br>" + error;
				console.log(msg);
			}
		})
	})
})