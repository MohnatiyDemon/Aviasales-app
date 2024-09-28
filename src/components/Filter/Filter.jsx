import { useState } from 'react'
import getCheckboxClass from '../../utils/getCheckboxClass'
import './Filter.scss'

const Filter = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    all: false,
    noStops: false,
    oneStop: false,
    twoStops: false,
    threeStops: false,
  })

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prevState) => {
      if (option === 'all') {
        return {
          all: !prevState.all,
          noStops: !prevState.all,
          oneStop: !prevState.all,
          twoStops: !prevState.all,
          threeStops: !prevState.all,
        }
      }

      const updatedOptions = {
        ...prevState,
        [option]: !prevState[option],
        all: false,
      }
      const { all, ...restOptions } = updatedOptions
      const allSelected = Object.values(restOptions).every((value) => value)

      if (allSelected) {
        updatedOptions.all = true
      }

      return updatedOptions
    })
  }

  return (
    <aside className="Filter">
      <h3 className="Filter__title">Количество пересадок</h3>
      <label className="Filter__label">
        <input
          className="Filter__checkbox"
          type="checkbox"
          checked={selectedOptions.all}
          onChange={() => handleCheckboxChange('all')}
        />
        <span className={getCheckboxClass(selectedOptions.all)}></span>
        <span>Все</span>
      </label>
      <label className="Filter__label">
        <input
          className="Filter__checkbox"
          type="checkbox"
          checked={selectedOptions.noStops}
          onChange={() => handleCheckboxChange('noStops')}
        />
        <span className={getCheckboxClass(selectedOptions.noStops)}></span>
        <span>Без пересадок</span>
      </label>
      <label className="Filter__label">
        <input
          className="Filter__checkbox"
          type="checkbox"
          checked={selectedOptions.oneStop}
          onChange={() => handleCheckboxChange('oneStop')}
        />
        <span className={getCheckboxClass(selectedOptions.oneStop)}></span>
        <span>1 пересадка</span>
      </label>
      <label className="Filter__label">
        <input
          className="Filter__checkbox"
          type="checkbox"
          checked={selectedOptions.twoStops}
          onChange={() => handleCheckboxChange('twoStops')}
        />
        <span className={getCheckboxClass(selectedOptions.twoStops)}></span>
        <span>2 пересадки</span>
      </label>
      <label className="Filter__label">
        <input
          className="Filter__checkbox"
          type="checkbox"
          checked={selectedOptions.threeStops}
          onChange={() => handleCheckboxChange('threeStops')}
        />
        <span className={getCheckboxClass(selectedOptions.threeStops)}></span>
        <span>3 пересадки</span>
      </label>
    </aside>
  )
}

export default Filter
