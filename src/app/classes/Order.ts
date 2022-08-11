export default class Order {

  owner: string;
  buyer: string;
  shipped: boolean;
  receipts: boolean;
  order: string;
  chooseSchipment: string;
  totalPrice: number;

  constructor(
    owner: string,
    buyer: string,
    shipped: boolean,
    receipts: boolean,
    order: string,
    chooseSchipment: string,
    totalPrice: number,
  ) {

    this.owner = owner;
    this.buyer = buyer;
    this.shipped = shipped;
    this.receipts = receipts;
    this.order = order;
    this.chooseSchipment = chooseSchipment;
    this.totalPrice = totalPrice;

  }

}
