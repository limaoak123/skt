var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

// 连接数据库
var con = mysql.createConnection(models.mysql);
con.connect();
var jsonWrite = function(res,ret) {
  if(typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
}

// 增加用户接口
router.post('/addUser',(req,res) => {
  var sql = $sql.user.add;
  var params = req.body;
  console.log(params);
  con.query(sql, [params.phone,params.nickname,params.password],function(err,result){
    if (err) {
      console.log(err);
    } else {
      jsonWrite(res,result);
    }
  })
})

//用户唯一验证
router.get('/onlyUser',(req,res) => {
  var sql = $sql.user.onlyUser;
  var phone = params.phone;
  con.query(sql,[phone],function(err,result){
    if (err) {
      console.log(err);
    } else {
      jsonWrite(res,result);
    }
  })
})
module.exports = router;
