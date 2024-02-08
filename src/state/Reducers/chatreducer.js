// How to DO?
const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
const UPDATE_CONVERSATION = 'UPDATE_CONVERSATION';
const UPDATE_CLASS = 'UPDATE_CLASS';
const DELETE_CONVERSATION = 'DELETE_CONVERSATION';
const DELETE_ONE_BY_ONE = 'DELETE_ONE_BY_ONE';
const DELETE_All = 'DELETE_All';

const initialState = {
  inputValue: '',
  conversation: [],
  allQuestions: [{
    "id": 1,
    "question": "hello meaning in french",
    "answer": "Hello in French can be translated as bonjour."
  },
  {
    "id": 2,
    "question":  "How to create remix shopify app use Shopify cli",
    "answer": "To create a remix Shopify app using the Shopify CLI, follow these steps:<br><br>1. Install the Shopify CLI by running the following command in your terminal:<br><br>   ```<br>   npm install -g @shopify/shopify-cli<br>   ```<br><br>2. Once the installation is complete, authenticate with your Shopify partner account by running the following command and following the prompts:<br><br>   ```<br>   shopify login<br>   ```<br><br>3. Create a new directory for your app and navigate into it:<br><br>   ```<br>   mkdir remix-shopify-app<br>   cd remix-shopify-app<br>   ```<br><br>4. Initialize a new Shopify app project using the Shopify CLI:<br><br>   ```<br>   shopify create<br>   ```<br><br>   This command will prompt you to specify your app name, developer name, and other details.<br><br>5. Select the 'Custom' app type when prompted by the CLI.<br><br>6. The CLI will generate a basic app structure for you. Now, you can start building your remix Shopify app within this structure.<br><br>   - The main app file is located at `/app/main.tsx`. You can write your app logic and UI code here.<br>   - Use the `/app/styles/` folder to store your CSS or SCSS files for styling.<br>   - The generated app also includes example extension points like `Product` and `Cart`. You can modify these or create new extension points as required.<br><br>7. To run and test your app locally, use the following command:<br><br>   ```<br>   shopify serve<br>   ```<br><br>   This will start a local server so you can view and test your app in a development environment.<br><br>8. When you're ready to deploy your app to a Shopify store, use the following command:<br><br>   ```<br>   shopify deploy<br>   ```<br><br>   This will prompt you to create a new Shopify development store or choose an existing store to install your app into.<br><br>That's it! You now have a basic remix Shopify app created using the Shopify CLI. You can further enhance and customize your app by integrating with Shopify's APIs and using additional tools and libraries."
  }],
  showMenu: false,
  isLogin: true,
  limit: 3
};
// Traditional Reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload
      };
    case UPDATE_CONVERSATION: {
      const newQuestion = action.payload;
      const isDuplicate = state.conversation.some(q => q.question === newQuestion.question);
      if (!isDuplicate) {
        return {
          ...state,
          conversation: [ ...state.conversation, action.payload]
        };
      }
      return state;
    }
    case DELETE_CONVERSATION:
      return {
        ...state,
        conversation:[]
      }
    case FETCH_DATA_SUCCESS: {
      const newQuestion = action.payload;
      const isDuplicate = state.allQuestions.some(q => q.question === newQuestion.question);
      if (!isDuplicate) {
        return {
          ...state,
          allQuestions: [ ...state.allQuestions, action.payload]
        };
      }
      return state;
    }
    case DELETE_ONE_BY_ONE:
      return {
        ...state,
        allQuestions: state.allQuestions.filter(x => x.id !== action.payload),
        conversation: state.conversation.filter(x => x.id !== action.payload)
      }
    case DELETE_All: 
    return {
      ...state,
      allQuestions: []
    }
    case UPDATE_CLASS:
      return {
        ...state,
        showMenu: !state.showMenu
      }
    default:
      return state;
  }
};

export default reducer;
