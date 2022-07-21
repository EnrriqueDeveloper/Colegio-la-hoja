$(document).ready(function(){
    $('#uno').click(function(){
        document.forms.display.value += 1;
    });
    $('#dos').click(function(){ 
        document.forms.display.value += 2;
    });
    $('#tres').click(function(){ 
        document.forms.display.value += 3;
    });
    $('#cuatro').click(function(){ 
        document.forms.display.value += 4;
    });
    $('#cinco').click(function(){ 
        document.forms.display.value += 5;
    });
    $('#seis').click(function(){ 
        document.forms.display.value += 6;
    });
    $('#siete').click(function(){ 
        document.forms.display.value += 7;
    });
    $('#ocho').click(function(){ 
        document.forms.display.value += 8;
    });
    $('#nueve').click(function(){ 
        document.forms.display.value += 9;
    });
    $('#cero').click(function(){ 
        document.forms.display.value += 0;
    });
    $('#suma').click(function(){ 
        document.forms.display.value += '+';
    });
    $('#resta').click(function(){ 
        document.forms.display.value += '-';
    });
    $('#multi').click(function(){ 
        document.forms.display.value += '*';
    });
    $('#divide').click(function(){ 
        document.forms.display.value += '/';
    });
    $('#punto').click(function(){ 
        document.forms.display.value += '.';
    });
    $('#equal').click(function(){ 
        if (display.value ==""){
            alert('Por favor ingrese un número a la calculadora')
        }else{
            document.forms.display.value =
            eval(document.forms.display.value);
        }
    });
    $('#clear').click(function(){ 
        document.forms.display.value = "";
    });
})