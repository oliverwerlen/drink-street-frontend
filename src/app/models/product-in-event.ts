import {Product} from "./product";

export class ProductEvent {
    productId?: number | undefined
    currentPrice: number | undefined
    product?: Product | undefined
    event?: Event | undefined
}

