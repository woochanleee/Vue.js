import Constant from '../Constant';

// 상태를 변경하는 기능만을 뽑아서...
export default {
  [Constant.FETCH_CONTACTS]: (state, payload) => {
    state.contacts = payload.contacts;
  },
  [Constant.FETCH_CONTACT_ONE]: (state, payload) => {
    state.contact = payload.contact;
  },
  [Constant.INITIALIZE_CONTACT_ONE]: (state) => {
    state.contact = {
      no: '',
      name: '',
      tel: '',
      address: '',
      photo: '',
    };
  },
  [Constant.CHANGE_ISLOADING]: (state, payload) => {
    state.isLoading = payload.isLoading;
  }
};
