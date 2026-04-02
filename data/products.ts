export type Product = {
  id: string;
  name: string;
  spec: string;
  priceSek: number;
  priceEur: number;
  image: string;
  badge?: string;
};

export const products: Product[] = [
  {
    id: "spk-0042",
    name: "SPEKT M90 Combat Vest",
    spec: "MIL-SPEC · REF: SPK-0042",
    priceSek: 4200,
    priceEur: 370,
    image:
      "https://via.placeholder.com/400x400/1A1C1E/4B5320?text=SPEKT+M90",
    badge: "NATO APPROVED",
  },
  {
    id: "spk-0118",
    name: "Tactical MOLLE Plate Carrier",
    spec: "NIJ III COMPATIBLE · REF: SPK-0118",
    priceSek: 6800,
    priceEur: 600,
    image:
      "https://via.placeholder.com/400x400/1A1C1E/4B5320?text=PLATE+CARRIER",
    badge: "FIELD TESTED",
  },
  {
    id: "spk-0204",
    name: "Field Radio Headset PRO",
    spec: "STANAG 4609 READY · REF: SPK-0204",
    priceSek: 2900,
    priceEur: 255,
    image:
      "https://via.placeholder.com/400x400/1A1C1E/4B5320?text=HEADSET",
    badge: "NEW ISSUE",
  },
  {
    id: "spk-0331",
    name: "Nomex Flight Gloves",
    spec: "EN ISO 11612 · REF: SPK-0331",
    priceSek: 890,
    priceEur: 79,
    image:
      "https://via.placeholder.com/400x400/1A1C1E/4B5320?text=NOMEX",
  },
  {
    id: "spk-0407",
    name: "Ballistic Eyewear MK2",
    spec: "BALLISTIC RATED · REF: SPK-0407",
    priceSek: 1400,
    priceEur: 123,
    image:
      "https://via.placeholder.com/400x400/1A1C1E/4B5320?text=EYEWEAR",
  },
  {
    id: "spk-0522",
    name: "Swedish Issued Cold-Weather Jacket",
    spec: "NORDIC CLIMATE · REF: SPK-0522",
    priceSek: 5500,
    priceEur: 485,
    image:
      "https://via.placeholder.com/400x400/1A1C1E/4B5320?text=COLD+WX",
    badge: "NATO APPROVED",
  },
];
