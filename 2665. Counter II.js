/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let val=init;
    const original = init
    return{
        increment:function(){
          return ++val;
        },
        decrement:function(){
          return --val;
        },
        reset:function(){
        val=original
          return val;
        }


    }
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
