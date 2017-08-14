var APITestBench = (function(){
	var module = {}
		module.testModule1 = function(name ) {
		  this.questionFunction = function() {
			console.log("Do I have any idea how to use modules?");
		  }//closes function 
		  this.question = "Do I have any idea how to use modules?"
		  this.answer = "Yes I do.";	//not yet... but soon
			//return module;
		  return this.question;	
		  return this.answer;
		}//closes module 


		module.testModule2 = function(name ) {
			this.qAndA = function() {
				testModule1.questionFunction();
				testModule1.answer
			}//closes function 
		}//closes module 
		return this.qAndA;
	}//closes module 


/*
module.testModule3 = function(name ) {
    this.qAndA = function() {
    	testModule1.question; //the difference between modules is this is a property instead of a method as above
		testModule1.answer;
	}//closes function 
}//closes module  
*/

	return module

})()

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

var tM = new APITestBench.testModule2
console.log(tM.qAndA);

/*
var tM = new APITestBench.testModule3
console.log(tM.qAndA);
*/
