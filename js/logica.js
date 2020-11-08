let validar_num = e=>{
    let teclado = (document.all)?e.keyCode:e.which;
    if(teclado==8)return true;
    let exp = /[0-9]/;
    let tec = String.fromCharCode(teclado);
    return exp.test(tec);
}
let validar_letra= e=>{
    let teclado = (document.all)?e.keyCode:e.which;
    if(teclado==8)return true;
    let exp = /[ña-z ]/;
    let tec = String.fromCharCode(teclado);
    return exp.test(tec);
}
const vali_letras = {
    texto : /[ña-z]/
}

//creamos una funcion 
let cesar;
cesar = cesar || (function(){
    const doStaff = (txt,desp,action)=>{
        //variable paa poder remplazar a partir de una funcion
        let replace = (function(){
            //va a tener el abecedario
            const abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
            let l = abc.length;

            //funcio nque se encarga de cifrar el mensaje
            return function(c){
                //indexOF para
                let i = abc.indexOf(c.toLowerCase()) ;
                //verificar si esta o no vacio
                let despa_usar;
                if(i != -1){                    
                    let pos = i;                        
                    if(action){
                        //recorre hacia adeltante
                                       
                        pos = (pos+desp)%27;

                        console.log(`posicion cuadno va de ira ${pos}`);
                        //ternario es un if simplificado, si la posicion es mayor o igual a 1 retornas un 1 si no retornas un 0
                        pos -= (pos >= 1)?1:0;
                        console.log(`posicion cuando va d regreso ${pos}`);
                    }else{
                        for(let j = 0; j<desp;j++){
                            despa_usar = 27*j;
                            if(despa_usar>=desp){
                                break;
                            }
                       } 
                        //retroceder
                        pos= (pos-desp+(despa_usar+1))%27;
                        console.log(despa_usar+1);
                        console.log(`pocision de ida regreso en segunda accion ${pos}`);
                        pos +=(pos < 0)?1:0; 
                        console.log(`pocision de ida ida en segunda accion ${pos}`);
                    }
                    return abc[pos];
                }
                return c;
            };
            //agrego parentesis de la parte anonima
        })();

        //Aqui colocamos si tiene un parecido o no
        let re = (/[ña-z]/ig);
        return String(txt).replace(re,function(match){
            return replace(match);
        });
    };
    //saber si se quiere cifrar o descifrar
    return{
        //Elementos de la funcion
        encode : function(txt,desp){
            return doStaff(txt,desp,true);
        },
        decode : function(txt,desp,){
            return doStaff(txt,desp,false);
        }
    };
})();
//realizar una funcion que se encargue de codificar y decodificar

const codificar = ()=>{
    //obetenr el texto
    let salto = Number(document.getElementById("posicion").value);
    let letras = String(document.getElementById("cadena").value);
    
    const pattern = /[ña-z ]/;
    for(i=0;i<letras.length;i++){
        if(pattern.test(letras[i])){
            console.log(pattern.test(letras[i]));
            
            
        }else{
            console.log(pattern.test(letras[i]));
            document.getElementById("resultado").textContent="";            
            return false;
        }
    }
    document.getElementById("resultado").innerHTML = cesar.encode(letras,salto);
    
}

const decodificar = ()=>{
    let salto = Number(document.getElementById("posicion").value);
    
    //obetenr el texto
    document.getElementById("resultado").innerHTML = cesar.decode(document.getElementById("cadena").value,salto);
    
}