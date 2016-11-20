// $(document).ready(function() {

// var getAllBuildings = function() {
//   $.ajax({
//     url: "postgres://student_05@localhost:9001/realty_db",
//     type: "get"
//   }).done(function(data){
//     console.log(data);
//     appendAllBuildings(data);
//   });
// }

// var appendAllBuildings = function(data) {
//   var $allBuildings = $("ul");
//     // data.forEach(function(buildings) {
//     var $oneBuilding = $('<li>');
//     var $buildingSpan = $('<span class="name api_buildings" data-buildings_id=' + buildings.id + '>' + buildings.name + '</span>');
//     var $buildingsAddress = $('<span class="address">' + buildings.address + '</span>');
//     var $buildingsFloors = $('<span class="num_floors">' + buildings.num_floors + '</span>');
//     $buildingSpan.append($buildingsAddress)
//     $buildingSpan.append($buildingsFloors)

//     $oneBuilding.append($buildingSpan);
//     $allBuildings.append($oneBuilding);
//     $('body').append($allBuildings);
//   // });
// };
// appendAllBuildings()

// });
