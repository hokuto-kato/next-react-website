import styles from '@/styles/post-body.module.sass'

export const PostBody = ({ children }) => {
  return <div className={styles.stack}>{children}</div>
}
