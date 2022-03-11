// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public ( non si usa un token)
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success:true, msg: 'Show all bootcamps'});
}

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public ( non si usa un token)
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ success:true, msg: `Get bootcamp ${req.params.id}`});
}

// @desc    Create NEW bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private ( Bisogna fare un login -> usare un token)
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({ success:true, msg: 'Create new bootcamp'});
}

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private ( Bisogna fare un login -> usare un token)
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ success:true, msg: `Update bootcamp ${req.params.id}`});
}

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private ( Bisogna fare un login -> usare un token)
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success:true, msg: `Delete bootcamp ${req.params.id}`});
}