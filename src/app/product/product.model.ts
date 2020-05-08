import {Holder} from './holder.model';

export class Product {
  public name: string;
  public imageUrl: string;
  public total: number;
  public available: number;
  public description: string;

  constructor(name: string, imageUrl: string, total: number, available: number, desc: string) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.total = total;
    this.available = available;
    this.description = desc;
  }
}
