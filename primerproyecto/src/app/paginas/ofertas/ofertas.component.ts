import { Component } from '@angular/core';
import { CarritoService } from '../../servicio/carrito.service';
import { Producto } from '../../modelos/producto.model';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ofertas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent {
  Productos: Producto[] = [
    {
      id: 1,
      nombre: 'Oferta Navideña',
      descripcion: '50% de descuento.',
      precio: 15.99,
      imagen: 'https://www.pokemoncenter.com/images/DAMRoot/High/10000/P9759_701E10516_02.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 2,
      nombre: 'Oferta Navideña',
      descripcion: '50% de descuento.',
      precio: 45.99,
      imagen: 'https://c1-ebgames.eb-cdn.com.au/merchandising/images/packshots/16cd45683d914e099bdba75377bd1b41_Original.png', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 3,
      nombre: 'Six Pack',
      descripcion: '20% de descuento.',
      precio: 70.99,
      imagen: 'https://levelonegameshop.com/cdn/shop/products/bc3571c5cdabd2f3f3de352df630ee3b.jpg?v=1593561683', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 4,
      nombre: 'Eevee Evolutions',
      descripcion: '30% de descuento',
      precio: 60.99,
      imagen: 'https://i.ebayimg.com/images/g/uokAAOSw4Shl0BGW/s-l1200.png', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 5,
      nombre: 'Halloween',
      descripcion: '¡70% de descuento!',
      precio: 25.99,
      imagen: 'https://i.ebayimg.com/images/g/XLkAAOSwww5gP9aH/s-l1200.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 6,
      nombre: 'Card game + peluche',
      descripcion: '20% de descuento',
      precio: 24.99,
      imagen: 'https://media.karousell.com/media/photos/products/2022/12/5/pokemon_lottery_2022_pikachu_p_1670212760_875d62fe_progressive.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 7,
      nombre: 'Legendarios Origen',
      descripcion: '40% de descuento',
      precio: 50.99,
      imagen: 'https://i.ebayimg.com/images/g/SJUAAOSwl41kMnHv/s-l1200.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 8,
      nombre: 'Legendarios Paradoja',
      descripcion: '20% de descuento',
      precio: 70.99,
      imagen: 'https://www.japanstuffs.com/cdn/shop/files/1_50f69ad8-40fd-4bcc-8187-94f04a452405.jpg?v=1727271135', // Asegúrate de que esta ruta sea correcta
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
