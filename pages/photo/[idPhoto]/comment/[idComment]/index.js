import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Comment } from '../../../../../components/Comment/Comment'

import styles from './Comment.module.css'

const Comments = () => {
    const router = useRouter();
    const id = router.query.idComment
    return (
            <div className={styles.container}>
                <div className={styles.header}>
                    <h4>{id} comentarios</h4>
                    <Link href="/">
                        <a className={styles.close}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </a>
                    </Link>
                </div>
                <div className={styles.commentContainer}>
                    <Comment
                        userId="1"
                        userImage="/userFemale.jpg"
                        userName="Katrina"
                        commentId="1"
                        content="Como es el clima de la region?"
                        noLikes="2219"
                        timePosted="1h"
                        replies="5"
                    />
                    <Comment
                        userId="1"
                        userImage="/userMale.jpg"
                        userName="Bernardo"
                        commentId="1"
                        content="Woahh"
                        noLikes="2219"
                        timePosted="1h"
                        replies="1"
                    />
                    <Comment
                        userId="1"
                        userImage="/userFemale.jpg"
                        userName="Katrina"
                        commentId="1"
                        content="Me encanto ese lugar, se los recomiendo"
                        noLikes="2219"
                        timePosted="1h"
                        replies="5"
                    />
                    <Comment
                        userId="1"
                        userImage="/userMale.jpg"
                        userName="Katrina"
                        commentId="1"
                        content="Hay hoteles buenos por la región?"
                        noLikes="2219"
                        timePosted="1h"
                        replies="5"
                    />
                    <Comment
                        userId="1"
                        userImage="/userMale.jpg"
                        userName="Bernardo"
                        commentId="1"
                        content="Woahh"
                        noLikes="2219"
                        timePosted="1h"
                        replies="1"
                    />
                    <Comment
                        userId="1"
                        userImage="/userMale.jpg"
                        userName="Katrina"
                        commentId="1"
                        content="Como es el clima de la region?"
                        noLikes="2219"
                        timePosted="1h"
                        replies="5"
                    />
                    <Comment
                        userId="1"
                        userImage="/userMale.jpg"
                        userName="Katrina"
                        commentId="1"
                        content="Como es el clima de la region?"
                        noLikes="2219"
                        timePosted="1h"
                        replies="5"
                    />
                </div>
                <div className={styles.writeCommentContainer}>
                    <div className={styles.icon}>
                        <Image className={styles.image} src="/userMale.jpg" alt="lake" layout='fill' />
                    </div>
                    <div className={styles.input}>
                        <input className={styles.text} type="text" placeholder="Añadir comentario..." id='myComment' />
                    </div>
                    <span className={styles.send}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                        </svg>
                    </span>
                </div>
            </div>
    )
}

export default Comments