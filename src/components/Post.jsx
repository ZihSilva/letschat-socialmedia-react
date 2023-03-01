import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./avatar";


export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar  src="https://github.com/maykbrito.png" />
                    <div className={styles.authorInfo}>
                        <strong>Zimarlen Silva</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="February 28th at 3:09" dateTime="02-28-23 3:09pm">Published 1 hour ago </time>
                 </header>

                <div className={styles.content}>
                    <p>Hello guys 👋</p>
                    <p>I've just uploaded my portfolio. . It's a project called NLW Return. Project: DoctorCare 🚀
                    </p>
                    <p>{'  '} <a href="">👉 jane.design/doctorcare</a></p>
                    <p>
                        <a href="">#novoprojeto</a>{' '}
                         <a href="">#nlw</a> {' '}
                         <a href="">#rocketseat</a>{' '}
                         </p>
                </div>

                <form className={styles.commentForm}>
                    <strong>Leave your comment</strong>

                    <textarea placeholder="Leave your comment"
                    />
                    <footer>
                    <button type="submit">Send</button>
                    </footer>
                </form>

                <div className={styles.commentList}>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                </div>
        </article>
    )
}