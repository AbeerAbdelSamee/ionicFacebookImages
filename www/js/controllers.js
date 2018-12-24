angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);

})

.controller('AccountCtrl', function($scope) {

    //   $(function($){
    // alert('here');
    //       $.fn.datepicker.dates['ar'] = {
    //     days: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت", "الأحد"],
    //     daysShort: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت", "أحد"],
    //     daysMin: ["ح", "ن", "ث", "ع", "خ", "ج", "س", "ح"],
    //     months: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
    //     monthsShort: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
    //     today: "هذا اليوم",
    //     rtl: true
    // };
    // });

// $(document).ready(function () {
//  $('.datepicker').datepicker({

//        language: "ar"
//     });
// });

  alert('begin controller');
  $scope.items=[{"id":"1","name":"خواتم","imgurl":"img/f.jpg"},{"id":"2","name":"سلسلة","imgurl":"img/f2.jpg"},{"id":"3","name":"حلق","imgurl":"img/f3.jpg"},{"id":"4","name":"غويشة","imgurl":"img/f4.jpg"},{"id":"5","name":"غويشة","imgurl":"img/f7.jpg"},{"id":"6","name":"غويشة","imgurl":"img/f8.jpg"}];
 
 
 $scope.range = function(max, step) {
    step = step || 1;

    var input = [];
    for (var i = 0; i < max; i += step) {
      input.push(i);
    }
    return input;
  };
  $scope.settings = {
    enableFriends: true
  };
  alert('AccountCtrl');
  $scope.testimg=function()
  {
    alert('test');
    PhotoViewer.show('http://13.92.123.103:5457/api/Student/Sara_Ahmed_Rahmy.png', 'Optional Title');
    
  }
});
