(function(){

'use strict';

angular.module("ShoppingListCheckOff", [])
.controller("ToBuyController", ToBuyController)
.controller("AlreadyBoughtController", AlreadyBoughtController)
.service("ShoppingListCheckOffService", slcoService);

ToBuyController.$inject=["ShoppingListCheckOffService"];
function ToBuyController(ShoppingListCheckOffService) {
    var vmToBuy = this;

    vmToBuy.foods = ShoppingListCheckOffService.foodsToBuy();

    vmToBuy.foodBought = function(boughtIndex) {
        ShoppingListCheckOffService.removeFood(boughtIndex);
    }
    
}


AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var vmBought = this;

    vmBought.foodBought = ShoppingListCheckOffService.getBoughtList();

}

function slcoService() {
    
    var service = this;

    var foods = [];

    var boughtList = [];

    foods = [
        {
            name: "eggs",
            quantity: "2 cartridges"
        },
        {
            name: "beer",
            quantity: "12 packs"
        },
        {
            name: "milk",
            quantity: "4 cardboards"
        },
        {
            name: "sweet pea",
            quantity: "1 bag"
        },
        {
            name: "bread",
            quantity: "3 loaf"
        }
    ];

    service.foodsToBuy = function () {
        return foods;
    };

    service.removeFood = function(foodIndex) {
        boughtList.push(foods[foodIndex]);
        foods.splice(foodIndex,1);
    };

    service.getBoughtList = function() {
        return boughtList;
    };

}


})();


