import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"
import { Avatar } from "./avatar"


export function Comment( ) {
    return (
        <div className={styles.comment}>
            <Avatar src="https://github.com/ZihSilva.png" />
           
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Zimarlen Silva</strong>
                            <time title="February 28th at 3:09" dateTime="02-28-23 3:09pm">Published 1 hour ago </time>
                        </div>

                        <button title="Delete comment">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom, Devon, congratulations</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/>
                       Like <span>20</span>
                    </button>
                </footer>
            </div>
        </div>

    )
}