<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ include file="/WEB-INF/views/include/header.jsp"%>
<!DOCTYPE html>
<html>
<head>
<title>로그인</title>
<link rel="stylesheet" href="/biz/resources/css/join.css" />
</head>
<body>

	<section id="contact">
		<div class="wrap">
			<div class="form-wrap">
				<br>
				<h1 align="center">LOG IN</h1>
				<div class="button-wrap">
					<div id="btn"></div>
					<button type="button" class="togglebtn"
						onclick="location.href='${pageContext.request.contextPath}/member/loginpage.do'">LOG
						IN</button>
					<button type="button" class="togglebtn"
						onclick="location.href='${pageContext.request.contextPath}/member/register1'">REGISTER</button>
				</div>
				<div class="social-icons">
					<img src="/biz/resources/images/fb.png" alt="facebook"> <img
						src="/biz/resources/images/tw.png" alt="twitter"> <img
						src="/biz/resources/images/gl.png" alt="google">
				</div>
				<form action="${pageContext.request.contextPath}/member/login.do"
					class="input-group" name="login" id="login" method="POST">
					<input type="text" class="input-field"
						placeholder="User name or Email" id="id" name="id"> <input
						type="password" class="input-field" placeholder="Enter Password"
						id="pass" name="pass">

					<button class="submit">Login</button>
				</form>


			</div>
		</div>
		<script>
			var x = document.getElementById("login");
			var y = document.getElementById("register");
			var z = document.getElementById("btn");

			function login() {
				x.style.left = "50px";
				y.style.left = "450px";
				z.style.left = "0";
			}

			function register() {
				x.style.left = "-400px";
				y.style.left = "50px";
				z.style.left = "110px";
			}
		</script>
	</section>
</body>
</html>