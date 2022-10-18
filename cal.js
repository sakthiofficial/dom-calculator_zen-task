function parent(tag, attr, attrval, attr1, attrval1) {
    var ele = document.createElement(tag);
    ele.setAttribute(attr, attrval);
    ele.setAttribute(attr1, attrval1);
    return ele;
}
function child1(tag, attr, attrval) {
    var ele = document.createElement(tag);
    ele.setAttribute(attr, attrval);
    return ele;
}
function helderChild(tag, attr, attrval, attr1, attrval1, attr2, attrval2, attr3, attrval3) {
    var ele = document.createElement(tag);
    ele.setAttribute(attr, attrval);
    ele.setAttribute(attr1, attrval1);
    ele.setAttribute(attr2, attrval2);
    ele.setAttribute(attr3, attrval3);

    return ele;
}
function childrens(tag, attr, attrval, attr1, attrval1, attr2, attrval2) {
    var ele = document.createElement(tag);
    ele.setAttribute(attr, attrval);
    ele.setAttribute(attr1, attrval1);
    ele.setAttribute(attr2, attrval2);
    return ele;
}
// cacultor start here
// bootstarp head
var rape = child1("div", "class", "container")
// bootstarp row 
var rowb = child1("div", "class", "row")
rape.append(rowb)
// bootstap col
var colb = child1("div", "class", "col-12 col-sm-12 ")
rowb.append(colb)
// parent of the div 
var parte = parent("form", "name", "king", "class", "pt1")
colb.append(parte)
// first childred div element
var calc = child1("div", "class", "calculator")
parte.append(calc)
// calcultor screen
var screen = helderChild("input", "type", "text", "name", "res", "id", "screen", "placeholder", "0")
calc.append(screen)
// calculator buttons
var input1 = document.createElement("input");
input1.setAttribute("type","button");
input1.setAttribute("value","CL");
input1.setAttribute("class","clear");
input1.setAttribute("onclick","king.res.value = '' ");

calc.append(input1)
var input2 = childrens("input", "type", "button", "value", "DEL", "onclick", "king.res.value = king.res.value.slice(0,-1)")
calc.append(input2)
var input3 = childrens("input", "type", "button", "value", "%", "onclick", "king.res.value += '%'")
calc.append(input3)
var input4 = childrens("input", "type", "button", "value", "/", "onclick", "king.res.value += '/'")
calc.append(input4)
var input5 = childrens("input", "type", "button", "value", "7", "onclick", "king.res.value += '7'")
calc.append(input5)
var input6 = childrens("input", "type", "button", "value", "8", "onclick", "king.res.value += '8'")
calc.append(input6)
var input7 = childrens("input", "type", "button", "value", "9", "onclick", "king.res.value += '9'")
calc.append(input7)
var input8 = childrens("input", "type", "button", "value", "×", "onclick", "king.res.value += '*'")
calc.append(input8)
var input9 = childrens("input", "type", "button", "value", "4", "onclick", "king.res.value += '4'")
calc.append(input9)
var input10 = childrens("input", "type", "button", "value", "5", "onclick", "king.res.value += '5'")
calc.append(input10)
var input11 = childrens("input", "type", "button", "value", "6", "onclick", "king.res.value += '6'")
calc.append(input11)
var input12 = childrens("input", "type", "button", "value", "-", "onclick", "king.res.value += '-'")
calc.append(input12)
var input13 = childrens("input", "type", "button", "value", "1", "onclick", "king.res.value += '1'")
calc.append(input13)
var input14 = childrens("input", "type", "button", "value", "2", "onclick", "king.res.value += '2'")
calc.append(input14)
var input15 = childrens("input", "type", "button", "value", "3", "onclick", "king.res.value += '3'")
calc.append(input15)
var input16 = childrens("input", "type", "button", "value", "+", "onclick", "king.res.value += '+'")
calc.append(input16)
var input17 = childrens("input", "type", "button", "value", ".", "onclick", "king.res.value += '.'")
calc.append(input17)
var input18 = childrens("input", "type", "button", "value", "0", "onclick", "king.res.value += '0'")
calc.append(input18)
var input19 = document.createElement("input");
input19.setAttribute("type", "button")
input19.setAttribute("value", "=")
input19.setAttribute("onclick", "king.res.value = eval(king.res.value)")
calc.append(input19)
input19.setAttribute("class", "equal")
document.body.append(rape)