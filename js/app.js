





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

    function KEvent(name ,date){
        this.name = name;
        this.date = date;
        this.members = [];
    }


    app.init = function(){

        var _this = this;


        return (function(){

            var createEventBtn = document.getElementById('add-event-btn'),
                eventNameElement,
                eventList = document.getElementById('eventList'),
                eventDateElement,
                currentEvent;



            function buildEventElement(event){
                var li = document.createElement("li");
                li.innerText = event.name;
                li.date = event.date;
                li.dataset['eventKey'] = app.events.length-1;
                return li;
            }


            function renderEvent(event){
                var li = buildEventElement(event);
                eventList.appendChild(li);
            }

            function renderEventList(container, eventsCollection){

            }

            function initEventLayer(event){


            }


            function addNewEvent(e){

                if(!eventNameElement){
                    eventNameElement = document.getElementById('exampleInputEmail1');
                }
                if(!eventDateElement){
                    eventDateElement = document.getElementById('exampleInputPassword1');
                }

                var event = {},
                    eventList,
                    li;

                event = new KEvent( eventNameElement.value,  eventDateElement.value);

                this.events.push(event);
                renderEvent(event);
            }

            function changeLayer(layer, beforeLayerChange, afterLayerChange){
                // change layer (class name)
                // run beforeLayerChange
                // run afterLayerChange

                beforeLayerChange();
                // change layer class
                afterLayerChange();
            }

            function buildMemberTable(members){

            }

            document.getElementById('eventList').addEventListener('click',function(e){
                var target = e.target;
                var event = app.events[target.dataset.eventKey];

                changeLayer('event',function(){
                    currentEvent = event;

                    console.log('beforeLayerChange');
                },function(){
                    console.log('afterLayerChange');
                });


            });

            createEventBtn.addEventListener('click',addNewEvent.bind(_this));

            return {}

        })();
    };


    document.addEventListener('DOMContentLoaded',function(){

        app.init();

    });



})();







