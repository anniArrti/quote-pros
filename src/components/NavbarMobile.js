import React, { useState } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateConversation } from '../state/Actions/actionCreate';
import { downArrow } from '../icons/svgicons'
const NavbarMobile = ({ allQuestions, updateConversation }) => {
  const [ siteNave, setSiteNave] = useState(false);
  const handleAccordin = () => {
    setSiteNave(!siteNave);
  }

  return (
    <div className="chat-sidebar__body mobile-nav">
      <ul className="site-nav__list unstyled-list">
        <li className="site-nav__list-item">
          <a href="/" aria-label="Home" className="site-nav__list-item-link">Home</a>
        </li>
        <li className="site-nav__list-item">
          <a href="/" aria-label="How it Works" className="site-nav__list-item-link">How it Works</a>
        </li>
        <li className="site-nav__list-item">
          <a href="/plan" aria-label="Pricing" className="site-nav__list-item-link">Pricing</a>
        </li>
        <li className="site-nav__list-item site-nav__list-item-button-wrapper">
          <a href="/" aria-label="Sign Up" className="site-nav__list-item-link">Sign Up</a>
        </li>
        <li 
          className={siteNave ? 'site-nav__list-item site-nav__has-dropdown site-nav-dropdown__chat-list site-nav__has-dropdown-open': 'site-nav__list-item site-nav__has-dropdown site-nav-dropdown__chat-list'} 
          onClick={handleAccordin}
          role="button"
        >
          <div style={{ display: "flex"}}>
            <p aria-label="Chat List" className="site-nav__list-item-link">Chat List</p>
            <span dangerouslySetInnerHTML={{__html: downArrow}}/>
          </div>
          <div className="site-nav__mobile-dropdown">
            <ul className="chat-list chat-list__body unstyled-list scrollbar-hide">
            {allQuestions?.map((item, index) => (
              <li className="chat-list__item" key={index}>
                <p onClick={() => updateConversation(item)}>{item.question}</p>
                <div className="chat-list__item-buttons">
                    
                </div>
              </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
    </div>
  )
}

const questionPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  question: PropTypes.string,
  answer: PropTypes.string
});

NavbarMobile.propTypes = {
  allQuestions: PropTypes.arrayOf(questionPropTypes),
  updateConversation: PropTypes.func
};
const mapStateToProps = (state) => ({
  allQuestions: state.chat.allQuestions
})

const mapDispatchToProps = {
  updateConversation
}; 

export default connect(mapStateToProps, mapDispatchToProps)(NavbarMobile);