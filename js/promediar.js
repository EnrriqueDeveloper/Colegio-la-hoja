// Copyright 2021 JUSTINO RAMOS STUDENT

/**
 * (TRABAJO PRACTICO)
 *
 * @author juscoder
 */
function agregarNotas(){
  
    let nom=document.getElementById('nombre').value;
    let not1=document.getElementById('nota1').value;
    let not2=document.getElementById('nota2').value;
    let not3=document.getElementById('nota3').value;
    let not4=document.getElementById('nota4').value;
    let not5=document.getElementById('nota5').value;
    let not6=document.getElementById('nota6').value;
    let not7=document.getElementById('nota7').value;
    let not8=document.getElementById('nota8').value;
    let not9=document.getElementById('nota9').value;
    let not10=document.getElementById('nota10').value;
    let not11=document.getElementById('nota11').value;
    
    //Validadr el campo nombre
    if(nom===""){
        
        swal("Ingrese el nombre del Estudiante", "El campo de nombre no puede ser vacio", "warning");return false;
    }
    // Validar las notas si estan vacias
    if(not1==="" || not2==="" || not3==="" || not4==="" || not5==="" || not6==="" || not7==="" || not8==="" || not9==="" || not10==="" || not11==="") {
        
        swal("Ingese las notas por favor", "La notas no pueden ser vacios", "warning");return false;
        
    }
    //Validar las notas, no mayor de 21 puntos, solo asta 20
    if(not1 >= 21 || not2 >= 21  || not3 >= 21  || not4 >= 21  || not5 >= 21 || not6 >= 21 || not7 >= 21 || not8>= 21 || not9 >= 21 || not10 >= 21 || not11 >= 21){
        alert("la nota no puede ser mas de 20")
        return false;
    }
    
    //Promediar la suma de las notas entre 3
    var prom = (parseFloat(not1)+ parseFloat(not2)+ parseFloat(not3)+ parseFloat(not4)+ parseFloat(not5)+ parseFloat(not6)+ parseFloat(not7)+ parseFloat(not8)+ parseFloat(not9)+ parseFloat(not10)+ parseFloat(not11)) /11;  

    //Variable obserbacion
    var  obs =0;
    //Promedio menor o igual a 12.5 entonces aprobado, caso ocntrario aprobado
    if(prom >=12.5){
        obs =value="!Aprobado¡ &#x2714";
        
    }else{
    obs =value="!Desaprobado¡ &#x274c";
    
    }   
      
    const tabla=document.getElementById('addtabla');
    
    const fila=document.createElement('tr');            
              
    
    fila.innerHTML=`<td> ${nom} </td><td> ${not1} </td><td> ${not2} </td><td> ${not3} </td><td> ${not4} </td><td> ${not5} </td><td> ${not6} </td><td> ${not7} </td><td> ${not8} </td><td> ${not9} </td><td> ${not10} </td><td> ${not11} </td><td> ${prom.toFixed(1)} </td><td> ${obs} </td>`;
    
     


    
    tabla.appendChild(fila);

    if(prom>12.5){
        document.querySelector("#addtabla tr:last-child td:nth-child(13)").style.background = "#B3DEBA";
    }else{
        document.querySelector("#addtabla tr:last-child td:nth-child(13)").style.background = "#FFCABA";
    }
    if(not1>12.5){
        document.querySelector("#addtabla tr:last-child td:nth-child(2)").style.color = "blue";
    }else{
        document.querySelector("#addtabla tr:last-child td:nth-child(2)").style.color = "red";
    }
    if(not2>12.5){
        document.querySelector("#addtabla tr:last-child td:nth-child(3)").style.color = "blue";
    }else{
        document.querySelector("#addtabla tr:last-child td:nth-child(3)").style.color = "red";
    }
    if(not3>12.5){
        document.querySelector("#addtabla tr:last-child td:nth-child(4)").style.color = "blue";
    }else{
        document.querySelector("#addtabla tr:last-child td:nth-child(4)").style.color = "red";
    }
    if(not4>12.5){
        document.querySelector("#addtabla tr:last-child td:nth-child(5)").style.color = "blue";
    }else{
        document.querySelector("#addtabla tr:last-child td:nth-child(5)").style.color = "red";
    }
    if(not5>12.5){
        document.querySelector("#addtabla tr:last-child td:nth-child(6)").style.color = "blue";
    }else{
        document.querySelector("#addtabla tr:last-child td:nth-child(6)").style.color = "red";
    }
    if(not6>12.5){
        document.querySelector("#addtabla tr:last-child td:nth-child(7)").style.color = "blue";
    }else{
        document.querySelector("#addtabla tr:last-child td:nth-child(7)").style.color = "red";
    }
    if(not7>12.5){
        document.querySelector("#addtabla tr:last-child td:nth-child(8)").style.color = "blue";
    }else{
        document.querySelector("#addtabla tr:last-child td:nth-child(8)").style.color = "red";
    }
    if(not8>12.5){
        document.querySelector("#addtabla tr:last-child td:nth-child(9)").style.color = "blue";
    }else{
        document.querySelector("#addtabla tr:last-child td:nth-child(9)").style.color = "red";
    }
    if(not9>12.5){
        document.querySelector("#addtabla tr:last-child td:nth-child(10)").style.color = "blue";
    }else{
        document.querySelector("#addtabla tr:last-child td:nth-child(10)").style.color = "red";
    }
    if(not10>12.5){
        document.querySelector("#addtabla tr:last-child td:nth-child(11)").style.color = "blue";
    }else{
        document.querySelector("#addtabla tr:last-child td:nth-child(11)").style.color = "red";
    }
    if(not11>12.5){
        document.querySelector("#addtabla tr:last-child td:nth-child(12)").style.color = "blue";
    }else{
        document.querySelector("#addtabla tr:last-child td:nth-child(12)").style.color = "red";
    }
    
    
    
    document.getElementById('nombre').value='';
    document.getElementById('nota1').value='';
    document.getElementById('nota2').value='';
    document.getElementById('nota3').value='';
    document.getElementById('nota4').value='';
    document.getElementById('nota5').value='';
    document.getElementById('nota6').value='';
    document.getElementById('nota7').value='';
    document.getElementById('nota8').value='';
    document.getElementById('nota9').value='';
    document.getElementById('nota10').value='';
    document.getElementById('nota11').value='';
    

}
