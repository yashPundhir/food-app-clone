// constants/index.js
import bg1 from "../assets/bg1.jpeg";
import bg3 from "../assets/bg-3.jpeg";
import bg4 from "../assets/bg4.jpeg";
import bg5 from "../assets/bg5.jpeg";
import bg6 from "../assets/bg6.jpeg";



export const foodCategories = [
  {
    id: 1,
    name: 'North Indian',
    description: 'Delicious North Indian dishes like Butter Chicken, Naan, and Paneer.',
    image: bg1,
    dishes: [
      { id: 1, name: 'Butter Chicken', description: 'Creamy tomato-based chicken curry', price: '$12', image: '/src/assets/butter-chicken.jpg' },
      { id: 2, name: 'Paneer Tikka', description: 'Spiced and grilled paneer cubes', price: '$10', image: '/src/assets/paneer-tikka.jpg' },
      { id: 3, name: 'Naan', description: 'Soft and fluffy flatbread', price: '$2', image: '/src/assets/naan.jpg' },
      { id: 4, name: 'Dal Makhani', description: 'Creamy lentil curry', price: '$8', image: '/src/assets/dal-makhani.jpg' },
      // Add more dishes...
    ]
  },
  {
    id: 2,
    name: 'South Indian',
    description: 'Savor South Indian delicacies such as Dosa, Idli, and Sambar.',
    image: bg1,
    dishes: [
      { id: 1, name: 'Dosa', description: 'Crispy rice pancake served with chutney', price: '$5', image: '/src/assets/dosa.jpg' },
      { id: 2, name: 'Idli', description: 'Steamed rice cakes', price: '$3', image: '/src/assets/idli.jpg' },
      { id: 3, name: 'Sambar', description: 'Tangy lentil soup with vegetables', price: '$4', image: '/src/assets/sambar.jpg' },
      // Add more dishes...
    ]
  },
  {
    id: 3,
    name: 'Punjabi',
    description: 'Enjoy hearty Punjabi meals including Chole Bhature, Dal Makhani, and Lassi.',
    image: bg3,
    dishes: [
      { id: 1, name: 'Chole Bhature', description: 'Spicy chickpeas with fried bread', price: '$9', image: '/src/assets/chole-bhature.jpg' },
      { id: 2, name: 'Lassi', description: 'Refreshing yogurt-based drink', price: '$3', image: '/src/assets/lassi.jpg' },
      { id: 3, name: 'Aloo Paratha', description: 'Stuffed flatbread with spiced potatoes', price: '$6', image: '/src/assets/aloo-paratha.jpg' },
      // Add more dishes...
    ]
  },
  {
    id: 4,
    name: 'Chinese',
    description: 'Tasty Chinese food options like Noodles, Manchurian, and Spring Rolls.',
    image: bg4,
    dishes: [
      { id: 1, name: 'Hakka Noodles', description: 'Stir-fried noodles with veggies', price: '$7', image: '/src/assets/hakka-noodles.jpg' },
      { id: 2, name: 'Manchurian', description: 'Crispy fried veggie balls in a spicy sauce', price: '$8', image: '/src/assets/manchurian.jpg' },
      { id: 3, name: 'Spring Rolls', description: 'Crispy rolls stuffed with vegetables', price: '$5', image: '/src/assets/spring-rolls.jpg' },
      // Add more dishes...
    ]
  },
  {
    id: 5,
    name: 'Vegetarian',
    description: 'A variety of healthy and delicious vegetarian dishes.',
    image: bg5,
    dishes: [
      { name: 'Veg Biryani', description: 'Aromatic rice with mixed vegetables', price: '$10', image: '/src/assets/veg-biryani.jpg' },
      { name: 'Palak Paneer', description: 'Spinach and paneer curry', price: '$11', image: '/src/assets/palak-paneer.jpg' },
      { name: 'Mix Veg Curry', description: 'Curry with seasonal vegetables', price: '$9', image: '/src/assets/mix-veg.jpg' },
      // Add more dishes...
    ]
  },
  {
    id: 6,
    name: 'Non-Vegetarian',
    description: 'Mouth-watering non-vegetarian dishes like Biryani, Kebabs, and Fish Curry.',
    image: bg6,
    dishes: [
      { name: 'Chicken Biryani', description: 'Aromatic rice with spiced chicken', price: '$13', image: '/src/assets/chicken-biryani.jpg' },
      { name: 'Fish Curry', description: 'Spicy and tangy fish curry', price: '$12', image: '/src/assets/fish-curry.jpg' },
      { name: 'Mutton Kebab', description: 'Grilled spiced mutton skewers', price: '$15', image: '/src/assets/mutton-kebab.jpg' },
      // Add more dishes...
    ]
  },
];
