import { collection, doc, getDocs } from "firebase/firestore"
import { db } from "./firebase"



export const getProductsData = async () => {
    try{
        const querySnapshot = await getDocs(collection(db, "products"))
        const list = []

        querySnapshot.forEach((doc) => {
            list.push(doc.data())
        })

        return list;
    } catch (error) {
        console.error("Error fetching data:", error)
    }
}