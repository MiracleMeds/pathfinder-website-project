import {strike, aid, crawl, delay} from "/scripts/mockDatabase.js";
/*
----------------------
In The Future:
make a translator for the "traits" section so you only need to write "Manipulate, Earth," int the mock database. with toLowercase() as well?
make a function that reads text on the functions and inserts links if they are key words (ex: Requrements: You are !PRONE!)
-----------------------

A list of the functions in here for use:
  -actionTranslator(actionCost, type) -> Changes the actionCost number val to a url/img inject.
  -containerConstructor(title, cost, requirements, traits, description) -> Makes an action container
  -navbarConstructor(title) -> functions similarly to container constructor but used to make the navbar links.
  -containerDemander(arr) -> runs navconst. and contconst. as many times as there are elements in the array. Required -
                            since $(#replaceme).html() doesn't like to be run multiple times on the same element.
  -actionSorter(type) -> is supposed to sort the array depending on what constructor you choose, but it doesn't work
  -Comparator(a,b) -> sorting instructions used for actionSorter(). doesn't work I think.
*/

//This page will only run when the rest of the document loads.
$(document).ready(function(){

    //all actions on the page are listed here
    //PULLS FROM mockDatabase.js
    let actions = [aid, crawl, delay, strike];

    //Not working, under construction!
    function Comparator(a, b) {
        if (a[1] < b[1]) return -1;
        if (a[1] > b[1]) return 1;
        return 0;
      }

      //UNDER CONSTRUCTION
    function actionSorter (type){
        switch (type){
            case "ascend":
                actions = actions.sort(Comparator);
                break;
            case "decend":
                actions.sort();
                actions.reverse();
            default:
                actions.sort();
                throw "You have not listed a proper constructor input when calling actionSorter.\n actionSorter may take \"ascend\", \"decend\", and in the future, more filters.";
        }
    }
    function actionTranslator (actionCost, type){
        let png;

        if (type == null){
            throw "You forgot to fill in one of your constructors when calling actionTranslator().\nType can equal \"inject\" or \"url\"";
        }

        if(type == "inject"){
        switch (actionCost){
            case 0:
                png = "<img class=\"actionIcon\" src=\"../public/img/freeaction.png\">";
                break;
            case 1:
                png = "<img class=\"actionIcon\" src=\"../public/img/1action.png\">";
                break;
            case 2:
                png = "<img class=\"actionIcon\" src=\"../public/img/2action.png\">";
                break;
            case 3:
                png = "<img class=\"actionIcon\" src=\"../public/img/3action.png\">";
                break;
            case 4:
                png = "<img class=\"actionIcon\" src=\"../public/img/reaction.png\">";
                break;
            default:
                    png = "../public/img/placeholder.png";
        }
        return png;
        }else{
            switch (actionCost){
                case 0:
                    png = "../public/img/freeaction.png";
                    break;
                case 1:
                    png = "../public/img/1action.png";
                    break;
                case 2:
                    png = "../public/img/2action.png";
                    break;
                case 3:
                    png = "../public/img/3action.png";
                    break;
                case 4:
                    png = "../public/img/reaction.png";
                    break;
                default:
                    png = "../public/img/placeholder.png";
            }
            return png;
        }

    }

    function containerConstructor (title, cost, trigger, requirements, traits, description, subtext){
        let finalProduct = "<li id = \""+ title +"\" class = \"container\">\n";
        let num1 = Number(cost);
        cost = actionTranslator(num1, "inject");
        //I broke it up cause damn, it's hard enough to read already.
        finalProduct += "<!--Title--> \n <div class = \"titleLine\">\n";
        finalProduct += "<h2>"+ title +"</h2>\n"+ cost +"\n</div>";
        finalProduct += "<div class=\"line\"></div>\n <!--Attributes-->\n<div class= \"actionAttributes\">\n <h4>\n";
        if (trigger != "" && trigger != " "){
            finalProduct += "<b>Trigger: </b>" + trigger + "\n<br>\n";
        }
        if (requirements != "" && requirements != " "){
        finalProduct += "<b>Requirements: </b>" + requirements +"\n<br>\n";
        }
        if (traits != "" && traits != " " && traits != "none"){
            finalProduct += "<b>Tags: </b>" + traits +"\n";
        }
        finalProduct += "</h4>\n</div>\n";
        finalProduct += "<div class=\"line\"></div>\n<!--Description-->\n";
        finalProduct += "<p>\n" +description+ "\n</p>\n<!--At Higher Levels:-->\n";
        finalProduct += "<p class = \"actionSubtext\">"+ subtext +"</p>";
        finalProduct += "</li>\n";

        return finalProduct;
        //#stuffgoeshere exists after writing, but multiple calls just overwrite each other
        //return only the var finalProduct and put it in another function to combine-
        //all the blocks into one giant block of code to print out.
    }
    //position is the secret sacuce to make this work properly. Gotta find out how to get that.
    function navbarConstructor(title){
        let navProduct = "";
        navProduct += "<li><a href = \"#"+ title +"\">"+ title +"</a></li>\n";
        return navProduct;
    }
    //Alter me later to allow for toggling n stuff
    //Maybe accept another array that is a bunch of booleans from a "filter" checkbox section.
    function containerDemander (arr){
        let arrLength = arr.length;

        let finalProduct = "";
        let navProduct = "";
        for (let i = 0; i < arrLength; i++){
            console.log(arr[i].title + " printed.");
            finalProduct +=containerConstructor(arr[i].title, arr[i].actionCost, arr[i].trigger, arr[i].requirements, arr[i].traits, arr[i].description, arr[i].subtext);
            navProduct += navbarConstructor(arr[i].title);
        }
        return [$("#stuffgoeshere").html(finalProduct), $("#navbargoeshere").html(navProduct)];
    }

    actionSorter("ascend");
    containerDemander(actions);
    
});