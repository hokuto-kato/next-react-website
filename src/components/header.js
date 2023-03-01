import styles from '@/styles/header.module.sass'
import { Logo } from '@/components/logo'
import { Nav } from '@/components/nav'
import { Container } from '@/components/container'

export const Header = () => {
  return (
    <header>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo boxOn />
          <Nav />
        </div>
      </Container>
    </header>
  )
}
