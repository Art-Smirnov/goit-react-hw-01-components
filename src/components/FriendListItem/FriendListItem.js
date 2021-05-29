import React from 'react';
import PropTypes from 'prop-types';

import './FriendListItem.scss';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <>
    <span className={isOnline ? 'status_green' : 'status_red'}></span>
    <img className="avatar" src={avatar} alt={name} width="48" />
    <p className={name}>{name}</p>
  </>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
