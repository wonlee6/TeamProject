<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" language="java" %>
<!DOCTYPE HTML>
<html>
<head>
<title>HOTEL PROJECT</title>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<%@ page import="com.hotel.biz.VO.MemberVO" %>
<%@ page import="com.hotel.biz.DAO.JoinDAO" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<link rel="stylesheet" href="/biz/resources/css/join.css" />
<style>
#btn{
left:110px;
}
#login{
left:-400px;
}
#register{
left:50px;
}
</style>
</head>
<body>
<script type="text/javascript">
		$(document).ready(function(){
			// 취소
			$(".cencle").on("click", function(){
				
				location.href = "/login";
						    
			})
		
			$("#submit").on("click", function(){
				if($("#id").val()==""){
					alert("아이디를 입력해주세요.");
					$("#id").focus();
					return false;
				}
				if($("#pass").val()==""){
					alert("비밀번호를 입력해주세요.");
					$("#pass").focus();
					return false;
				}
				if($("#name").val()==""){
					alert("성명을 입력해주세요.");
					$("#name").focus();
					return false;
				}
				if($("#phone").val()==""){
					alert("핸드폰을 입력해주세요.");
					$("#phone").focus();
					return false;
				}
				if($("#email").val()==""){
					alert("이메일을 입력해주세요.");
					$("#email").focus();
					return false;
				}
				var idChkVal = $("#idChk").val();
				if(idChkVal == "N"){
					alert("중복확인 버튼을 눌러주세요.");
					return false;
				}else if(idChkVal == "Y"){
					$("#regForm").submit();
				}
			});
		})
		
		function fn_idChk(){
			$.ajax({
				url : "idChk",
				type : "post",
				dataType : "json",
				data : {"id" : $("#id").val()},
				success : function(data){
					if(data == 1){
						alert("중복된 아이디입니다.");
					}else if(data == 0){
						$("#idChk").attr("value", "Y");
						alert("사용가능한 아이디입니다.");
					}
				}
			})
		}
	</script>

<%@ include file="../include/header.jsp" %>
	<div class="page-wrap" content="width=device-width, initial-scale=1">
			<section id="contact">

		<div class="wrap">
            <div class="form-wrap">
            <br>
                <h1 align="center">REGISTER</h1>
                <div class="button-wrap">
                    <div id="btn"></div>
                    <button type="button" class="togglebtn" onclick="location.href='${pageContext.request.contextPath}/user/loginpage.do'">LOG IN</button>
                    <button type="button" class="togglebtn" onclick="location.href='${pageContext.request.contextPath}/user/joinpage.do'">REGISTER</button>
                </div>
                 <div class="social-icons">
                    <img src="/biz/resources/images/fb.png" alt="facebook">
                    <img src="/biz/resources/images/tw.png" alt="twitter">
                    <img src="/biz/resources/images/gl.png" alt="google">
                </div>                
                <form action="${pageContext.request.contextPath}/member/register" method="post" id="regForm">
                    <input type="text" id="id" name="id" class="input-field1" placeholder="User name or Email" >
                    <button class="idChk" type="button" id="idChk" onclick="fn_idChk();" value="N">중복확인</button> 
                    <input type="password" class="input-field1" placeholder="Enter Password" id="pass" name="pass">
                    <input type="text" class="input-field1" name="name"  id="name"  placeholder="Name">
                    <input type="text" class="input-field1" name="phone"  id="phone"  placeholder="Phone">
                    <input type="text" class="input-field1" name="email"  id="email"  placeholder="Email"> 
                    <button class="submit1" type="submit" id="submit">REGISTER</button>
                </form>
                
                
            </div>
        </div>
  
			</section>

			<!-- Footer -->

	</div>

</body>
</html>