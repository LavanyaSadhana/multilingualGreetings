import './index.css'

const LanguageItem = props => {
  const {languageDetails} = props
  const {imageUrl, imageAltText} = languageDetails

  return (
    <>
      <li className="language-container">
        <img src={imageUrl} alt={imageAltText} className="language-im" />
      </li>
    </>
  )
}
export default LanguageItem
