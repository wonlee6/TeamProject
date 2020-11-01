/*$(document).ready(function() {
	$(".btn-group .btn").click(function() {
		var inputValue = $(this).find("input").val();
		console.log(inputValue);
		if (inputValue != "all") {
			var target = $('table tr[data-status="' + inputValue + '"]');
			$("table tbody tr").not(target).hide();
			target.fadeIn();
		} else {
			$("table tbody tr").fadeIn();
		}
	});

});*/

/*var articleNo = 1000;
getList();
function getList() {
	
	$.getJSON("admin/list/", function(data) {
		console.log(data)
	})
};*/

//		$.ajax({
//			type : "get",
//			url : "admin",
//			dataType : "json",
//			 cache: false,
//		
//			// data: JSON.stringify(),
//			contentType : "application/json; charset=utf-8",
//			success : function(data) {
//				var records = data.datas;
//				console.log("records : " + records);
//                
//				
//				
//			//	var list = data.datas;
//			//	console.log("data : " + data.totalCnt) // 7
//				//console.log("list : " + list.length);
//				var str = "";
//				$(list).each(function(index, obj) {
//					str += "<tr>";
//					str += "<td>" + obj["m_num"] + "</td>";
//					str += "<td>" + obj["id"] + "</td>";
//					str += "<td>" + obj["name"] + "</td>";
//					str += "<td>" + obj["phone"] + "</td>";
//					str += "<td>" + obj["email"] + "</td>";
//					str += "<td>" + obj["regdate"] + "</td>";
//					if (obj["rv_num"] > 0) {
////						str += "<td><button type='button' class='btn btn-sm manage' value=" + obj["rv_num"]
////						+ " onclick='rvlist()' id='eee'>관리</button></td>";		
//					//	str += "<td>" + "<a href='javascript:rvlist("+ obj["rv_num"] +")'>" +obj["rv_num"] + "</a></td>";
//						str += "<td>" + "<button type='button' class='btn btn-success'"
//						+ "onclick='rvlist(" +obj["rv_num"]+ ");'>Success</button></td>";
//
//					}
//					str += "</tr>";
//					
//				});
//
//				//console.log("str : " + str);
//				$("#admindata").append(str);
//			
//
//			//	selectDataList();
//			},
//			error : function(request, status, error) {
//				var msg = "ERROR : " + request.status + "<br>"
//				msg += +"내용 : " + request.responseText + "<br>" + error;
//				console.log(msg);
//			}
//		});


function rvlist(rv_num) {
	$("#rvdataa").empty();
	//let rv_num = $("#eee").val();
	console.log(rv_num);
	
	$.ajax({
		type : "get",
		url : "rv_info_list?rv_num=" + rv_num,
		
		dataType : "json",
		// cache: false,
		// data: JSON.stringify(),
		contentType : "application/json;charset=utf-8",
		success : function(data) {
			// $("#result").html(result);
			console.log(data);
			var list = data.datas;

			var str = "";
			$(list).each(function(index, obj) {
				str += "<tr>";
				str += "<td>" + obj["rv_num"] + "</td>";
				str += "<td>" + obj["rv_pcount"] + "</td>";
				str += "<td>" + "<a href='javascript:roominfo("+ obj["r_num"] +")'>" +obj["r_num"] + "</a></td>";
				str += "<td>" + obj["rv_indate"] + "</td>";
				str += "<td>" + obj["rv_outdate"] + "</td>";
				str += "<td>" + obj["rv_date"] + "</td>";
				str += "</tr>";
			});
			
			//console.log("str : " + str);
			$("#rvdataa").append(str);
		},
		error : function(request, status, error) {
			var msg = "ERROR : " + request.status + "<br>"
			msg += +"내용 : " + request.responseText + "<br>" + error;
			console.log(msg);
		}
	});
};

function roominfo(r_num){
	console.log("click")
	$("#roomli").empty();
	$("#myModal").modal();
	$.ajax({
		type : "get",
		url : "room_info_list?r_num=" + r_num,
		
		dataType : "json",
		// cache: false,
		// data: JSON.stringify(),
		contentType : "application/json;charset=utf-8",
		success : function(data) {
			// $("#result").html(result);
			var list = data.datas;
			console.log(list);

			var str = "";
			$(list).each(function(index, obj) {
				str += "<div class='row my-3'>";
				str += "<label for='name' id='modallabel'>방 번호</label><br>"
				str += "<input type='text' class='form-control pl-5' style='margin-left:20px;width:87%;' id ='r_num' value=" + obj["r_num"] + " readonly></div>";
				str += "<div class='row my-3'>";
				str += "<label for='name' id='modallabel'>방 이름</label><br>"
				str += "<input type='text' class='form-control pl-5' style='margin-left:20px;width:87%;' id ='r_name' value=" + obj["r_name"] + "></div>";
				str += "<div class='row my-3'>";
				str += "<label for='name' id='modallabel'>방 가격</label><br>"
				str += "<input type='text' class='form-control pl-5' style='margin-left:20px;width:87%;' id ='r_price' value=" + obj["r_price"] + "></div>"; 
				str += "<div class='row my-3'>";
				str += "<label for='name' id='modallabel'>예약확인</label><br>"
					if (obj["r_check"] == 1) {
						str += "<input type='text' class='form-control pl-5' style='margin-left:20px;width:87%;' id ='r_check' value='예약중'></div>";		
					} else {
						str += "<input type='text' class='form-control pl-5' style='margin-left:20px;width:87%;' id ='r_check' value='예약 대기 중'></div>";		
					}
				str += "</div>";

			});
			
		//	console.log("str : " + str);
			$("#roomli").append(str);
		},
		error : function(request, status, error) {
			var msg = "ERROR : " + request.status + "<br>"
			msg += +"내용 : " + request.responseText + "<br>" + error;
			console.log(msg);
		}
	});
}

function roomUpdate() {

	let Obj = {"r_num" : $('#r_num').val(),
			"r_name" : $('#r_name').val(),
			"r_price" : $('#r_price').val(),
			"r_check" : $('#r_check').val()
			};
	//console.log(Obj);
	$.ajax({
		type : "post",
		url : "room_update",
	//	data : $('form').serialize(),
	//	data : JSON.stringify(Obj),
//		data : {"r_num" : $('#r_num').val(),
//			   "r_name" : $('#r_name').val(),
//			   "r_price" : $('#r_price').val(),
//			   "r_check" : $('#r_check').val()},
		data: Obj,
	//	dataType : "json",
		contentType : "application/x-www-form-urlencoded; charset=UTF-8",
		success : function (data){
			console.log("성공");
			
			$('#meModal').modal();
			$('#myModal').modal('hide');
			
		},
		error : function(request, status, error) {
			var msg = "ERROR : " + request.status + "<br>"
			msg += +"내용 : " + request.responseText + "<br>" + error;
			console.log(msg);
		}
	
	});
};

/*function roomDelete() {
	let Obj = {"r_num" : $('#r_num').val()};
	$.ajax({
		type : "post",
		url : "roomDelete",
		data : Obj,
	//	dataType : "json",
		contentType : "application/x-www-form-urlencoded; charset=UTF-8",
		success : function(data) {
			console.log("성공");
			$('#myModal').modal("hide");
			console.log(myModal)
		},
		error : function(request, status, error) {
			var msg = "ERROR : " + request.status + "<br>"
			msg += +"내용 : " + request.responseText + "<br>" + error;
			console.log(msg);
		}
	});
};*/
/*const common = {
		totalCount : 100, // 데이터 총 개수
		recordsPerPage : 5, // 페이지 데이터 레코드 개수
		navPage : 5 // 페이지 개수
};

$('document').ready(function() {
	// 페이지 정보 초기화
	setPageInfo(common.recordsPerPage, common.navPage, 1);
	
	// 데이터 조회
	selectDataList();
});

// 데이터 조회
function selectDataList() {
	// ajax success 이후 paging set 설정
	const pageInfo = getPageInfo();
	paging($('.paging'),common.totalCount, pageInfo.recordsPerPage, pageInfo.navPage, pageInfo.currentPage);
}

function paging(appendEle, totalCount, recordsPerPage, navPage, currentPage, sellBoolean) {
	const totalPage = Math.ceil(totalCount / recordsPerPage); // 총페이지수
	const pageGroup = Math.ceil(currentPage / navPage); // 페이지 그룹
	
	let last = pageGroup * navPage;
	if (last > totalPage) {
		last = totalPage;
	}
	
	const first = last - (navPage - 1); // 화면에 보여질 첫번재 페이지 번호
	
	const foreFront = 1;
	const prev = first - 1;
	const next = last + 1;
	const rearMost = totalPage;
	
	console.log('foreFront : '+ foreFront)
	console.log('first : '+ first)
	console.log('prev : '+ prev)
	console.log('currentPage : '+ currentPage)
	console.log('next : '+ next)
	console.log('last : '+ last)
	console.log('rearMost : '+ rearMost)
	
	let innerHtml = "";
	
	// 맨 앞 , 이전 set
	if (prev > 0){
		sellBoolean ? innerHtml += '<a href=# onclick="movePage(' + foreFront + ')"> << </a>': innerHtml += '';
		innerHtml += '<a href=# onclick="movePage(' + prev + ')"> < </a>';
	}
	// 페이지 set
	for (let i=first; i <= last; i++){
		if (currentPage === i) {
			innerHtml += '<a href=# class="on" onclick="movePage(' + i + ')">' + i + '</a>';
		} else {
			innerHtml += '<a href=# onclick="movePage(' + i + ')">' +i +'</a>';
		}
	}
	
	// 다음, 맨뒤 set
	if (last < totalPage) {
		innerHtml += '<a href=# onclick="movePage(' + next + ')"> > </a>';
		sellBoolean ? innerHtml += '<a href=# onclick="movePage(' + rearMost + ')"> >> </a>': innerHtml += '';
	}
	
	// 페이지 생성
	appendEle.empty();
	appendEle.append(innerHtml);
	
}
		
function movePage(currentPage) {
	const pageInfo = getPageInfo();
	setPageInfo(pageInfo.recordsPerPage, pageInfo.navPage, currentPage);
	
	selectDataList();
}

// page 정보 set
function setPageInfo(recordsPerPage, navPage, currentPage) {
	const pageInfo = {
			recordsPerPage : recordsPerPage,
			navPage : navPage,
			currentPage : currentPage
	};
	sessionStorage.setItem('pageInfo',JSON.stringify(pageInfo));
	console.log()
}
// page 정보 get
function getPageInfo() {
	return JSON.parse(sessionStorage.getItem('pageInfo'));
}
*/
