import classes from '../components/Filter/Filter.module.scss'

const getCheckboxClass = (isChecked) => {
  return isChecked ? `${classes['Filter__option']} ${classes['Filter__option--checked']}` : classes['Filter__option']
}

export default getCheckboxClass
