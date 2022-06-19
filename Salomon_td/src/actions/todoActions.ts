import * as types from './actionTypes';
import { Alert } from 'react-native';
import firebase, {firebaseRef} from '../firebase';


export function fetchTodos(uid: any) {
  return (dispatch: (arg0: { type: string; payload: any; }) => void, getState: any) => {
    const todosRef = firebaseRef.child(`todos/${uid}`);

    return todosRef.once('value').then((snapshot: { val: () => {}; }) => {
      const todos = snapshot.val() || {};

      Object.keys(todos).map(todoId => {
        const parsedTodos = {
          id: todoId,
          ...todos[todoId]
        };

        dispatch(addTodo(parsedTodos));
      });
    });
  };
}

export function startAddTodo(text: any) {
  return (dispatch: (arg0: { type: string; payload: any; }) => void, getState: any) => {
    const UID = firebase.auth().currentUser.uid;
    const todo = {
      text,
      isDone: false,
      isStarred: false
    };
    const todoRef = firebaseRef.child(`todos/${UID}`).push(todo);

    dispatch(addTodo({
      id: todoRef.key,
      ...todo
    }));

    todoRef.then((snapshot: any) => {
      return;
    }, (error: { message: any; }) => {
      Alert.alert(JSON.stringify(error.message));
    });
  };
}

export function startUpdateTodo(id: any, key: string | number, value: any) {
  return (dispatch: (arg0: { type: string; id: any; payload: any; }) => void, getState: any) => {
    const UID = firebase.auth().currentUser.uid;
    const todoRef = firebaseRef.child(`todos/${UID}/${id}`);
    let updates = {};
    updates[key] = value;

    dispatch(updateTodo(id, updates));

    todoRef.update(updates).then((snapshot: any) => {
      return;
    }, (error: { message: any; }) => {
      Alert.alert(JSON.stringify(error.message));
    });
  };
}

export function startRemoveTodo(id: any) {
  return (dispatch: (arg0: { type: string; id: any; }) => void, getState: any) => {
    const UID = firebase.auth().currentUser.uid;
    const todoRef = firebaseRef.child(`todos/${UID}/${id}`);

    dispatch(removeTodo(id));

    todoRef.remove().then((snapshot: any) => {
      return;
    }, (error: { message: any; }) => {
      Alert.alert(JSON.stringify(error.message));
    });
  };
}

export function startSignup(email: any, password: any) {
  return (dispatch: any, getState: any) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  };
}

export function startLogin(email: any, password: any) {
  return (dispatch: any, getState: any) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  };
}

export function startLogout() {
  return (dispatch: any, getState: any) => {
    return firebase.auth().signOut();
  };
}

export function changeEmailLogin(emailLogin: any) {
  return {
    type: types.CHANGE_EMAIL_LOGIN,
    emailLogin
  }
}

export function changeEmailSignup(emailSignup: any) {
  return {
    type: types.CHANGE_EMAIL_SIGNUP,
    emailSignup
  }
}

export function changePasswordLogin(passwordLogin: any) {
  return {
    type: types.CHANGE_PASSWORD_LOGIN,
    passwordLogin
  }
}

export function changePasswordSignup(passwordSignup: any) {
  return {
    type: types.CHANGE_PASSWORD_SIGNUP,
    passwordSignup
  }
}

export function changeUserData(payload: any) {
  return {
    type: types.CHANGE_USER_DATA,
    payload
  }
}

export function changeCondition(payload: any) {
  return {
    type: types.CHANGE_CONDITION,
    payload
  }
}

export function addTodo(payload: { text: any; isDone: boolean; isStarred: boolean; id: any; }) {
  return {
    type: types.ADD_TODO,
    payload
  };
}

export function updateTodo(id: any, payload: {}) {
  return {
    type: types.UPDATE_TODO,
    id,
    payload
  };
}

export function deleteAllTodo() {
  return {
    type: types.DELETE_ALL_TODO
  }
}

export function toggleStarTodo(id: any) {
  return {
    type: types.TOGGLE_STAR_TODO,
    id
  };
}

export function toggleEditTodo(id: any) {
  return {
    type: types.TOGGLE_EDIT_TODO,
    id
  }
}

export function editTodo(id: any, text: any) {
  return {
    type: types.EDIT_TODO,
    id,
    text
  };
}

export function removeTodo(id: any) {
  return {
    type: types.REMOVE_TODO,
    id
  };
}

export function setVisibilityFilter(filter: any) {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter
  };
}
