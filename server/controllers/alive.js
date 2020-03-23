const alive = (req, res) => {
    res.status(200).json({
       message: 'API is alive'
    });
};

export default alive;
