var JS={VERSION:"2.2.1"};JS.Class=function(a){function c(a){for(prop in a){if(prop==="statics"){for(sprop in a.statics){this.constructor[sprop]=a.statics[sprop]}}else{if(typeof this.constructor.prototype[prop]=="function"){var b=this.constructor.prototype[prop];var c=this;delete this.constructor.prototype[prop];(this.constructor.prototype["parent"]=this.constructor.prototype["parent"]||{})[prop]=b;this.constructor.prototype[prop]=a[prop]}else{this.constructor.prototype[prop]=a[prop]}}}}function b(){return function(){if(typeof this["construct"]==="function"&&d===false){this.construct.apply(this,arguments)}}}var d=true;this.constructor=b();d=false;c.call(this,a);this.constructor.extend=function(a){d=true;this.constructor=b();this.constructor.prototype=new(new this).constructor;d=false;c.call(this,a);this.constructor.extend=function(a){var e;var f=this;d=true;this.constructor=b();this.constructor.prototype=new this;if(e!==undefined){this.constructor.prototype["construct"]=e}d=false;c.call(this,a);this.constructor.extend=function(a){return f.extend.apply(this,[a])};return this.constructor};return this.constructor};return this.constructor}