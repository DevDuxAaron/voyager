import React from 'react'
import { useState } from 'react'
import Link from "next/link";
import { YesNoBtn } from '../../components/YesNoBtn/YesNoBtn'
import Portal from "../../HOC/Portal"

import styles from './LoginModal.module.css'

const LoginModal = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <button type="button" onClick={() => setOpen(!open)}>
                Open Modal
            </button>
            {open && (
                <Portal selector="#myportal">
                    <form className={styles.box}>
                        <h2 className={styles.title}>Login</h2>
                        <div className={styles.social}>
                            <div className={styles.google}>
                                <Link href="/signup">
                                    <a>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.line}></div>
                        <input type="text" name="" placeholder="Usuario o email" />
                        <input type="password" name="" placeholder="Contraseña" />
                        <input type="checkbox" name="checkbox" />
                        <label htmlFor='checkbox'>Recuédame en este dispositivo</label>
                        <YesNoBtn primary="Login" secondary="Atrás" />
                        <p>
                            Aún no tienes una cuenta?
                            <Link href="/signup">
                                <a>
                                    <h4>Sign Up</h4>
                                </a>
                            </Link>
                        </p>
                    </form>
                </Portal>
            )}
        </>
    )
}

export default LoginModal