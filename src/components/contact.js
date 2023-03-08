import styles from '@/styles/contact.module.sass'
import { Social } from '@/components/social'
export const Contact = () => {
  return (
    <div className={styles.stack}>
      <h3 className={styles.heading}>Contact</h3>
      <Social />
      <address>cube@web.mail.address</address>
    </div>
  )
}
