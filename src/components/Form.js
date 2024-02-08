import React, { useRef, useState } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchDataSuccess, updateConversation } from '../state/Actions/actionCreate';
import { rightArrow } from '../icons/svgicons';

const Form = ({ allQuestions, fetchDataSuccess, updateConversation }) => {
  const [value , setValue] = useState('');
  const messagesEndRef = useRef(null);

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleChat();
    }
  };

  const handleChat = async () => {
    if(value !== "") {
      const id = allQuestions.length+1*1;
      const data = {id: id, question: value, answer: 'It seems like you entered "'+value+'." Is there anything else you would like to ask or discuss? Feel free to let me know how I can assist you further!'};
      // latest questions
      updateConversation(data);
      // also store databse previus questions
      fetchDataSuccess(data)
      setValue('')
    }
  }

  return (
    <>
    <div id="chat-form">
      <div className="field-wrapper">
        <input
          type="text"
          name="query"
          id="query-input"
          className="field-input chat-input"
          placeholder="Type your question here"
          autoFocus
          onChange={handleChange}
          value={value}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleChat}
          type="button"
          className="btn btn-primary field-submit-button"
          dangerouslySetInnerHTML={{ __html: rightArrow }}
        />
      </div>
    </div>
    <div ref={messagesEndRef} />
    </>
  )
}
const questionPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  question: PropTypes.string,
  answer: PropTypes.string
});

Form.propTypes = {
  allQuestions: PropTypes.arrayOf(questionPropTypes),
  fetchDataSuccess: PropTypes.func.isRequired,
  updateConversation: PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({
  allQuestions: state.chat.allQuestions,
});
const mapDispatchToProps = {
  fetchDataSuccess,
  updateConversation
}; 

export default connect(mapStateToProps, mapDispatchToProps)(Form);