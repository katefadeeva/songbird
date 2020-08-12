import React from 'react';

import './header.css';

const Header = () => {
  return (
      <div className="header d-flex">
        <div className="top-panel d-flex">
          <div className="logo"></div>
          <h5>Score: <span className="score">0</span></h5>
        </div>
        <ul className="pagination">
          <li className="page-item">
            <a href="#" className="page-link">Разминка</a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link">Воробьиные</a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link">Лесные птицы</a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link">Певчие птицы</a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link">Хищные птицы</a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link">Морские птицы</a>
          </li>
        </ul>
      </div>
  );
};

export default Header;