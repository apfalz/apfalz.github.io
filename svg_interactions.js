var drawing        = document.getElementById("lstm_drawing").contentDocument;

console.log(drawing);


var forget_gate    = drawing.forget_gate;

console.log(forget_gate);
var input_gate     = drawing.input_gate;
var update_gate    = drawing.update_gate;
var output_gate    = drawing.output_gate;
var forget_sigmoid = drawing.forget_sigmoid;
var input_sigmoid  = drawing.input_sigmoid;
var input_tanh     = drawing.input_tanh;
var input_mult     = drawing.input_mult;
var update_mult    = drawing.update_mult;
var update_add     = drawing.update_add;
var output_sigmoid = drawing.output_sigmoid;
var output_tanh    = drawing.output_tanh;
var output_mult    = drawing.output_mult;



var opass = '0.75';

var items   = [forget_gate, input_gate , update_gate, output_gate,forget_sigmoid, input_sigmoid, input_tanh, input_mult, update_mult, update_add, output_sigmoid, output_tanh, output_mult];



for (var i=0; i < items.length; i++){
    let item = items[i];
    let ani  = 'fade 3s';
    items[i].addEventListener("animationend", function(){item.style['animation'] = ''; item.style['fill-opacity'] = 0;});
    items[i].onmouseout      = function(){item.style['animation'] = ani};
    items[i].onmouseover     = function(){item.style['fill-opacity'] = opass};
}
