export default class BuyCard {

  idCard: string;
  owner: string;
  name: string;
  colors: string[];
  image: string;
  text: string;
  types: string[];
  set: string;
  rarity: string;
  mana: number;
  price: number;
  quantity: number;
  buyQuantity: number;
  buyer: string;
  fidelity?: string;
  power?: string;
  toughness?: string;

  constructor(
    idCard: string,
    owner: string,
    name: string,
    colors: string[],
    image: string,
    text: string,
    types: string[],
    set: string,
    rarity: string,
    mana: number,
    price: number,
    quantity: number,
    buyQuantity: number,
    buyer: string,
    fidelity?: string,
    power?: string,
    toughness?: string
  ) {
    this.idCard = idCard;
    this.owner = owner;
    this.name = name;
    this.colors = colors;
    this.image = image;
    this.text = text;
    this.types = types;
    this.set = set;
    this.rarity = rarity;
    this.mana = mana;
    this.price = price;
    this.quantity = quantity;
    this.buyQuantity = buyQuantity;
    this.buyer = buyer;
    this.fidelity = fidelity;
    this.power = power;
    this.toughness = toughness;
  }

}
