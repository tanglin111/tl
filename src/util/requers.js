import axios from 'axios'
import router from "../router/myRouter"

import {
    warningAlert
  } from './alert'


// 添加请求拦截器，在请求头中加token
axios.interceptors.request.use(
    config => {
      if (localStorage.getItem('Authorization')) {
        config.headers.Authorition = localStorage.getItem('Authorization'); 
      }
      return config;
    })


//响应拦截
axios.interceptors.response.use(res => {
    console.group('请求是' + res.config.url);
    console.log(res);
    console.groupEnd();
    if (res.data.status == -14) {
      warningAlert("登录已过期或访问权限受限");
      router.push('/otherLogin');
      return
    }
    return res;
  })

const baseUrl = "/api"
//好课推荐
export const recommended = data => {
    return axios({
        url:  baseUrl+'/course/queryList',
        method: 'post',
        data,
    })
}

//用户的登录
export const userLogin = data => {
    return axios({
        url: baseUrl+'/user/login',
        method: 'post',
        data,
    })
}

//用户的注册
export const userRegister = data => {
    return axios({
        url: baseUrl+'/user/register',
        method: 'post',
        data,
    })
}

//用户的修改密码
export const newPassword = data => {
    return axios({
        url: baseUrl+'/user/newPassword',
        method: 'post',
        data,
        
    })
}

//用户个人信息修改
export const uodate = data => {
    return axios({
        url: baseUrl+'/user/update',
        method: 'post',
        data,
        
    })
}

//全部已读
export const allRead = data => {
    return axios({
        url:baseUrl+'/message/queryRow',
        method:"post",
        data,
       
    })
}

//轮播图
export const banner = data => {
    return axios({
        url:baseUrl+"/banner/queryList",
        method:"post",
        data,
    })
}
//点赞
export const isGood = data => {
    return axios ({
        url:baseUrl+"/course/clickGood",
        method:"post",
        data,
        
    })
}

//用户全部通知接口
export const message = data => {
    return axios ({
        url:baseUrl+"/message/queryList",
        method:"post",
        data,
    })
}

//用户已读接口
export const aleard = data => {
    return axios ({
        url:baseUrl+"/message/queryRow",
        method:"post",
        data,
    })
}

