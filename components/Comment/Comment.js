import React,{ useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Reply } from '../Reply/Reply'

import styles from './Comment.module.css'

const Comment = ({ userId, userImage, userName, commentId, content, noLikes, timePosted, replies }) => {
    const [open, setOpen] = useState(false)
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Link href={'/user/'+userId}>
                    <a className={styles.imageLink}>
                        <Image className={styles.image} src={userImage} alt="lake" layout='fill' />
                    </a>
                </Link>
            </div>
            <div className={styles.body}>
                <button className={styles.btnComment}>
                    <p>{userName}</p>
                    <h4>{content}</h4>
                    <p>{timePosted} Responder</p>
                </button>
                {!open &&
                    <button className={styles.btnSeeMore} type="button" onClick={() => setOpen(true)}>
                        <span>Ver respuestas ({replies})</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>
                }
                {open &&
                    <div className={styles.replies}>
                        {<React.Fragment>
                            <Reply
                                userId="1"
                                userImage="/userMale.jpg"
                                userName="Katrina"
                                commentId="1"
                                content="Como es el clima de la region?"
                                noLikes="2219"
                                timePosted="1h"
                                replies="5"
                            />
                            <Reply
                                userId="1"
                                userImage="/userMale.jpg"
                                userName="Katrina"
                                commentId="1"
                                content="Como es el clima de la region?"
                                noLikes="2219"
                                timePosted="1h"
                                replies="5"
                            />
                            <Reply
                                userId="1"
                                userImage="/userMale.jpg"
                                userName="Katrina"
                                commentId="1"
                                content="Como es el clima de la region?"
                                noLikes="2219"
                                timePosted="1h"
                                replies="5"
                            />
                        </React.Fragment>
                        }
                        <div className={styles.btnContainer}>
                            <button className={styles.btnSeeMore} type="button" onClick={() => setOpen(true)}>
                                <span>Ver mas ({replies-3})</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </button>
                            <button className={styles.btnSeeMore} type="button" onClick={() => setOpen(false)}>
                                <span>Ocultar ({replies-3})</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                }
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.btn}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                    <p>{noLikes}</p>
                </button>
            </div>
        </div>
    )
}

export { Comment }