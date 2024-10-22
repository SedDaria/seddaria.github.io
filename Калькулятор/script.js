let r = 0;
in_1.onclick = function(){
    r = rez.value;
    rez.value = r+1;
}
in_2.onclick = function(){
    r = rez.value;
    rez.value = r+2;
}
in_3.onclick = function(){
    r = rez.value;
    rez.value = r+3;
}
in_4.onclick = function(){
    r = rez.value;
    rez.value = r+4;
}
in_5.onclick = function(){
    r = rez.value;
    rez.value = r+5;
}
in_6.onclick = function(){
    r = rez.value;
    rez.value = r+6;
}
in_7.onclick = function(){
    r = rez.value;
    rez.value = r+7;
}
in_8.onclick = function(){
    r = rez.value;
    rez.value = r+8;
}
in_9.onclick = function(){
    r = rez.value;
    rez.value = r+9;
}
in_0.onclick = function(){
    r = rez.value;
    rez.value = r+0;
}
in_plus.onclick = function(){
    r = rez.value;
    rez.value = r + '+';
}
in_minus.onclick = function(){
    r = rez.value;
    rez.value = r + '-';
}
in_del.onclick = function(){
    r = rez.value;
    rez.value = r + '/';
}
in_x.onclick = function(){
    r = rez.value;
    rez.value = r + '*';
}
in_toch.onclick = function(){
    r = rez.value;
    rez.value = r + '.';
}
rez_btn.onclick = function(){
    rez.value = eval(rez.value);
}
function clearResult(){
    document.getElementById('rez').value = '';
}
function remove(){
    rez.value = rez.value.slice(0, -1);
}
//function remove(){
//    expression[pointer] = expression[pointer].slice(0, -1);
 //   refreshRez ();
//    rezFlash();
//}