
Backendless.serverURL = 'https://api.backendless.com';
Backendless.initApp("067F8686-1D56-3920-FF6F-EFB1C9AFEC00", "64260B74-AC20-579E-FF29-6F2DEEC33300");

window.location.href = "#signIn";


// Event Listener for signIn screen:
$(document).on("pageshow", "#signIn", signInScreen);

// Event Listener for map screen:
$(document).on("pageshow", "#viewScreen", mapScreen);

var mymap;
var startLocation;
var Pointers = [];
var markerGroup; 
var control;
var userLocation;

// METHOD: Handles actions on the map screen:
function mapScreen() {

    createMap();
    markerGroup = L.layerGroup().addTo(mymap);
    addPointer();
    saveMap();
    loadMap();
    shareMap();
    logOut();
}

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
function createMap() {
    
    mymap = L.map('map').setView([51.505, -0.09], 13);
    
    //mymap.locate({setView: true, maxZoom: 16});
    
    userLocation = L.marker(mymap.getCenter()).addTo(mymap);
    
    var glcl = google.loader.ClientLocation;
    
    
    
    /*var circle = L.circle([51.508, -0.11], {
        color: 'blue',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(mymap);*/
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
    
    mymap.locate({watch: true});
             
    mymap.on('locationerror', onLocationError);
}

//---------ADD POINTER--------------------------------//
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
    
    // CREATE popup content, then SET content to popup:
    var divP = document.createElement("div");
    var namP = document.createElement("p");
    namP.innerHTML = "<b>" + Name + "</b></br>";
    
    var dreP = document.createElement("BUTTON");
    var drtxtP = document.createTextNode("DIRECTIONS");
    dreP.appendChild(drtxtP);
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
    var nPopup = L.popup()
                    .setContent(divP);
    
                
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

//-------------SHARE MAP-----------------//
function shareMap() {
    var Maplist = document.getElementById("MapList2");
    
    $('#ShareMap').on("click", function () {
        $("#SharePanel").panel("open");
        
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
    
    $('#SharePanelMap').on("click", function () {
        for (var i=1; (i+1)<=window.localStorage.length; i++)
        {
            var MapString = window.localStorage.getItem("Map" + i);
            
            var mapJSON = JSON.parse(MapString);
            var mapName = mapJSON.Name;
            var listName = $("#MapList2").val();
            
            if(mapName == listName)
            {
            
                function updateUser(user) {
                    user.maps = MapString;
                
                    return Backendless.UserService.update(user);
                }
            
                var currentUser = Backendless.UserService.getCurrentUserSync();
            
                Backendless.UserService.login(currentUser.email, currentUser.password).then(updateUser);
            
            }
        }
    });
    
    $('#CloseShare').on("click", function () {
        $("#SharePanel").panel("close");
    });
}


//-------------------------------------------//

//---------LOG OUT---------------------------//
function logOut(){
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

function onLocationFound(e){
        userLocation.setLatLng(e.latlng);
        
        mymap.setView(userLocation.getLatLng(), mymap.getZoom());
        
        //alert('Marker has been set to position:'+marker.getLatLng().toString());
}

function onLocationError(e) {
    alert(e.message);
}

//-----------------------------------------------------------------------//
//----------------SIGN IN SCREEN-----------------------------------------//
//-----------------------------------------------------------------------//

function signInScreen() {
    
    function success(result)
    {
        console.log("Is login valid?" + result);
    }
    
    function error(err)
    {
        console.log(err.message);
        console.log(err.statusCode);
    }
    
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
                alert("user has logged in")
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