export class Buy {
  constructor(
    public customer_number: string,
    public price: string,
    public product_name: string,
    public category: string,
    public sku_code: string,
    public seller_name: string,
    public brand: string,
    public testing: boolean,
    public status: string
  ) {}
}
