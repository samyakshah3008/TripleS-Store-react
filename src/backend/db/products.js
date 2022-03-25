import { v4 as uuid } from "uuid";
import nikeShoes from "../../assets/nike-shoes.png";
import mrfBat from "../../assets/mrf-bat.png";
import nikeFootball from "../../assets/nike-football.png";
import kookaburraBall from "../../assets/kookabura-ball.png";
import jersey from "../../assets/jersey.png";
import heroHeader from "../../assets/hero-header.png";
import miExclusive from "../../assets/mi-exclusive.png";
import spartanBat from "../../assets/spartan-bat.jpg";
import nbBat from "../../assets/nb-bat.jpg";




/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    imageURL: nikeShoes,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    originalPrice: "5000",
    price: 1000,
    categoryName: "nike",
    percentOff: "53%",
    inStock: false,
    fastDelivery: true,
    rating: 3
  },
  {
    _id: uuid(),
    imageURL: mrfBat,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    originalPrice: "10000",
    price: 4000,
    categoryName: "mrf",
    percentOff: "53%",
    inStock: true,
    fastDelivery: false,
    rating: 4
  },
  {
    _id: uuid(),
    imageURL: nikeFootball,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    originalPrice: "1000",
    price: 1500,
    categoryName: "nike",
    percentOff: "53%",
    inStock: true,
    fastDelivery: false,
    rating: 2
  },

  {
    _id: uuid(),
    imageURL: jersey,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    originalPrice: "800",
    price: 700,
    categoryName: "kookabura",
    percentOff: "53%",
    inStock: false,
    fastDelivery: false,
    rating: 1
  },
  {
    _id: uuid(),
    imageURL: kookaburraBall,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    originalPrice: "799",
    price: 1099,
    categoryName: "kookabura",
    percentOff: "53%",
    inStock: true,
    fastDelivery: true,
    rating: 3
  },
  {
    _id: uuid(),
    imageURL: heroHeader,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    originalPrice: "4000",
    price: 3000,
    categoryName: "fiction",
    percentOff: "53%",
    inStock: true,
    fastDelivery: true,
    rating: 3
  },
  {
    _id: uuid(),
    imageURL: miExclusive,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    originalPrice: "5500",
    price: 3500,
    categoryName: "fiction",
    percentOff: "53%",
    inStock: true,
    fastDelivery: true,
    rating: 5
  }, 

  {
    _id: uuid(),
    imageURL: nbBat,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    originalPrice: "10000",
    price: 2999,
    categoryName: "fiction",
    percentOff: "53%",
    inStock: true,
    fastDelivery: false,
    rating: 3
  },{
    _id: uuid(),
    imageURL: spartanBat,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    originalPrice: "5000",
    price: 4000,
    categoryName: "fiction",
    percentOff: "53%",
    inStock: true,
    fastDelivery: false,
    rating: 5
  },
];
