// This is a JavaScript file
var appKey="ee06057d28dd501bbde2a1687c9df99208f8647ca063f057db278795e52a94c7";
var clientKey="97e9afe24ffb136408644516b20e437274e38700f1253b2e67375ab0c9b0beb5";
var ncmb = new NCMB(appKey, clientKey);
  // 利用するデータベースを指定（存在しなければ生成）
      var TestClass = ncmb.DataStore("RegisterLogin");
      function login(){
        var testClass = new TestClass();
        var userName="UserName";
        var userNameValue=$("#username").val();
        var password="PassWord";
        var passwordValue=$("#password").val();
        testClass.set(userName,userNameValue);
        testClass.set(password,passwordValue);
        testClass.save()
         .then(function(m) {
        // $("html").html("New object created with objectId: ");
        $(".modal-box").addClass("success");
        $(".modal-box form").css("display","none");
        $(".modal-box button").css("display","none");
        $(".modal-box h3").css("color","green");
        $(".modal-box .done").css("display","block");
        // $(".modal-box").html("success");
      })
      .catch(function(err){
        $("html").html("Failed to create new object, with error code: " + JSON.stringify(err));
      })
        };

