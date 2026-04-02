export type Product = {
  id: string;
  name: string;
  spec: string;
  priceSek: number;
  priceEur: number;
  image: string;
  badge?: string;
};

/** Single flagship product — site focus */
export const products: Product[] = [
  {
    id: "tacaid-001",
    name: "TacAID",
    spec: "MIL-SPEC BASELINE · REF: TAC-AID-001 · EN CODED CONFIG",
    priceSek: 4900,
    priceEur: 430,
    image:
      "https://via.placeholder.com/400x400/1A1C1E/4B5320?text=TacAID",
    badge: "NATO STANAG READY",
  },
];
