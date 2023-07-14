import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails
  const isActiveTabBtn = isActive ? 'active-tab-btn' : ''

  const onClickButtonText = () => {
    clickTabItem(tabId)
  }

  return (
    <>
      <li className="list-item">
        <button
          type="button"
          onClick={onClickButtonText}
          className={`tab-btn ${isActiveTabBtn}`}
        >
          {displayText}
        </button>
      </li>
    </>
  )
}
export default TabItem
