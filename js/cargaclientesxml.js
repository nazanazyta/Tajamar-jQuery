$(document).ready(function () {
    $.get("xml/ClientesXML.xml", function (data) {
        var clientes = $(data).find("CLIENTE");
        clientes.each(function () {
            var id = $(this).attr("IDCLIENTE");
            //var nombre = $(this).find("NOMBRE").text();   //coge el primero por defecto
            var nombre = $(this).find("NOMBRE").first().text(); //coge el primero de muchos
            var opt = $("<option>", {
                "text": nombre
                , "value": id
            });
            //var opt = $("<option>");
            //opt.text(nombre);
            //opt.val(id);
            $("#selectclientes").append(opt);
        });
        $("#selectclientes").change(function () {
            var id = $(this).val();
            //console.log(id);
            var cliente = $(data).find("CLIENTE[IDCLIENTE=" + id + "]");
            var nombre = cliente.find("NOMBRE").text();
            var direccion = cliente.find("DIRECCION").text();
            var email = cliente.find("EMAIL").text();
            var codigo = cliente.find("CODIGOPOSTAL").text();
            var web = cliente.find("PAGINAWEB").text();
            var imagen = cliente.find("IMAGENCLIENTE").text();
            //console.log(nombre);
            //console.log(direccion);
            //console.log(email);
            //console.log(codigo);
            //console.log(web);
            //console.log(imagen);
            var html = "<p><u>Nombre:</u> <span>" + nombre + "</span></p>";
            html += "<p><u>Dirección:</u> <span>" + direccion + "</span></p>";
            html += "<p><u>Email:</u> <span>" + email + "</span></p>";
            html += "<p><u>Código postal:</u> <span>" + codigo + "</span></p>";
            html += "<p><u>Página web:</u> <a href='" + web + "'>" + web + "</a></p>";
            html += "<img src='" + imagen + "' class='img-thumbnail'/>";
            $("#resultado").html(html);
        });
    });
});