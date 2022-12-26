let username = $("#username");
let password = $("#password");

const login = () =>
{


  username.find("div").text("payruler");
  password.find("div").text("password");

  setTimeout(() =>


 {
  $('.ant-btn ant-btn-primary ant-btn-lg').click();

 },5000);

}
login();
