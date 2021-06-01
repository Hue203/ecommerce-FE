import React from "react";
import Moment from "react-moment";

const ReviewList = ({ reviews }) => {
  return (
    <>
      {reviews?.length > 0 && (
        <ul className="list-unstyled">
          {reviews.map((review) => (
            <ReviewContent review={review} key={review._id} />
          ))}
        </ul>
      )}
    </>
  );
};

const ReviewContent = ({ review }) => {
  return (
    <div className="comment">
      <span className="comment_body">{review?.content}</span>
      <br />
      <span className="comment_by">posted </span>
      {/* <span className="comment_user">{review?.user?.name}</span> */}
      <span className="comment_on"> on </span>
      <span className="comment_date">
        <Moment fromNow>{review?.createdAt}</Moment>
      </span>
    </div>
  );
};

export default ReviewList;
