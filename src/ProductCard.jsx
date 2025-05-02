import mobileData from './assets/data/latest_80_mobile_phones_india_with_budget.json';
import './articleCss.css'
import RenderCard from './RenderCard';



export function ProductCard(props) {

    const { selectedPrice, selectedSpec } = props
    const prices = ['less than ₹20,000', '₹20,000 - ₹50,000', '₹50,000 - ₹75,000', '₹75,000 - ₹90,000', 'more than ₹90,000']


    // const renderProductCard = (item, itemIndex) => {

    //     const integerPrice = parseInt(item.price, 10);

    //     // if (!item.use_case[selectedSpec]) return null;

    //     if (selectedSpec === item.use_case) {
    //         console.log(integerPrice, selectedSpec);

    //         if (selectedPrice == prices[0] && integerPrice < 20000) {
    //             // console.log(item);
    //             return <RenderCard item={item} />

    //         }

    //         if (selectedPrice == prices[1] && integerPrice >= 20000 && integerPrice < 50000) {
    //             return <RenderCard item={item} />
    //         }

    //         if (selectedPrice == prices[2] && integerPrice >= 50000 && integerPrice < 75000) {
    //             return <RenderCard item={item} />
    //         }

    //         if (selectedPrice == prices[3] && integerPrice >= 75000 && integerPrice < 90000) {
    //             return <RenderCard item={item} />
    //         }

    //         if (integerPrice > 90000) {
    //             // console.log(item);
    //             return <RenderCard item={item} />
    //         }
    //     }

    //     return null;
    // };

    // mobileData.map((item, itemIndex) => {

    //     // console.log(selectedPrice, selectedSpec, item.use_case);
    //     const integerPrice = parseInt(item.price, 10);
    //     // console.log(integerPrice);





    //     return renderProductCard(item, itemIndex);
    // })

    const sortPrice = (item, itemIndex) => {


        if (selectedPrice == prices[0] && item.price < 20000) {
            return sortSpec(item, itemIndex)
        }

        if (selectedPrice == prices[1] && item.price >= 20000 && item.price < 50000) {
            return sortSpec(item, itemIndex)
        }

        if (selectedPrice == prices[2] && item.price >= 50000 && item.price < 75000) {
            return sortSpec(item, itemIndex)
        }

        if (selectedPrice == prices[3] && item.price >= 75000 && item.price < 90000) {
            return sortSpec(item, itemIndex)
        }

        if (selectedPrice == prices[4] && item.price > 90000) {
            return sortSpec(item, itemIndex)
        }
    }

    const sortSpec = (item, itemIndex) => {
        if (selectedSpec === item.use_case) {
            return <RenderCard item={item} />
        }
    }


    return (
        <div>
            {
                mobileData?.map((item, itemIndex) => (
                    <div key={itemIndex} className="product-container">
                        {sortPrice(item, itemIndex)}
                    </div>
                ))
            }
        </div>
    )




}   