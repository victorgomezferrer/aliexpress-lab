import { Card } from "./Card/Card"

import { useState } from "react"
import aliExpressProducts from "../../assets/products.json"
import { Button } from "./Button/Button"




export const MainDiv = () => {
    const INITIAL_PRODUCTS = aliExpressProducts.products
    let [products, setProducts] = useState(aliExpressProducts.products.slice(0, 6))

    return (<>


        {
            products.map((product, index) => (
                <Card key={product.title} setProducts={setProducts} allProducts={products} index={index} product={product}>
                </Card>

            ))
        }
        <Button onClick={() => { setProducts(INITIAL_PRODUCTS) }}> </Button>

    </>

    )
}