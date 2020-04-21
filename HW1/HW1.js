let array = [];
let list = document.getElementById("UserInput");
let list2=document.getElementById("AlsoUser");

document.getElementById("start").addEventListener("click", function(){
    for (i=0; i<3; i++){
        array[i]= prompt("Please enter a word: ");
        let itemList = document.createElement("li");
        itemList.textContent = array[i];
        list.appendChild(itemList);

    }
    document.getElementById("start").style.display="none";
    document.getElementById("swap").style.display="block";

});

document.getElementById("swap").addEventListener("click", function(){
    document.getElementById("section1").style.display="none";
    document.getElementById("section2").style.display="flex";
    let arraySwap = array.map(SwitchCharacters);

    for (i=0; i<3; i++)
    {
        let itemList = document.createElement("li");
        itemList.textContent=arraySwap[i];
        list2.appendChild(itemList);
    }
});

let SwitchCharacters = function(input){
    let characters = input.split("");
    let FChar = characters[0];
    let LChar = characters[characters.length-1];
    characters[0] = LChar;
    characters[characters.length -1] = FChar;

    return characters.join("");

}