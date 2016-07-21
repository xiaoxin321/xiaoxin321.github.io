/**
 * Created by xiaoxin111 on 2015/11/29.
 */

function clearContent(txt)
{
    txt.value="";
}
function clearContent_user(txt)
{
    txt.value="";
    document.getElementById("zhucetishi").innerHTML="请输入一个 2-14 位的用户名";
}
function clearContent_xiugai(txt)
{
    txt.value="";
    document.getElementById("zhucetishi").innerHTML="请输入你原先使用的的用户名";
}
function clearContentemail(txt)
{
    txt.value="";
    document.getElementById("emailtishi").innerHTML="请输入你常用的邮箱";
}
function clearContentpassword(txt)
{
    txt.value="";
    document.getElementById("passwordtishi").innerHTML="请输入一个6~16位的密码";
}
function clearContentpassword_xiugai(txt)
{
    txt.value="";
    document.getElementById("passwordtishi").innerHTML="请输入新的6~16位的密码";
}
function clearContentpassword1(txt)
{
    txt.value="";
    document.getElementById("passwordtishi1").innerHTML="确认密码后单击核对按钮，才能注册正确信息";
}
function check1()
{
    var   user=document.form1.Zuser.value;
    var   user11=document.getElementById("Zuser");
    var   user1="电话/用户名";
    var  psd=document.getElementById("Zpassword");
    var  psd1=document.getElementById("Zpassword1");
    var password=document.form1.Zpassword.value;
    var password1=document.form1.Zpassword1.value;
    if(user==""||user==user1){
        user11.style.backgroundColor="red";
        alert('电话/用户名输入为空，请输入！');
        return false;
    } else
    if(password!=password1){
        psd.style.backgroundColor="red";
        psd1.style.backgroundColor="red";
        alert('两次密码输入不同，请重新输入！');
        return false;
    }  else  if(password==""){
        psd.style.backgroundColor="red";
        alert('密码输入不能为空，请重新输入！');
        return false;
    }
    else{
        alert('信息正确，可以了！');
    }
}