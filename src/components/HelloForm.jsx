const React = require("react")
const { useState } = require('react')

const HelloForm = ({ dialog }) => {
  const [name, setName] = useState('')
  const onInputChange = (e) => setName(e.target.value)
  const onDoneClick = () => dialog.close()

  return (
    <form style={{ width: 300 }}>
      <h1>React with Functional Components</h1>
        <label>
          <span>What is your name?</span>
          <input onChange={onInputChange} />
        </label>
        <p>{`Hello ${name}`}</p>
        <footer>
          <button type="submit" uxp-variant="cta" onClick={onDoneClick}>Done</button>
        </footer>
    </form>
  )
}

module.exports = HelloForm
