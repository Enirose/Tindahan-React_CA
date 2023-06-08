import { StyledCard } from "../Styled/Card.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { ReviewsContainer } from "../Styled/ProductReview.styled";

export default function ProductReview ({rating, reviews}) {
    let stars = [];
    for (let i = 0; i < rating; i++ ) {
        stars.push (
            <FontAwesomeIcon key={i} icon={faStar}/> 
        );
    };

    const userReviews = reviews.map((review) => {
        return(
            <ReviewsContainer key={review.id}>
                <h4>{review.username}</h4>
                <span className="star-container">{stars}</span>
                <p>{review.description}</p>
            </ReviewsContainer>
        );
    });

    return (
        <ReviewsContainer>
            <div>
                {/* <div className="rating-container">
                <h3>Rating {stars}</h3>
                </div> */}
                <h3>Reviews</h3>
                {userReviews.length > 0 ? (
                    userReviews
                ) : (
                    <p className="reviews-container">This item has no reviews yet!</p>
                )}    
            </div>                
        </ReviewsContainer>
    )
}