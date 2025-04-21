import { Comparison } from "./Comparison"
import { Article } from "./Article"
import { AffiliateLink } from "./AffiliateLink"


export function TabSelect(props) {
    const { selectedTab } = props

    return (
        <div className="tab-content">

            {selectedTab == "Comparison" ? <Comparison />
                : selectedTab == "Article" ? <Article />
                    : selectedTab == "Affiliate Link" ? <AffiliateLink /> : null}

        </div>
    )

}