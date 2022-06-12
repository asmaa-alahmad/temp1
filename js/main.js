// function([string1, string2],target id,[color1,color2])    
consoleText(['Frontend Developer', 'Graphic designer', 'ui/ux designer'], 'text',['#fff','#fff','#fff']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}
// nav bar section
let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});
// end nav bar section
// skils section progress
var progNum = Array.from(document.querySelectorAll(".pro"));
console.log(progNum);

function progress(i) {
    var progWidth = 1;
    setInterval(function() {
        if(progWidth < progNum[i].getAttribute("data-prog")) {
            progWidth += 1
        }
        progNum[i].style.width = progWidth + "%"
        progNum[i].textContent = progWidth + "%"
    },50)
}

window.onload = function() {
    setTimeout(function(){progress(0)},0)
    setTimeout(function(){progress(1)},5000)
    setTimeout(function(){progress(2)},9000)
    setTimeout(function(){progress(3)},13000)
    setTimeout(function(){progress(4)},16000)
}