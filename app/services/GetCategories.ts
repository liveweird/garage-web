export type Category = {
    id: string;
    name: string;
  };
  
export function getCategories() : Category[] {
    return [
    { id: "books", name: "Books" },
    { id: "games", name: "Games" },
    { id: "other",name: "Other" }
  ];
}