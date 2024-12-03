import React from "react";
import styles from "./review.module.css";

type ReviewProps = {
  username: string;
  rating: number;
  comment: string;
  date: string;
};

const Review: React.FC<ReviewProps> = ({ username, rating, comment, date }) => {
  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  return (
    <div className={styles.review}>
      <div className={styles.header}>
        <div className={styles.profile}>
          <div className={styles.initials}>{getInitials(username)}</div>
        </div>
        <div className={styles.meta}>
          <span className={styles.date}>{date}</span>
        </div>
      </div>
      <div className={styles.body}>
        <strong>{username}</strong>
        <p>Rating: ⭐ {rating}/5</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default Review;
