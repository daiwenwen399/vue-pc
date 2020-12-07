import { v4 as uuidv4 } from 'uuid'

export default function getUserTempId() {
    // 先读取本地localStorage数据，看是否有userTempId
    let userTempId = localStorage.getItem('userTempId')

    if (userTempId) {
        // 如果有，直接使用
        return userTempId
    }
    // 如果没有，需要创建userTempId，同时保存在localStorage中
    userTempId = uuidv4()
    localStorage.setItem('userTempId', userTempId)
    return userTempId
}