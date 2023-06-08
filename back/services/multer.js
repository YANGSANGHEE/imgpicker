const multer = require('multer');
const multer3 = require('multer-s3');
const s3 = require('../config/s3_config');

const upload = multer({
  storage: multer3({
    s3: s3,
    bucket: 'shimgserver',
    contentType: multer3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: (req, file, cb) => {
      cb(null, `${file.filename}/${Date.now()}_${file.originalname}`);
    },
  }),
});

exports.upload = multer(upload);
