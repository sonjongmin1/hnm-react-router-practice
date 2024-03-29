import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const menuList = [
    '여성',
    'Divided',
    '남성',
    '신생아/유아',
    '아동',
    'H&M Home',
    'Sale',
    '지속가능성',
  ];

  let [width, setWidth] = useState(0);
  let navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  };

  const search = (event) => {
    if (event.key === 'Enter') {
      console.log('we click this key,', event.key);
      //입력한 검색어를 읽어와서
      let keyword = event.target.value;
      console.log('keyword', keyword);
      //url을 바꿔준다
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div>
      <div className='side-menu' style={{ width: width }}>
        <button className='closebtn' onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className='side-menu-list' id='menu-list'>
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>
      <div className='nav-header'>
        <div className='burger-menu hide'>
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
        </div>
        <div className='nav-section'>
          <Link to='/'>
            <img
              width={100}
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png'
              alt=''
            />
          </Link>
        </div>
        <div className='menu-area'>
          <ul className='menu-list'>
            {menuList.map((menu, index) => (
              <li key={index}>{menu}</li>
            ))}
          </ul>
          <div className='search-box'>
            <FontAwesomeIcon icon={faSearch} />
            <input type='text' onKeyPress={(event) => search(event)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
