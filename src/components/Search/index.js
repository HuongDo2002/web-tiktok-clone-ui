import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import useDebounce from '~/hooks/useDebounce';
import styles from './Search.module.scss';
import PopperWrapper from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import img from '~/asset/img';

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoanding] = useState(false);

  const inputRef = useRef();
  const debounced = useDebounce(searchValue, 500);

  useEffect(() => {
    if(debounced.trim()){
      setLoanding(true)
      fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
      .then((response) => response.json())
      .then((response) => {
        setSearchResult(response.data);
        setLoanding(false)
      })
      .catch(()=>setLoanding(false))


    }else{
      setSearchResult([]);
    }
    // eslint-disable-next-line
  }, [debounced]);

  const handleOutsideClick = () => {
    setShowResult(false);
  };


  return (
      <Tippy
        appendTo={document.body}
        interactive={true}
        visible={showResult&&searchResult.length>0}
        render={(attrs) => (
          <PopperWrapper>
            <div className={cx('searchResult')} {...attrs}>
              <h4 className={cx('search-account')}>Account</h4>
              {
                searchResult.map((result)=>(
                  <AccountItem key={result.id} data={result} />
                ))
              }
            </div>
          </PopperWrapper>
        )}
        onClickOutside={handleOutsideClick}
      >
        <div className={cx('search')}>
          <input
            ref={inputRef}
            value={searchValue}
            className={cx('search-input')}
            placeholder="Tìm Kiếm"
            spellCheck={false}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          {!!searchValue && !loading &&(
            <button
              className={cx('clear')}
              onClick={() => {
                setSearchValue('');
                setSearchResult([]);
                inputRef.current.focus();
              }}
            >
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}

          {loading&&<FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
          <button className={cx('search-btn')}>
            <img className={cx('item-search')} src={img.itemSearch} alt="" />
          </button>
        </div>
      </Tippy>
  );
}

export default Search;
