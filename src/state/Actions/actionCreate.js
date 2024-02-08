// What to do?
export const changeInputValue = (value) => ({
  type: 'CHANGE_INPUT_VALUE',
  payload: value
});

export const fetchDataSuccess = (data) => ({
  type: 'FETCH_DATA_SUCCESS',
  payload: data
});

export const updateConversation = (conversationData) => ({
  type: 'UPDATE_CONVERSATION',
  payload: conversationData
});

export const deleteConversation = () => ({
  type: 'DELETE_CONVERSATION'
});

export const deleteOneByOne = (id) => ({
  type: 'DELETE_ONE_BY_ONE',
  payload: id
});

export const deleteAllData = () => ({
  type: 'DELETE_All'
})

export const mobileToggle = () => ({
  type: 'UPDATE_CLASS'
});
