import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCommentDots, faHeart, faPlus, faShare } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function ContentVideo() {
  return (
    <div className={cx('wrapper')}>
      <section className={cx('video')}>
        <video
          src="https://v.pinimg.com/videos/mc/720p/c9/22/d8/c922d8391146cc2fdbeb367e8da0d61f.mp4"
          type="video"
          className={cx('style-video')}
          controls
          loop={true}
        />
      </section>

      <section className={cx('list-icon')}>
        <img className={cx('avatar')} src="https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg" alt="name"/>
        <FontAwesomeIcon className={cx('follow-btn')} icon={faPlus} />

        <span className={cx('icon-action')}>
          <button className={cx('btn')}>
            <FontAwesomeIcon className={cx('icon-btn')} icon={faHeart} />
          </button>
            <p>111k</p>
        </span>
        
        <span className={cx('icon-action')}>
          <button className={cx('btn')}>
            <FontAwesomeIcon className={cx('icon-btn')} icon={faCommentDots} />
          </button>
            <p>111k</p>
        </span>

        <span className={cx('icon-action')}>
          <button className={cx('btn')}>
            <FontAwesomeIcon className={cx('icon-btn')} icon={faBookmark} />
          </button>
            <p>111k</p>
        </span>

        <span className={cx('icon-action')}>
          <button className={cx('btn')}>
            <FontAwesomeIcon className={cx('icon-btn')} icon={faShare} />
          </button>
            <p>111k</p>
        </span>
      </section>
      <Button className={cx('download-btn')} rounded>Tải ứng dụng</Button>
    </div>
  );
}

export default ContentVideo;
