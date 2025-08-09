export type ItemAttribute = {
    name: string;
    value: string;
}

export type Item = {
    id: string;
    categoryId: string;
    name: string;
    price: number;
    description: string;
    images: string[];
    attributes: ItemAttribute[];
  };

import itemsData from '../data/items.json';

export function getItems(): Item[] {
    return itemsData as Item[];
}