import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical,  } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


import styles from './Header.module.scss';
import img from '~/asset/img';
import Button from '~/components/Button';
import Search from '~/components/Search';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('heading')}>
      <div className={cx('content')}>
        <Link to="/" className={cx('logo-link')}> <img src={img.logo} alt="tiktok" /></Link>

        <Search/>

        <div className={cx('action')}>
          <Button small>Đăng nhập</Button>
          <button className={cx('more-btn')}>
            <FontAwesomeIcon icon={faEllipsisVertical} />
            <div className={cx('header-container-list')}>
              <ul className={cx('popup-list')}>
                <li className={cx('popup-item')}>
                  <img className={cx('item-style')} src={img.itemCreator} alt="" />
                  Công cụ dành cho nhà sáng tạo
                </li>
                <li className={cx('popup-item')}>
                  <img className={cx('item-style')} src={img.itemLanguage} alt="" />
                  Tiếng Việt
                </li>
                <li className={cx('popup-item')}>
                  <img className={cx('item-style')} src={img.itemSupport} alt="" />
                  Phản hồi và trợ giúp
                </li>
                <li className={cx('popup-item')}>
                  <img className={cx('item-style')} src={img.itemMoon} alt="" />
                  Chế độ tối
                </li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
