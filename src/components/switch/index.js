import './styles.css'

const Switch = ({ isChecked, handleChange }) => {
  return (
    <label className="switch">
      <input type="checkbox" value={isChecked} onChange={handleChange} />
      <div className="slider"></div>
    </label>
  )
}

export { Switch }
