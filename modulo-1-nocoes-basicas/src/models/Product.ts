type Product = {
   product: string;
   price: number;
};

const data: Product[] = [
   { product: "Produto X", price: 10 },
   { product: "Produto Y", price: 20 },
   { product: "Produto Z", price: 15 },
];

export const Product = {
   /**
    * Retorna todos os objetos registrados
    * @returns Product []
    */
   getAll: (): Product[] => {
      return data;
   },
   /**
    * retorna os valores objeto dos produtos com valores maiores do que setado no parametro price
    * @param price
    * @returns Product[]
    */
   getFromPriceAfter: (price: number): Product[] => {
      return data.filter((item) => item.price > price);
   },
};
