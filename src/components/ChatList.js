import React, { useId } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateConversation, deleteOneByOne } from '../state/Actions/actionCreate';
import { truncateIcon } from '../icons/svgicons'
const ChatList = ({allQuestions, isLogin, updateConversation, deleteOneByOne}) => {
  const uniqe = useId();
  console.log(uniqe);
  const handleClick = (item) => {
    updateConversation(item);
  }

  return (
    <ul className="chat-list chat-list__body unstyled-list scrollbar-hide">
      {allQuestions?.map((item, index) => (
      <li className="chat-list__item" key={item.id}>
        <p onClick={() => handleClick(item)}>{item.question}</p>
        {isLogin ? 
        <div className="chat-list__item-buttons">
          <span 
            className="chat-list__item-button chat-list__item-delete" 
            onClick={() => deleteOneByOne(item.id)}
            dangerouslySetInnerHTML={{__html: truncateIcon}}
          />
        </div>
        : ''}
      </li>
      ))}
    </ul>
  )
}
const questionPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  question: PropTypes.string,
  answer: PropTypes.string
});

ChatList.propTypes = {
  allQuestions: PropTypes.arrayOf(questionPropTypes),
  isLogin: PropTypes.bool,
  updateConversation: PropTypes.func,
  deleteOneByOne: PropTypes.func
};
const mapStateToProps = (state) => ({
  allQuestions: state.chat.allQuestions,
  isLogin: state.chat.isLogin
})

const mapDispatchToProps = {
  updateConversation,
  deleteOneByOne
}; 
export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
