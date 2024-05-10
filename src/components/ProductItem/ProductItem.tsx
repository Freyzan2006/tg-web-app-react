
import Button from "../Button/Button";
import css from "./ProductItem.module.css";

interface IProduct {
    id: number
    title: string 
    description: string
    price: number
    img: string
}

interface IProps {
    product: IProduct 
    className: string
    onAdd: (product: IProduct) => void 
}

const ProductItem: React.FC<IProps> = ({ product, className, onAdd }) => {

    const onAddHandler = () => onAdd(product);

    return (
        <div className = { css.product + " " + className }>
            <img src = { product.img } className = { css.img } />
            <div className = { css.title }>{ product.title }</div>
            <div className = { css.description }>{ product.description }</div>
            <div className = { css.price }>
                <span>Стоимость <b>{ product.price }</b></span>
            </div>
            <Button className = { css.add_btn } onClick = { onAddHandler }>
                Добавить в корзину 
            </Button>
        </div>
    )
}

export default ProductItem;