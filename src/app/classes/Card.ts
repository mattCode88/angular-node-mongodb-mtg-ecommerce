export default class Card {

  identity: string;
  name: string;
  colors: string[];
  image: string;
  text: string;
  types: string[];
  set: string;
  rarity: string;
  mana: number;
  fidelity?: string;
  power?: string;
  toughness?: string;

  constructor(
    identity: string,
    name: string,
    colors: string[],
    image: string,
    text: string,
    types: string[],
    set: string,
    rarity: string,
    mana: number,
    fidelity?: string,
    power?: string,
    toughness?: string
  ) {
    this.identity = identity;
    this.name = name;
    this.colors = colors;
    this.image = image;
    this.text = text;
    this.types = types;
    this.set = set;
    this.rarity = rarity;
    this.mana = mana;
    this.fidelity = fidelity;
    this.power = power;
    this.toughness = toughness;
  }

}
