import styles from '@/styles/footer.module.sass'
import { Logo } from '@/components/logo'
import { Container } from '@/components/container'
import { Social } from '@/components/social'

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          <Social />
        </div>
      </Container>
    </footer>
  )
}
