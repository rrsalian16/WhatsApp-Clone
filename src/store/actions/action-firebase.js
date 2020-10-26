import ACTIONS from "../actions-names";

import db, {
    firebase,
  auth,
  provider
} from "../../firebase";

import {
  ActionRouteNavigate
} from "./action-route";

const {FIREBASE_ACTIONS}=ACTIONS


export function ActionSearchUser(name) {
    return (dispatch)=>{
        db.collection("WhatsApp-User").where('name', '>=', name).where('name', '<=',
          name + '\uf8ff').get()
          .then((res) => {
            const user = res.docs.map(doc => doc.data());
            const data={searchedUser:user}
            dispatch({type:FIREBASE_ACTIONS.SEARCHED_USERS, data:data});
          });

    }
}


export function ActionCreateNewChat(user1, user2) {
  return (dispatch) => {
    const docKey = [user1, user2].sort().join(":");
    db.collection('WhatsApp-Chat')
      .doc(docKey).set({
        users: [user1, user2],
        readStatus: false,
        unReadCount: 0,
        typing: false,
        docKey: docKey,
      })
  }
}

export function ActionGetChats(chatid) {
  return (dispatch) => {
    db.collection('WhatsApp-Chat')
      .where('users', 'array-contains', chatid)
      .onSnapshot(async res => {
        const chats = res.docs.map(doc =>{
            dispatch(ActionGetUserDetails(doc.data().users.find(u=>u!==chatid)));
            return doc.data()
        });

        const data = {
          messages: chats
        }
        dispatch({
          type: FIREBASE_ACTIONS.MESSAGES,
          data: data
        })
      })
  }
}

export function ActionGetUserDetails(chatid){
    return (dispatch)=>{
        db.collection("WhatsApp-User").where('uid', '>=', chatid).where('uid', '<=',
            chatid + '\uf8ff').get()
          .then((res) => {
            const user = res.docs.map(doc => doc.data());
            const data = {
              users: user
            }

            dispatch({
              type: FIREBASE_ACTIONS.GET_USER,
              data: data
            });
          });
    }
}

export function ActionSelectedChatIndex(index,uid) {
    return dispatch=>{
        dispatch({
          type: FIREBASE_ACTIONS.CHAT_INDEX,
          data: {
            selectedChatIndex: index,
            selectedChatUid:uid
          }
        })
    }
    
}

export function ActionSendChat(docKey,msg,from) {
  return (dispatch) => {
    db.collection("WhatsApp-Chat")
      .doc(docKey)
      .update({
       messages: firebase.firestore.FieldValue.arrayUnion({
          sender: from,
          msg: msg,
          img: null,
          voice: null,
          refMsg: null,
          time: Date.now(),
        }),
        unReadCount: firebase.firestore.FieldValue.increment(1),
        typing: false,
        readStatus: false,
      });
  };
}