import './index.css'

const LanguageFilterItem = props => {
  const {eachLanguage, onClickLanguageFilter, activeFilterId} = props
  const {id, language} = eachLanguage

  const activeFilterIdStyle = activeFilterId === id ? 'active-button' : ''

  const activeLanguage = () => {
    onClickLanguageFilter(id)
  }

  return (
    <button
      className={`button ${activeFilterIdStyle}`}
      type="button"
      onClick={activeLanguage}
    >
      {language}
    </button>
  )
}
export default LanguageFilterItem
