exports.upLoadProfileImgToDb = async (req, res) => {
  try {
    console.log('req.file.location:', req.file.location);
    res.send(req.file.location);
  } catch (error) {
    console.log('Enter error:', error);
  }
};
