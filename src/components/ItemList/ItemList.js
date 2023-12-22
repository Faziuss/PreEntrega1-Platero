import Item from "../Item/Item"

const ItemList = ({products}) => {
    return(
        <div className="grid grid-cols-products gap-10 justify-center ">
            {products?.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList