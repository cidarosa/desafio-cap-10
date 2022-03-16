import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { Review } from "types/review";
import { requestBackend } from "util/requests";
import { hasAnyRoles } from "util/auth";
import ReviewForm from "components/ReviewForm";
import { useParams } from "react-router-dom";
import ReviewListing from "components/ReviewListing";

import "./styles.css";

type urlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<urlParams>();

  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      setReviews(response.data);
    });
  }, [movieId]);

  const handleInsertReview = (review: Review) => {
    const clone = [...reviews];
    clone.push(review);
    setReviews(clone);
  };

  return (
    <div className="movie-details-container">
      <h1>Tela detalhes do filme id: {movieId}</h1>

      <div className="movie-form-card">
        <div className="row movie-title-container">
          {hasAnyRoles(["ROLE_MEMBER"]) && (
            <>
              {/* <h4>Card do Form de Avaliação</h4> */}
              <ReviewForm
                movieId={movieId}
                onInsertReview={handleInsertReview}
              />
              {/* <h4>Usuários MEMBER</h4> */}
            </>
          )}
        </div>

        <div className="base-card movie-detail-card">
          {/* <h4>TODAS avaliações do filme </h4> */}
          <ReviewListing reviews={reviews} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
