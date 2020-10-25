//CREAMOS EL OBJETO
var Matematicas = function (num) {
    //PROPIEDAD PARA ALMACENAR EL VALOR QUE
    //NOS HAN PASADO EN EL CONSTRUCTOR
    this.numero = num;
    //PROPIEDAD PARA ALMACENAR EL DOBLE DEL NUMERO
    this.doble = 0;
    //TENDREMOS UN MÉTODO PARA GENERAR EL DOBLE
    //LO HACEMOS CON FUNCIÓN ANÓNIMA, POR LO QUE
    //ALMACENAMOS EL OBJETO this EN UNA VARIABLE
    //INTERMEDIA
    var obj = this;
    this.generarDoble = function () {
        //CAMBIAMOS ALGO DEL OBJETO
        obj.doble = obj.numero * 2;
        //DEVOLVEMOS EL VALOR DOBLE DIRECTAMENTE
        //return obj.numero * 2;
        //return obj.doble;
    }
}

//function hacerAlgo() {
//    this.doble = this.numero * 2;
//    return this.doble;
//}