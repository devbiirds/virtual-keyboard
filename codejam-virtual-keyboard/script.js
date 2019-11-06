var arr = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, "Backspace", "Tab", 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, "Delete", "CapsLock", 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, "Enter", "ShiftLeft",90,
  88,
  67,
  86,
  66,
  78,
  77,
  188,
  190,
  191,
  38,
  "ShiftRight",
  "ControlLeft",
  "MetaLeft",
  "AltLeft",
  "Space",
  "AltRight",
  "ControlRight",
  37,
  40,
  39
];
var lattin = ["`",1,2,3,4,5,6,7,8,9,0,'-','=',"q","w","e","r","t","y","u","i","o","p","[","]","\\","a","s","d","f","g","h","j","k","l",";","'","z","x","c","v","b","n","m",",",".","/"
];
var cyrrilic = ["ё",1,2,3,4,5,6,7,8,9,0,'-','=',"й","ц","у","к","е","н","г","ш","щ","з","х","ъ","\\","ф","ы","в","а","п","р","о","л","д","ж","э","я","ч","с","м","и","т","ь","б","ю","."
];
console.log(sessionStorage);
var counter_key = 0;
var counter_keys_key =0;
var line_size = [14,15,13,13,9]
var flag_Caps = false;
var mainbox = document.createElement("div");
document.body.appendChild(mainbox).classList.add('mainbox');
var textarea = document.createElement('textarea')
var keyboard = document.createElement('div');
mainbox.appendChild(textarea).classList.add('textarea');
mainbox.appendChild(keyboard).classList.add('keyboard');
for(let i = 0; i < 5 ; i++){
let keyline = document.createElement('div');

  for(let j = 0 ; j < line_size[i] ; j++){
    
    let keys = document.createElement('div');
    keys.id = arr[counter_key];
    let keys_key = document.createElement('span');
    keys.appendChild(keys_key).classList.add('keys__key');
    switch (arr[counter_key]) {
      case 'Backspace':{
        keys.classList.add('backspace');
        keys_key.textContent = 'Backspace';
        break;
      }
      case 'Tab':{
        keys.classList.add('tab');
        keys_key.textContent = 'Tab';
        break;
      }
      case 'CapsLock':  {
        keys.classList.add('caps_lock');
        keys_key.textContent = 'CapsLock';
        break;
      }
      case 'Enter':
        {
          keys.classList.add('enter');
        keys_key.textContent = 'Enter';
        break;
        }
      case 'ShiftLeft':
        {
          keys.classList.add('shift');
        keys_key.textContent = 'Shift';
        break;
        }
      case 'ShiftRight':{
        keys.classList.add('leftshift');
        keys_key.textContent = 'Shift';
        break;
      }
      case 'ControlLeft':{
        keys.classList.add('ctrl');
        keys_key.textContent = 'Ctrl';
        break;
      }
      case 'ControlRight':{
        keys.classList.add('ctrl');
        keys_key.textContent = 'Ctrl';
        break;
      }
      case 'Space':
        {
          keys.classList.add('space');
        keys_key.textContent = 'Space';
        break;
        }
      case 'Delete':{
        keys_key.textContent = 'Del';
        break;
        }
      case'AltLeft':{
        keys_key.textContent = 'Alt';
        break;
      }
      case'AltRight':{
        keys_key.textContent = 'Alt';
        break;
      }
      case 'MetaLeft':{
        keys_key.textContent = 'Win';
        break;
      }
      default:
        if(sessionStorage.getItem('lan') == 'en'){
          if(String(lattin[counter_keys_key]) == "undefined"){
            keys_key.classList.add('arrow');
            counter_keys_key++;
          }
          else{
            keys_key.textContent = String(lattin[counter_keys_key]);
            keys_key.classList.add('caps','letter');
            counter_keys_key++;
          }
        
        }
        else{
          if(String(cyrrilic[counter_keys_key]) == "undefined"){
            keys_key.classList.add('arrow');
            counter_keys_key++;
          }
          else{
            keys_key.textContent = String(cyrrilic[counter_keys_key]);
            keys_key.classList.add('caps','letter');
            counter_keys_key++;
          }
        
        }
        break;
    }
    
    keyline.appendChild(keys).classList.add('keys');
    counter_key++;
    
  }
keyboard.appendChild(keyline).classList.add('mainbox__keyline');
}
document.querySelectorAll('.arrow').forEach(function (element,counter =0) {
  let arrow = document.createElement('i');
  switch (counter) {
    case 0:element.appendChild(arrow).classList.add('fas','fa-arrow-up');break;
    case 1:element.appendChild(arrow).classList.add('fas','fa-arrow-left');break;
    case 2:element.appendChild(arrow).classList.add('fas','fa-arrow-down');break;
    case 3:  element.appendChild(arrow).classList.add('fas','fa-arrow-right');break;
    default:
      break;
  }
})
document.onkeyup = function(event){
    document.querySelectorAll(".keys").forEach(function(element) {
        element.classList.remove("active");
      });
}
document.onkeydown = function(event) {
  let flag = true;
  textarea.focus();
  if (event.code == "ShiftLeft") {
      document.querySelector('.keys[id="ShiftLeft"]').classList.add("active");
    flag = !flag;
  }
  if (event.code == "CapsLock") {
    
      document.querySelector('.keys[id="CapsLock"]').classList.add("active");

    if (flag_Caps) {
      document.querySelectorAll(".caps_active").forEach(function(element) {
        element.classList.remove("caps_active");
        element.classList.add("caps");
      });
      flag_Caps = !flag_Caps;
    } else {
      console.log(document.querySelectorAll('.caps'));
      document.querySelectorAll(".caps").forEach(function(element) {
        element.classList.remove("caps");
        element.classList.add("caps_active");
      });
      flag_Caps = !flag_Caps;
    }

    flag = !flag;
  }
  if (event.code == "MetaLeft") {
    document.querySelector('.keys[id="MetaLeft"]').classList.add("active");
  flag = !flag;
}
  if (event.code == "Tab") {
    
      document.querySelector('.keys[id="Tab"]').classList.add("active");
  

    flag = !flag;
  }
  if (event.code == "Delete") {
  
      document.querySelector('.keys[id="Delete"]').classList.add("active");
  

    flag = !flag;
  }
  if (event.code == "ShiftRight") {
    
      document.querySelector('.keys[id="ShiftRight"]').classList.add("active");
   
    flag = !flag;
  }
  if (event.code == "Space") {
   
      document.querySelector('.keys[id="Space"]').classList.add("active");
  

    flag = !flag;
  }
  if (event.code == "Enter") {
    
      document.querySelector('.keys[id="Enter"]').classList.add("active");
    

    flag = !flag;
  }
  if (event.code == "Backspace") {
    document.querySelector('.keys[id="Backspace"]').classList.add("active");
   
    flag = !flag;
  }
  if (event.code == "ControlLeft") {
    
      document.querySelector('.keys[id="ControlLeft"]').classList.add("active");
     
    flag = !flag;
  }
  if (event.code == "ControlRight") {
  
      document.querySelector('.keys[id="ControlRight"]').classList.add("active");
      
    flag = !flag;
  }
  if (event.code == "AltLeft") {

      document.querySelector('.keys[id="AltLeft"]').classList.add("active");
    
    flag = !flag;
  }
  if (event.code == "AltRight") {
   
      document.querySelector('.keys[id="AltRight"]').classList.add("active");
  
    flag = !flag;
  }
  if (event.altKey && event.shiftKey) {
    if(sessionStorage.getItem('lan') =='ru'){
      sessionStorage.removeItem('lan');
      sessionStorage.setItem('lan','en');
    }
    else{
      sessionStorage.removeItem('lan');
      sessionStorage.setItem('lan','ru');
    }
    if (sessionStorage.getItem('lan') == 'en') {
      console.log('English')
      document.querySelectorAll(".letter").forEach(function(element, counter = 0) {
          element.textContent = lattin[counter];
          counter++;
        });
      
    } else {
      console.log('Russian');
      console.log(document.querySelectorAll('.letter'))
      document.querySelectorAll(".letter").forEach(function(element, counter = 0) {
          element.textContent = cyrrilic[counter];
          counter++;
        });
      
    }
  }
  if (flag) {
    item = document.querySelector('.keys[id="' + event.keyCode + '"]');
      item.classList.add("active");
    
    
  }
};
var line_pointer = 0;
document.querySelectorAll(".keys").forEach(function(item) {
  item.onclick = function(event) {
    setTimeout(() => {
      document.querySelectorAll(".keys").forEach(function(element) {
        element.classList.remove("active");
      });
    }, 200);

    document.querySelector('.keys[id="' + this.id + '"]').classList.add("active");

    if (
      this.id == "ShiftLeft" ||
      this.id == "ShiftRight" ||
      this.id == "AltLeft" ||
      this.id == "AltRight" ||
      this.id == "ControlRight" ||
      this.id == "ControlLeft" ||
      this.id == "Tab" ||
      this.id == "Space" ||
      this.id == "Delete" ||
      this.id == "MetaLeft" ||
      this.id == "Backspace" ||
      this.id == "Enter" ||
      this.id == "Del"
    ) {
      if (this.id == "Space") {
        textarea.value += " ";
      }
      if (this.id == "Enter") {
        textarea.value += "\n ";
      }
      if (this.id == "Backspace") {
        textarea.value = textarea.value.substr(0, textarea.value.length - 1);
      }
    } else {
      if (this.id == "CapsLock") {
        if (flag_Caps) {
          let item = document.querySelectorAll(".caps_active").forEach(function(element) {
              element.classList.remove("caps_active");
              element.classList.add("caps");
            });
          flag_Caps = !flag_Caps;
        } else {
          let item = document.querySelectorAll(".caps").forEach(function(element) {
              element.classList.remove("caps");
              element.classList.add("caps_active");
            });
          flag_Caps = !flag_Caps;
        }
      } else {
          if(flag_Caps){
            item = document.querySelector('.keys[id="' + this.id + '"]')
        textarea.value += item.textContent.toUpperCase();
          }
          else{
            item = document.querySelector('.keys[id="' + this.id + '"]')
          .textContent;
        textarea.value += item;
          }
        
      }
    }
  };
});
