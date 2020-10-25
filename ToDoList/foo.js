// var liElement = document.getElementsByTagName("LI");
// for (var i = 0; i < liElement.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   liElement[i].appendChild(span);
// }

// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

var lists = document.querySelector('ul');
lists.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
// LocalStorage dan olish
if (window.localStorage.length) {
  for (var i = 1; i <= window.localStorage.length; i++) {
    var lists = document.querySelector ('#lists');
    var liElement = document.createElement ('LI');
    var res = window.localStorage.getItem (i);
    var text = document.createTextNode (res);
    liElement.appendChild (text);
    lists.appendChild (liElement);
    console.log (res);
  }
}

// localStorage ga yuklash
function myFunction (event) {
  event.preventDefault ();
  let lists = document.querySelector ('#lists');
  let list = document.getElementsByClassName ('list');
  let liElement = document.createElement ('LI');
  let inputValue = document.querySelector ('#inputValue').value;
  let text = document.createTextNode (inputValue);
  if (!inputValue) {
    alert ("Iltimos to'ldiring");
  } else {
    window.localStorage.setItem (
      window.localStorage.length ? window.localStorage.length+1: 1,
      inputValue
    );
    liElement.appendChild (text);
    lists.appendChild (liElement);
    document.querySelector ('#inputValue').value = '';

  }
  console.log (lists);
}
