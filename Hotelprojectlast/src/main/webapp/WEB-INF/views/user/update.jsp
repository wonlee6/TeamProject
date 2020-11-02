<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"
	language="java"%>
<!DOCTYPE HTML>
<html>
<head>
<title>HOTEL PROJECT</title>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!-- 합쳐지고 최소화된 최신 CSS -->
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
<!-- 부가적인 테마 -->
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<link rel="stylesheet" href="${path}/biz/resources/css/join.css" />
<script type="text/javascript" src="${path}/biz/resources/js/myPage.js"></script>
<style>
#btn {
	left: 110px;
}

#login {
	left: -400px;
}

#register {
	left: 50px;
}
</style>
</head>

<body>


	<%@ include file="../include/header.jsp"%>

	<div class="wrap">
		<div class="form-wrap">
			<br>
			<h1 align="center">MYPAGE</h1>
			<div class="button-wrap">
				<div id="btn"></div>
			</div>
			<div class="social-icons"></div>
			<form action="${pageContext.request.contextPath}/member/update" method="post" id="delForm">
				<label class="control-label" for="userName">아이디</label>
				 <input type="text" class="input-field1" value=${member.id } name="id" id="id" readonly>
				 <input type="password"	class="input-field1" name="pass" id="pass">
				 <input type="text" class="input-field1" value=${member.name } name="name" id="name">	
				 <input type="text"	class="input-field1" value=${member.phone } name="phone" id="phone">
				 <input type="text" class="input-field1" value=${member.email } name="email" id="email">
				
					 
					
				
					
				 <button class="btn btn-success" type="submit" id="submit">회원정보수정</button> 
				<br><br>
			</form>
				

		</div>
	</div>

</body>
</html>