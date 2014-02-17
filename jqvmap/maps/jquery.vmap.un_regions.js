var countryMap = {
	"bi": "easternAfrica",
	"km": "easternAfrica",
	"dj": "easternAfrica",
	"er": "easternAfrica",
	"et": "easternAfrica",
	"ke": "easternAfrica",
	"mg": "easternAfrica",
	"mw": "easternAfrica",
	"mu": "easternAfrica",
	"mz": "easternAfrica",
	"re": "easternAfrica",
	"rw": "easternAfrica",
	"sc": "easternAfrica",
	"so": "easternAfrica",
	"ug": "easternAfrica",
	"tz": "easternAfrica",
	"zm": "easternAfrica",
	"zw": "easternAfrica",

	"ao": "middleAfrica",
	"cm": "middleAfrica",
	"cf": "middleAfrica",
	"td": "middleAfrica",
	"cg": "middleAfrica",
	"cd": "middleAfrica",
	"gq": "middleAfrica",
	"ga": "middleAfrica",
	"st": "middleAfrica",

	"dz": "northernAfrica",
	"eg": "northernAfrica",
	"ly": "northernAfrica",
	"ma": "northernAfrica",
	"sd": "northernAfrica",
	"tn": "northernAfrica",

	"bw": "southernAfrica",
	"ls": "southernAfrica",
	"na": "southernAfrica",
	"za": "southernAfrica",
	"sz": "southernAfrica",

	"bj": "westernAfrica",
	"bf": "westernAfrica",
	"cv": "westernAfrica",
	"ci": "westernAfrica",
	"gm": "westernAfrica",
	"gh": "westernAfrica",
	"gn": "westernAfrica",
	"gw": "westernAfrica",
	"lr": "westernAfrica",
	"ml": "westernAfrica",
	"mr": "westernAfrica",
	"ne": "westernAfrica",
	"ng": "westernAfrica",
	"sn": "westernAfrica",
	"sl": "westernAfrica",
	"tg": "westernAfrica",

	"cn": "easternAsia",
	"kp": "easternAsia",
	"jp": "easternAsia",
	"mn": "easternAsia",
	"kr": "easternAsia",

	"af": "southCentralAsia",
	"bd": "southCentralAsia",
	"bt": "southCentralAsia",
	"in": "southCentralAsia",
	"ir": "southCentralAsia",
	"kz": "southCentralAsia",
	"kg": "southCentralAsia",
	"mv": "southCentralAsia",
	"np": "southCentralAsia",
	"pk": "southCentralAsia",
	"lk": "southCentralAsia",
	"tj": "southCentralAsia",
	"tm": "southCentralAsia",
	"uz": "southCentralAsia",

	"bn":"southEasternAsia",
	"kh":"southEasternAsia",
	"tl":"southEasternAsia",
	"id":"southEasternAsia",
	"la":"southEasternAsia",
	"my":"southEasternAsia",
	"mm":"southEasternAsia",
	"ph":"southEasternAsia",
	"th":"southEasternAsia",
	"vn":"southEasternAsia",

	"az":"westernAsia",
	"am":"westernAsia",
	"cy":"westernAsia",
	"ge":"westernAsia",
	"iq":"westernAsia",
	"il":"westernAsia",
	"jo":"westernAsia",
	"kw":"westernAsia",
	"lb":"westernAsia",
	"om":"westernAsia",
	"qa":"westernAsia",
	"sa":"westernAsia",
	"sy":"westernAsia",
	"tr":"westernAsia",
	"ae":"westernAsia",
	"ye":"westernAsia",

	"by":"easternEurope",
	"bg":"easternEurope",
	"cz":"easternEurope",
	"hu":"easternEurope",
	"pl":"easternEurope",
	"md":"easternEurope",
	"ro":"easternEurope",
	"ru":"easternEurope",
	"sk":"easternEurope",
	"ua":"easternEurope",

	"dk":"northernEurope",
	"ee":"northernEurope",
	"fi":"northernEurope",
	"is":"northernEurope",
	"ie":"northernEurope",
	"lv":"northernEurope",
	"lt":"northernEurope",
	"no":"northernEurope",
	"se":"northernEurope",
	"gb":"northernEurope",

	"al":"southernEurope",
	"ba":"southernEurope",
	"hr":"southernEurope",
	"gr":"southernEurope",
	"it":"southernEurope",
	"mt":"southernEurope",
	"pt":"southernEurope",
	"si":"southernEurope",
	"es":"southernEurope",
	"mk":"southernEurope",
	"rs":"southernEurope",

	"at":"westernEurope",
	"be":"westernEurope",
	"fr":"westernEurope",
	"de":"westernEurope",
	"nl":"westernEurope",
	"ch":"westernEurope",

	"bs":"caribbean",
	"dm":"caribbean",
	"ag":"caribbean",
	"ds":"caribbean",
	"bb":"caribbean",
	"cu":"caribbean",
	"dn":"caribbean",
	"do":"caribbean",
	"gd":"caribbean",
	"ht":"caribbean",
	"jm":"caribbean",
	"kn":"caribbean",
	"lc":"caribbean",
	"tt":"caribbean",

	"bz":"centralAmerica",
	"cr":"centralAmerica",
	"sv":"centralAmerica",
	"gt":"centralAmerica",
	"hn":"centralAmerica",
	"mx":"centralAmerica",
	"ni":"centralAmerica",
	"pa":"centralAmerica",


	"ar":"southAmerica",
	"bo":"southAmerica",
	"br":"southAmerica",
	"cl":"southAmerica",
	"co":"southAmerica",
	"ec":"southAmerica",
	"fk":"southAmerica",
	"gy":"southAmerica",
	"gf":"southAmerica",
	"pe":"southAmerica",
	"py":"southAmerica",
	"sr":"southAmerica",
	"uy":"southAmerica",
	"ve":"southAmerica",

	"ca":"northernAmerica",
	"gl":"northernAmerica",
	"us":"northernAmerica",

	"au":"oceania",
	"nz":"oceania",
	"fj":"oceania",
	"sb":"oceania",
	"pg":"oceania",
	"vu":"oceania",
	"nc":"oceania",
	"pf":"oceania"
};
var regionMap = {
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
	var regionCode = countryMap[cc];
	return regionMap[regionCode];
}

function highlightRegionOfCountry (cc) {
      
      var region = getRegion(cc);
      countries = region["countries"];
      

      for (countryIndex in countries)
      {
      	$('#vmap').vectorMap('highlight',countries[countryIndex]);
        
      }
      $('#vmap').vectorMap('highlight',cc);
      
    }

function unhighlightRegionOfCountry (cc) {
      // var countries = getCountriesInRegion(cc);
      var region = getRegion(cc);
      countries = region["countries"];
      for (countryIndex in countries)
      {
      	$('#vmap').vectorMap('unhighlight',countries[countryIndex]);
        
      }
      $('#vmap').vectorMap('unhighlight',cc);
    }