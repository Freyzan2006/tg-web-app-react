import css from "./ProductList.module.css";

const ProductList: React.FC = () => {
    return (
        <div className = { css.products }> 
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </div>
    )
}

export default ProductList;