/**
 * id int
 * name varchar20 皮肤名
 * quality varchar20 品质 史诗/传说/限定
 * price varchar20 价格
 * old_price  varchar20 老价格
 * url varchar255 存放路径
 * sale int 已售
 * 功能:1.增加皮肤
 *      2.删除皮肤
 *
 */
const bodyParser = require("body-parser");
const multiparty = require("multiparty");
const express = require("express");
const pool = require("../pool");
const fs = require("fs");
const { resourceLimits } = require("worker_threads");
const skinbase = express.Router();

skinbase.post("/sub", (req, res) => {
  var a = req.body;
  pool.query(
    "insert into skinbase values(null,?,?,?,?,?,?)",
    [a.name, a.quality, a.price, a.old_price, a.url, a.sale],
    (err, result) => {
      if (err) throw err;
    }
  );
});

skinbase.post("/req_skinbase", (req, res) => {
  pool.query("select * from skinbase", (err, result) => {
    res.send(result);
  });
});

skinbase.post("/dele", (req, res) => {
  pool.query("delete from skinbase where id=?", req.body.id, (err) => {
    if (err) throw err;
  });
});

skinbase.post("/alt", (req, res) => {
  pool.query(
    "update skinbase set price=? old_price=? where id=?",
    [req.body.price, req.body.odl_price, req.body.id],
    (err) => {}
  );
});

skinbase.post("/disct", (req, res) => {
  var a = req.body;

  pool.query("select count(1) from  flashsale", (err, result) => {
    var b = JSON.stringify(result);
    var c = b.split(":")[1].split("}")[0];
    if (c < 4) {
      pool.query(
        "insert into flashsale values(null,?,?,?,?,?,?)",
        [a.name, a.quality, a.price, a.old_price, a.url, a.sale],
        (err) => {}
      );
    } else if ((c = 4)) {
      pool.query(
        "delete from flashsale where id=(select id from flashsale order by id limit 1)",
        (err) => {}
      );
      pool.query(
        "insert into flashsale values(null,?,?,?,?,?,?)",
        [a.name, a.quality, a.price, a.old_price, a.url, a.sale],
        (err) => {}
      );
    }
  });
});

skinbase.get("/gethsale", (req, res) => {
  pool.query(
    " select * from skinbase order by sale desc limit 7",
    (err, result) => {
      var a = JSON.parse(JSON.stringify(result));
      // console.log(a)
      res.send(a);
    }
  );
});
skinbase.get("/getfarr", (req, res) => {
  pool.query(" select * from flashsale", (err, result) => {
    res.send(result);
  });
});
skinbase.get("/getnarr", (req, res) => {
  pool.query(
    " select * from skinbase order by id desc limit 6",
    (err, result) => {
      var a = JSON.parse(JSON.stringify(result));
      res.send(a);
    }
  );
});

skinbase.get("/hsbuynow", (req, res) => {
  console.log(req.query.name);
  pool.query(
    "update skinbase set sale=sale+1 where name=?",
    req.query.name,
    (err) => {
      if (err) throw err;
    }
  );
});

skinbase.get("/nbbuynow", (req, res) => {
  pool.query(
    "update skinbase set sale=sale+1 where id=?",
    req.query.id,
    (err) => {
      if (err) throw err;
    }
  );
});

skinbase.get("/search_result", (req, response) => {
  var a = req.query.search;
  skinbase.get("/posearch", (req2, res2) => {
    res2.send(a);
  });
});

module.exports = skinbase;
