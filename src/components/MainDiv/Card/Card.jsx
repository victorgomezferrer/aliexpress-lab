import ThrashButton from "../ThrashButton/ThrashButton"


export const Card = ({ product: { title, description, price, image }, setProducts, allProducts, index, key }) => {
    const handlerProductDelete = () => {
        const newProducts = allProducts.filter((product, i) => {
            return i !== index
        })
        setProducts(newProducts)
    }

    return (
        <>

            <div className="cardBox">
                <img src={image} alt="" />

                <li>{title}</li>
                <li>{description}</li>
                <li>{price}</li>

                <ThrashButton onClick={handlerProductDelete}></ThrashButton>
            </div>

        </>
    )
}