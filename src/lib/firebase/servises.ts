import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, updateDoc, where } from "firebase/firestore";
import app from "./init";
import { getStorage } from "firebase/storage";
import { getData } from "@/services/products";
import bcrypt from "bcryptjs"

const fireStore = getFirestore(app)

export async function retrieveData(collectionName: string) {
    const snapshot = await getDocs(collection(fireStore, collectionName))
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }))
    return data;
}

export async function retrieveDataById(collectionName:string, id:string) {
    const snapshot = await getDoc(doc(fireStore, collectionName, id))
    const data = snapshot.data()
    return data;
}

export async function register(data: {
    role?: string;
    email: string,
    password: string,
    fullname: string,
    createAt: string,
    updatedAt: string,
}) {
    const q = query(collection(fireStore, "users"), where("email", "==", data.email));
    const snapshot = await getDocs(q);
    const user = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    if (user.length > 0) {
        return { status: false, statusCode: 400, message: 'Email already exists' };
    } else {
        data.role = 'member';
        data.password = await bcrypt.hash(data.password, 10);
        try {
            // Tambahkan dokumen ke koleksi "users"
            const docRef = await addDoc(collection(fireStore, 'users'), data);

            // Tambahkan userId ke dokumen yang baru dibuat
            await updateDoc(doc(fireStore, 'users', docRef.id), {
                userId: docRef.id
            });

            return { status: true, statusCode: 200, message: 'User registered successfully' };
        } catch (error) {
            return { status: false, statusCode: 400, message: 'Register Failed' };
        }
    }
}

export async function login(data: {email: string}) {
    const q = query(
        collection(fireStore, "users"), 
        where('email', '==', data.email));
    const snapshot = await getDocs(q);
    const user = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }))

    if(user) {
        return user[0]
    } else {
        return null
    }
}

export async function addStore(data: {
    userId: string;
    name: string;
    description: string;
    address: string;
    logoUrl: string;
    createdAt: string;
    updatedAt: string;
    role: string
    password: string;
    storeId: string
    storeEmail: string
}) {
    const q = query(collection(fireStore, "stores"), where("name", "==", data.name));
    const snapshot = await getDocs(q);
    const store = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    if (store.length > 0) {
        return { status: false, statusCode: 400, message: 'Name store already exists' };
    } else {
        data.role = 'admin';
        data.password = await bcrypt.hash(data.password, 10);
        try {
            // Tambahkan dokumen ke koleksi "users"
            const docRef = await addDoc(collection(fireStore, 'stores'), data);

            // Tambahkan userId ke dokumen yang baru dibuat
            await updateDoc(doc(fireStore, 'stores', docRef.id), {
                storeId: docRef.id
            });

            return { status: true, statusCode: 200, message: 'Store registered successfully' };
        } catch (error) {
            return { status: false, statusCode: 400, message: 'Store register Failed' };
        }
    }
}