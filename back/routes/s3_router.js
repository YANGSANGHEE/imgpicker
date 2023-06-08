let express = require('express');
let router = express.router;
const s3Controller = require('../controller/s3_controller');
const {upload} = require('../services/multer');

router.post(
  '/uploadProfileImg',
  upload.single('ticketImg'),
  s3Controller.upLoadProfileImgToDb,
);

module.exports = router;
