import { db } from '../Firebase/firebase-config';
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc,query,where } from 'firebase/firestore';


const houseCollectionRef = collection(db, "houses");

const q = query(houseCollectionRef, where("favorite", "==", "true"))

class HouseService {
     addHouses = (newHouse) => {
          return addDoc(houseCollectionRef, newHouse);
     }

     getAllHouses = () => {
          return getDocs(houseCollectionRef);
     }

     getFavHouse = () => {
          return getDocs(q);
     }


}

export default new HouseService();