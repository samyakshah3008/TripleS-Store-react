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
    title: "Nike Shoes",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    originalPrice: "5000",
    price: 1000,
    categoryName: "nike",
    percentOff: "53%",
    inStock: false,
    fastDelivery: true,
    ratings: 3
  },
  {
    _id: uuid(),
    imageURL: mrfBat,
    title: "MRF Cricket Bat",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    originalPrice: "10000",
    price: 4000,
    categoryName: "mrf",
    percentOff: "53%",
    inStock: true,
    fastDelivery: false,
    ratings: 4
  },
  {
    _id: uuid(),
    imageURL: nikeFootball,
    title: "Nike Football",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    originalPrice: "1000",
    price: 1500,
    categoryName: "nike",
    percentOff: "53%",
    inStock: true,
    fastDelivery: false,
    ratings: 2
  },

  {
    _id: uuid(),
    imageURL: jersey,
    title: "Cricket jersey",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    originalPrice: "800",
    price: 700,
    categoryName: "nike",
    percentOff: "53%",
    inStock: false,
    fastDelivery: false,
    ratings: 1
  },
  {
    _id: uuid(),
    imageURL: kookaburraBall,
    title: "Kookaburra cricket ball",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    originalPrice: "799",
    price: 1099,
    categoryName: "kookabura",
    percentOff: "53%",
    inStock: true,
    fastDelivery: true,
    ratings: 3
  },
  {
    _id: uuid(),
    imageURL: nikeShoes,
    title: "Nike shoes",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    originalPrice: "4000",
    price: 3000,
    categoryName: "nike",
    percentOff: "53%",
    inStock: true,
    fastDelivery: true,
    ratings: 3
  },
  {
    _id: uuid(),
    imageURL: miExclusive,
    title: "Mi Exclusive watch",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    originalPrice: "5500",
    price: 3500,
    categoryName: "exclusive",
    percentOff: "53%",
    inStock: true,
    fastDelivery: true,
    ratings: 5
  }, 

  {
    _id: uuid(),
    imageURL: nbBat,
    title: "New balance cricket bat",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    originalPrice: "10000",
    price: 2999,
    categoryName: "newbalance",
    percentOff: "53%",
    inStock: true,
    fastDelivery: false,
    ratings: 3
  },{
    _id: uuid(),
    imageURL: spartanBat,
    title: "Spartan cricket bat",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    originalPrice: "5000",
    price: 4000,
    categoryName: "spartan",
    percentOff: "53%",
    inStock: true,
    fastDelivery: false,
    ratings: 5
  },
];
