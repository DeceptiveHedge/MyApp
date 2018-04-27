// Allows the use of backendless:
Backendless.serverURL = 'https://api.backendless.com';
Backendless.initApp("067F8686-1D56-3920-FF6F-EFB1C9AFEC00", "64260B74-AC20-579E-FF29-6F2DEEC33300");

// Opens signin page on startup:
window.location.href = "#signIn";

// Event Listener for signIn screen:
$(document).on("pageshow", "#signIn", signInScreen);

// Event Listener for map screen:
$(document).on("pageshow", "#viewScreen", mapScreen);

// Global Variables:
var mymap;
var startLocation;
var Pointers = [];
var markerGroup; 
var control;
var userLocation;
var clicked;
var showLocation = true;

// METHOD: Handles actions on the map screen:
function mapScreen() {

    createMap();
    markerGroup = L.layerGroup().addTo(mymap);
    
    // METHOD: When locate button is clicked toggle between locating user or not:
    $('#Locate').on("click", function() {
        var color = clicked ? 'black' : 'blue';
        var locateUser = clicked ? false : true;
        var view = clicked ? false : true;
        showLocation = clicked ? false : true;
        
        $(this).css('color', color);
        mymap.locate({watch: locateUser, setView: view});
        console.log("Watch is " + locateUser + " and setView is " + view);
        
        clicked = !clicked;
    });
    
    addPointer();
    saveMap();
    loadMap();
    shareMap();
    logOut();
}

// METHOD: creates a route between two points using Leaflet Routing Machine:
function createRoute(lat1, lng1, lat2, lng2) {
    control = L.Routing.control({
        waypoints: [
            L.latLng(lat1, lng1),
            L.latLng(lat2, lng2)
        ], createMarker: function() { return null;}
    }).addTo(mymap);
    
    control.hide();
}

//-------------MAP CREATION-------------------//
// METHOD: creates and initializes the map using Leaflet:
function createMap() {
    
    mymap = L.map('map').setView([51.505, -0.09], 13);
    
    userLocation = L.marker(mymap.getCenter()).addTo(mymap);
    
    startLocation = userLocation.getLatLng();
    
    // GETS accurate user location using googleLoader:
    var glcl = google.loader.ClientLocation;
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZGVjZXB0aXZlaGVkZ2UiLCJhIjoiY2plZTZ5ajRmMTM3NTJ4bzlzNGQwdGtlYyJ9.Ehp7SAyfmfmA9RvFrw_Upg', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZGVjZXB0aXZlaGVkZ2UiLCJhIjoiY2plZTZ5ajRmMTM3NTJ4bzlzNGQwdGtlYyJ9.Ehp7SAyfmfmA9RvFrw_Upg'
}).addTo(mymap);
    
    mymap.on('locationfound', onLocationFound);
             
    if(glcl){
        onLocationFound({latlng: [glcl.latitude, glcl.longitude]});
    }else{alert('google.loader.ClientLocation fails');}  
    
    mymap.locate();
             
    mymap.on('locationerror', onLocationError);
}

//---------ADD POINTER--------------------------------//
// METHOD: Adds a pointer using the customisable options:
function addPointer() {
    var IconValue;
    var ColorValue;
    var CheckValue;
    
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
        
        // EVENT HANDLER: Detects wether checkbox is ticked:
        if($('#CheckBox').is(':checked'))
        {
            CheckValue = true;
        }
        else
        {
            CheckValue = false;
        }
        
        console.log("pointer being added");
        $("#PointerPanel").panel("close");
        
        alert("Double Tap on map to add pointer.");
        
        // EVENT HANDLER: Detects when user double clicks on map:
        mymap.on('dblclick', function (e) {
            if (MarkerPlaced == false)
            {
                console.log("Double Click on map");
                createPointer(IconName, e.latlng, $("#PanelImage").attr('src'), CheckValue);
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

// METHOD: Creates a pointer with a name, location, image and if its a collectable:
function createPointer(Name, Loc, Image, Checked)
{
    var nIcon = L.icon({iconUrl: Image, iconSize: [38, 38], iconAnchor: [12, 12]});
    
    var nPopup;
    
    if (Checked == false)
    {
    
        // CREATE popup content, then SET content to popup:
        var divP = document.createElement("div");
        var namP = document.createElement("p");
        namP.innerHTML = "<b>" + Name + "</b></br>";
    
        var dreP = document.createElement("BUTTON");
        var drtxtP = document.createTextNode("DIRECTIONS");
        dreP.appendChild(drtxtP);
        
        // EVENT HANDLER: when directions button on popup is clicked, toggle between route and no route:
        dreP.onclick = function(){
            if (control == null)
            {
                User = userLocation.getLatLng();
                createRoute(User.lat, User.lng, Loc.lat, Loc.lng);
                dreP.style.color = "blue";  
            }
            else 
            {
                mymap.removeControl(control);
                control = null;
                dreP.style.color = "black";
            }
        
        };
        namP.appendChild(dreP);
    
        var dltP = document.createElement("BUTTON");
        var dtxtP = document.createTextNode("DELETE");
        dltP.appendChild(dtxtP);
        
        // EVENT HANDLER: when delete button is clicked then delete pointer and remove reference to it:
        dltP.onclick = function(){
            console.log(Pointers.length);
            console.log("DELETE WORKING!!!"); 
            markerGroup.removeLayer(nMarker);
        
            for (var i=0; i<Pointers.length; i++)
            {
                dPointer = JSON.parse(Pointers[i]);
                if (Name == dPointer.IconName)
                {
                    Pointers.splice(i,1); 
                }
                console.log(Pointers.length);
            }
        };
        namP.appendChild(dltP);
        divP.appendChild(namP);
        
        nPopup = L.popup()
                    .setContent(divP);
    }
    else
    {
        nPopup = L.popup().setContent(Name);
        var checkMove = true;
        
        // EVENT HANDLER: when user moves check if it is within range of pointer:
        userLocation.on("move", function (e) {
            var userLoc = userLocation.getLatLng();
            
            if((userLoc.lat < Loc.lat + 0.00014) && (userLoc.lat > Loc.lat - 0.00014) && (userLoc.lng < Loc.lng + 0.00014) && (userLoc.lng > Loc.lng - 0.00014))
            {
                markerGroup.removeLayer(nMarker);
        
                for (var i=0; i<Pointers.length; i++)
                {
                    dPointer = JSON.parse(Pointers[i]);
                    if (Name == dPointer.IconName)
                    {
                        Pointers.splice(i,1);
                        checkMove = false;
                        return
                    }
                    console.log(Pointers.length);
                }
            }
        });
    }
    
                
    var nMarker = L.marker(Loc, {icon: nIcon}).addTo(markerGroup).bindPopup(nPopup);
                
    var pointerDetail = {
                    "IconUrl": Image,
                    "IconName": Name,
                    "Location": Loc,
                    "Checked": Checked
                };
                
    var nPointer = JSON.stringify(pointerDetail);
                
    Pointers.push(nPointer);
                
    return;
}

//---------------SAVE MAP------------------------------//
// METHOD: Saves the map with any accompanying pointers to local storage:
function saveMap() {
    
    // EVENT HANDLER loads save panel when "Save Map" button is clicked:
    $('#SaveMap').on("click", function () {
        $("#SavePanel").panel("open");
        console.log("There are " + window.localStorage.length + " items.");
        console.log(Pointers);
    });
    
    // EVENT HANDLER saves map when "Save Map" button (panel) is clicked:
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
    
    // EVENT HANDLER closes save panel when "Close" button is clciked:
    $('#CloseSave').on("click", function () {
        $("#SavePanel").panel("close");
    });
}

//--------------LOAD MAP-------------------------//
//METHOD:loads map from local storage: 
function loadMap() {
   var Maplist = document.getElementById("MapList");
    
    //EVENT HANDLER when Load Map is clicked open load panel and initialize select list:
    $('#LoadMap').on("click", function () {
        $("#LoadPanel").panel("open");
        alert("panel opens");
        
        // CLEAR all current options from list
        for (var i = Maplist.options.length - 1; i >=0; i--)
        {
            alert("clear works");
            Maplist.remove(i);
        }
        
        // ADD options for each saved map
        for (var i=1; (i+1)<=window.localStorage.length; i++)
        {
            alert("this for works");
            var getName = window.localStorage.getItem("Map" + i);
        
            var mapJSON = JSON.parse(getName);
            
            var o = document.createElement("option");
            o.text = mapJSON.Name;
            if ( i == 1)
            {
                o.setAttribute("selected", "selected");
            }
            Maplist.add(o); 
        }
        
        alert("did that all work");
        Maplist.selectedIndex = -1;
        
    });
    
    //EVENT HANDLER: loads map from local storage when "Load Map" (panel) is clicked:
    $('#LoadPanelMap').on("click", function () {
        console.log(window.localStorage.length);
        var Loaded = false;
        
        for (var i=1; (i+1)<=window.localStorage.length; i++)
        {
            if (Loaded == false)
            {
             console.log(window.localStorage.length);
                var MapString = window.localStorage.getItem("Map" + i);
                var mapJSON = JSON.parse(MapString);
                var mapName = mapJSON.Name;
                var listName = $("#MapList").val();
            
                if (mapName == listName)
                {
                    console.log(mapName + " = " + listName);
                    var latitude = mapJSON.Latitude;
                    var longitude = mapJSON.Longitude;
                    var pointersJSON = mapJSON.Pointers;
                    console.log(pointersJSON);
                    document.getElementById('MapHeading').innerHTML = mapName; 
                
                    // CLEAR existing pointers on map and array:
                    Pointers = [];
                    markerGroup.clearLayers();
                    
                    // LOAD map location:
                    mymap.setView([latitude, longitude], 13);
                
                    // LOAD all pointers onto map:
                    for (var i = 0; i < pointersJSON.length; i++)
                    {
                        var pJSON = JSON.parse(pointersJSON[i]);
                        var pName = pJSON.IconName;
                        var pLoc = pJSON.Location;
                        var pImage = pJSON.IconUrl;
                        var pChecked = pJSON.Checked;
                    
                        createPointer(pName, pLoc,      
                        pImage, pChecked);
                    }
                    
                    Loaded = true;
                }
            }
               
        }
        
        $("#LoadPanel").panel("close");
    });
    
    // EVENT HANDLER delete map from local storage when "Delete Map" is clicked:
    $('#DeleteMap').on("click", function () {
        console.log(window.localStorage.length);
        var Deleted = false;
        
        for (var i=1; (i+1)<=window.localStorage.length; i++)
        {
            if (Deleted == false)
            {
                var MapString = window.localStorage.getItem("Map" + i);
                var mapJSON = JSON.parse(MapString);
                var mapName = mapJSON.Name;
                var listName = $("#MapList").val();
            
                if (mapName == listName)
                {
                    window.localStorage.removeItem("Map" + i);
                    
                    var Removed = false;
                    for (var a = Maplist.options.length - 1; a >=0; a--)
                    {
                        if (Removed == false)
                        {
                            if (Maplist.options[a].text == listName)
                            {
                                Maplist.remove(a);
                                Removed = true;
                            }
                        }
                    }
                    
                    Maplist.selectedIndex = -1;
                    
                    Deleted = true;
                    console.log(window.localStorage.length)
                }
            }
               
        }
    });
    
    // EVENT HANDLER closes load panel when "close" button is clicked:
    $('#CloseLoad').on("click", function () {
        $("#LoadPanel").panel("close");
    });
}

//-------------SHARE MAP-----------------//
// METHOD: shares map to backendless server:
function shareMap() {
    var Maplist = document.getElementById("MapList2");
    
    var Maplist2 = document.getElementById("MapList3");
    
    // EVENT HANDLER initializes map lists when "share map" is clicked:
    $('#ShareMap').on("click", function () {
        $("#SharePanel").panel("open");
        
        // CLEAR all current options from lists
        for (var i = Maplist.options.length - 1; i >=0; i--)
        {
            Maplist.remove(i);
        }
        for (var i = Maplist2.options.length -1; i >=0; i--)
        {
            Maplist2.remove(i);
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
        
        Backendless.Data.of("SharedMaps").find().then(displayMaps).catch(error);
        
        // METHOD: if backendless finds data, add these as options:
        function displayMaps(maps) {
            console.log(maps);
            
            for (var i=0; i < maps.length; i++)
            {
                var getName = maps[i].Maps;
                
                var mapJSON = JSON.parse(getName);
                
                var o = document.createElement("option");
                o.text = mapJSON.Name;
                
                Maplist2.add(o);
            }
        }
        
        Maplist.selectedIndex = -1;
    });
    
    // EVENT HANDLER: shares map to backendless server when "share map" (panel) is clicked:
    $('#SharePanelMap').on("click", function () {
        for (var i=1; (i+1)<=window.localStorage.length; i++)
        {
            var MapString = window.localStorage.getItem("Map" + i);
            
            var mapJSON = JSON.parse(MapString);
            var mapName = mapJSON.Name;
            var listName = $("#MapList2").val();
            
            if(mapName == listName)
            {
            
                var newMap = {};
                newMap.Maps = MapString;
                Backendless.Data.of("SharedMaps").save(newMap).then(saved).catch(error);
                
                function saved() {
                    alert("New map has been shared.");
                }
            }
        }
    });
    
    // EVENT HANDLER: load map from backend server when "Load Map" is clicked:
    $('#LoadSharedMap').on("click", function () {
        var Loaded = false;
        
        Backendless.Data.of("SharedMaps").find().then(loadMaps).catch(error);
        
        function loadMaps(maps) {
            console.log(maps);
            
            for (var i=0; i < maps.length; i++)
            {
                if (Loaded == false)
                {
                    var MapString = maps[i].Maps;
                    
                    var mapJSON = JSON.parse(MapString);
                    
                    var mapName = mapJSON.Name;
                    
                    var listName = $("#MapList3").val();
                    
                    if (mapName == listName)
                    {
                        console.log(mapName + " = " + listName);
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
                            var pChecked = pJSON.Checked;
                    
                            createPointer(pName, pLoc,      
                            pImage, pChecked);
                        }
                    
                        Loaded = true;
                    }
                }  
            }
        }
        $("#SharePanel").panel("close");
    });
    
    // EVENT HANDLER: closes share panel when "close" button is clicked:
    $('#CloseShare').on("click", function () {
        $("#SharePanel").panel("close");
    });
    
    function error(e) {
        console.log(e);
    }
}


//-------------------------------------------//

//---------LOG OUT---------------------------//
function logOut(){
    // EVENT HANDLER: logs out user when "logOut" is clicked:
    $('#LogOut').on("click", function () {
        if (confirm("Are you sure you want to log out?")) {
            function userLoggedOut()
            {
                console.log("Logged out!");
            }
            
            function gotError(err)
            {
                console.log("error message - " + err.message);
                console.log("error code - " + err.statusCode);
            }
            
            Backendless.UserService.logout().then(userLoggedOut).catch(gotError);
            
            window.location.href = "#signIn";
        }
        else {
            return;
        }
    });
}

//------------------------------------------//
// METHODS: handle location success and failure:
function onLocationFound(e){
    userLocation.setLatLng(e.latlng);
    startLocation = e.latlng;
    if (showLocation == true)
    {   
        mymap.setView(userLocation.getLatLng(),
                      mymap.getZoom());
    }
}

function onLocationError(e) {
    alert(e.message);
}

//-----------------------------------------------------------------------//
//----------------SIGN IN SCREEN-----------------------------------------//
//-----------------------------------------------------------------------//
//METHOD: signs the user in via log in or register:
function signInScreen() {
    
    function success(result)
    {
        console.log("Is login valid?" + result);
        
        if(result == true)
        {
            window.location.href = "#viewScreen";
        }
    }
    
    function error(err)
    {
        console.log(err.message);
        console.log(err.statusCode);
    }
    
    // Checks wether user is logged in or not:
    var LogInValid = Backendless.UserService.isValidLogin().then(success).catch(error);
    
    if (LogInValid == true)
    {
        window.location.href = "#viewScreen";
    }
    else
    {
        $('#LogIn').on("click", function () {
        
            var Email = $("#EmailNameText").val();
            var Password = $("#PasswordText").val();
            console.log(Email);
            console.log(Password);
        
            function LoggedIn(user)
            {
                alert("user has logged in");
                window.location.href = "#viewScreen";
            
            }
        
            function gotError(err)
            {
                alert("error message - " + err.message );
                alert("error code - " + err.statusCode );
            }
        
            Backendless.UserService.login(Email, Password, true).then(LoggedIn).catch(gotError);
        
        
        });
    
        $('#CreateAccount').on("click", function () {
            var NewEmail = $("#NewEmailText").val();
            var NewPassword = $("#NewPasswordText").val();
            console.log(NewEmail);
            console.log(NewPassword);
        
            function userRegistered( user )
            {
                console.log("user has been registered");
                window.location.href = "#viewScreen";
            }
        
            function gotError( err )
            {
                alert("error message - " + err.message );
                console.log("error code - " + err.statusCode );
            }
        
            var user = new Backendless.User();
            user.email = NewEmail;
            user.password = NewPassword;
        
            Backendless.UserService.register( user ).then(userRegistered).catch(gotError);
        });
    }
}

//-----------------------------------------------//
//----------------------------------------------//