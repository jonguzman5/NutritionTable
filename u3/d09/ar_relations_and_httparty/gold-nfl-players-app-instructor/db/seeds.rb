	Player.delete_all
	Team.delete_all
	Player.create([{ first_name: "Darrelle", last_name: "Revis"}, {first_name: "Aaron", last_name: "Rodgers"}, { first_name: "Dominique", last_name: "Rodgers-Cromartie"}])
	Team.create([{ name: "Jets", city: "New York" }, { name: "Giants", city: "New York" }, { name: "Packers", city: "Green Bay" } ])