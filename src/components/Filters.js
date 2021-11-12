import React from 'react';
import './css/Filters.css';

function Filters() {
  /* Filters form on top */
  return (
    <div className="filters">
      <form id="contacts-filter" className="filters__form">
        <div className="filters__field">
          <input type="text" placeholder="Name" />
        </div>
        <div className="filters__field filters__field-select">
          <select name="city">
            <option disabled selected value>City</option>
              <option value='Cekozo'>Cekozo</option>
              <option value='Ekadinbe'>Ekadinbe</option>
          </select>
        </div>
        <div className="filters__field">
          <input type="checkbox" name="active" />
          <label htmlFor="active">Show active <i className='fas fa-eye'></i></label>
        </div>
        <div className="filters__btns">
          <button type="submit" className="filters__btn-submit">Filter</button>
        </div>
      </form>
    </div>
  )
}

export default Filters