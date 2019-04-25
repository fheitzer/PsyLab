var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/wuerfel.png') {
      myImage.setAttribute ('src','images/bandit.png');
    } else {
      myImage.setAttribute ('src','images/wuerfel.png');
    }
}
