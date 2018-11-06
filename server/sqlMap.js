var sqlMap = {
    user:{
        onlyUser:'select * from user where username = ?',
        add:'insert into user(username,password) values (?,?)',
    }
}
module.exports = sqlMap;