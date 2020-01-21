module.exports = function(){
    var arg = Array.prototype.slice.call(arguments,0);
    arg.pop();
    return (arg[0] == arg[1])
        ? 'true'
        : 'false'
  };