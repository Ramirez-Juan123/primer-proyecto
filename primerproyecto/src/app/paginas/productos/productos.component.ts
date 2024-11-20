import { Component } from '@angular/core';
import { CarritoService } from '../../servicio/carrito.service';
import { Producto } from '../../modelos/producto.model';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  Productos: Producto[] = [
    {
      id: 1,
      nombre: 'Iniciales De Kanto',
      descripcion: 'Trío inicial principal proveniente de la región de Kanto.',
      precio: 29.99,
      imagen: 'https://m.media-amazon.com/images/I/819CNkfvGbL.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 2,
      nombre: 'Iniciales Leyendas',
      descripcion: 'Trío inicial proveniente de la antigúa región Hisui.',
      precio: 49.99,
      imagen: 'https://m.media-amazon.com/images/I/71bxF1GeuzL.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 3,
      nombre: 'Iniciales De Let´s Go',
      descripcion: 'Dúo inicial de reserva proveniente de Kanto.',
      precio: 89.99,
      imagen: 'https://m.media-amazon.com/images/I/71D7i5OCifL.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 4,
      nombre: 'Iniciales De Galar',
      descripcion: 'Trío inicial proveniente de la región de Galar',
      precio: 89.99,
      imagen: 'https://m.media-amazon.com/images/I/51LChHhYpBL._AC_.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 5,
      nombre: 'Volcarona',
      descripcion: 'Pokémon singular proveniente de la región Unova',
      precio: 89.99,
      imagen: 'https://www.pokemoncenter.com/images/DAMRoot/High/10000/P8754_701-95907_01.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 6,
      nombre: 'Snorlax',
      descripcion: 'Pokémon raro proveniente de las regiones Kanto y Johto',
      precio: 89.99,
      imagen: 'https://www.ubuy.com.ar/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFaWFAxR2tDVEwuX0FDX1NMMTUwMF8uanBn.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 7,
      nombre: 'Hydreigon',
      descripcion: 'Pokémon pseudo legendario proveniente de la región Unova',
      precio: 89.99,
      imagen: 'https://www.pokemoncenter.com/images/DAMRoot/High/10000/P8754_701-95909_01.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 8,
      nombre: 'Mimikyu',
      descripcion: 'Pokémon tipo hada y fantasma proveniente de la región Alola',
      precio: 89.99,
      imagen: 'https://www.pokemoncenter.com/images/DAMRoot/High/10000/P8038_701-29359_01.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
  ];
  constructor(private carritoService: CarritoService) {}

  // Método para agregar un producto al carrito
  agregar(producto: Producto) {
    this.carritoService.agregarAlCarrito(producto);
    alert('Producto agregado al carrito'); // Muestra el mensaje

  }
}
