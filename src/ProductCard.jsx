import mobileData from './assets/data/latest_80_mobile_phones_india_with_budget.json';
import './articleCss.css'
import RenderCard from './RenderCard';



export function ProductCard(props) {

    const { selectedPrice, selectedSpec } = props
    const prices = ['less than ₹20K', '₹50K - ₹75K', '₹75K - ₹90K', 'more than ₹90K']


    const renderProductCard = (item, itemIndex) => {

        const integerPrice = parseInt(item.price, 10);
        console.log(integerPrice, selectedSpec);
        // if (!item.use_case[selectedSpec]) return null;

        if (selectedSpec === item.use_case) {

            if (selectedPrice == prices[0] && integerPrice < 20000) {
                console.log(item);
                return <RenderCard item={item} />

            }

            if (selectedPrice == prices[1] && integerPrice >= 20000 && integerPrice < 50000) {
                return <RenderCard item={item} />
            }

            if (selectedPrice == prices[2] && integerPrice >= 50000 && integerPrice < 75000) {
                return <RenderCard item={item} />
            }

            if (selectedPrice == prices[3] && integerPrice >= 75000 && integerPrice <= 90000) {
                return <RenderCard item={item} />
            }

            if (integerPrice > 90000) {
                // console.log(item);
                return <RenderCard item={item} />
            }
        }

        return null;
    };

    mobileData.map((item, itemIndex) => {

        console.log(selectedPrice, selectedSpec, item.use_case);
        const integerPrice = parseInt(item.price, 10);
        console.log(integerPrice);





        return renderProductCard(item, itemIndex);
    })



    return (
        <div>
            {
                mobileData?.map((item, itemIndex) => (
                    <div>
                        {renderProductCard(item, itemIndex)}
                    </div>
                ))
            }
        </div>
    )




}   