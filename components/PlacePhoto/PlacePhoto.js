import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import { MenuContext } from "../MenuContext/MenuContext";

import styles from "./PlacePhoto.module.css";

const PlacePhoto = ({idPhoto, user, placeName, ubication, price, userImage, placeImage, likes, comments}) => {
    const { setOpenComment } = React.useContext(MenuContext)
    return (
        <div className={styles.photo_container}>
            <div className={styles.header}>
                <div className={styles.profile_photo}>
                    <Image src={userImage} alt={user} layout='fill'/>
                </div>
                <div className={styles.links}>
                    <Link href={"/site/"+placeName}>
                        <a>
                            <h3>{placeName}</h3>
                        </a>
                    </Link>
                    <Link href={"/search/"+ubication}>
                        <a>
                            <h5>{ubication}</h5>
                        </a>
                    </Link>
                </div>
                <h2 className={styles.price}>{price}$</h2>
            </div>
            <div className={styles.buttons}>
                <div className={styles.button_container}>
                    <button className={styles.btn}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                        </svg>
                    </button>
                    <label>{likes}</label>
                </div>
                <div className={styles.button_container}>
                    <button  className={styles.btn} type="button" onClick={() => setOpenComment(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16">
                            <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                            <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"/>
                        </svg>
                    </button>
                    <label>{comments}</label>
                </div>
                <div className={styles.button_container}>
                    <button className={styles.btn}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlacePhoto;
