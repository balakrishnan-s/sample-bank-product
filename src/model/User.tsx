export class User {
    constructor(
      public id :  number, 
      public username :  string, 
      public email :  string, 
      public firstName :  string, 
      public lastName :  string,
      public gender :  string, 
      public image :  string, 
      public token :  string,
      ){
      this.id = id; 
      this.username =  username;
      this.email =  email;
      this.firstName =  firstName;
      this.lastName =  lastName;
      this.gender =  gender;
      this.image =  image;
      this.token =  token; 
    }
  };
 