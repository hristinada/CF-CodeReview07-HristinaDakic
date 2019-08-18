
var locations = [];

//============================================
// Create the superior class for locations 
//==================================================
class Location {
	constructor (created, name, city, zip, adress, image) {
		this.created = created;
		this.name = name;
		this.city = city;
		this.zip = zip;
		this.adress = adress;
		this.image = image;
		locations.push(this);
	};

	display(id) {
			$(id).append(`
				<div class="col-md-6 col-lg-3 mb-3">
					<div class="content col-12 rounded shadow text-dark pt-3 pb-3">
					${this.content()}
					</div>
				</div>
				`);
	};

	content() {
		return `
			<p class="text-dark font-weight-bold">${this.name}</p>
			<img src="img/${this.image}" alt="image" class="img-thumbnail d-none d-md-block">
			<p class="font-weight-lighter small font-italic">Created: ${this.created.toDateString() + " " + this.created.getHours() + ":" + this.created.getMinutes()}</p>
			<p class="mt-3 mb-0">${this.adress + ", " + this.zip + " " + this.city}</p>
			`;
	};

}

//============================================
// Create class for restaurants 
//==================================================

class Restaurant extends Location {
	constructor(created, name, city, zip, adress, image, tel, type, web) {
		super(created, name, city, zip, adress, image);
		this.tel = tel;
		this.type = type;
		this.web = web;
	};

	content() {
		return `
			${super.content()}
			<p class="mb-0">${this.type} cusine</p>
			<p class="mb-0">${this.tel}</p>
			<a href="${this.web}">${this.web}</a>
		`
	};
}

//============================================
// Create class for events 
//==========================================

class Event extends Location {
	constructor(created, name, city, zip, adress, image, web, date, time, price) {
		super(created, name, city, zip, adress, image);
		this.web = web;
		this.date = date;
		this.time = time;
		this.price = price;
	};

	content() {
		return `
			${super.content()}
			<p>Date: ${this.date + " " + this.time}</p>
			<p>Price: ${this.price}</p>
			<a href="${this.web}">${this.web}</a>
		`
	};

}
//============================================
//create objects
//============================================


new Location (new Date(2018, 8, 17, 10, 33), "St. Charles Church", "Vienna", "1010", "Karlsplatz 1", "charles.JPG");
new Location (new Date(2019, 4, 17, 12, 20), "KunstHausWien", "Vienna", "1030", "Untere Weißgerberstraße 13", "hundertwasser.JPG");
new Location (new Date(2017, 2, 17, 14, 40), "Stadtpark City Park", "Vienna", "1010", "Parkring 1", "stadtpark.JPG");
new Location (new Date(2019, 6, 17, 15, 50), "Schönbrunn Palace", "Vienna", "1130", "Schönbrunner Schloßstraße 47", "schönbrunn.JPG");

new Restaurant (new Date(2018, 7, 15, 9, 30), "ALL REIS", "Vienna", "1150", "Schweglerstraße 12", "allreis.JPG", "+431 7864668", "Thai", "www.allreis.com");
new Restaurant (new Date(2018, 10, 17, 10, 33), "Cafe Ansari", "Vienna", "1020", "Praterstraße 15", "ansari.JPG", "+431 2765102", "Georgian", "www.cafeansari.at");

new Event (new Date(2019, 5, 17, 10, 33), "Sukhishvili - Georgisches Nationalballett", "Vienna", "1150", "Wiener Stadthalle, Hall F, Roland Rainer Platz 1", "sukhi.jpeg", "www.stadthalle.com", "18.11.2019", "20:00", "from 63,70 EUR");
new Event (new Date(2018, 6, 17, 10, 33), "Wiener Stadtfest Aftershow Party", "Vienna", "1150", "Wiener Stadthalle, Hall F, Roland Rainer Platz 1", "fest.jpeg", "www.stadthalle.com", "31.08.2019", "18:00", "Free" );
new Event (new Date(2018, 3, 17, 10, 33), "Max Raabe & Palast Orchester", "Vienna", "1150", "Wiener Stadthalle, Hall F, Roland Rainer Platz 1", "max.jpeg", "www.stadthalle.com", "08.05.2020", "20:00", "from 63,00 EUR" );

//============================================
//render all places, restaurants and events
//============================================

for (i=0; i<locations.length; i++) {
	if (locations[i].constructor.name == "Location") {
		locations[i].display("#places");
	}
	else if (locations[i].constructor.name == "Restaurant") {
		locations[i].display("#restaurants");
	}
	else if (locations[i].constructor.name == "Event") {
		locations[i].display("#events");
	}
}

//============================================
//on click render the places, restaurants and events in the ascending order
//============================================

$("#ascending").click(function() {
	locations.sort(function(a, b){
		return a.created.getTime()-b.created.getTime();
	});

	$("#places").html("");
	$("#restaurants").html("");
	$("#events").html("");

	for (i=0; i<locations.length; i++) {
		if (locations[i].constructor.name == "Location") {
			locations[i].display("#places");
		}
		else if (locations[i].constructor.name == "Restaurant") {
			locations[i].display("#restaurants");
		}
		else if (locations[i].constructor.name == "Event") {
			locations[i].display("#events");
		}
	}
});

$("#descending").click(function() {
	locations.sort(function(a, b){
		return b.created.getTime() - a.created.getTime();
	});

	$("#places").html("");
	$("#restaurants").html("");
	$("#events").html("");

	for (i=0; i<locations.length; i++) {
		if (locations[i].constructor.name == "Location") {
			locations[i].display("#places");
		}
		else if (locations[i].constructor.name == "Restaurant") {
			locations[i].display("#restaurants");
		}
		else if (locations[i].constructor.name == "Event") {
			locations[i].display("#events");
		}
	}
});



