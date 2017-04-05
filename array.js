  Array.prototype.forEach = function(fun, thisArg) {
      var T, k;
      var O = Object(this);
      var len = O.length;
      if (arguments.length > 1) {
          T = arguments[1];
      }
      k = 0;
      while (k < len) {
          var kValue;
          if (k in O) {
              kValue = O[k];
              fun.call(T, kValue, k, O);
          }
          k++;
      }
  };

  Array.prototype.every = function(fun, thisArg) {
      var T, k;
      var O = Object(this);
      var len = O.length;
      if (arguments.length > 1) {
          T = thisArg;
      }
      k = 0;
      while (k < len) {
          var kValue;
          if (k in O) {
              kValue = O[k];
              var testResult = callbackfn.call(T, kValue, k, O);
          }
          k++;
      }
  };

  Array.prototype.map = function(fun, thisArg) {
      var T, A, k;
      var O = Object(this);
      var len = O.length;
      if (arguments.length > 1) {
          T = arguments[1];
      }
      A = new Array(len);
      k = 0;
      while (k < len) {
          var kValue, mappedValue;
          if (k in O) {
              kValue = O[k];
              mappedValue = fun.call(T, kValue, k, O);
              A[k] = mappedValue;
          }
          k++;
      }
      return A;
  }

  module.exports = call;
