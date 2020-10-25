var Empleado = function (apellido, oficio, fechaalta, salario, departamento) {
    this.apellido = apellido;
    this.oficio = oficio;
    this.fechaalta = fechaalta;
    this.salario = salario;
    this.departamento = departamento;
    this.salarioAnual = function () {
        return this.salario * 12;
    }
    this.aniosEmpresa = function () {
        var fecha = new Date();
        var anioactual = fecha.getFullYear();
        var anioalta = this.fechaalta.substr(6);
        //console.log("Actual: " + anioactual);
        //console.log("Alta: " + anioalta);
        return parseInt(anioactual) - parseInt(anioalta);
    }
    this.salarioTotal = function () {
        return this.salarioAnual() * this.aniosEmpresa();
    }
}