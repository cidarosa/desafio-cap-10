import { ReactComponent as StarImage} from 'assets/images/star.svg';
import { Review } from "types/review";

import './styles.css'

type Props = {
    review: Review;
}
const ReviewCard = ({review} : Props) => {

    return(
        <div className="base-card reviews-card">
            <div className="card-user-container">
                <StarImage />
                <h2>{review.user.name}</h2>
            </div>

            <div className="card-reviews-container">
                {review.text}
            </div>

        </div>
    )
}
export default ReviewCard;