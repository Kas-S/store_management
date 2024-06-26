import {useEffect, useState} from "react"
import {getDocs, collection} from "firebase/firestore"
import {Product} from "../types.ts"
import {db} from "../firebase.ts"

function useFetchProducts() {
    const [products, setProducts] = useState<Product[]>([])
    useEffect(() => {
        getDocs(collection(db, "products")).then(result => {
            const a: Product[] = []
            result.forEach(doc => {
                a.push(doc.data() as Product)
            })
            setProducts(a)
        })
    }, []);
    return products
}

export default useFetchProducts