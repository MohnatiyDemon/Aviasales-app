import aviaSalesLogo from '../../assets/logos/Logo.svg'
import styles from './Logo.module.scss'

const Logo = () => {
  return (
    <>
      <img src={aviaSalesLogo} alt="Aviasales logo" className={styles.Logo}></img>
    </>
  )
}

export default Logo
