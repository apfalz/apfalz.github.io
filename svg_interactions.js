
var forget_gate    = document.getElementById("forget_gate");
var input_gate     = document.getElementById("input_gate");
var update_gate    = document.getElementById("update_gate");
var output_gate    = document.getElementById("output_gate");
//
var forget_sigmoid = document.getElementById("forget_sigmoid"); var forget_sigmoid_text = document.getElementById("forget_sigmoid_text");
var input_sigmoid  = document.getElementById("input_sigmoid");  var input_sigmoid_text  = document.getElementById("input_sigmoid_text");
var input_tanh     = document.getElementById("input_tanh");     var input_tanh_text     = document.getElementById("input_tanh_text");
var input_mult     = document.getElementById("input_mult");     var input_mult_text     = document.getElementById("input_mult_text");
var update_mult    = document.getElementById("update_mult");    var update_mult_text    = document.getElementById("update_mult_text");
var update_add     = document.getElementById("update_add");     var update_add_text     = document.getElementById("update_add_text");
var output_sigmoid = document.getElementById("output_sigmoid"); var output_sigmoid_text = document.getElementById("output_sigmoid_text");
var output_tanh    = document.getElementById("output_tanh");    var output_tanh_text    = document.getElementById("output_tanh_text");
var output_mult    = document.getElementById("output_mult");    var output_mult_text    = document.getElementById("output_mult_text");



var opass = '0.75';

var items   = [forget_gate, input_gate , update_gate, output_gate,forget_sigmoid, input_sigmoid, input_tanh, input_mult, update_mult, update_add, output_sigmoid, output_tanh, output_mult];



for (var i=0; i < items.length; i++){
    let item = items[i];
    let ani  = 'fade 3s';
    items[i].addEventListener("animationend", function(){item.style['animation'] = ''; item.style['fill-opacity'] = 0;});
    items[i].onmouseout      = function(){item.style['animation'] = ani};
    items[i].onmouseover     = function(){item.style['fill-opacity'] = opass};
}
