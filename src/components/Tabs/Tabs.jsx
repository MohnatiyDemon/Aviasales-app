import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../../store/tabsSlice'
import styles from './Tabs.module.scss'

const Tabs = () => {
  const dispatch = useDispatch()
  const activeTab = useSelector((state) => state.tabs)

  const handleTabClick = (tab) => {
    dispatch(setActiveTab(tab))
  }
  return (
    <div className={styles.Tabs}>
      <button
        className={`${styles.Tabs__button} ${activeTab === 'cheapest' ? styles['Tabs__button--active'] : ''}`}
        onClick={() => handleTabClick('cheapest')}
      >
        Самый дешевый
      </button>
      <button
        className={`${styles.Tabs__button} ${activeTab === 'fastest' ? styles['Tabs__button--active'] : ''}`}
        onClick={() => handleTabClick('fastest')}
      >
        Самый быстрый
      </button>
      <button
        className={`${styles.Tabs__button} ${activeTab === 'optimal' ? styles['Tabs__button--active'] : ''}`}
        onClick={() => handleTabClick('optimal')}
      >
        Оптимальный
      </button>
    </div>
  )
}

export default Tabs
