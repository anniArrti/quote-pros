import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteAllData } from '../state/Actions/actionCreate';
import { plusIcon } from '../icons/svgicons'
import ChatList from './ChatList';
const ChatListWrapper = ({isLogin, deleteAllData}) => {
  return (
    <div className="chat-list__wrapper">
        <div className="chat-list__header">
          <h3 className="chat-list__heading">Chat List</h3>
          <span className="new-chat__button" dangerouslySetInnerHTML={{ __html: plusIcon}}/>
        </div>
        <ChatList />
        {isLogin ? 
        <div className="chat-list__footer">
          <button className="btn btn-danger chat-delete-button" onClick={deleteAllData}>
            Delete All
          </button>
        </div>
        : ''}
      </div>
  )
}

ChatListWrapper.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  deleteAllData: PropTypes.func
}
const mapStateToProps = (state) => ({
  isLogin: state.chat.isLogin
});

const mapDispatchToProps = {
  deleteAllData
}
export default connect(mapStateToProps, mapDispatchToProps)(ChatListWrapper);
