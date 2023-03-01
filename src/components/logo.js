import styles from '@/styles/logo.module.sass'
import Link from 'next/link'

export const Logo = ({ boxOn = false }) => {
  return (
    <Link href="/" className={boxOn ? styles.box : styles.basic}>
      CUBE
    </Link>
  )
}
