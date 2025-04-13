import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  categories = ['iphone 11', 'iphone 13', 'iphone 14', 'iphone 15'];
  selected = 'iphone 11';

  products = [
    {
      id: 1,
      category: 'iphone 13',
      name: 'Чехол для Iphone 13',
      description: 'Прочный и стильный чехол.',
      rating: 4.5,
      likes: 0,
      image: './assets/iphone13.jpeg',
    },
    {
      id: 2,
      category: 'iphone 14',
      name: 'Чехол для Iphone 14',
      description: 'Ударопрочный чехол с подставкой.',
      rating: 4.7,
      likes: 0,
      image: './assets/iphone14.jpg',
    },
    {
      id: 3,
      category: 'iphone 15',
      name: 'Чехол для Iphone 15',
      description: 'Тонкий силиконовый чехол.',
      rating: 4.2,
      likes: 0,
      image: './assets/iphone15.jpeg',
    },
    {
      id: 4,
      category: 'iphone 11',
      name: 'Чехол для iPhone 11',
      description: 'Ударопрочный чехол с подставкой.',
      rating: 4.8,
      likes: 0,
      image: './assets/iphone11.jpeg',
    },
    {
      id: 5,
      category: 'iphone 13',
      name: 'Чехол для Iphone 13',
      description: 'Прочный и стильный чехол.',
      rating: 4.5,
      likes: 0,
      image: './assets/iphone13.jpeg',
    },
    {
      id: 6,
      category: 'iphone 14',
      name: 'Чехол для Iphone 14',
      description: 'Ударопрочный чехол с подставкой.',
      rating: 4.7,
      likes: 0,
      image: './assets/iphone14.jpg',
    },
    {
      id: 7,
      category: 'iphone 15',
      name: 'Чехол для Iphone 15',
      description: 'Тонкий силиконовый чехол.',
      rating: 4.2,
      likes: 0,
      image: './assets/iphone15.jpeg',
    },
    {
      id: 8,
      category: 'iphone 11',
      name: 'Чехол для iPhone 11',
      description: 'Ударопрочный чехол с подставкой.',
      rating: 4.8,
      likes: 0,
      image: './assets/iphone11.jpeg',
    },
    {
      id: 9,
      category: 'iphone 13',
      name: 'Чехол для Iphone 13',
      description: 'Прочный и стильный чехол.',
      rating: 4.5,
      likes: 0,
      image: './assets/iphone13.jpeg',
    },
    {
      id: 10,
      category: 'iphone 14',
      name: 'Чехол для Iphone 14',
      description: 'Ударопрочный чехол с подставкой.',
      rating: 4.7,
      likes: 0,
      image: './assets/iphone14.jpg',
    },
  ];

  constructor(private router: Router) {}

  getfilteredProducts() {
    return this.products.filter(p => p.category === this.selected);
  }

  selectCategory(event: any) {
    this.selected = event?.target.value;
  }

  removeProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }

  likeProduct(id: number) {
    const product = this.products.find(p => p.id === id);
    if (product) {
      product.likes += 1;
    }
  }

  openProductDetails(productId: number) {
    const product = this.products.find(p => p.id === productId); // Находим продукт по ID
    if (product) {
      const url = this.router.serializeUrl(
        this.router.createUrlTree(['/product', productId])
      );
      window.open(url, '_blank');
      this.router.navigate([], {
        state: { product }
      });
    }
  }
}
