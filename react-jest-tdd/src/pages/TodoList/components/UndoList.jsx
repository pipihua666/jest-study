const UndoList = ({ list, onDeleteItem }) => {
  const handleDelete = index => {
    if (onDeleteItem) {
      onDeleteItem(index)
    }
  }
  return (
    <div>
      <div data-test="number">{list.length}</div>
      <div>
        {Array.isArray(list) &&
          list.map((item, index) => {
            return (
              <div data-test="list-item" key={`${item}${index}`}>
                {item}{' '}
                <span
                  data-test="delete"
                  onClick={() => handleDelete(index)}
                  style={{ cursor: 'pointer' }}
                >
                  -
                </span>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default UndoList
