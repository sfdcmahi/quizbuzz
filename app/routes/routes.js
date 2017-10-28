module.exports = function (app){

  app.use('*',function(req,res){
    res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
  });
};
