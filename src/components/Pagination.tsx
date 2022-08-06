import React from 'react'
import { useNavigate } from 'react-router-dom'

const Pagination = ({totalPages, page}:any) => {
  const newArr = [...Array(totalPages)].map((_, i) => i + 1)
  const navigate = useNavigate()

  const isActive = (index:any) => {
    if(index === page) return "active"
    return ""
  }

  const prev = () => {
    const newPage = Math.max(page - 1, 1)
    navigate(`?page=${newPage}`)
  }

  const next = () => {
    const newPage = Math.min(page + 1, totalPages)
    navigate(`?page=${newPage}`)
  }

  const jump = (num:any) => {
    navigate(`?page=${num}`)
  }

  return (
    <div>

    <div className="row">
        <div className="col-lg-12">
          <div className="product__pagination">
          <button className="but" onClick={prev}></button>

          {newArr.map(num => (
            <a key={num} className={`${isActive(num)}`}
            onClick={() => jump(num)}>{num}</a>
            ))}
            <button className="but" onClick={next}></button>

            {/* <a href="#">2</a>
            <a href="#">3</a>
            <span>...</span>
            <a href="#">21</a> */}
          </div>
        </div>
    </div>
    {/* <div className='q'>
      <button onClick={prev}>&laquo;</button>

      {
        newArr.map(num => (
          <button key={num} className={`${isActive(num)}`}
          onClick={() => jump(num)}>
            {num}
          </button>
        ))
      }

      <button onClick={next}>&raquo;</button>
    </div> */}
    </div>
  )
}

export default Pagination