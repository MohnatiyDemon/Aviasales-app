import aviaSalesLogo from '../../assets/logos/Logo.svg'
import classes from './Logo.module.scss'

const Logo = () => {
  return (
    <>
      <img src={aviaSalesLogo} alt="Aviasales logo" className={classes.Logo}></img>
    </>
  )
}

export default Logo
