Backendless.initApp("E81ED314-BB9B-EFD8-FF4C-74A2F7CFC800", "B3B57989-569A-3AB0-FF75-5DE0AB3FB300");

// Event Listeners for map screen:
$(document).on("pageshow", "#viewScreen", mapScreen);







$(document).on("pageshow", "#todopage", onPageShow);

$(document).on("click", "#addTaskButton", onAddTask);

var mymap;
var startLocation;
var Pointers = [];

// METHOD: Handles actions on the map screen:
function mapScreen() {
    console.log("mapscreen");
    var IconValue;
    var ColorValue;
    
//---------ADD POINTER-----------------------//
    
    // EVENT HANDLER: opens panel when Add Pointer button is clicked
    $('#AddPoint').on("click", function () {
        $("#PointerPanel").panel("open");
    });
    
    // EVENT HANDLER: Updates image properties when ICON drop down list changes selected value
    $('#IconList').change(function () { 
        console.log("icon changed");
        IconValue = $('#IconList').val();
        console.log(IconValue);
        ColorValue = $('#ColorList').val();
        $("#PanelImage").attr('src', 'images/icons/' + IconValue + '/' + ColorValue + '%20' + IconValue + '.png');
    });
    
    // EVENT HANDLER: Updates image properties when COLOR drop down list changes selected value
    $('#ColorList').change(function () {
        console.log("color changed");
        IconValue = $('#IconList').val();
        console.log(IconValue);
        ColorValue = $('#ColorList').val();
        $("#PanelImage").attr('src', 'images/icons/' + IconValue + '/' + ColorValue + '%20' + IconValue + '.png');
    })
    
    // EVENT HANDLER: Creates pointer and allows it to be placed on map
    $('#AddPanelPoint').on("click", function () {
        var IconName = $("#IconNameText").val();
        
        var MarkerPlaced = false;
        console.log("pointer being added");
        $("#PointerPanel").panel("close");
        
        alert("Double Tap on map to add pointer.");
        
        mymap.on('dblclick', function (e) {
            if (MarkerPlaced == false)
            {
                console.log("Double Click on map");
                
                var nIcon = L.icon({iconUrl: $("#PanelImage").attr('src'), iconSize: [38, 38], iconAnchor: [22, 94]});
                
                var nPopup = L.popup()
                    .setContent("<table><tr><td><b>" + IconName + "</b></td></tr><tr><td><button id='IconDirections'>Directions</button></td><td><button id='DeletePopup'>Delete</button></td></tr></table>");
                
                var nMarker = L.marker(e.latlng, {icon: nIcon}).addTo(mymap).bindPopup(nPopup);
                
                MarkerPlaced = true;
                
                var pointerDetail = {
                    "IconUrl": $("#PanelImage").attr('src'),
                    "IconName": IconName,
                    "Latitude": e.latlng.lat,
                    "Longitude": e.latlng.lng
                };
                
                var nPointer = JSON.stringify(pointerDetail);
                
                console.log(nPointer);
                
                Pointers.push(nPointer);
                
                return;
            }
        });
        
        return;
    });
    
     // EVENT HANDLER: closes panel when button is clicked
    $('#ClosePanel').on("click", function () {
        console.log("panel closed");
        $("#PointerPanel").panel("close");
    });
    
//---------------SAVE MAP---------------------//
   
    
    // EVENT HANDLER saves map when "Save Map" button is clicked:
    $('#SaveMap').on("click", function () {
        console.log("detect this");
        $("#SavePanel").panel("open");
    });
    
    $('#SavePanelMap').on("click", function () {
        var MapName = $('#MapNameText').val();
        var Location = startLocation;
        
        
        if (MapName != "")
        {
            var MapDetail = {
                "Name": MapName,
                "Latitude": Location.lat,
                "Longitude": Location.lng,
                "Pointers": Pointers.toString()
            }
            
            var nMap = JSON.stringify(MapDetail);
            console.log(nMap);
            window.localStorage.setItem("Map1", nMap);
        }
        else
        {
           alert("Please name your map."); 
        }
    });
    
    $('#CloseSave').on("click", function () {
        $("#SavePanel").panel("close");
    });
    
//-------------MAP CREATION-------------------//
    
    mymap = L.map('map').setView([51.505, -0.09], 13);
    
    mymap.locate({setView: true, maxZoom: 16});
    
    var marker = L.marker([51.5, -0.09]).addTo(mymap);
    
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
    
    var circle = L.circle([51.508, -0.11], {
        color: 'blue',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(mymap);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZGVjZXB0aXZlaGVkZ2UiLCJhIjoiY2plZTZ5ajRmMTM3NTJ4bzlzNGQwdGtlYyJ9.Ehp7SAyfmfmA9RvFrw_Upg', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZGVjZXB0aXZlaGVkZ2UiLCJhIjoiY2plZTZ5ajRmMTM3NTJ4bzlzNGQwdGtlYyJ9.Ehp7SAyfmfmA9RvFrw_Upg'
}).addTo(mymap);
    
    mymap.on('locationfound', onLocationFound);
    mymap.on('locationerror', onLocationError);
}


function onLocationFound(e) {
    var radius = e.accuracy / 2;
    startLocation = e.latlng;
    console.log(startLocation);
    
    L.marker(e.latlng).addTo(mymap)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();
    L.circle(e.latlng, radius).addTo(mymap);
}

function onLocationError(e) {
    alert(e.message);
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

