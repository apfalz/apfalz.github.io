
var svg  = document.getElementById('svg');
var global_unit = 18;

var global_x = 1.0;
var global_y = 1.0;




class Arrow{
    constructor(x1, y1, x2, y2, id, unit=global_unit, x_off=global_x, y_off=global_y){
        this.unit = unit;
        x1 += x_off;
        y1 += y_off;
        x2 += x_off;
        y2 += y_off;
        this.x1   = x1*this.unit;
        this.y1   = y1*this.unit;
        this.x2   = x2*this.unit;
        this.y2   = y2*this.unit;
        this.id   = id;
        var line  = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', this.x1);
        line.setAttribute('y1', this.y1);
        line.setAttribute('x2', (x2-0.25)*unit);
        line.setAttribute('y2', this.y2);
        line.setAttribute('stroke', 'rgb(0,0,0)');
        line.setAttribute('stroke-width', '1');
        line.setAttribute('id', id);

        var triangle  = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        var tri_scale = 0.2;
        var points    = this.x2+','+this.y2+' '+(x2-(2*tri_scale))*unit+','+(y2+(1*tri_scale))*unit+' '+(x2-(2*tri_scale))*unit+','+(y2-(1*tri_scale))*unit;
        // var points    = (x2-tri_scale)*unit +','+ (y2+tri_scale)*unit + ' ' + (x2+tri_scale)*unit + ',' + (y2)*unit + ' ' + (x2-tri_scale)*unit + ',' + (y2 -tri_scale)*unit;
        // var points = ((x_off+x2)-(2*tri_scale))*unit+','+ (y_off+y2)+tri_scale*unit + ' ' + this.x2 + ',' + this.y2 + ' ' + (x_off+x2-2)*tri_scale*unit + ',' + (y_off+y2)-tri_scale*unit;
        triangle.setAttribute('points', points);
        triangle.setAttribute('fill', 'black');


        svg.append(line);
        svg.append(triangle);
    }
}

class Bent_Arrow{
    constructor(x1, y1, x2, y2, x3, y3, terminal_direction, id, unit=global_unit, x_off=global_x, y_off=global_y){
        x1           += x_off;
        y1           += y_off;
        x2           += x_off;
        y2           += y_off;
        x3           += x_off;
        y3           += y_off;
        this.unit     = unit;
        this.x1       = x1*this.unit;
        this.y1       = y1*this.unit;
        this.x2       = x2*this.unit;
        this.y2       = y2*this.unit;
        this.x3       = x3*this.unit;
        this.y3       = y3*this.unit;
        this.id       = id;
        var triangle  = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        var line      = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        var tri_scale = 0.2;

        if (terminal_direction == 'horizontal'){
            var d    = 'M'+this.x1+' '+this.y1+' '+'L'+this.x2+' '+this.y2+' '+'L'+(x3-0.25)*unit+' '+this.y3;
        }else if (terminal_direction == 'down'){
            var d    = 'M'+this.x1+' '+this.y1+' '+'L'+this.x2+' '+this.y2+' '+'L'+this.x3+' '+(y3-0.25)*unit;
        }else{
            var d    = 'M'+this.x1+' '+this.y1+' '+'L'+this.x2+' '+this.y2+' '+'L'+this.x3+' '+(y3+0.25)*unit;
        }
        line.setAttribute('d', d);
        line.setAttribute('stroke', 'rgb(0,0,0)');
        line.setAttribute('stroke-width', '1');
        line.setAttribute('fill', 'white');
        line.setAttribute('fill-opacity', '0');
        line.setAttribute('id',  this.id);

        if (terminal_direction == 'horizontal'){
            var points    = this.x3 +','+ this.y3 + ' ' + (x3-(2*tri_scale))*unit+','+(y3+(1*tri_scale))*unit+' ' + (x3-(2*tri_scale))*unit+','+(y3+(-1*tri_scale))*unit;
        }else if(terminal_direction == 'up'){
            var points    = this.x3 +','+ this.y3 + ' ' + (x3+tri_scale)*unit + ',' + (y3+2*tri_scale)*unit + ' ' + (x3-tri_scale)*unit + ',' + (y3+2*tri_scale)*unit;
        }else{
            var points    = this.x3 +','+ this.y3 + ' ' + (x3+tri_scale)*unit + ',' + (y3-2*tri_scale)*unit + ' ' + (x3-tri_scale)*unit + ',' + (y3-2*tri_scale)*unit;
        }

        triangle.setAttribute('points', points);
        triangle.setAttribute('fill', 'black');


        svg.append(line);
        svg.append(triangle);

        // var arrow_dom_object = document.getElementById(this.id);
        // arrow_dom_object.onmouseover = function(){console.log(this.id)};
        // arrow_dom_object.onmouseout  = function(){return false};arrow0
    }
}

class Line{
    constructor(x1, y1, x2, y2, unit=global_unit, x_off=global_x, y_off=global_y){
        x1      += x_off;
        y1      += y_off;
        x2      += x_off;
        y2      += y_off;
        var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', x1*unit);
        line.setAttribute('y1', y1*unit);
        line.setAttribute('x2', x2*unit);
        line.setAttribute('y2', y2*unit);
        line.setAttribute('stroke', 'rgb(0,0,0)');
        line.setAttribute('stroke-width', '1');

        svg.append(line);
    }
}

class Dotted_Box{
    constructor(x1, y1, x2, y2, id, unit=global_unit, x_off=global_x, y_off=global_y){
        x1       += x_off;
        y1       += y_off;
        x2       += x_off;
        y2       += y_off;
        this.unit = unit;
        this.x1   = x1 * this.unit;
        this.y1   = y1 * this.unit;
        this.x2   = x2 * this.unit;
        this.y2   = y2 * this.unit;
        this.id   = id;

        var d_line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        var d      = 'M'+this.x1+' '+this.y1+'L'+this.x1+' '+this.y2+' '+'L'+this.x2+' '+this.y2+' '+'L'+this.x2+' '+this.y1+' '+'L'+this.x1+' '+this.y1;
        d_line.setAttribute('stroke-dasharray', "5,2");
        d_line.setAttribute('d',  d);
        d_line.setAttribute('stroke',  'black');
        d_line.setAttribute('stroke-width',  '1');
        d_line.setAttribute('fill', 'black');
        d_line.setAttribute('fill-opacity',  '0');
        d_line.setAttribute('id',  this.id);
        svg.append(d_line);

        var dom_box_object = document.getElementById(this.id);
        dom_box_object.onmouseover = function(){dom_box_object.setAttribute('fill-opacity', '0.25'); console.log(this.id);};
        dom_box_object.onmouseout  = function(){dom_box_object.setAttribute('fill-opacity', '0')};
    }
}

class Box {
    constructor(x1, y1, x2, y2, id, text, stroke_width=1, unit=global_unit, x_off=global_x, y_off=global_y, dark='0.25', light='0.0'){
        x1                += x_off;
        y1                += y_off;
        x2                += x_off;
        y2                += y_off;

        this.x1            = x1*unit;
        this.y1            = y1*unit;
        this.x2            = x2*unit;
        this.y2            = y2*unit;
        this.id            = id;
        this.text          = text;
        this.unit          = unit;

        this.light         = '0';
        this.dark          = '0.25';
        var dark           = this.dark;
        var light          = this.light;


        this.line           = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        var d              = 'M'+this.x1+' '+this.y1+'L'+this.x1+' '+this.y2+' '+'L'+this.x2+' '+this.y2+' '+'L'+this.x2+' '+this.y1+' '+'L'+this.x1+' '+ this.y1;
        this.line.setAttribute('d', d);
        this.line.setAttribute('stroke', 'black');
        this.line.setAttribute('stroke-width', stroke_width);
        this.line.setAttribute('fill-opacity', this.light);
        this.line.setAttribute('stroke-linecap', 'square');
        this.line.setAttribute('id', id);
        svg.append(this.line);



        var text_object  = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text_object.setAttribute('text', this.text);
        text_object.setAttribute('fill', 'black');
        text_object.setAttribute('style', 'font-family  : Futura, Futura-Medium, "Futura Medium", "Century Gothic", CenturyGothic, "Apple Gothic", AppleGothic, "URW Gothic L", "Avant Garde", sans-serif');

        if (this.text == 'tanh'){
            text_object.setAttribute('x', this.x1 + 0.25*this.unit);
            text_object.setAttribute('y', this.y1 + 0.75*this.unit);

        }else if(this.text == 'LSTM'){
            text_object.setAttribute('x', this.x1 +   10.5*this.unit);
            text_object.setAttribute('y', this.y1 +    2*this.unit);
            text_object.setAttribute('font-size',  28);
        }else{
            text_object.setAttribute('x', this.x1 + 0.75*this.unit);
            text_object.setAttribute('y', this.y1 + 0.75*this.unit);

        }
        text_object.setAttribute('id',this.id+'_text');

        svg.append(text_object);

        var self = document.getElementById(this.id);
        self.onmouseover = function(){self.setAttribute('fill-opacity', dark)};
        self.onmouseout  = function(){self.setAttribute('fill-opacity', light)};

        var text_dom_object = document.getElementById(this.id+'_text');
        text_dom_object.innerHTML = this.text;
        text_dom_object.onmouseover = function(){self.setAttribute('fill-opacity', '0.25')};
        text_dom_object.onmouseout  = function(){self.setAttribute('fill-opacity', '0')};
    }
}

class Circle{

    constructor(x, y, op, id, rx=0.5, ry=0.5, unit=global_unit, text_offset_x=-0.2, x_off=global_x, y_off=global_y ){
        x        += x_off;
        y        += y_off;

        this.unit = unit;
        this.x    = (x)*this.unit;
        this.y    = (y)*this.unit;
        this.rx   = rx*this.unit;
        this.ry   = ry*this.unit;
        this.op   = op;
        this.id   = id;

        var circle  = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
        var tooltip = document.createElementNS('http://www.w3.org/2000/svg', 'title');
        circle.setAttribute('id',  this.id);
        circle.setAttribute('cx',  this.x);
        circle.setAttribute('cy',  this.y);
        circle.setAttribute('rx' , this.rx);
        circle.setAttribute('ry' , this.ry);

        circle.setAttribute('stroke',       'black');
        circle.setAttribute('stroke-width', '1');
        circle.setAttribute('fill-opacity', '0');
        tooltip.innerHTML='TEST';

        circle.appendChild(tooltip);

        var text_object = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text_object.setAttribute('fill', 'black');
        text_object.setAttribute('x', this.x-0.2+text_offset_x*this.unit);
        text_object.setAttribute('y', this.y+0.25*this.unit);
        text_object.setAttribute('id', this.id+'_text');
        text_object.setAttribute('style', 'font-family  : Futura, Futura-Medium, "Futura Medium", "Century Gothic", CenturyGothic, "Apple Gothic", AppleGothic, "URW Gothic L", "Avant Garde", sans-serif');

        svg.append(circle);
        svg.append(text_object);

        var circle_dom_object = document.getElementById(this.id);
        circle_dom_object.onmouseover = function(){circle_dom_object.setAttribute('fill-opacity', '0.25')};
        circle_dom_object.onmouseout  = function(){circle_dom_object.setAttribute('fill-opacity', '0')};

        var text_dom_object         = document.getElementById(this.id+'_text');
        text_dom_object.innerHTML   = this.op;
        text_dom_object.onmouseover = function(){circle_dom_object.setAttribute('fill-opacity', '0.25')};
        text_dom_object.onmouseout  = function(){circle_dom_object.setAttribute('fill-opacity', '0')};
    }
}

class Text{
    constructor(text, x, y, id, unit=global_unit, x_off=global_x, y_off=global_y){
        x        += x_off;
        y        += y_off;
        this.unit = unit;
        this.x    = x*this.unit;
        this.y    = y*this.unit;
        var text_object = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text_object.setAttribute('text', text);
        text_object.setAttribute('fill', 'black');
        text_object.setAttribute('id', id);
        text_object.setAttribute('x', this.x);
        text_object.setAttribute('y', this.y);
        text_object.setAttribute('style', 'font-family  : Futura, Futura-Medium, "Futura Medium", "Century Gothic", CenturyGothic, "Apple Gothic", AppleGothic, "URW Gothic L", "Avant Garde", sans-serif');
        svg.append(text_object);
        var self = document.getElementById(id);
        self.innerHTML = text;
    }
}

//====================procedure===================//
var bounding_box         = new Box(0, 0, 24, 18, 'bounding_box', 'LSTM', 4 );// bounding_box.line.dark = '0.125';bounding_box.line.light='0.125';

var input_gate_box       = new Dotted_Box(5,   10,   11, 15, 'input_gate');
var forget_gate_box      = new Dotted_Box(5, 4.9,   11, 9, 'forget_gate'); //forget gate dotted box
var update_gate_box      = new Dotted_Box(12, 4.9, 17, 9, 'update_gate');
var output_gate_box      = new Dotted_Box(17, 11,   23, 17, 'output_gate');

    // constructor(x, y, op, id, rx=0.5, ry=0.5, unit=global_unit, text_offset_x=-0.2, x_off=global_x, y_off=global_y ){
var input_mult           = new Circle    (9.5,  11,   '*',    'input_mult');
var update_mult          = new Circle    (13.5, 6,    '*',    'update_mult');
var update_add           = new Circle    (15.5, 6,    "+",    'update_add',  0.5, 0.5, global_unit, -0.3);
var output_add           = new Circle    (21.5, 12.5, '+',    'output_add',  0.5, 0.5, global_unit, -0.3);
var output_tanh          = new Circle    (19,   12.5, 'tanh', 'output_tanh', 1.0, 0.5, global_unit, -0.7);



var arrow0               = new Arrow(-1, 6, 7, 6, 'arrow0'); //x_t arrow
var y_hat_line           = new Line(-1, 8, 1, 8);
var y_hat_line_1         = new Line(1, 8, 1, 6); // y_hat t-1
var output_add_arrow     = new Bent_Arrow(20, 16, 21.5, 16, 21.5, 13, 'up', 'output_add_arrow');
var output_sigmoid_arrow = new Bent_Arrow(2, 6, 2, 16,   18, 16,   'horizontal', 'output_sigmoid_arrow');



//input gate
var input_sigmoid        = new Box       (6,   12,   8, 13, 'input_sigmoid', '&sigma;');
var input_tanh           = new Box       (6,   10.5, 8, 11.5, 'input_tanh', 'tanh');
var input_sigmoid_arrow  = new Bent_Arrow(3, 6, 3, 12.5, 6,  12.5, 'horizontal', 'input_sigmoid_arrow');
var input_tanh_arrow     = new Bent_Arrow(4, 6, 4, 11,   6,  11,   'horizontal', 'input_tanh_arrow'); // input tanh arrow
var arrow2               = new Arrow     (8, 11, 9, 11, 'arrow2');
var input_mult           = new Bent_Arrow(8, 12.5, 9.5, 12.5, 9.5, 11.5, 'up', 'input_mult');
var input_text           = new Text      ('Input', 7, 14, 'input_gate_text');
var update_add_arrow     = new Bent_Arrow(10, 11, 15.5, 11, 15.5, 6.5,   'up', 'update_add_arrow');

//forget gate
var forget_sigmoid       = new Box        (7, 5.5, 9, 6.5, 'forget_sigmoid', '&sigma;') //forget gate sigmoid
var forget_text          = new Text       ('Forget', 7, 8, 'forget_gate_text');
var arrow1               = new Arrow      (9, 6, 13, 6, 'arrrow1'); //f_t

//update
var arrow3               = new Arrow      (14, 6, 15, 6, 'arrow3'); //
var update_arrow         = new Bent_Arrow (-1, 4, 13.5, 4, 13.5, 5.5, 'down', 'update_arrow');//c_t-1
var update_text          = new Text       ('Update', 12.5, 8, 'update_gate_text');

//output
var output_sigmoid       = new Box       (18, 15.5, 20, 16.5, 'output_sigmoid', '&sigma;');
var output_tanh_arrow    = new Bent_Arrow(16, 6, 19, 6, 19, 12, 'down', 'output_tanh_arrow');
var arrow_4              = new Arrow     (20, 12.5, 21, 12.5, 'arrow_4');
var output_text          = new Text      ('Output', 18, 14.5, 'output_text');
var arrow_5              = new Arrow     (22, 12.5, 27, 12.5, 'arrow_5');
var arrow_6              = new Arrow     (19, 6, 27, 6, 'arrow_6');
