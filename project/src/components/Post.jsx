import React from "react";
import Link from "next/link";
import styles from "../styles/post.module.sass"

const Post = ({ postsOnPage }) => {
  return (
    <div>
      <ul className={styles.posts_container}>
        {postsOnPage.map((post) => (
          <li key={post.id} className={styles.post_item}>
            <Link href={`/post/${post.id}`}>
              <a className={styles.post_link}>
                <h2 className={styles.post_title}>{post.title}</h2>
                <p className={styles.post_body}>{post.body}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
