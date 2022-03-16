import ReviewCard from "components/ReviewCard";
import { Review } from "types/review";

type Props = {
  reviews: Review[];
};

const ReviewListing = ({ reviews }: Props) => {
  return (
    <div className="row">
      {reviews.map((review) => (
        <div key={review.id}>
          <ReviewCard review={review} />
        </div>
      ))}
    </div>
  );
};

export default ReviewListing;
