export default class Card {

  identity: string;
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
  toSell: number;
  sold: boolean;
  fidelity?: string;
  power?: string;
  toughness?: string;
  _id?: string;

  constructor(
    identity: string,
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
    toSell: number,
    sold: boolean,
    fidelity?: string,
    power?: string,
    toughness?: string,
    _id?: string
  ) {
    this.identity = identity;
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
    this.toSell = toSell;
    this.sold = sold;
    this.fidelity = fidelity;
    this.power = power;
    this.toughness = toughness;
    this._id = _id
  }

}
