//Hàm kiểm tra người dùng đã nhập chưa
function required() {
  var inputTen = document.forms["form1"]["username"];
  var giaTriTen = inputTen.value;
  var theP = document.getElementById("thongbao");
  if (giaTriTen == "") {
    theP.style.display = "block";
    theP.innerHTML = "Please input avalue";
    theP.style.color = "red";
    return false;
  } else {
    theP.style.display = "none";
    return true;
  }
}

// Kiểm tra tất cả là kí tự
function checkAllCharacter() {
  var checkAddress = document.forms["form1"]["Address"];
  var letter = /^[A-Za-z]+$/;
  var theP = document.getElementById("thongbao1");
  if (checkAddress.value.match(letter)) {
    theP.style.display = "none";
    return true;
  } else {
    theP.style.display = "block";
    theP.style.color = "red";
    theP.innerHTML = "Please input is character all";
    return false;
  }
}

// hàm kiểm tra tát cả các kí tự là số
function checkAllNumber() {
  var checkPhoneNumber = document.forms["form1"]["phoneNumber"];
  var letter = /^[0-9]+$/;
  var theP = document.getElementById("thongbao2");
  if (checkPhoneNumber.value.match(letter)) {
    theP.style.display = "none";
    return true;
  } else {
    theP.style.display = "block";
    theP.style.color = "red";
    theP.innerHTML = "Please input is all number ";
    return false;
  }
}
// Hàm kiểm tra email
function checkMail() {
  var checkMail = document.forms["form1"]["email"];
  var letter = /^([\w\.])+@([a-zA-Z0-9\-])+\.([a-zA-Z]{2,4})(\.[a-zA-Z]{2,4})?$/;
  var theP = document.getElementById("thogbao3");
  if (checkMail.value.match(letter)) {
    theP.style.display = "none";
    return true;
  } else {
    theP.style.display = "block";
    theP.style.color = "red";
    theP.innerHTML = "Please input the correct email";
    return false;
  }
}

//Sự kiện khi nhấn nút đăng kí
function onDangKi() {
  //Ẩn phần đăng nhập
  //Hiện phần đăng kí
  var divDangKi = document.getElementById("divDangKi");
  var divDangNhap = document.getElementById("divDangNhap");

  divDangKi.style.display = "block";
  divDangNhap.style.display = "none";
}

//Sự kiện khi nhấn nút đăng nhập
function onDangNhap() {
  //Ẩn phần đăng kí
  //Hiện phần đăngn hập
  var divDangKi = document.getElementById("divDangKi");
  var divDangNhap = document.getElementById("divDangNhap");

  divDangKi.style.display = "none";
  divDangNhap.style.display = "block";
}

function isNull() {
  var pThongBao = document.getElementById("pThongBao");
  var idContainer = document.getElementById("container");
  var ngheNghiep = document.getElementById("ngheNghiep");
  var nam = document.getElementById("nam");
  var nu = document.getElementById("nu");
  if (
    frmDangKi.tenDangNhap.value == "" ||
    frmDangKi.matKhau.value == "" ||
    frmDangKi.email.value == ""
  ) {
    frmDangKi.tenDangNhap.style.border = "solid 2px red";
    frmDangKi.matKhau.style.border = "solid 2px red";
    frmDangKi.email.style.border = "solid 2px red";
    pThongBao.innerHTML = "Please input the value all field";
    pThongBao.style.display = "block";
    idContainer.style.height = "600px";
    return false;
  } else if (ngheNghiep.selectedIndex == 0) {
    pThongBao.style.display = "block";
    pThongBao.innerHTML = "You must choose Job <br>";
    frmDangKi.ngheNghiep.style.border = "solid 2px red";
    return false;
  } else if (!nam.checked && !nu.checked) {
    pThongBao.style.display = "block";
    pThongBao.innerHTML = "You must choose Gender <br>";
    return false;
  } else {
    pThongBao.style.display = "none";
    return true;
  }
}

function checkMinMax(idText, minlength, maxlength) {
  var inputText = document.getElementById(idText);
  var field = inputText.value;
  var pThongBao = document.getElementById("pThongBao");
  if (field.length < minlength || field.length > maxlength) {
    pThongBao.style.display = "block";
    pThongBao.innerHTML =
      "Please input value between " + minlength + " and " + maxlength;
    return false;
  } else {
    pThongBao.style.display = "none";
    return true;
  }
}

function checkRegister(){
    return isNull() && checkMinMax("matKhau", 1,16);
}
