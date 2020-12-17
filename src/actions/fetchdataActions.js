/* eslint-disable prettier/prettier */
import {ToastAndroid, Alert, Platform} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

import {FETCH_DATA_SUCCESS,
    SHOW_DATA_LOADING,
    FETCH_DATA_USER} 
      from './types';
  

export const fetchdataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
};

export const fetchuserSuccess = (data1) => {//console.log('fetchuserSuccess');console.log(data1);
  return {
    type: FETCH_DATA_USER,
    payload: data1,
  };
};

export const showDataLoading = () => {
    return {
      type: SHOW_DATA_LOADING,
    };
  };


// export function fetchdataStatus() {
//  // console.log('fetchdataAction');

//   return function action(dispatch) {
//     const request = axios({
//       method: 'GET',
//       url:
//         'https://jsonplaceholder.typicode.com/posts' ,
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//     });
//     return request.then(
//       (response) => {
//         //console.log(response.data);
//         dispatch(showDataLoading());
//         console.log(response.status);
//         if (response.status === 200) {
//            console.log('success');

//            dispatch(fetchdataSuccess(response.data));
//         } else {
//           dispatch(showDataLoading());
//           if (Platform.OS === 'android') {
//             ToastAndroid.showWithGravityAndOffset(
//               'Oops! Something went wrong.',
//               ToastAndroid.LONG,
//               ToastAndroid.BOTTOM,
//               0,
//               50,
//             );
//           } else {
//             Alert.alert('Error: ' + response.data.message);
//           }
//         }
//       },
//       (error) => {
//         dispatch(showDataLoading());
//         if (Platform.OS === 'android') {
//           ToastAndroid.showWithGravityAndOffset(
//             'Oops! Something went wrong...',
//             ToastAndroid.LONG,
//             ToastAndroid.BOTTOM,
//             0,
//             50,
//           );
//         } else {
//           Alert.alert('Oops! Something went wrong.');
//         }
//       },
//     );
//   };
// }


export function fetchdataStatus() {
  // console.log('fetchdataAction');
 
   return function action(dispatch) {

    dispatch(showDataLoading());
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
      //console.log(json);
      dispatch(fetchdataSuccess(json));
      return json;
    })
    .catch((error) => {
      console.error(error);
    });


   };
 }

 
export function fetchUser() {
  //console.log('fetchUser');

  return function action(dispatch) {

   dispatch(showDataLoading());
   return fetch('https://jsonplaceholder.typicode.com/users/1')
   .then((response) => response.json())
   .then((json) => {
     ///console.log(json.name);
     global.userName = json.name;
    AsyncStorage.setItem(
      'KeyUserInfo',
      JSON.stringify(global.userName),
    );

     dispatch(fetchuserSuccess(json));

     return json;
   })
   .catch((error) => {
     console.error(error);
   });


  };
}
 
