import { Filter } from "./Filter"
import { ProductCard } from "./ProductCard"

export function Comparison() {
    return (
        <>
            <div className='Comp'>
                <aside className='FilterContainer'>
                    <Filter />
                </aside >
                <div className='ProductContainer'>
                    <ProductCard />
                </div>
            </div>
        </>
    )
}