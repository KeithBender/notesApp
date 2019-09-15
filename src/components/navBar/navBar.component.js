import React from 'react';
import './navBar.styles.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faColumns,
  faThLarge,
  faTrashAlt,
  faEdit,
  faLock,
} from '@fortawesome/free-solid-svg-icons';

const NavBar = props => (
  <div className="navBar-container">
    <nav className="navBar">
      <button>
        <FontAwesomeIcon icon={faColumns} size="2x" color="#848484" />
      </button>
      <button>
        <FontAwesomeIcon icon={faThLarge} size="2x" color="#848484" />
      </button>
      <button>
        <FontAwesomeIcon icon={faTrashAlt} size="2x" color="#848484" />
      </button>
      <button>
        <FontAwesomeIcon icon={faEdit} size="2x" color="#848484" />
      </button>
      <button>
        <FontAwesomeIcon icon={faLock} size="2x" color="#848484" />
      </button>
    </nav>
        <div className="search-container">
            <input id='searchLight' name='search' type='text' placeholder='Search'/>
        </div>
  </div>
);

export default NavBar;
