## DIAGRAMA ENTIDAD RELACION DEL PROYECTO

#### PROYECTO: APLICACIÓN DE E-COMMERCE
#### ENTIDADES
- Usuario
    - id (PK)
    - firstName
    - lastName
    - email
    - password
    - rol (Administrador | Usuario)

- Producto
    - id (PK)
    - name
    - description
    - price
    - stock
    - idCategoria (FK a Categoria)
    - imageURL

- Categoria
    - id (PK)
    - nombre
    - descripcion

- CarritoDeCompras
    - id (PK)
    - idUsuario (FK a Usuario)
    - fechaCreacion

- OrdenDeCompra
    - id (PK)
    - idUsuario (FK a Usuario)
    - fechaOrden
    - total

- DetalleDeCompra
    - id (PK)
    - idOrden (FK a OrdenDeCompra)
    - idProducto (FK a Producto)
    - cantidad
    - precioUnitario


#### RELACIONES
- Usuario a OrdenDeCompra: Una relación de Uno a Muchos (1:N) ya que un usuario puede generar muchas órdenes de compra, pero una orden de compra pertenece solo a un usuario.

- OrdenDeCompra a DetalleDeCompra: Una relación Uno a Muchos (1:N) puesto que una orden puede incluir multiples detalles (productos), pero un detalle de compra se asocia a una única orden de compra.

- Producto a DetalleDeCompra: Una relación Uno a Muchos (1:N) porque un producto puede estar en muchos detalles de compra, pero un detalle de compra refiere a un único producto.

- Usuario a CarritoDeCompras: Una relación de Uno a Uno (1:1) puesto que un usuario puede solamente tener 1 carrito de compras y un carrito de compras puede pertenecer a un solo usuario.

- Producto a Categoria: Una relación de Muchos a Uno (N:1) dado que muchos productos pueden pertenecer a una misma caregoria, pero un producto se asocia a una única categoría.

