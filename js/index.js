$(document).ready(function() {
    var i = 1; // Khởi tạo số thứ tự
   // Viết code vào

    $("#myBtn").click(function () {
        $("#myModal").modal();
    }); 

    function kiemTraTen() {
        var i = 1;
        let mauKT = /^([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if ($("#txtHoten").val() == "") {
            $("#tbHoten").html("* Không để trống");
            return false;
        }
        if (!mauKT.test($("#txtHoten").val())) {
            $("#tbHoten").html("* Mỗi ký tự đầu viết hoa không sử dụng số");                
            return true;
        }
        $("#tbHoten").html("*");
        return true;
        }
    $("#txtHoten").blur(kiemTraTen);
    
    
    function kiemTraSCMND() {
    let mauKT = /^\d{9}$/;
    if ($("#txtSCMND").val() == "") {
        $("#tbSCMND").html("* Không để trống");
        return false;
    }
    if (!mauKT.test($("#txtSCMND").val())) {
        $("#tbSCMND").html("* 9 chữ số ");                
        return false;
    }
    $("#tbSCMND").html("*");
    return true;
    }
    $("#txtSCMND").blur(kiemTraSCMND);

    function kiemTraQQ() {
        var i = 1;
        let mauKT = /^([A-Z\s]{1,})$/;
        if ($("#txtQuequan").val() == "") {
            $("#tbQuequan").html("* Không để trống");
            return false;
        }
        if (!mauKT.test($("#txtQuequan").val())) {
            $("#tbQuequan").html("* Dùng chữ hoa");                
            return true;
        }
        $("#tbQuequan").html("*");
        return true;
        }
    $("#txtQuequan").blur(kiemTraQQ);

    function kiemTraEmail() {
        var i = 1;
        let mauKT = /^([a-z0-9]{1,})@iuh.edu.vn$/;
        if ($("#txtEmail").val() == "") {
            $("#tbEmail").html("* Không để trống");
            return false;
        }
        if (!mauKT.test($("#txtEmail").val())) {
            $("#tbEmail").html("* xxxxxx@iuh.edu.vn");                
            return true;
        }
        $("#tbEmail").html("*");
        return true;
        }
    $("#txtEmail").blur(kiemTraEmail);

    function kiemTraSdt() {
        var i = 1;
        let mauKT = /^0{1}[0-9]{2}-[0-9]{3}-[0-9]{4}$/;
        if ($("#txtSdt").val() == "") {
            $("#tbSdt").html("* Không để trống");
            return false;
        }
        if (!mauKT.test($("#txtSdt").val())) {
            $("#tbSdt").html("* 0xx-xxx-xxxx");                
            return true;
        }
        $("#tbSdt").html("*");
        return true;
        }
    $("#txtSdt").blur(kiemTraSdt);


    $("#btnSave").click(function () {
        if (!kiemTraTen() || !kiemTraSCMND() || !kiemTraQQ()  || !kiemTraEmail()|| !kiemTraSdt()) {
            $("#thongbao").html("Mời bạn nhập đúng và đầy đủ thông tin")
            return false;
        }
        var ten = $("#txtHoten").val();
        var SCMND = $("#txtSCMND").val();
        var quequan = $("#txtQuequan").val();
        var email = $("#txtEmail").val();
        var sdt = $("#txtSdt").val();

        var anh = $("#txtAnh").val().substring(12);

        var them = "<tr><td>" + (i++) + "</td><td>" + ten + "</td><td>"
        + SCMND + "</td><td>" + quequan + "</td><td>" + email + "</td><td>"
        + sdt + "</td><td>" + anh +"</td><td>"
        $("table tbody").append(them);

        $("#myModal").modal("hide");
        return true;
    })
});

