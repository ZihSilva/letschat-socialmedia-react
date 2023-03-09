import { useState } from "react";
import { format, formatDistanceToNow } from "date-fns"
import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { enCA } from "date-fns/locale";



export function Post({ author, publishedAt, content }) {

    const [comments, setComments] = useState([
        "I love your new project. Well done!!!"
    ])

    const [newCommentText, setNewCommentText] = useState(' ');

    const publishedDateFormatted = format(publishedAt, "LLLL  d 'at' HH:mm")

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: enCA,
    })

    function handleCreateNewComment(event) {
        event.preventDefault()

        setComments([...comments, newCommentText]);
        setNewCommentText(' ');
    }

    function handleNewCommentChange(event) {

        event.target.setCustomValidity('');
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid(event) {
        event.target.setCustomValidity("Don't forget to write your message");

    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeletedOne);

    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === "paragraph") {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === "link") {
                        return <p key={line.content}><a href="#">{line.content}</a></p>;
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Leave your comment</strong>

                <textarea
                    name="comment"
                    placeholder="Leave your comment"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                  
                />
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>
                        Send
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}