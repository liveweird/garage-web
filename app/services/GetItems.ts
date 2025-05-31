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

export function getItems(): Item[] {
    return [
        { id: "1", categoryId: "books", name: "Book #1", price: 100, attributes: [
            { name: "Author", value: "Author #1" },
            { name: "Year", value: "2024" },
        ], description: "Description of Book #1", images: ["image11.jpg", "image12.jpg", "image13.jpg"] },
        { id: "2", categoryId: "books", name: "Book #2", price: 200, attributes: [
            { name: "Author", value: "Author #2" },
            { name: "Year", value: "2023" }
        ], description: "Description of Book #2", images: ["image21.jpg", "image22.jpg", "image23.jpg"] },
        { id: "3", categoryId: "books", name: "Book #3", price: 300, attributes: [
            { name: "Author", value: "Author #3" },
            { name: "Year", value: "2022" }
        ], description: "Description of Book #3", images: ["image31.jpg", "image32.jpg", "image33.jpg"] },
        { id: "4", categoryId: "games", name: "Game #1", price: 400, attributes: [
            { name: "Genre", value: "Cooperative" },
            { name: "Players", value: "2-4" }
        ], description: "Description of Game #1", images: ["image41.jpg", "image42.jpg", "image43.jpg"] },
        { id: "5", categoryId: "other", name: "Other #1", price: 500, attributes: [
        ], description: "Description of Other #1", images: ["image51.jpg", "image52.jpg", "image53.jpg"] },
    ]
}