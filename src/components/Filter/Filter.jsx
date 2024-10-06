import { useDispatch, useSelector } from 'react-redux'
import { toggleFilter } from '../../store/filterSlice'
import getCheckboxClass from '../../utils/getCheckboxClass'
import classes from './Filter.module.scss'

const Filter = () => {
  const filter = useSelector((state) => state.filter)
  const dispatch = useDispatch()

  const handleCheckboxChange = (option) => {
    dispatch(toggleFilter({ option }))
  }

  return (
    <aside className={classes.Filter}>
      <h3 className={classes['Filter__title']}>Количество пересадок</h3>
      <label className={classes['Filter__label']}>
        <input
          className={classes['Filter__checkbox']}
          type="checkbox"
          checked={filter.all}
          onChange={() => handleCheckboxChange('all')}
        />
        <span className={getCheckboxClass(filter.all)}></span>
        <span>Все</span>
      </label>
      <label className={classes['Filter__label']}>
        <input
          className={classes['Filter__checkbox']}
          type="checkbox"
          checked={filter.noStops}
          onChange={() => handleCheckboxChange('noStops')}
        />
        <span className={getCheckboxClass(filter.noStops)}></span>
        <span>Без пересадок</span>
      </label>
      <label className={classes['Filter__label']}>
        <input
          className={classes['Filter__checkbox']}
          type="checkbox"
          checked={filter.oneStop}
          onChange={() => handleCheckboxChange('oneStop')}
        />
        <span className={getCheckboxClass(filter.oneStop)}></span>
        <span>1 пересадка</span>
      </label>
      <label className={classes['Filter__label']}>
        <input
          className={classes['Filter__checkbox']}
          type="checkbox"
          checked={filter.twoStops}
          onChange={() => handleCheckboxChange('twoStops')}
        />
        <span className={getCheckboxClass(filter.twoStops)}></span>
        <span>2 пересадки</span>
      </label>
      <label className={classes['Filter__label']}>
        <input
          className={classes['Filter__checkbox']}
          type="checkbox"
          checked={filter.threeStops}
          onChange={() => handleCheckboxChange('threeStops')}
        />
        <span className={getCheckboxClass(filter.threeStops)}></span>
        <span>3 пересадки</span>
      </label>
    </aside>
  )
}

export default Filter
