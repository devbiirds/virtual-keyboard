var body = document.getElementsByTagName('body')[0];
var mainbox = document.createElement('div');
mainbox = document.body.appendChild(mainbox);

var arr=[192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13,'ShiftLeft', 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 'ShiftRight','ControlLeft', 91, 'AltLeft', 32, 'AltRight', 'ControlRight', 37, 40, 39]
var arr2=[]
document.onkeydown = function (event) {
   
   arr2.push(event.keyCode);
    console.log(arr2);
}

var keys = document.getElementsByClassName('keys');
for(let i = 0 ; i < arr.length ; i++){
    if(arr[i]=='ShiftLeft'){
        keys[i].id ='ShiftLeft';
    }
    else{
        if(arr[i] == 'ShiftRigth')
        {
            keys[i].id = 'ShiftRight';
        }
        if(arr[i] == 'ControlLeft')
        {
            keys[i].id = 'ControlLeft';
        }
        if(arr[i] == 'ControlRight')
        {
            keys[i].id = 'ControlRight';
        }
        if(arr[i] == 'AltLeft')
        {
            keys[i].id = 'AltLeft';
        }
        if(arr[i] == 'AltRight')
        {
            keys[i].id = 'AltRight';
        }
        else{
            keys[i].id =arr[i];
        }
    }

}

 document.onkeydown = function (event) {
 console.log(event.code);
flag = true;
document.querySelectorAll('.keys').forEach(function (element) {
    element.classList.remove('active');    
});
if(event.code =='ShiftLeft'){
    console.log(document.querySelector('.keys[id="ShiftLeft"]').classList.add('active'));    
    flag = !flag
}
if(event.code =='ShiftRight'){
    console.log(document.querySelector('.keys[id="ShiftRight"]').classList.add('active'));    
    flag = !flag;
}
if(event.code =='ControlLeft'){
    console.log(document.querySelector('.keys[id="ControlLeft"]').classList.add('active'));    
    flag = !flag;
}
if(event.code =='ControlRight'){
    console.log(document.querySelector('.keys[id="ControlRight"]').classList.add('active'));   
    flag = !flag 
}
if(event.code =='AltLeft'){
    console.log(document.querySelector('.keys[id="AltLeft"]').classList.add('active'));    
    flag = !flag;
}
if(event.code =='AltRight'){
    console.log(document.querySelector('.keys[id="AltRight"]').classList.add('active'));   
    flag = !flag 
}
if(flag) console.log(document.querySelector('.keys[id="'+event.keyCode+'"]').classList.add('active'));

}