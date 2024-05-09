import { useCallback, useEffect, useState } from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import css from "./ProductList.module.css";
import { tgApi } from "../../api/tgApi";

interface IProduct {
    id: number
    title: string 
    description: string
    price: number
}

const products: IProduct[] = [
    { id: 1, title: "Джинсы", price: 5000, description: "Синии цвет,  прямые"},
    { id: 2, title: "Куртка", price: 2000, description: "Зелёный цвет,  кревые"},
    { id: 3, title: "Джинсы 1", price: 7000, description: "Красный цвет,  прямые"},
    { id: 4, title: "Джинсы 8", price: 4000, description: "Голубой цвет,  прямые"},
    { id: 5, title: "Куртка 2", price: 2000, description: "Фиолетовый цвет,  кревые"},
    { id: 6, title: "Куртка 10", price: 1000, description: "Жёлтый цвет,  прямые"},
    { id: 7, title: "Джинсы 22", price: 10000, description: "Оранджевый цвет,  прямые"},
    { id: 8, title: "Джинсы 33", price: 15000, description: "Морской цвет,  кревые"},
    { id: 9, title: "Джинсы 44", price: 800, description: "Сервый цвет,  прямые"},
    { id: 10, title: "Куртка 55", price: 500, description: "Салатовый цвет,  прямые"},
    { id: 11, title: "Куртка 111", price: 600, description: "Каричневый цвет,  кревые"},
    { id: 12, title: "Джинсы 3", price: 700, description: "Пурпуровый цвет,  прямые"},
]

const getTotalPrice = (items: IProduct[]) => {
    return items.reduce((acc, item) => {
        return acc += item.price;
    }, 0);
}

const ProductList: React.FC = () => {
    const [ addedItems, setAddedItems ] = useState<IProduct[]>([]);
    const { tg, queryId } = tgApi();

    const onSendData = useCallback(() => {
        const data = {
            queryId,
            products: addedItems,
            totalPrice: getTotalPrice(addedItems)
        }
        // fetch("https://54.187.200.255:8000/web-data", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(data)
        // })
   
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
        } else {
            newItems = [...addedItems, product];
        }

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
        <div className = { css.list }> 
            { products.map(item => (
                <ProductItem 
                    key = { item.id }

                    product = { item }
                    onAdd = { onAdd }
                    className = { css.item }
                />
            )) }
        </div>
    )
}

export default ProductList;