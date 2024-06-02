 export interface UsersResponse {
    message:     string
    data:        User[];
    
}

export interface User {
    id:         number;
    email:      string;
    name:       string;
    lastname:  string;    
}


 
export interface UserResponse {
    data:    User;
    message: String;
}


