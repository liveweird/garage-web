import { Item } from "../services/GetItems";

export default function SingleItem({ item }: { item: Item }) {
    return <div>{item.name}</div>;
}