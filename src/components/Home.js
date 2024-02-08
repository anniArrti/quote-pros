import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Sidebar from './Sidebar';
import Header from './Header';
import Form from './Form';
import Conversation from './Conversation';
import ChatListWrapper from './ChatListWrapper';

import { mobileToggle } from '../state/Actions/actionCreate';

const Home = ({ showMenu, limit, isLogin, allQuestions, mobileToggle }) => {

  
  return (
    <>
    <section className="chat-section">
        <Sidebar />
        <div className="chat-side__right">
          <Header />
          <div className="chatbox-wrapper">
            <div className="main-chatbox" >
              <div className="main-chatbox__header">
                <h1 className="main-chatbox__heading">
                  To <span>Get Instant Quotes</span> Type Your Question Here!
                </h1>
              </div>
              <Conversation />
              <div className="main-chatbox__footer">
                {(!isLogin && limit <= allQuestions.length) ?
                <div className="limit-reached"><p>You reached your limit, please <a className="text-link" href="/login">login</a> or <a className="text-link" href="/register">signup</a></p></div>
                :
                <Form />
                }
              </div>
            </div>
            <ChatListWrapper />
          </div>
        </div>
      </section>
      <div 
        className={showMenu ? "page-overlay page-overlay__visible": "page-overlay"}
        onClick={mobileToggle}
      />
    </>
  )
}
const questionPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  question: PropTypes.string,
  answer: PropTypes.string
});

Home.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  isLogin: PropTypes.bool,
  limit: PropTypes.number,
  mobileToggle: PropTypes.func,
  allQuestions: PropTypes.arrayOf(questionPropTypes),
};
const mapStateToProps = (state) => ({
  allQuestions: state.chat.allQuestions,
  showMenu: state.chat.showMenu,
  limit: state.chat.limit,
  isLogin: state.chat.isLogin
});
const mapDispatchToProps = {
  mobileToggle
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
