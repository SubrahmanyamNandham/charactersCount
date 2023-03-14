import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'
import ListItem from './components/ListItem'

import './App.css'

const App = () => {
  const [data, setData] = useState('')
  const [dataList, setDataList] = useState([])

  const onChangeData = event => setData(event.target.value)

  const onClickCount = event => {
    event.preventDefault()
    const newCount = {
      data,

      id: uuidv4(),
    }
    setDataList(prevState => [...prevState, newCount])
    setData('')
  }

  return (
    <div className="bgContainer">
      <div className="mainContainer">
        <div className="countContainer">
          <h1 className="heading">Count the characters like a Boss...</h1>
          <div className="imageContainer">
            <ul>
              {dataList.length === 0 ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                  className="image"
                />
              ) : (
                dataList.map(eachItem => (
                  <ListItem key={eachItem.id} listItemDetails={eachItem} />
                ))
              )}
            </ul>
          </div>
        </div>
        <div className="characterContainer">
          <h1 className="title">Character Counter</h1>
          <form className="form" onSubmit={onClickCount}>
            <input
              type="text"
              placeholder="Enter the Characters here"
              value={data}
              onChange={onChangeData}
              className="input"
            />
            <button className="add" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
