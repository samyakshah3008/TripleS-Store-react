import { v4 as uuid } from "uuid";
import nikeShoes from "../../assets/nike-shoes.png";
import mrfBat from "../../assets/mrf-bat.png";
import nikeFootball from "../../assets/nike-football.png";
import kookaburraBall from "../../assets/kookabura-ball.png";
import jersey from "../../assets/jersey.png";
import heroHeader from "../../assets/hero-header.png";

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
    price: "2999",
    categoryName: "non-fiction",
    percentOff: "53%",
  },
  {
    _id: uuid(),
    imageURL: mrfBat,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    originalPrice: "10000",
    price: "2999",
    categoryName: "horror",
    percentOff: "53%",
  },
  {
    _id: uuid(),
    imageURL: nikeFootball,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    originalPrice: "1000",
    price: "499",
    categoryName: "fiction",
    percentOff: "53%",
  },

  {
    _id: uuid(),
    imageURL: jersey,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    originalPrice: "5000",
    price: "2999",
    categoryName: "non-fiction",
    percentOff: "53%",
  },
  {
    _id: uuid(),
    imageURL: kookaburraBall,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    originalPrice: "10000",
    price: "2999",
    categoryName: "horror",
    percentOff: "53%",
  },
  {
    _id: uuid(),
    imageURL: heroHeader,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    originalPrice: "1000",
    price: "499",
    categoryName: "fiction",
    percentOff: "53%",
  },
];
