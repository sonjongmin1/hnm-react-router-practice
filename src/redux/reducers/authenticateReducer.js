let initialState = {
  id: '',
  password: '', // 이 줄 뒤에 쉼표(,)가 빠져 있습니다.
  authenticate: false,
};

function authenticateReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case 'LOGIN_SUCCESS':
      console.log('login success reducer');
      return {
        ...state,
        id: payload.id,
        password: payload.password,
        authenticate: true,
      };
    default:
      return { ...state };
  }
}
export default authenticateReducer;
