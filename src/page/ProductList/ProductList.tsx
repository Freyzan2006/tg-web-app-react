import { useCallback, useEffect, useState } from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import css from "./ProductList.module.css";
import { tgApi } from "../../api/tgApi";
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";

interface IProduct {
    id: number
    title: string 
    description: string
    price: number
    img: string
}

import { img0, img1, img2, img3, img4, img5 } from "../../assets/img/products/img";

const products: IProduct[] = [
    { id: 1, img: img0, title: "PC 1", price: 5000, description: "Синии цвет,  прямые"},
    { id: 2, img: img1, title: "PC 2", price: 2000, description: "Зелёный цвет,  кревые"},
    { id: 3, img: img2, title: "PC 3", price: 7000, description: "Красный цвет,  прямые"},
    { id: 4, img: img3, title: "PC 4", price: 4000, description: "Голубой цвет,  прямые"},
    { id: 5, img: img4, title: "PC 5", price: 2000, description: "Фиолетовый цвет,  кревые"},
    { id: 6, img: img5, title: "PC 6", price: 1000, description: "Жёлтый цвет,  прямые"},
]

const getTotalPrice = (items: IProduct[]) => {
    return items.reduce((acc, item) => {
        return acc += item.price;
    }, 0);
}

const ProductList: React.FC = () => {
    const [ addedItems, setAddedItems ] = useState<IProduct[]>([]);
    let [ countItem, setCountItem ] = useState<number>(0);

    const { tg, queryId } = tgApi();

    const onSendData = useCallback(() => {
        const data = {
            queryId,
            products: addedItems,
            totalPrice: getTotalPrice(addedItems)
        }
     
        fetch("https://tg-web-app-nodejs.onrender.com/web-data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
   
    }, [addedItems])

    useEffect(() => {
        tg.onEvent("mainButtonClicked", onSendData);
        return () => {
            tg.offEvent("mainButtonClicked", onSendData);
        }
    }, [onSendData])

    const onAdd = ( product: IProduct ) => {
        const alreadyAdded = addedItems.find((item: IProduct) => item.id === product.id);
        let newItems: IProduct[] = [];

        if (alreadyAdded) {
            newItems = addedItems.filter((item: IProduct) => item.id !== product.id);
            newItems.length;
        } else {
            newItems = [...addedItems, product];
        }
        setCountItem(newItems.length);

        if (newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            })
        }

        setAddedItems(newItems);
    }


    return (
        <Container>
            <p style = { { color: "red", fontSize: "40px" } }>{ queryId }</p>
            <Header countItem = { countItem } />
            <div className = { css.list }> 
                { products.map((item) => (
                    <ProductItem 
                        key = { item.id }

                        product = { item }
                        onAdd = { onAdd }
                        className = { css.item }
                    />
                )) }
            </div>
        </Container>
       
    )
}

export default ProductList;