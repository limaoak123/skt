var sqlMap = {
    user:{
        onlyUser:'select * from user1 where username = ?',
        add:'insert into user1(username,password) values (?,?)',
    }
}
module.exports = sqlMap;