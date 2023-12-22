import {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from "../../services/firebase/firebaseConfig"
import SvgLoader from '../../SvgLoader'


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(()=>{
        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db,"products"), where("category", "==", categoryId))
            : collection(db,"products")

            getDocs(collectionRef)
            .then(response => {
                const productAdapted = response.docs.map(doc=> {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProducts(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(()=> {
                setLoading(false)
            })
        
    }, [categoryId])

    return ( 
        <div className='m-4'>
            <h1 className="text-center mb-4 font-bold text-2xl">{greeting}</h1>
            {loading? <SvgLoader className="svg"/> : null}
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;