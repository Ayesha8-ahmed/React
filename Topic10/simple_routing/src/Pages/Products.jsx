import monitor from '../assets/monitor.jpeg';
import laptop from '../assets/laptop.jpeg';
import mob from '../assets/mob.jpeg';
import headphones from '../assets/headphones.jpeg';
import keyboard from '../assets/keyboard.png';
import mouse from '../assets/mouse.jpeg';

const products = [
  { id: 1, name: "Laptop", price: 999, img: laptop },
  { id: 2, name: "Phone", price: 599, img: mob },
  { id: 3, name: "Headphones", price: 199, img: headphones },
  { id: 4, name: "Keyboard", price: 99, img: keyboard },
  { id: 5, name: "Mouse", price: 49, img: mouse },
  { id: 6, name: "Monitor", price: 299, img: monitor },
];

function Products() {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {products.map(product => (
        <div key={product.id} className="border rounded p-4 shadow text-center">
          <img src={product.img} alt={product.name} className="mb-2" />
          <h3 className="font-bold">{product.name}</h3>
          <p className="text-gray-600">${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;