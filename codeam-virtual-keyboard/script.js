var body = document.getElementsByTagName('body')[0];
var mainbox = document.createElement('div');
mainbox = document.body.appendChild(mainbox);

var arr=[192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 'Backspace', 'Tab', 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46, 'CapsLock', 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 'Enter','ShiftLeft', 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 'ShiftRight','ControlLeft', 91, 'AltLeft', 'Space', 'AltRight', 'ControlRight', 37, 40, 39]
var cyrrilic = ['ё','й','ц','у','к','е','н','г','ш','щ','з','х','ъ','"\"','ф','ы','в','а','п','р','о','л','д','ж','э','я','ч','с','м','и','т','ь','б','ю','.'];
var output = [];
document.onkeydown = function (event) {
   
   arr2.push(event.keyCode);
    console.log(arr2);
}
var letter = document.querySelector('.letter');
var textarea = document.querySelector('.textarea');
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
        if(arr[i] == 'CapsLock')
        {
            keys[i].id = 'CapsLock';
        }
        if(arr[i] == 'Space')
        {
            keys[i].id = 'Space';
        }
        if(arr[i] == 'Enter')
        {
            keys[i].id = 'Enter';
        }
        if(arr[i] == 'Tab')
        {
            keys[i].id = 'Tab';
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
        if(arr[i] == 'Backspace'){
            keys[i].id = 'Backspace';
        }
        else{
            keys[i].id =arr[i];
        }
    }

}
flag_Caps = false;
 document.onkeydown = function (event) {
flag = true;
document.querySelectorAll('.keys').forEach(function (element) {
    element.classList.remove('active');    
});
var word = document.createElement('span');
if(event.code =='ShiftLeft'){
    setTimeout(() => {
        document.querySelector('.keys[id="ShiftLeft"]').classList.add('active'); 
    }, 0);
    document.querySelector('.keys[id="ShiftLeft"]').classList.remove('active'); 
    flag = !flag
}
if(event.code =='CapsLock'){
    setTimeout(function () {
        document.querySelector('.keys[id="CapsLock"]').classList.add('active')
    }, 0);
    document.querySelector('.keys[id="CapsLock"]').classList.remove('active')
    
    if(flag_Caps){
        console.log(1)
        document.querySelectorAll('.caps_active').forEach(function (element) {
            element.classList.remove('caps_active');
            element.classList.add('caps');    
        }); 
        flag_Caps=!flag_Caps;
    }
    else{
        document.querySelectorAll('.caps').forEach(function (element) {
            element.classList.remove('caps');
            element.classList.add('caps_active');    
        }); 
        flag_Caps=!flag_Caps;
    }
     
    flag = !flag
}
if(event.code =='Tab'){
    setTimeout(() => {
        document.querySelector('.keys[id="Tab"]').classList.add('active')
    }, 0);
    document.querySelector('.keys[id="Tab"]').classList.remove('active')
    
    flag = !flag
}
if(event.code =='ShiftRight'){
    setTimeout(() => {
        document.querySelector('.keys[id="ShiftRight"]').classList.add('active')
    }, 0);
    document.querySelector('.keys[id="ShiftRight"]').classList.remove('active')
    
    flag = !flag;
}
if(event.code =='Space'){
    setTimeout(() => {
        document.querySelector('.keys[id="Space"]').classList.add('active')
    }, 0);
    document.querySelector('.keys[id="Space"]').classList.remove('active')
    
  
    flag = !flag
}
if(event.code =='Enter'){
    setTimeout(() => {
        document.querySelector('.keys[id="Enter"]').classList.add('active')
    }, 0);
    document.querySelector('.keys[id="Enter"]').classList.remove('active')
   
    flag = !flag
}
if(event.code =='Backspace'){
    setTimeout(() => {
        document.querySelector('.keys[id="Backspace"]').classList.add('active')
    }, 0);
    document.querySelector('.keys[id="Backspace"]').classList.remove('active')

    textarea.removeChild(word);    
    flag = !flag
}
if(event.code =='ControlLeft'){
    setTimeout(() => {
        document.querySelector('.keys[id="ControlLeft"]').classList.add('active')
    }, 0);
    document.querySelector('.keys[id="ControlLeft"]').classList.remove('active')   
    flag = !flag;
}
if(event.code =='ControlRight'){
    setTimeout(() => {
        document.querySelector('.keys[id="ControlRight"]').classList.add('active')
    }, 0);
    document.querySelector('.keys[id="ControlRight"]').classList.remove('active')  
    flag = !flag 
}
if(event.code =='AltLeft'){
    setTimeout(() => {
        document.querySelector('.keys[id="AltLeft"]').classList.add('active')
    }, 0);
    document.querySelector('.keys[id="AltLeft"]').classList.remove('active')   
    flag = !flag;
}
if(event.code =='AltRight'){
    setTimeout(() => {
        document.querySelector('.keys[id="AltRight"]').classList.add('active')
    }, 0);
    document.querySelector('.keys[id="AltRight"]').classList.remove('active')
    flag = !flag 
}
if(event.altKey && event.shiftKey){
console.log('work');
document.querySelectorAll('.letter').forEach(function (element,counter = 0) {
    element.textContent = letter[counter]
    counter++;
})
}
if(flag) {item = document.querySelector('.keys[id="'+event.keyCode+'"]');
setTimeout(() => {
    item.classList.add('active');
}, 0);
item.classList.remove('active');
}

}

//virtaul input

document.querySelector('.keyboard').onmousedown = function (event) {
    console.log(event.srcElement);
var el = event.target.id;
console.log(el);
item = document.querySelector('.keys[id="'+el+'"]').textContent;
        console.log(item);
        textarea.value +=item;
}
