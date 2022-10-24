import React from "react";
import styles from './Footer.module.css'
import { AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.title}>
                <h1>To-Do List</h1>
            </div>
            <div className={styles.social}>
                <h2>Find Us On</h2><br/>
            <Link href='http://facebook.com'>
                <a>
                    <AiFillLinkedin/>
                </a>
            </Link>

            </div>
        </div>
    )
}

export default Footer