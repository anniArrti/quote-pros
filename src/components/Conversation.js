import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Conversation = ({ conversation }) => {
  const [displayedResponses, setDisplayedResponses] = useState([]);
  const messagesEndRef = useRef(null);
  const chatboxRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const chatbox = chatboxRef.current;
    const chatboxFooter = document.querySelector(".main-chatbox__footer");
    if (chatbox) {
      const setChatboxHeight = () => {
        chatbox.style.height = `calc(100vh - ${
          chatbox.offsetTop + chatboxFooter.offsetHeight + 40
        }px)`;
      };
      setChatboxHeight();

      window.addEventListener('resize', setChatboxHeight);
      return () => {
        window.removeEventListener('resize', setChatboxHeight);
      };
    }
  }, []);
  const renderHtml = (html) => {
    return { __html: html };
  };
  useEffect(() => {
    setDisplayedResponses([]);
    if (conversation?.length > 0) {
      const lastItem = conversation[conversation.length - 1];
      const words = lastItem?.answer.split(' ');
      if (words.length > 0) {
        let index = -1;
        const displayWord = () => {
          if (index < words.length) {
            setDisplayedResponses(prevWords => [...prevWords, words[index]]);
            index++;
            setTimeout(displayWord, 50);
          }
        };
        displayWord();
      }
    }
    scrollToBottom();
  }, [conversation]);

  return (
    <div className="main-chatbox__body chatbox scrollbar-hide" ref={chatboxRef}>
      {conversation?.map((item, index) => (
        <div key={item.id}>
          <p className="chat-message user-message">
            {item.question}
          </p>
          <p className="chat-message bot-message">
          {index === conversation.length - 1 ?
              displayedResponses.map((word, i) => (
                <span key={i} dangerouslySetInnerHTML={word ? renderHtml(word + ' '): renderHtml(' ')} />
              ))
              :
              <span dangerouslySetInnerHTML={renderHtml(item.answer)} />
            }
          </p>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  )
}
const questionPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  question: PropTypes.string,
  answer: PropTypes.string
});

Conversation.propTypes = {
  conversation: PropTypes.arrayOf(questionPropTypes)
};

const mapStateToProps = (state) => ({
  conversation: state.chat.conversation
})

export default connect(mapStateToProps)(Conversation);
