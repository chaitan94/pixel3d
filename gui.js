var mode = 'Text mode';

$(document).ready(function(){

  $("#pixelmode").hide();
  $("#modediv").click(function(){
      mode = getRadioValue('mode');
      if (mode == 'Text mode'){
          scene.remove(textObj);
          textObj = pixelatedTextGeometry(text3d.value, 0, 100, 0xCC0000);
          scene.add(textObj);
          $("#pixelmode").hide(200, function(){ $("#textmode").show(200); });
      } else {
          scene.remove(textObj);
          textObj = pixelGeometry(getCheckboxPixels('pixels'), 0, 100, 0x0099CC);
          scene.add(textObj);
          $("#textmode").hide(200, function(){ $("#pixelmode").show(200); });
      }
  });

});

function getRadioValue (theRadioGroup) {
    var rg = document.getElementsByName(theRadioGroup);
    for (var i = 0; i < rg.length; i++) {
        if (rg[i].checked) {
                return rg[i].value;
        }
    }
}

function getCheckboxPixels (theCheckboxGroup) {
    var rg = document.getElementsByName(theCheckboxGroup);
    var pixels = new Array();
    for (var i = 0; i < rg.length; i++) {
        if (rg[i].checked) {
            pixels.push(new pair((i%4)-1, 3-parseInt((i/4))));
        }
    }
    return pixels;
}

function getStringPixels (string) {
    var rg = string;
    var pixels = new Array();
    for (var i = 0; i < rg.length; i++) {
        if (rg[i]=='1') {
            pixels.push(new pair((i%4)-1, 3-parseInt((i/4))));
        }
    }
    return pixels;
}

function pair(a,b){
    this.a = a;
    this.b = b;
}

function getArray(alph){
    switch(alph){
        case ' ':
            return getStringPixels('0');
        case 'a':
        case 'A':
            return getStringPixels('0110'+
                                   '1001'+
                                   '1001'+
                                   '1111'+
                                   '1001'+
                                   '1001'+
                                   '1001');
        case 'b':
        case 'B':
            return getStringPixels('1110'+
                                   '1001'+
                                   '1001'+
                                   '1110'+
                                   '1001'+
                                   '1001'+
                                   '1110');
        case 'c':
        case 'C':
            return getStringPixels('0110'+
                                   '1001'+
                                   '1000'+
                                   '1000'+
                                   '1000'+
                                   '1001'+
                                   '0110');
        case 'd':
        case 'D':
            return getStringPixels('1110'+
                                   '1001'+
                                   '1001'+
                                   '1001'+
                                   '1001'+
                                   '1001'+
                                   '1110');
        case 'e':
        case 'E':
            return getStringPixels('1111'+
                                   '1000'+
                                   '1000'+
                                   '1111'+
                                   '1000'+
                                   '1000'+
                                   '1111');
        case 'f':
        case 'F':
            return getStringPixels('1111'+
                                   '1000'+
                                   '1000'+
                                   '1111'+
                                   '1000'+
                                   '1000'+
                                   '1000');
        case 'g':
        case 'G':
            return getStringPixels('0110'+
                                   '1001'+
                                   '1000'+
                                   '1000'+
                                   '1011'+
                                   '1001'+
                                   '0110');
        case 'h':
        case 'H':
            return getStringPixels('1001'+
                                   '1001'+
                                   '1001'+
                                   '1111'+
                                   '1001'+
                                   '1001'+
                                   '1001');
        case 'i':
        case 'I':
            return getStringPixels('1111'+
                                   '0110'+
                                   '0110'+
                                   '0110'+
                                   '0110'+
                                   '0110'+
                                   '1111');
        case 'j':
        case 'J':
            return getStringPixels('1111'+
                                   '0011'+
                                   '0011'+
                                   '0011'+
                                   '0011'+
                                   '1011'+
                                   '1111');
        case 'k':
        case 'K':
            return getStringPixels('1001'+
                                   '1001'+
                                   '1010'+
                                   '1110'+
                                   '1010'+
                                   '1001'+
                                   '1001');
        case 'l':
        case 'L':
            return getStringPixels('1000'+
                                   '1000'+
                                   '1000'+
                                   '1000'+
                                   '1000'+
                                   '1000'+
                                   '1111');
        case 'm':
        case 'M':
            return getStringPixels('1111'+
                                   '1111'+
                                   '1001'+
                                   '1001'+
                                   '1001'+
                                   '1001'+
                                   '1001');
        case 'n':
        case 'N':
            return getStringPixels('1101'+
                                   '1101'+
                                   '1101'+
                                   '1011'+
                                   '1011'+
                                   '1011'+
                                   '1011');
        case 'o':
        case 'O':
            return getStringPixels('0110'+
                                   '1001'+
                                   '1001'+
                                   '1001'+
                                   '1001'+
                                   '1001'+
                                   '0110');
        case 'p':
        case 'P':
            return getStringPixels('1110'+
                                   '1001'+
                                   '1001'+
                                   '1110'+
                                   '1000'+
                                   '1000'+
                                   '1000');
        case 'q':
        case 'Q':
            return getStringPixels('0110'+
                                   '1001'+
                                   '1001'+
                                   '1001'+
                                   '1101'+
                                   '1011'+
                                   '0111');
        case 'r':
        case 'R':
            return getStringPixels('1110'+
                                   '1001'+
                                   '1001'+
                                   '1110'+
                                   '1100'+
                                   '1010'+
                                   '1001');
        case 's':
        case 'S':
            return getStringPixels('0110'+
                                   '1001'+
                                   '1000'+
                                   '1111'+
                                   '0001'+
                                   '1001'+
                                   '0110');
        case 't':
        case 'T':
            return getStringPixels('1111'+
                                   '0110'+
                                   '0110'+
                                   '0110'+
                                   '0110'+
                                   '0110'+
                                   '0110');
        case 'u':
        case 'U':
            return getStringPixels('1001'+
                                   '1001'+
                                   '1001'+
                                   '1001'+
                                   '1001'+
                                   '1001'+
                                   '1111');
        case 'v':
        case 'V':
            return getStringPixels('1001'+
                                   '1001'+
                                   '1001'+
                                   '1001'+
                                   '1001'+
                                   '1001'+
                                   '0110');
        case 'w':
        case 'W':
            return getStringPixels('1001'+
                                   '1001'+
                                   '1001'+
                                   '1001'+
                                   '1001'+
                                   '1111'+
                                   '0110');
        case 'x':
        case 'X':
            return getStringPixels('1001'+
                                   '1001'+
                                   '1001'+
                                   '0110'+
                                   '1001'+
                                   '1001'+
                                   '1001');
        case 'y':
        case 'Y':
            return getStringPixels('1001'+
                                   '1001'+
                                   '1001'+
                                   '0110'+
                                   '0110'+
                                   '0110'+
                                   '0110');
        case 'z':
        case 'Z':
            return getStringPixels('1111'+
                                   '0001'+
                                   '0010'+
                                   '0110'+
                                   '0100'+
                                   '1000'+
                                   '1111');
        case '!':
            return getStringPixels('0110'+
                                   '1111'+
                                   '0110'+
                                   '0110'+
                                   '0110'+
                                   '0000'+
                                   '0110');
        default:
            return getStringPixels('0110'+
                                   '1001'+
                                   '0001'+
                                   '0010'+
                                   '0100'+
                                   '0000'+
                                   '0100');
    }

}