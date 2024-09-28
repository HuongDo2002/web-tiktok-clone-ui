import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { NavLink } from 'react-router-dom';

import img from '~/asset/img';
import Button from '~/components/Button';


const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('main-container')}>
        <NavLink className={(nav) => cx('nav-link', { active: nav.isActive })} to="/">
          <img className={cx('nav-style-item')} src={img.itemHome} alt="" />
          <span className={cx('nav-item-text')}>Dành cho bạn</span>
        </NavLink>
        <NavLink className={(nav) => cx('nav-link', { active: nav.isActive })} to="/discovery">
          <img className={cx('nav-style-item')} src={img.itemCompa} alt="" />
          <span className={cx('nav-item-text')}>Khám phá</span>
        </NavLink>
        <NavLink className={(nav) => cx('nav-link', { active: nav.isActive })} to="/following">
          <img className={cx('nav-style-item')} src={img.itemFollower} alt="" />
          <span className={cx('nav-item-text')}>Đang Follow</span>
        </NavLink>
        <NavLink className={(nav) => cx('nav-link', { active: nav.isActive })} to="/live">
          <img className={cx('nav-style-item')} src={img.itemLive} alt="" />
          <span className={cx('nav-item-text')}>LIVE</span>
        </NavLink>
        <NavLink className={(nav) => cx('nav-link', { active: nav.isActive })} to="/profile">
          <img className={cx('nav-style-item')} src={img.itemProfile} alt="" />
          <span className={cx('nav-item-text')}>Hồ sơ</span>
        </NavLink>
      </div>

      <div className={cx('frame-container')}>
        <p className={cx('frame-container-text')}>Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>
        <Button large>Đăng nhập</Button>
      </div>
      <div className={cx('footer-container')}>
        <div className={cx('banner-footer')}>
          <img className={cx('banner-footer-image')} 
          src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop-islands/8152caf0c8e8bc67ae0d.png" 
          alt="" />
          <h4 className={cx('banner-footer-text')}>Tạo hiệu ứng TikTok, nhận phần thưởng</h4>
        </div>
        <h4 className={cx('footer-text')}>Công ty</h4>
        <h4 className={cx('footer-text')}>Trương trình</h4>
        <h4 className={cx('footer-text')}>Điều khoản và chính sách</h4>
        <span className={cx('footer-span')}>© 2024 TikTok</span>
      </div>
    </div>
  );
}

export default Sidebar;
