angular.module("components").controller("newQuestionController", function(questionService){

  var vm = this;

  vm.question = {};
  vm.tags = [];
  vm.suggestions = [];
  vm.open = false;

  vm.register = function() {
    questionService.getSuggestions(vm.question, function(response){
      vm.suggestions = response;
      vm.open = true;
    })

  };
});