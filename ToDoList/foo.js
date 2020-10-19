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

function myFunction (event) {
  event.preventDefault ();
  var lists = document.querySelector ('#lists');
  var list = document.getElementsByClassName ('list');
  var liElement = document.createElement ('LI');
  var inputValue = document.querySelector ('#inputValue').value;
  var text = document.createTextNode (inputValue);
  if (!inputValue) {
    alert ("Iltimos to'ldiring");
  } else {
    window.localStorage.setItem (
      window.localStorage.length ? window.localStorage.length + 1 : 1,
      inputValue
    );
    liElement.appendChild (text);
    lists.appendChild (liElement);
    document.querySelector ('#inputValue').value = '';
  }
  console.log (lists);
}
