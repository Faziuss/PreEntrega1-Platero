import Item from "../Item/Item"

const ItemList = ({products}) => {
    return(
        <div className="flex flex-wrap gap-4 justify-center">
            {products?.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList