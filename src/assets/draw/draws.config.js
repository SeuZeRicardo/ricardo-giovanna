import {
  BirdLeft,
  BirdRight,
  FlowerLeft,
  FlowerRight,
  KitchenLeft,
  KitchenRight,
  Pan,
  Pequi,
  Drink,
  SPFlag,
  FlowerGreen,
} from "./index";

export const draws = [
  { id: "bird-left", component: BirdLeft },
  { id: "bird-right", component: BirdRight },
  { id: "flower-left", component: FlowerLeft },
  { id: "flower-right", component: FlowerRight },
  { id: "kitchen-left", component: KitchenLeft },
  { id: "kitchen-right", component: KitchenRight },
  { id: "pan", component: Pan },
  { id: "pequi", component: Pequi },
  { id: "drink", component: Drink },
  { id: "sp-flag", component: SPFlag },
  { id: "flower-green", component: FlowerGreen },
];

export const getDrawById = (id) => {
  return draws.find((draw) => draw.id === id)?.component;
};
