export default class Order {

  owner: string;
  buyer: string;
  shipped: boolean;
  receipts: boolean;
  order: string;
  chooseSchipment: string;
  totalPrice: number;
  name: string;
  colors: string[];
  image: string;
  text: string;
  types: string[];
  set: string;
  rarity: string;
  mana: number;
  price: number;
  buyQuantity: number;
  fidelity?: string;
  power?: string;
  toughness?: string;

  constructor(
    owner: string,
    buyer: string,
    shipped: boolean,
    receipts: boolean,
    order: string,
    chooseSchipment: string,
    totalPrice: number,
    name: string,
    colors: string[],
    image: string,
    text: string,
    types: string[],
    set: string,
    rarity: string,
    mana: number,
    price: number,
    buyQuantity: number,
    fidelity?: string,
    power?: string,
    toughness?: string,
  ) {

    this.owner = owner;
    this.buyer = buyer;
    this.shipped = shipped;
    this.receipts = receipts;
    this.order = order;
    this.chooseSchipment = chooseSchipment;
    this.totalPrice = totalPrice;
    this.name = name;
    this.colors = colors;
    this.image = image;
    this.text = text;
    this.types = types;
    this.set = set;
    this.rarity = rarity;
    this.mana = mana;
    this.price = price;
    this.buyQuantity = buyQuantity;
    this.fidelity = fidelity;
    this.power = power;
    this.toughness = toughness;

  }

}
