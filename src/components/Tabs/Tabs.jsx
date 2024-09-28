import { useState } from 'react'
import classes from './Tabs.module.scss'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('cheapest')

  const handleTabClick = (tab) => [setActiveTab(tab)]

  return (
    <div className={classes.Tabs}>
      <button
        className={`${classes.Tabs__button} ${activeTab === 'cheapest' ? classes['Tabs__button--active'] : ''}`}
        onClick={() => handleTabClick('cheapest')}
      >
        Самый дешевый
      </button>
      <button
        className={`${classes.Tabs__button} ${activeTab === 'fastest' ? classes['Tabs__button--active'] : ''}`}
        onClick={() => handleTabClick('fastest')}
      >
        Самый быстрый
      </button>
      <button
        className={`${classes.Tabs__button} ${activeTab === 'optimal' ? classes['Tabs__button--active'] : ''}`}
        onClick={() => handleTabClick('optimal')}
      >
        Оптимальный
      </button>
    </div>
  )
}

export default Tabs
