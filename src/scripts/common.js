//module.exports = 'why';
// let name = 'why1';
// export default name;
var $ = require('./lib/jquery');
//console.log($)
var common = {
  getList :function(){
    $.ajax({
      url:'/api/list',
      success:function(data){
        console.log(data)
      }
    })
  }
}
module.exports = common;
