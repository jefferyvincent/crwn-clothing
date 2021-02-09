
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import CollectionPreview from "../../components/collection-preview/collection-preview.components";
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';

import './collections-overview.styles.scss';

const CollectionsOverview = ({collections}) => (
    <div className="colllections-overview">
    {
        collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))
    }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview)