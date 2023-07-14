import {Component} from 'react'
import LanguageItem from '../LanguageItem'
import TabItem from '../TabItem'

import './index.css'

const tabsList = [
  {tabId: 'English', displayText: 'English'},
  {tabId: 'Tamil', displayText: 'Tamil'},
  {tabId: 'Telugu', displayText: 'Telugu'},
]

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class MultiLanguages extends Component {
  state = {
    activeTabId: tabsList[0].tabId,
  }

  clickTabItem = tabValue => {
    this.setState({activeTabId: tabValue})
  }

  getProjectsList = () => {
    const {activeTabId} = this.state
    const filteredProjects = languageGreetingsList.filter(
      each => each.buttonText === activeTabId,
    )
    return filteredProjects
  }

  render() {
    const {activeTabId} = this.state
    const filteredProjects = this.getProjectsList()

    return (
      <div className="app-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="tabList-container">
          {tabsList.map(each => (
            <TabItem
              key={each.tabId}
              tabDetails={each}
              clickTabItem={this.clickTabItem}
              isActive={activeTabId === each.tabId}
            />
          ))}
        </ul>

        <ul className="language-container">
          {filteredProjects.map(each => (
            <LanguageItem key={each.id} languageDetails={each} />
          ))}
        </ul>
      </div>
    )
  }
}
export default MultiLanguages
