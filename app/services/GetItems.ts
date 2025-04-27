export type Item = {
    id: string;
    categoryId: string;
    name: string;
    description: string;
    images: string[];
  };

export function getItems(): Item[] {
    return [
        { id: "1", categoryId: "books", name: "Book #1", description: "Description of Book #1", images: ["image11.jpg", "image12.jpg", "image13.jpg"] },
        { id: "2", categoryId: "books", name: "Book #2", description: "Description of Book #2", images: ["image21.jpg", "image22.jpg", "image23.jpg"] },
        { id: "3", categoryId: "books", name: "Book #3", description: "Description of Book #3", images: ["image31.jpg", "image32.jpg", "image33.jpg"] },
        { id: "4", categoryId: "games", name: "Game #1", description: "Description of Game #1", images: ["image41.jpg", "image42.jpg", "image43.jpg"] },
        { id: "5", categoryId: "other", name: "Other #1", description: "Description of Other #1", images: ["image51.jpg", "image52.jpg", "image53.jpg"] },
    ]
}