import {useState, useEffect} from 'react'
import { getProducts, getProductByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from "../../services/firebase/firebaseConfig"


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(()=>{
        const asyncFunc = categoryId ? getProductByCategory : getProducts

        asyncFunc(categoryId)
        .then(response => {
            setProducts(response)
        })
        .catch(error=>{
            console.error(error)
        })
        
    }, [categoryId])

    return ( 
        <div>
            <h1 className="text-center p-4 font-bold text-2xl">{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;