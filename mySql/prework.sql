

create database pre_work;

create table Comprador(idComprador int(5) primary key auto_increment not null, nombre varchar(30), apellido varchar(30), direccion varchar(50));
 
create table Vendedor(idVendedor int(5) primary key auto_increment not null, nombre varchar(30), apellido varchar(30));
 
create table Envio(idEnvio int(5) primary key auto_increment not null, idComprador int(5), idVendedor int(5), fechaEnvio timestamp, direccionEnvio varchar(50), foreign key (idComprador) references Coshow mprador(idComprador), foreign key (idVendedor) references Vendedor(idVendedor));
 
create table Factura(idFactura int(3) primary key auto_increment not null, idEnvio int(5), fechaPago timestamp, importe float(10,2), direccionFacturacion varchar(50), foreign key (idEnvio) references Envio(idEnvio));
 
create table Articulo(idArticulo int(5) primary key auto_increment not null, idEnvio int(5), nombre varchar(30), precio float(10,2), foreign key (idEnvio) references Envio (idEnvio));
 
create table VendedorArticulo(idVendedorArt int(5) primary key auto_increment not null, idVendedor int(5), idArticulo int(5), foreign key (idVendedor) references Vendedor(idVendedor), foreign key (idArticulo) references Articulo(idArticulo) );
 
insert into Comprador (idComprador,nombre,apellido,direccion) values(1,"Chesco","Carducci","Algún lugar de Peñagrande");
insert into Comprador (nombre,apellido,direccion) values("Juan","Rolo","Algún lugar de Madrid");
insert into Comprador (nombre,apellido,direccion) values("Victor","Wang","Algún lugar de La Dehesa");
 
insert into Vendedor (nombre,apellido) values ("Pepe", "Flores");
insert into Vendedor (nombre,apellido) values ("Raúl", "Sánchez");
insert into Vendedor (nombre,apellido) values ("Sancho", "Vargas");
 
insert into Envio (idComprador,idVendedor,direccionEnvio) values(2,1,"Calle Orense 69");
insert into Envio (idComprador,idVendedor,direccionEnvio) values(3,2,"Calle Bravo Murillo 224");
insert into Envio (idComprador,idVendedor,direccionEnvio) values(1,3,"Paseo de la Castellana 120");
 
insert into Factura (idEnvio,importe,direccionFacturacion) values (1,30.50,"Calle Orense 69");
insert into Factura (idEnvio,importe,direccionFacturacion) values (2,52,"Calle Bravo Murillo 224");
insert into Factura (idEnvio,importe,direccionFacturacion) values (3,73.80,"Paseo de la Castellana 120");
 
insert into Articulo(idEnvio, nombre, precio)values(1,"Escoba",8.5);
insert into Articulo(idEnvio, nombre, precio)values(1,"Fregona",9.5);
insert into Articulo(idEnvio, nombre, precio)values(1,"Cubo de basura",12.5);
insert into Articulo(idEnvio, nombre, precio)values(2,"Generador eléctrico",27);
insert into Articulo(idEnvio, nombre, precio)values(2,"Auriculares",25);
insert into Articulo(idEnvio, nombre, precio)values(3,"Mouse Gamer",47);
insert into Articulo(idEnvio, nombre, precio)values(3,"Teclado Usb",26.80);
 
insert into VendedorArticulo(idVendedor,idArticulo)values(1,1);
insert into VendedorArticulo(idVendedor,idArticulo)values(1,2);
insert into VendedorArticulo(idVendedor,idArticulo)values(1,3);
insert into VendedorArticulo(idVendedor,idArticulo)values(2,4);
insert into VendedorArticulo(idVendedor,idArticulo)values(2,5);
insert into VendedorArticulo(idVendedor,idArticulo)values(3,6);
insert into VendedorArticulo(idVendedor,idArticulo)values(3,7);
 
create index i_ventas on Factura(fechaPago,importe);