"use client";
import React from "react";
import styles from "./styles.module.css";

function Blog({ author }) {
  console.log("author", author);
  const authorData = author?.value?.data ?? author?.data;

  console.log("authorData", authorData);

  if (!authorData) {
    return null;
  }

  const {
    authorName,
    avatar,
    imageAltText,
    jobTitle,
    nationality,
    image,
    authorIntro,
  } = authorData;

  return (
    <div className={styles.blog}>
      <img
        className={styles.avatar}
        src={avatar || image}
        alt={imageAltText || authorName}
      />
      <div className={styles.info}>
        <h3 className={styles.name}>{authorName}</h3>
        {jobTitle && <p className={styles.jobTitle}>{jobTitle}</p>}
        {nationality && <p className={styles.nationality}>{nationality}</p>}
        {authorIntro && <p className={styles.intro}>{authorIntro}</p>}
      </div>
    </div>
  );
}

export default Blog;
