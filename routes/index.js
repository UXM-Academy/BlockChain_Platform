var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("main", { title: "main" });
});

router.get("/progressLayout", function (req, res, next) {
  res.render("progress/progressLayout", { title: "progressLayout" });
});

router.get("/register", function (req, res, next) {
  res.render("register", { title: "register", seller: {} });
});

router.get("/login", function (req, res, next) {
  res.render("login", { title: req.query.title });
});

router.get("/join", function (req, res, next) {
  res.render("join", { title: req.query.title });
});

router.get("/store", function (req, res, next) {
  res.render("store");
});

router.get("/category", function (req, res, next) {
  res.render("category", { title: req.query.title });
});

router.get("/registerService", function (req, res, next) {
  res.render("registerService");
});

router.get("/serviceInfo", function (req, res, next) {
  res.render("serviceInfo");
});

router.get("/serviceInfoEditor", function (req, res, next) {
  res.render("serviceInfoEditor");
});

router.get("/completeTransaction", function (req, res, next) {
  res.render("completeTransaction");
});

//node 기반 ipfs 파일 다운
var bufferImage = require('buffer-image')
var IPFS = require('ipfs-core')
var fs = require('fs')

router.get('/jpgdownload/:ID',function(req,res){
  async function run(){
    try{
      const ipfs = await IPFS.create()

      const chunks=[]
      for await (const chunk of ipfs.cat('/ipfs/'+req.params.ID)){
          chunks.push(chunk)
          }

      const image = await bufferImage(chunks[0])
      const result = await bufferImage.from(image)
  
      fs.writeFile(`${req.params.ID}.jpg`, result, (err)=>{
          if(err){console.log(err)}
      })

      ipfs.stop()
      }

      catch(err){console.log(err)}
  }
  run()
  console.log('download finish')
})



module.exports = router;
