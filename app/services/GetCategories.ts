export type Category = {
    id: string;
    name: string;
    isDefault?: boolean;
  };
  
export function getCategories() : Category[] {
    return [
    { id: "books", name: "Books", isDefault: true },
    { id: "games", name: "Games" },
    { id: "other",name: "Other" }
  ];
}