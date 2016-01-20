
//------ Add new event button ------

function addNewItem(list, eventItem) {

    var date = new Date();
    var id = "" + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();

    var listItem = document.createElement("li");
    listItem.id = "li_" + id;
    listItem.text = eventItem.text;
    listItem.date = eventItem.date;
    listItem.addEventListener('click', function(e){
        displayEvent(listItem);
    });



    /*var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = "cb_" + id;
    checkBox.onclick = upDateItemStatus;*/

    var span = document.createElement("span");
    span.id = "item_" + id;
    span.innerText = eventItem.text;


    /*listItem.appendChild(checkBox);*/
    listItem.appendChild(span);

    list.appendChild(listItem);

}

//------ Event Param ------

function displayEvent(eventItem){
    var name = eventItem.text;
    var date = eventItem.date;
    var id = eventItem.id;

    /*console.log(name + " " + date + " " + id);*/

}

//------  ***  ------

var btnNew = document.getElementById("btnAdd");

btnNew.onclick = function(){
    var eventItem = {};
    eventItem["text"] = exampleInputEmail1.value;
    eventItem["date"] = exampleInputPassword1.value;

    if(!eventItem.text || eventItem.text == "" || eventItem.text == " " || eventItem.date == "") {
        return false;
    }

    var eventListElement;
    if(typeof eventListElement == 'undefined'){
        eventListElement = document.getElementById("eventList");
    }
    eventListElement.addEventListener('click',function(e){
        var target = e.target;
        array = [li,li];
array.indexOf(target);

    });

    addNewItem(eventListElement, eventItem);
};


//------ eventList LocalStorage ------

var data = JSON.parse(localStorage.getItem("eventList"));
localStorage.setItem("eventList", JSON.stringify(data));
