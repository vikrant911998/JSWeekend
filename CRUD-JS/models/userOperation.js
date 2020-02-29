const userOperations = {
  // users:[],
  register(userObject) {
    let promise = firebase
      .database()
      .ref("/CRUD-2020/" + userObject.userid)
      .set(userObject);

    return promise;
  },
  login(userid) {
    let promise = firebase.database().ref("/CRUD-2020/" + userid);
    return promise;
  }
  // login(userObject){
  //     let promise = firebase.database().ref('/CRUD-2020/'+userObject.userid);
  //     return promise;
  // }
};
