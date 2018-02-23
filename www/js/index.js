Backendless.initApp("E81ED314-BB9B-EFD8-FF4C-74A2F7CFC800", "B3B57989-569A-3AB0-FF75-5DE0AB3FB300");

$(document).on("pageshow", "#viewScreen", mapScreen);

$(document).on("pageshow", "#todopage", onPageShow);

$(document).on("click", "#addTaskButton", onAddTask);

function mapScreen() {
    console.log("mapscreen");
    
    
    
    var mymap = L.map('map').setView([51.505, -0.09], 13);
    
   /* L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);*/
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mymap);
}

function onPageShow() {
     console.log("page shown");
    Backendless.Data.of("Task").find().then(processResults).catch(error);
    
}

function onAddTask() {
    console.log("add task button clicked");
    
    var tasktext = $('#TaskText').val();
    
    console.log(tasktext);
    
    var newTask = {};
    newTask.Task = tasktext;
    
    Backendless.Data.of("Task").save(newTask).then(saved).catch(error);
    Backendless.Data.of("Task").find().then(processResults).catch(error);
}

function processResults(tasks) {
    
    console.log("processResults");
    var taskSelect = $("#TaskSelect");
    
    // display the first task in an array of tasks.
    alert(tasks[0].Task);
    alert(tasks[1].Task);
    
    // wipe the list and select menu clean
    $('#taskList').empty();
    taskSelect.empty();
    
    // add each tasks to list and select menu
    for (var i = 0; i < tasks.length; i++) {
        $('#taskList').append("<li>"+tasks[i].Task+"</li");
        
        taskSelect.append("<option value='" + tasks[i]+ "'>" + tasks[i] + "</option>");
    }
    
    // refresh the listview
    $('#taskList').listview('refresh');
    
    
}

function saved(savedTask) {
    console.log( "new Contact instance has been saved" + savedTask);
}

function error(err) {
    alert(err);
}

