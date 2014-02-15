var regions = {
	"easternAfrica" : {
		"countries" : ["bi", "km", "dj", "er", "et", "ke", "mg", "mw", "mu", "mz", "re", "rw", "sc", "so", "ug", "tz", "zm", "zw"],
		"name" : "Eastern Africa"
	},
	"middleAfrica" : {
		"countries" : ["ao", "cm", "cf", "td", "cg", "cd", "gq", "ga", "st"],
		"name" : "Middle Africa"
	},
	"northernAfrica" :{
		"countries" : ["dz", "eg", "ly", "ma", "sd", "tn"],
		"name" : "Northern Africa"
	},
	"southernAfrica" :{
		"countries" : ["bw", "ls", "na", "za", "sz"],
		"name" : "Southern Africa"
	},
	"westernAfrica" : {
		"countries" : ["bj", "bf", "cv", "ci", "gm", "gh", "gn", "gw", "lr", "ml", "mr", "ne", "ng", "sn", "sl", "tg"],
		"name" : " Western Africa"
	},
	"easternAsia" : {
		"countries" : ["cn", "kp", "jp", "mn", "kr"],
		"name" : "Eastern Asia"
	},
	"southCentralAsia" : {
		"countries" : ["af", "bd", "bt", "in", "ir", "kz", "kg", "mv", "np", "pk", "lk", "tj", "tm", "uz"],
		"name" : "South Central Asia"
	},
	"southEasternAsia" : {
		"countries" : ["bn", "kh", "tl", "id", "la", "my", "mm", "ph", "th", "vn"],
		"name" : "South Eastern Asia"
	},
	"westernAsia" : {
		"countries" : ["az", "am", "cy", "ge", "iq", "il", "jo", "kw", "lb", "om", "qa", "sa", "sy", "tr", "ae", "ye"],
		"name" : "Western Asia"
	},
	"easternEurope" : {
		"countries" : ["by", "bg", "cz", "hu", "pl", "md", "ro", "ru", "sk", "ua"],
		"name" : "Eastern Europe"
	},
	"northernEurope" : {
		"countries" : ["dk", "ee", "fi", "is", "ie", "lv", "lt", "no", "se", "gb"],
		"name" : "Northern Europe"
	},
	"southernEurope" : {
		"countries" : ["al", "ba", "hr", "gr", "it", "mt", "pt", "si", "es", "mk", "rs"],
		"name" : "Southern Europe"
	},
	"westernEurope" :{
		"countries" : ["at", "be", "fr", "de", "nl", "ch"],
		"name" : "Western Europe"
	},
	"caribbean" : {
		"countries" : ["bs", "dm", "ag", "ds", "bb", "cu", "dn", "do", "gd", "ht", "jm", "kn", "lc", "tt"],
		"name" : "Caribbean"
	},
	"centralAmerica" :{
		"countries" : ["bz", "cr", "sv", "gt", "hn", "mx", "ni", "pa"],
		"name" : "Central America"
	},
	"southAmerica" :{
		"countries" : ["ar", "bo", "br", "cl", "co", "ec", "fk", "gy", "gf", "pe", "py", "sr", "uy", "ve"],
		"name" : "South America"
	},
	"northernAmerica" :{
		"countries" : ["ca", "gl", "us"],
		"name" : "Northern America"
	},
	"oceania" :{
		"countries" : ["au", "nz", "fj", "sb", "pg", "vu", "nc", "pf"],
		"name" : "Oceania",
	},
};

function getCountriesInRegion(cc) {
	for (var regionKey in regions)
	{
		var region = regions[regionKey];
		var countries = region["countries"];
		// console.log(region.toString());
		// console.log(countries.toString());
		for(var countryIndex in countries)
		{
			// console.log(countryIndex);
			// console.log(countries[countryIndex].toString());
			if (cc == countries[countryIndex])
			{	
				// console.log(countries.toString());

				return countries;
			}
		}
	}
}

function getRegion(cc) {
	for (var regionKey in regions)
	{
		var region = regions[regionKey];
		var countries = region["countries"];
		// console.log(region.toString());
		// console.log(countries.toString());
		for(var countryIndex in countries)
		{
			// console.log(countryIndex);
			// console.log(countries[countryIndex].toString());
			if (cc == countries[countryIndex])
			{	
				// console.log(countries.toString());

				return region;
			}
		}
	}
}