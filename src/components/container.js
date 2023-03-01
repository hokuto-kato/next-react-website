import styles from '@/styles/container.module.sass'
export const Container = ({ children, large = false }) => {
  return <div className={large ? styles.large : styles.default}>{children}</div>
}
