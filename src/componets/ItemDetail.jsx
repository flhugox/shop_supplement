import Item from "./item";

export default function ItemDetail({ item }) {
  
    return (
        <div>
            <Item key={item.id} item={item} />
        </div>
    );
}