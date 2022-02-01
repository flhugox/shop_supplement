import ItemCount from "./itemCount"

function ItemListContainer({ greeting }) {
    function agregarItems(itemCount) {
         console.log(itemCount)
    }
    return (
        <div>
            <header className="header">
                <h1 className="logo"><a>  {greeting}</a></h1>
            </header>
         
           <ItemCount stock={5} initial={1} onAdd={agregarItems}/>
              
           </div>

    )
}
export default ItemListContainer