import Image from 'next/image'
import styles from './Photo.module.css'

function LakeV() {
    return <Image src="/lakeV.jpg" alt="mea" layout='fill' />
}
function LakeH() {
    return <Image src="/lakeH.jpg" alt="culpa" width="100%" height="100%" />
}

export { LakeV, LakeH }