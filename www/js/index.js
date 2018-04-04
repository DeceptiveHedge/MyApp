Backendless.initApp("E81ED314-BB9B-EFD8-FF4C-74A2F7CFC800", "B3B57989-569A-3AB0-FF75-5DE0AB3FB300");

// Event Listeners for map screen:
$(document).on("pageshow", "#viewScreen", mapScreen);







$(document).on("pageshow", "#todopage", onPageShow);

$(document).on("click", "#addTaskButton", onAddTask);

var mymap;
var startLocation;
var Pointers = [];
var markerGroup; 

// METHOD: Handles actions on the map screen:
function mapScreen() {

    createMap();
    markerGroup = L.layerGroup().addTo(mymap);
    addPointer();
    saveMap();
    loadMap();   
}

//-------------MAP CREATION-------------------//
function createMap() {
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

//---------ADD POINTER--------------------------------//
function addPointer() {
    var IconValue;
    var ColorValue;
    
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
                createPointer(IconName, e.latlng, $("#PanelImage").attr('src'));
                MarkerPlaced = true;
            }
        });
        
        return;
    });
    
     // EVENT HANDLER: closes panel when button is clicked
    $('#ClosePanel').on("click", function () {
        console.log("panel closed");
        $("#PointerPanel").panel("close");
    });
}

//---------------CREATE POINTER-----------------------//
function createPointer(Name, Loc, Image)
{
    console.log(Loc);
    var nIcon = L.icon({iconUrl: Image, iconSize: [38, 38], iconAnchor: [12, 12]});
                
                var nPopup = L.popup()
                    .setContent("<table><tr><td><b>" + Name + "</b></td></tr><tr><td><button id='IconDirections'>Directions</button></td><td><button id='DeletePopup'>Delete</button></td></tr></table>");
    
                var nMarker = L.marker(Loc, {icon: nIcon}).addTo(markerGroup).bindPopup(nPopup);
                
                var pointerDetail = {
                    "IconUrl": Image,
                    "IconName": Name,
                    "Location": Loc
                };
                
                var nPointer = JSON.stringify(pointerDetail);
                
                Pointers.push(nPointer);
                
                return;
}

//---------------SAVE MAP------------------------------//
function saveMap() {
    // EVENT HANDLER saves map when "Save Map" button is clicked:
    $('#SaveMap').on("click", function () {
        console.log("detect this");
        $("#SavePanel").panel("open");
        console.log("There are " + window.localStorage.length + " items.");
        console.log(Pointers);
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
                "Pointers": Pointers
            };
            
            var nMap = JSON.stringify(MapDetail);
            console.log(nMap);
            
            var nKey = "Map" + window.localStorage.length;
        
            window.localStorage.setItem(nKey, nMap);
            
            document.getElementById('MapHeading').innerHTML = MapName;
            
            $("#SavePanel").panel("close");
            
            alert("Map Saved");
        }
        else
        {
           alert("Please name your map."); 
        }
    });
    
    $('#CloseSave').on("click", function () {
        $("#SavePanel").panel("close");
    });
}

//--------------LOAD MAP-------------------------//
function loadMap() {
    var Maplist = document.getElementById("MapList");
    
    $('#LoadMap').on("click", function () {
        $("#LoadPanel").panel("open");
        
        // CLEAR all current options from list
        for (var i = Maplist.options.length - 1; i >=0; i--)
        {
            Maplist.remove(i);
        }
        
        // ADD options for each saved map
        for (var i=1; (i+1)<=window.localStorage.length; i++)
        {
            var getName = window.localStorage.getItem("Map" + i);
        
            var mapJSON = JSON.parse(getName);
            
            var o = document.createElement("option");
            o.text = mapJSON.Name;
            Maplist.add(o);   
        }
    });
    
    $('#LoadPanelMap').on("click", function () {
        for (var i=1; (i+1)<=window.localStorage.length; i++)
        {
            var MapString = window.localStorage.getItem("Map" + i);
            var mapJSON = JSON.parse(MapString);
            var mapName = mapJSON.Name;
            var listName = $("#MapList").val();
            
            if (mapName == listName)
            {
                var latitude = mapJSON.Latitude;
                var longitude = mapJSON.Longitude;
                var pointersJSON = mapJSON.Pointers;
                console.log(pointersJSON);
                document.getElementById('MapHeading').innerHTML = mapName; 
                
                // CLEAR existing pointers on map and array:
                Pointers = [];
                markerGroup.clearLayers();
                
                
                // LOAD all pointers onto map:
                for (var i = 0; i < pointersJSON.length; i++)
                {
                    var pJSON = JSON.parse(pointersJSON[i]);
                    var pName = pJSON.IconName;
                    var pLoc = pJSON.Location;
                    var pImage = pJSON.IconUrl;
                    
                    createPointer(pName, pLoc, pImage);
                }
            }
               
        }
        
        $("#LoadPanel").panel("close");
    });
    
    $('#CloseLoad').on("click", function () {
        $("#LoadPanel").panel("close");
    });
    
    $('#DeleteAll').on("click", function () {
        window.localStorage.clear();
    });
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

