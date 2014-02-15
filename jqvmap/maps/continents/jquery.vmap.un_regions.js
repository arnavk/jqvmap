var regions = {
	"easternAfrica" : ["bi", "km", "dj", "er", "et", "ke", "mg", "mw", "mu", "mz", "re", "rw", "sc", "so", "ug", "tz", "zm", "zw"],
	"middleAfrica" : ["ao", "cm", "cf", "td", "cg", "cd", "gq", "ga", "st"],
	"northernAfrica" :["dz", "eg", "ly", "ma", "sd", "tn"],
	"southernAfrica" :["bw", "ls", "na", "za", "sz"],
	"westernAfrica" : ["bj", "bf", "cv", "ci", "gm", "gh", "gn", "gw", "lr", "ml", "mr", "ne", "ng", "sn", "sl", "tg"],
	"easternAsia" :["cn", "kp", "jp", "mn", "kr"],
	"southCentralAsia" :["af", "bd", "bt", "in", "ir", "kz", "kg", "mv", "np", "pk", "lk", "tj", "tm", "uz"],
	"southEasternAsia" :["bn", "kh", "tl", "id", "la", "my", "mm", "ph", "th", "vn"],
	"westernAsia" :["az", "am", "cy", "ge", "iq", "il", "jo", "kw", "lb", "om", "qa", "sa", "sy", "tr", "ae", "ye"],
	"easternEurope" :["by", "bg", "cz", "hu", "pl", "md", "ro", "ru", "sk", "ua"],
	"northernEurope" :["dk", "ee", "fi", "is", "ie", "lv", "lt", "no", "se", "gb"],
	"southernEurope" :["al", "ba", "hr", "gr", "it", "mt", "pt", "si", "es", "mk", "rs"],
	"westernEurope" :["at", "be", "fr", "de", "nl", "ch"],
	"caribbean" :["ag", "ds", "bb", "cu", "dn", "do", "gd", "ht", "jm", "kn", "lc", "tt"],
	"centralAmerica" :["bz", "cr", "sv", "gt", "hn", "mx", "ni", "pa"],
	"southAmerica" :["ar", "bo", "br", "cl", "co", "fk", "gy", "gf", "pe", "py", "sr", "uy", "ve"],
	"northernAmerica" :["ca", "gl", "us"],
	"oceania" :["au", "nz", "fj", "sb", "pg", "vu", "nc", "pf", "tv"]
};

function getCountriesInRegion(cc) {
	for (var region in regions)
	{
		for(var country in regions[region])
		{
			if (cc == country)
				return regions[region];
		}
	}
}

Channel Islands (UK)
Denmark
Estonia
Faeroe Islands (DK)
Finland
Iceland
Ireland
Isle of Man (UK)
Latvia
Lithuania
Norway
Sweden
United Kingdom
