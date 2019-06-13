import axios from 'axios'
import store from '../store'

var baseUrl = "http://localhost:2333/"
var baseApi = "http://localhost:2333/api/"

// login
const UserLogin = function(data) {
    return axios.post(baseUrl + "login", {
        username: data.username,
        password: data.pass
    })
}

// register
const UserRegister = function(data) {
    return axios.post(baseUrl + "register", {
        username: data.username,
        password: data.pass,
        email: data.email
    })
}

// aboutMe
const AboutMe = function() {
    return axios.get(baseUrl + "aboutMe")
}

// articles
const GetHomeArticles = function() {
    return axios.get(baseUrl + "articles")
}

// get article
const GetArticle = function(id) {
    return axios.get(baseUrl + "articles/" + id)
}

// like or collect
const GetLCArticles = function(r) {
    r.toLowerCase()
    if (r == '/like') {

    } else if (r == '/collect') {

    }
    return axios.get(baseUrl + "articles")
}

// userInfo
const GetUserInfo = function(data) {
    return axios({
        method: "GET",
        url: baseApi + "users/" + data.userId,
        headers: {
            "Authorization": "Bearer " + data.userToken
        }
    })
}

// upload avatar
const UploadAvatar = function(data) {
    return axios({
        method: "POST",
        url: baseApi + "uploadAvatar",
        headers: {
            'Content-Type':'multipart/form-data',
            "Authorization": "Bearer " + store.state.userInfo.userToken
        },
        data: data
    })
}

// update user info
const UpdateUser = function(data) {
    return axios({
        method: "PATCH",
        url: baseApi + "users/" + data._id,
        headers : {
            "Authorization": "Bearer " + store.state.userInfo.userToken
        },
        data: {
            username: data.username
        }
    })
}

// get users
const GetUsers = function() {
    return axios({
        method: "GET",
        url: baseApi + "users",
        headers: {
            "Authorization": "Bearer " + store.state.userInfo.userToken
        }
    })
}

// delete user
const DeleteUser = function(id) {
    return axios({
        method: "DELETE",
        url: baseApi + "users/" + id,
        headers: {
            "Authorization": "Bearer " + store.state.userInfo.userToken
        }
    })
}

// get all classes
const GetClasses = function() {
    return axios({
        method: "GET",
        url: baseUrl + "classes"
    })
}

// get first classes
const GetFirstClass = function() {
    return axios({
        method: "GET",
        url: baseUrl + "/classes/first"
    })
}

// get second classes
const GetSecondClass = function(id) {
    return axios.get(baseUrl + "/classes/second" + id)
}

// new first class
const NewFirstClass = function(name) {
    return axios({
        method: "POST",
        url: baseApi + "classes/first",
        headers: {
            "Authorization": "Bearer " + store.state.userInfo.userToken
        },
        data: {
            name: name
        }
    })
}

// new second class
const NewSecondClass = function(name, father) {
    return axios({
        method: "POST",
        url: baseApi + "classes/second",
        headers: {
            "Authorization": "Bearer " + store.state.userInfo.userToken
        },
        data: {
            name: name,
            father: father
        }
    })
}

// delete class
const DeleteClass = function(id) {
    return axios({
        method: "DELETE",
        url: baseApi + "classes/" + id,
        headers: {
            "Authorization": "Bearer " + store.state.userInfo.userToken
        }
    })
}

export {
    UserLogin,
    UserRegister,
    AboutMe,
    GetHomeArticles,
    GetArticle,
    GetLCArticles,
    GetUserInfo,
    UploadAvatar,
    UpdateUser,
    GetUsers,
    DeleteUser,
    GetClasses,
    GetFirstClass,
    GetSecondClass,
    NewFirstClass,
    NewSecondClass,
    DeleteClass
}
