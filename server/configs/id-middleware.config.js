module.exports = {
    checkId = (req, res, next) => !mongoose.Types.ObjectId.isValid(req.params.work_id) ? 
        res.status(500).send({ message: 'Invalid ID' }) : next()  
}