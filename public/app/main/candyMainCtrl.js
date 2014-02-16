angular.module('candyApp').controller('candyMainCtrl', function($scope){
    $scope.candy = [
    {name:'KitKat',featured:true,dateAdded:new Date('2/16/2014')},
    {name:'Skittles',featured:false,dateAdded:new Date('2/16/2014')},
    {name:'Toblerone',featured:true,dateAdded:new Date('2/16/2014')},
    {name:'Ferrero Rocher',featured:true,dateAdded:new Date('2/16/2014')},
    {name:'Jolly Rancher',featured:false,dateAdded:new Date('2/16/2014')},
    {name:'M&Ms',featured:true,dateAdded:new Date('2/16/2014')},
    {name:'Gobstoppers',featured:true,dateAdded:new Date('2/16/2014')},
    {name:'Gummy Bears',featured:true,dateAdded:new Date('2/16/2014')},
    {name:'Snickers',featured:false,dateAdded:new Date('2/16/2014')},
    {name:'Hershey\'s Kisses',featured:false,dateAdded:new Date('2/16/2014')},
    {name:'Reese\'s Peanut Butter Cups',featured:true,dateAdded:new Date('2/16/2014')},
    {name:'Meiji',featured:true,dateAdded:new Date('2/16/2014')},
    ]; 
});