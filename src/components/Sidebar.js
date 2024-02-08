import React from 'react'
import logo from '../images/quote-pros-logo.webp';
import NavbarMobile from './NavbarMobile';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteConversation } from '../state/Actions/actionCreate';
import { truncateIcon, updateFaqIcon, logoutIcon } from '../icons/svgicons'

const Sidebar = ({ showMenu, isLogin, deleteConversation }) => {
  return (
    <aside className={showMenu ? 'chat-sidebar chat-side__left chat-sidebar__visible': 'chat-sidebar chat-side__left'}>
      <div className="chat-sidebar__inner">
        <div className="chat-sidebar__header">
          <figure className="logo-wrapper">
            <a href="/" aria-label="logo">
              <img src={logo} alt="Quote Pros" />
            </a>
          </figure>
        </div>
        <NavbarMobile />
        <div className="chat-sidebar__footer">
          <div className="chat-sidebar__footer-links">
            <ul className="chat-sidebar__footer-links-list unstyled-list">
              <li className="chat-sidebar__footer-links-list-item">
                <p
                  className="chat-sidebar__footer-link clear-conversation-button"
                  onClick={deleteConversation}
                  role="button"
                  tabIndex="0"
                >
                  <span dangerouslySetInnerHTML={{__html: truncateIcon}}/>Clear Conversation
                  </p>
              </li>

              <li className="chat-sidebar__footer-links-list-item">
                <a
                  href="/"
                  aria-label="Clear Conversation"
                  className="chat-sidebar__footer-link"
                >
                  <span dangerouslySetInnerHTML={{__html: updateFaqIcon}}/>Updates & FAQ's
                </a>
              </li>
              {isLogin ?
              <li className="chat-sidebar__footer-links-list-item">
                <a
                  href="/"
                  aria-label="Clear Conversation"
                  className="chat-sidebar__footer-link"
                >
                  <span dangerouslySetInnerHTML={{__html: logoutIcon}}/>Log Out
                </a>
              </li>
              : ''}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  )
}

Sidebar.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  isLogin: PropTypes.bool.isRequired,
  deleteConversation: PropTypes.func
};
const mapStateToProps = (state) => ({
  showMenu: state.chat.showMenu,
  isLogin: state.chat.isLogin
});

const mapDispatchToProps = {
  deleteConversation
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);