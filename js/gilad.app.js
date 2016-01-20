





(function(){

    var app = {};
    app.events = [];

    function Member(name, email, id, counter, isArrived){
        this.name = name;
        this.email = email;
        this.id = id;
        this.counter = counter;
        this.isArrived = isArrived;
    }

    function Event(name){
        this.name = name;
        this.members = [];
    }

    app.init = function(){



        return (function(){

            var eventBtn = document.getElementById('add-event-btn'),
                eventNameElement,
                eventDateElement;

            function addNewItem(container, event) {



                var listItem = document.createElement("li");
                listItem.id = "li_" + id;
                listItem.text = event.text;
                listItem.date = event.date;
                listItem.addEventListener('click', function(e){
                    displayEvent(listItem);
                });



                /*var checkBox = document.createElement("input");
                 checkBox.type = "checkbox";
                 checkBox.id = "cb_" + id;
                 checkBox.onclick = upDateItemStatus;*/

                var span = document.createElement("span");
                span.id = "item_" + id;
                span.innerText = event.text;


                /*listItem.appendChild(checkBox);*/
                listItem.appendChild(span);

                list.appendChild(listItem);

            }
            function addNewEvent(e){
                if(!eventNameElement){
                    eventNameElement = document.getElementById('exampleInputEmail1');
                }
                if(!eventNameElement){
                    eventDateElement = document.getElementById('exampleInputPassword1');
                }

                var eventItem = {};
                eventItem["text"] = exampleInputEmail1.value;
                eventItem["date"] = exampleInputPassword1.value;

            }

            eventBtn.addEventListener('click',addNewEvent);



            return {

            }
        })();
    };








    $('#events_button').on('click',function(){

        var name = 'get event name';
        var date = 'get event date';

        var event = new Event(name,date);

        app.events.push(event);
        // google - remove item from array

    });



















    document.addEventListener('onload',function(){
        App();
    });

    $(document).ready(function(){

        init();

    });



})();







