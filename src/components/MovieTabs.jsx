import React from 'react';

const MovieTabs = (props) => {
  const { sort_by, updateSortBy } = props;

  const handleClick = value => {
    return () => {
      updateSortBy(value);
    }
  }

  const getClassLink = value => {
    return `nav-link cursor ${sort_by === value ? 'active' : ''}`;
  }

  return (
    <ul className="tabs nav nav-pills">
      <li className="nav-item">
        <div
          className={getClassLink('popularity.desc')}
          onClick={handleClick('popularity.desc')}
        >
          Popularity
        </div>
      </li>
      <li className="nav-item">
        <div
          className={getClassLink('revenue.desc')}
          onClick={handleClick('revenue.desc')}
        >
          Revenue
        </div>
      </li>
      <li className="nav-item">
        <div
          className={getClassLink('vote_count.desc')}
          onClick={handleClick('vote_count.desc')}
        >
          Vote_count
        </div>
      </li>
    </ul>
  )
}

export default MovieTabs;