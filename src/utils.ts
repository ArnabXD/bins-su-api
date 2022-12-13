export interface Country {
  name: string;
  alpha2: string;
  alpha3: string;
  numeric: string;
  emoji: string;
}

const iso31661: Array<Country> = [
  {
    name: "Andorra",
    alpha2: "AD",
    alpha3: "AND",
    numeric: "020",
    emoji: "🇦🇩",
  },
  {
    name: "United Arab Emirates",
    alpha2: "AE",
    alpha3: "ARE",
    numeric: "784",
    emoji: "🇦🇪",
  },
  {
    name: "Afghanistan",
    alpha2: "AF",
    alpha3: "AFG",
    numeric: "004",
    emoji: "🇦🇫",
  },
  {
    name: "Antigua and Barbuda",
    alpha2: "AG",
    alpha3: "ATG",
    numeric: "028",
    emoji: "🇦🇬",
  },
  {
    name: "Anguilla",
    alpha2: "AI",
    alpha3: "AIA",
    numeric: "660",
    emoji: "🇦🇮",
  },
  {
    name: "Albania",
    alpha2: "AL",
    alpha3: "ALB",
    numeric: "008",
    emoji: "🇦🇱",
  },
  {
    name: "Armenia",
    alpha2: "AM",
    alpha3: "ARM",
    numeric: "051",
    emoji: "🇦🇲",
  },
  {
    name: "Angola",
    alpha2: "AO",
    alpha3: "AGO",
    numeric: "024",
    emoji: "🇦🇴",
  },
  {
    name: "Antarctica",
    alpha2: "AQ",
    alpha3: "ATA",
    numeric: "010",
    emoji: "🇦🇶",
  },
  {
    name: "Argentina",
    alpha2: "AR",
    alpha3: "ARG",
    numeric: "032",
    emoji: "🇦🇷",
  },
  {
    name: "American Samoa",
    alpha2: "AS",
    alpha3: "ASM",
    numeric: "016",
    emoji: "🇦🇸",
  },
  {
    name: "Austria",
    alpha2: "AT",
    alpha3: "AUT",
    numeric: "040",
    emoji: "🇦🇹",
  },
  {
    name: "Australia",
    alpha2: "AU",
    alpha3: "AUS",
    numeric: "036",
    emoji: "🇦🇺",
  },
  {
    name: "Aruba",
    alpha2: "AW",
    alpha3: "ABW",
    numeric: "533",
    emoji: "🇦🇼",
  },
  {
    name: "Åland Islands",
    alpha2: "AX",
    alpha3: "ALA",
    numeric: "248",
    emoji: "🇦🇽",
  },
  {
    name: "Azerbaijan",
    alpha2: "AZ",
    alpha3: "AZE",
    numeric: "031",
    emoji: "🇦🇿",
  },
  {
    name: "Bosnia and Herzegovina",
    alpha2: "BA",
    alpha3: "BIH",
    numeric: "070",
    emoji: "🇧🇦",
  },
  {
    name: "Barbados",
    alpha2: "BB",
    alpha3: "BRB",
    numeric: "052",
    emoji: "🇧🇧",
  },
  {
    name: "Bangladesh",
    alpha2: "BD",
    alpha3: "BGD",
    numeric: "050",
    emoji: "🇧🇩",
  },
  {
    name: "Belgium",
    alpha2: "BE",
    alpha3: "BEL",
    numeric: "056",
    emoji: "🇧🇪",
  },
  {
    name: "Burkina Faso",
    alpha2: "BF",
    alpha3: "BFA",
    numeric: "854",
    emoji: "🇧🇫",
  },
  {
    name: "Bulgaria",
    alpha2: "BG",
    alpha3: "BGR",
    numeric: "100",
    emoji: "🇧🇬",
  },
  {
    name: "Bahrain",
    alpha2: "BH",
    alpha3: "BHR",
    numeric: "048",
    emoji: "🇧🇭",
  },
  {
    name: "Burundi",
    alpha2: "BI",
    alpha3: "BDI",
    numeric: "108",
    emoji: "🇧🇮",
  },
  {
    name: "Benin",
    alpha2: "BJ",
    alpha3: "BEN",
    numeric: "204",
    emoji: "🇧🇯",
  },
  {
    name: "Saint Barthélemy",
    alpha2: "BL",
    alpha3: "BLM",
    numeric: "652",
    emoji: "🇧🇱",
  },
  {
    name: "Bermuda",
    alpha2: "BM",
    alpha3: "BMU",
    numeric: "060",
    emoji: "🇧🇲",
  },
  {
    name: "Brunei Darussalam",
    alpha2: "BN",
    alpha3: "BRN",
    numeric: "096",
    emoji: "🇧🇳",
  },
  {
    name: "Bolivia (Plurinational State of)",
    alpha2: "BO",
    alpha3: "BOL",
    numeric: "068",
    emoji: "🇧🇴",
  },
  {
    name: "Bonaire, Sint Eustatius and Saba",
    alpha2: "BQ",
    alpha3: "BES",
    numeric: "535",
    emoji: "🇧🇶",
  },
  {
    name: "Brazil",
    alpha2: "BR",
    alpha3: "BRA",
    numeric: "076",
    emoji: "🇧🇷",
  },
  {
    name: "Bahamas",
    alpha2: "BS",
    alpha3: "BHS",
    numeric: "044",
    emoji: "🇧🇸",
  },
  {
    name: "Bhutan",
    alpha2: "BT",
    alpha3: "BTN",
    numeric: "064",
    emoji: "🇧🇹",
  },
  {
    name: "Bouvet Island",
    alpha2: "BV",
    alpha3: "BVT",
    numeric: "074",
    emoji: "🇧🇻",
  },
  {
    name: "Botswana",
    alpha2: "BW",
    alpha3: "BWA",
    numeric: "072",
    emoji: "🇧🇼",
  },
  {
    name: "Belarus",
    alpha2: "BY",
    alpha3: "BLR",
    numeric: "112",
    emoji: "🇧🇾",
  },
  {
    name: "Belize",
    alpha2: "BZ",
    alpha3: "BLZ",
    numeric: "084",
    emoji: "🇧🇿",
  },
  {
    name: "Canada",
    alpha2: "CA",
    alpha3: "CAN",
    numeric: "124",
    emoji: "🇨🇦",
  },
  {
    name: "Cocos (Keeling) Islands",
    alpha2: "CC",
    alpha3: "CCK",
    numeric: "166",
    emoji: "🇨🇨",
  },
  {
    name: "Congo, Democratic Republic of the",
    alpha2: "CD",
    alpha3: "COD",
    numeric: "180",
    emoji: "🇨🇩",
  },
  {
    name: "Central African Republic",
    alpha2: "CF",
    alpha3: "CAF",
    numeric: "140",
    emoji: "🇨🇫",
  },
  {
    name: "Congo",
    alpha2: "CG",
    alpha3: "COG",
    numeric: "178",
    emoji: "🇨🇬",
  },
  {
    name: "Switzerland",
    alpha2: "CH",
    alpha3: "CHE",
    numeric: "756",
    emoji: "🇨🇭",
  },
  {
    name: "Côte d'Ivoire",
    alpha2: "CI",
    alpha3: "CIV",
    numeric: "384",
    emoji: "🇨🇮",
  },
  {
    name: "Cook Islands",
    alpha2: "CK",
    alpha3: "COK",
    numeric: "184",
    emoji: "🇨🇰",
  },
  {
    name: "Chile",
    alpha2: "CL",
    alpha3: "CHL",
    numeric: "152",
    emoji: "🇨🇱",
  },
  {
    name: "Cameroon",
    alpha2: "CM",
    alpha3: "CMR",
    numeric: "120",
    emoji: "🇨🇲",
  },
  {
    name: "China",
    alpha2: "CN",
    alpha3: "CHN",
    numeric: "156",
    emoji: "🇨🇳",
  },
  {
    name: "Colombia",
    alpha2: "CO",
    alpha3: "COL",
    numeric: "170",
    emoji: "🇨🇴",
  },
  {
    name: "Costa Rica",
    alpha2: "CR",
    alpha3: "CRI",
    numeric: "188",
    emoji: "🇨🇷",
  },
  {
    name: "Cuba",
    alpha2: "CU",
    alpha3: "CUB",
    numeric: "192",
    emoji: "🇨🇺",
  },
  {
    name: "Cabo Verde",
    alpha2: "CV",
    alpha3: "CPV",
    numeric: "132",
    emoji: "🇨🇻",
  },
  {
    name: "Curaçao",
    alpha2: "CW",
    alpha3: "CUW",
    numeric: "531",
    emoji: "🇨🇼",
  },
  {
    name: "Christmas Island",
    alpha2: "CX",
    alpha3: "CXR",
    numeric: "162",
    emoji: "🇨🇽",
  },
  {
    name: "Cyprus",
    alpha2: "CY",
    alpha3: "CYP",
    numeric: "196",
    emoji: "🇨🇾",
  },
  {
    name: "Czechia",
    alpha2: "CZ",
    alpha3: "CZE",
    numeric: "203",
    emoji: "🇨🇿",
  },
  {
    name: "Germany",
    alpha2: "DE",
    alpha3: "DEU",
    numeric: "276",
    emoji: "🇩🇪",
  },
  {
    name: "Djibouti",
    alpha2: "DJ",
    alpha3: "DJI",
    numeric: "262",
    emoji: "🇩🇯",
  },
  {
    name: "Denmark",
    alpha2: "DK",
    alpha3: "DNK",
    numeric: "208",
    emoji: "🇩🇰",
  },
  {
    name: "Dominica",
    alpha2: "DM",
    alpha3: "DMA",
    numeric: "212",
    emoji: "🇩🇲",
  },
  {
    name: "Dominican Republic",
    alpha2: "DO",
    alpha3: "DOM",
    numeric: "214",
    emoji: "🇩🇴",
  },
  {
    name: "Algeria",
    alpha2: "DZ",
    alpha3: "DZA",
    numeric: "012",
    emoji: "🇩🇿",
  },
  {
    name: "Ecuador",
    alpha2: "EC",
    alpha3: "ECU",
    numeric: "218",
    emoji: "🇪🇨",
  },
  {
    name: "Estonia",
    alpha2: "EE",
    alpha3: "EST",
    numeric: "233",
    emoji: "🇪🇪",
  },
  {
    name: "Egypt",
    alpha2: "EG",
    alpha3: "EGY",
    numeric: "818",
    emoji: "🇪🇬",
  },
  {
    name: "Western Sahara",
    alpha2: "EH",
    alpha3: "ESH",
    numeric: "732",
    emoji: "🇪🇭",
  },
  {
    name: "Eritrea",
    alpha2: "ER",
    alpha3: "ERI",
    numeric: "232",
    emoji: "🇪🇷",
  },
  {
    name: "Spain",
    alpha2: "ES",
    alpha3: "ESP",
    numeric: "724",
    emoji: "🇪🇸",
  },
  {
    name: "Ethiopia",
    alpha2: "ET",
    alpha3: "ETH",
    numeric: "231",
    emoji: "🇪🇹",
  },
  {
    name: "Finland",
    alpha2: "FI",
    alpha3: "FIN",
    numeric: "246",
    emoji: "🇫🇮",
  },
  {
    name: "Fiji",
    alpha2: "FJ",
    alpha3: "FJI",
    numeric: "242",
    emoji: "🇫🇯",
  },
  {
    name: "Falkland Islands (Malvinas)",
    alpha2: "FK",
    alpha3: "FLK",
    numeric: "238",
    emoji: "🇫🇰",
  },
  {
    name: "Micronesia (Federated States of)",
    alpha2: "FM",
    alpha3: "FSM",
    numeric: "583",
    emoji: "🇫🇲",
  },
  {
    name: "Faroe Islands",
    alpha2: "FO",
    alpha3: "FRO",
    numeric: "234",
    emoji: "🇫🇴",
  },
  {
    name: "France",
    alpha2: "FR",
    alpha3: "FRA",
    numeric: "250",
    emoji: "🇫🇷",
  },
  {
    name: "Gabon",
    alpha2: "GA",
    alpha3: "GAB",
    numeric: "266",
    emoji: "🇬🇦",
  },
  {
    name: "United Kingdom of Great Britain and Northern Ireland",
    alpha2: "GB",
    alpha3: "GBR",
    numeric: "826",
    emoji: "🇬🇧",
  },
  {
    name: "Grenada",
    alpha2: "GD",
    alpha3: "GRD",
    numeric: "308",
    emoji: "🇬🇩",
  },
  {
    name: "Georgia",
    alpha2: "GE",
    alpha3: "GEO",
    numeric: "268",
    emoji: "🇬🇪",
  },
  {
    name: "French Guiana",
    alpha2: "GF",
    alpha3: "GUF",
    numeric: "254",
    emoji: "🇬🇫",
  },
  {
    name: "Guernsey",
    alpha2: "GG",
    alpha3: "GGY",
    numeric: "831",
    emoji: "🇬🇬",
  },
  {
    name: "Ghana",
    alpha2: "GH",
    alpha3: "GHA",
    numeric: "288",
    emoji: "🇬🇭",
  },
  {
    name: "Gibraltar",
    alpha2: "GI",
    alpha3: "GIB",
    numeric: "292",
    emoji: "🇬🇮",
  },
  {
    name: "Greenland",
    alpha2: "GL",
    alpha3: "GRL",
    numeric: "304",
    emoji: "🇬🇱",
  },
  {
    name: "Gambia",
    alpha2: "GM",
    alpha3: "GMB",
    numeric: "270",
    emoji: "🇬🇲",
  },
  {
    name: "Guinea",
    alpha2: "GN",
    alpha3: "GIN",
    numeric: "324",
    emoji: "🇬🇳",
  },
  {
    name: "Guadeloupe",
    alpha2: "GP",
    alpha3: "GLP",
    numeric: "312",
    emoji: "🇬🇵",
  },
  {
    name: "Equatorial Guinea",
    alpha2: "GQ",
    alpha3: "GNQ",
    numeric: "226",
    emoji: "🇬🇶",
  },
  {
    name: "Greece",
    alpha2: "GR",
    alpha3: "GRC",
    numeric: "300",
    emoji: "🇬🇷",
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    alpha2: "GS",
    alpha3: "SGS",
    numeric: "239",
    emoji: "🇬🇸",
  },
  {
    name: "Guatemala",
    alpha2: "GT",
    alpha3: "GTM",
    numeric: "320",
    emoji: "🇬🇹",
  },
  {
    name: "Guam",
    alpha2: "GU",
    alpha3: "GUM",
    numeric: "316",
    emoji: "🇬🇺",
  },
  {
    name: "Guinea-Bissau",
    alpha2: "GW",
    alpha3: "GNB",
    numeric: "624",
    emoji: "🇬🇼",
  },
  {
    name: "Guyana",
    alpha2: "GY",
    alpha3: "GUY",
    numeric: "328",
    emoji: "🇬🇾",
  },
  {
    name: "Hong Kong",
    alpha2: "HK",
    alpha3: "HKG",
    numeric: "344",
    emoji: "🇭🇰",
  },
  {
    name: "Heard Island and McDonald Islands",
    alpha2: "HM",
    alpha3: "HMD",
    numeric: "334",
    emoji: "🇭🇲",
  },
  {
    name: "Honduras",
    alpha2: "HN",
    alpha3: "HND",
    numeric: "340",
    emoji: "🇭🇳",
  },
  {
    name: "Croatia",
    alpha2: "HR",
    alpha3: "HRV",
    numeric: "191",
    emoji: "🇭🇷",
  },
  {
    name: "Haiti",
    alpha2: "HT",
    alpha3: "HTI",
    numeric: "332",
    emoji: "🇭🇹",
  },
  {
    name: "Hungary",
    alpha2: "HU",
    alpha3: "HUN",
    numeric: "348",
    emoji: "🇭🇺",
  },
  {
    name: "Indonesia",
    alpha2: "ID",
    alpha3: "IDN",
    numeric: "360",
    emoji: "🇮🇩",
  },
  {
    name: "Ireland",
    alpha2: "IE",
    alpha3: "IRL",
    numeric: "372",
    emoji: "🇮🇪",
  },
  {
    name: "Israel",
    alpha2: "IL",
    alpha3: "ISR",
    numeric: "376",
    emoji: "🇮🇱",
  },
  {
    name: "Isle of Man",
    alpha2: "IM",
    alpha3: "IMN",
    numeric: "833",
    emoji: "🇮🇲",
  },
  {
    name: "India",
    alpha2: "IN",
    alpha3: "IND",
    numeric: "356",
    emoji: "🇮🇳",
  },
  {
    name: "British Indian Ocean Territory",
    alpha2: "IO",
    alpha3: "IOT",
    numeric: "086",
    emoji: "🇮🇴",
  },
  {
    name: "Iraq",
    alpha2: "IQ",
    alpha3: "IRQ",
    numeric: "368",
    emoji: "🇮🇶",
  },
  {
    name: "Iran (Islamic Republic of)",
    alpha2: "IR",
    alpha3: "IRN",
    numeric: "364",
    emoji: "🇮🇷",
  },
  {
    name: "Iceland",
    alpha2: "IS",
    alpha3: "ISL",
    numeric: "352",
    emoji: "🇮🇸",
  },
  {
    name: "Italy",
    alpha2: "IT",
    alpha3: "ITA",
    numeric: "380",
    emoji: "🇮🇹",
  },
  {
    name: "Jersey",
    alpha2: "JE",
    alpha3: "JEY",
    numeric: "832",
    emoji: "🇯🇪",
  },
  {
    name: "Jamaica",
    alpha2: "JM",
    alpha3: "JAM",
    numeric: "388",
    emoji: "🇯🇲",
  },
  {
    name: "Jordan",
    alpha2: "JO",
    alpha3: "JOR",
    numeric: "400",
    emoji: "🇯🇴",
  },
  {
    name: "Japan",
    alpha2: "JP",
    alpha3: "JPN",
    numeric: "392",
    emoji: "🇯🇵",
  },
  {
    name: "Kenya",
    alpha2: "KE",
    alpha3: "KEN",
    numeric: "404",
    emoji: "🇰🇪",
  },
  {
    name: "Kyrgyzstan",
    alpha2: "KG",
    alpha3: "KGZ",
    numeric: "417",
    emoji: "🇰🇬",
  },
  {
    name: "Cambodia",
    alpha2: "KH",
    alpha3: "KHM",
    numeric: "116",
    emoji: "🇰🇭",
  },
  {
    name: "Kiribati",
    alpha2: "KI",
    alpha3: "KIR",
    numeric: "296",
    emoji: "🇰🇮",
  },
  {
    name: "Comoros",
    alpha2: "KM",
    alpha3: "COM",
    numeric: "174",
    emoji: "🇰🇲",
  },
  {
    name: "Saint Kitts and Nevis",
    alpha2: "KN",
    alpha3: "KNA",
    numeric: "659",
    emoji: "🇰🇳",
  },
  {
    name: "Korea (Democratic People's Republic of)",
    alpha2: "KP",
    alpha3: "PRK",
    numeric: "408",
    emoji: "🇰🇵",
  },
  {
    name: "Korea, Republic of",
    alpha2: "KR",
    alpha3: "KOR",
    numeric: "410",
    emoji: "🇰🇷",
  },
  {
    name: "Kuwait",
    alpha2: "KW",
    alpha3: "KWT",
    numeric: "414",
    emoji: "🇰🇼",
  },
  {
    name: "Cayman Islands",
    alpha2: "KY",
    alpha3: "CYM",
    numeric: "136",
    emoji: "🇰🇾",
  },
  {
    name: "Kazakhstan",
    alpha2: "KZ",
    alpha3: "KAZ",
    numeric: "398",
    emoji: "🇰🇿",
  },
  {
    name: "Lao People's Democratic Republic",
    alpha2: "LA",
    alpha3: "LAO",
    numeric: "418",
    emoji: "🇱🇦",
  },
  {
    name: "Lebanon",
    alpha2: "LB",
    alpha3: "LBN",
    numeric: "422",
    emoji: "🇱🇧",
  },
  {
    name: "Saint Lucia",
    alpha2: "LC",
    alpha3: "LCA",
    numeric: "662",
    emoji: "🇱🇨",
  },
  {
    name: "Liechtenstein",
    alpha2: "LI",
    alpha3: "LIE",
    numeric: "438",
    emoji: "🇱🇮",
  },
  {
    name: "Sri Lanka",
    alpha2: "LK",
    alpha3: "LKA",
    numeric: "144",
    emoji: "🇱🇰",
  },
  {
    name: "Liberia",
    alpha2: "LR",
    alpha3: "LBR",
    numeric: "430",
    emoji: "🇱🇷",
  },
  {
    name: "Lesotho",
    alpha2: "LS",
    alpha3: "LSO",
    numeric: "426",
    emoji: "🇱🇸",
  },
  {
    name: "Lithuania",
    alpha2: "LT",
    alpha3: "LTU",
    numeric: "440",
    emoji: "🇱🇹",
  },
  {
    name: "Luxembourg",
    alpha2: "LU",
    alpha3: "LUX",
    numeric: "442",
    emoji: "🇱🇺",
  },
  {
    name: "Latvia",
    alpha2: "LV",
    alpha3: "LVA",
    numeric: "428",
    emoji: "🇱🇻",
  },
  {
    name: "Libya",
    alpha2: "LY",
    alpha3: "LBY",
    numeric: "434",
    emoji: "🇱🇾",
  },
  {
    name: "Morocco",
    alpha2: "MA",
    alpha3: "MAR",
    numeric: "504",
    emoji: "🇲🇦",
  },
  {
    name: "Monaco",
    alpha2: "MC",
    alpha3: "MCO",
    numeric: "492",
    emoji: "🇲🇨",
  },
  {
    name: "Moldova, Republic of",
    alpha2: "MD",
    alpha3: "MDA",
    numeric: "498",
    emoji: "🇲🇩",
  },
  {
    name: "Montenegro",
    alpha2: "ME",
    alpha3: "MNE",
    numeric: "499",
    emoji: "🇲🇪",
  },
  {
    name: "Saint Martin (French part)",
    alpha2: "MF",
    alpha3: "MAF",
    numeric: "663",
    emoji: "🇲🇫",
  },
  {
    name: "Madagascar",
    alpha2: "MG",
    alpha3: "MDG",
    numeric: "450",
    emoji: "🇲🇬",
  },
  {
    name: "Marshall Islands",
    alpha2: "MH",
    alpha3: "MHL",
    numeric: "584",
    emoji: "🇲🇭",
  },
  {
    name: "North Macedonia",
    alpha2: "MK",
    alpha3: "MKD",
    numeric: "807",
    emoji: "🇲🇰",
  },
  {
    name: "Mali",
    alpha2: "ML",
    alpha3: "MLI",
    numeric: "466",
    emoji: "🇲🇱",
  },
  {
    name: "Myanmar",
    alpha2: "MM",
    alpha3: "MMR",
    numeric: "104",
    emoji: "🇲🇲",
  },
  {
    name: "Mongolia",
    alpha2: "MN",
    alpha3: "MNG",
    numeric: "496",
    emoji: "🇲🇳",
  },
  {
    name: "Macao",
    alpha2: "MO",
    alpha3: "MAC",
    numeric: "446",
    emoji: "🇲🇴",
  },
  {
    name: "Northern Mariana Islands",
    alpha2: "MP",
    alpha3: "MNP",
    numeric: "580",
    emoji: "🇲🇵",
  },
  {
    name: "Martinique",
    alpha2: "MQ",
    alpha3: "MTQ",
    numeric: "474",
    emoji: "🇲🇶",
  },
  {
    name: "Mauritania",
    alpha2: "MR",
    alpha3: "MRT",
    numeric: "478",
    emoji: "🇲🇷",
  },
  {
    name: "Montserrat",
    alpha2: "MS",
    alpha3: "MSR",
    numeric: "500",
    emoji: "🇲🇸",
  },
  {
    name: "Malta",
    alpha2: "MT",
    alpha3: "MLT",
    numeric: "470",
    emoji: "🇲🇹",
  },
  {
    name: "Mauritius",
    alpha2: "MU",
    alpha3: "MUS",
    numeric: "480",
    emoji: "🇲🇺",
  },
  {
    name: "Maldives",
    alpha2: "MV",
    alpha3: "MDV",
    numeric: "462",
    emoji: "🇲🇻",
  },
  {
    name: "Malawi",
    alpha2: "MW",
    alpha3: "MWI",
    numeric: "454",
    emoji: "🇲🇼",
  },
  {
    name: "Mexico",
    alpha2: "MX",
    alpha3: "MEX",
    numeric: "484",
    emoji: "🇲🇽",
  },
  {
    name: "Malaysia",
    alpha2: "MY",
    alpha3: "MYS",
    numeric: "458",
    emoji: "🇲🇾",
  },
  {
    name: "Mozambique",
    alpha2: "MZ",
    alpha3: "MOZ",
    numeric: "508",
    emoji: "🇲🇿",
  },
  {
    name: "Namibia",
    alpha2: "NA",
    alpha3: "NAM",
    numeric: "516",
    emoji: "🇳🇦",
  },
  {
    name: "New Caledonia",
    alpha2: "NC",
    alpha3: "NCL",
    numeric: "540",
    emoji: "🇳🇨",
  },
  {
    name: "Niger",
    alpha2: "NE",
    alpha3: "NER",
    numeric: "562",
    emoji: "🇳🇪",
  },
  {
    name: "Norfolk Island",
    alpha2: "NF",
    alpha3: "NFK",
    numeric: "574",
    emoji: "🇳🇫",
  },
  {
    name: "Nigeria",
    alpha2: "NG",
    alpha3: "NGA",
    numeric: "566",
    emoji: "🇳🇬",
  },
  {
    name: "Nicaragua",
    alpha2: "NI",
    alpha3: "NIC",
    numeric: "558",
    emoji: "🇳🇮",
  },
  {
    name: "Netherlands",
    alpha2: "NL",
    alpha3: "NLD",
    numeric: "528",
    emoji: "🇳🇱",
  },
  {
    name: "Norway",
    alpha2: "NO",
    alpha3: "NOR",
    numeric: "578",
    emoji: "🇳🇴",
  },
  {
    name: "Nepal",
    alpha2: "NP",
    alpha3: "NPL",
    numeric: "524",
    emoji: "🇳🇵",
  },
  {
    name: "Nauru",
    alpha2: "NR",
    alpha3: "NRU",
    numeric: "520",
    emoji: "🇳🇷",
  },
  {
    name: "Niue",
    alpha2: "NU",
    alpha3: "NIU",
    numeric: "570",
    emoji: "🇳🇺",
  },
  {
    name: "New Zealand",
    alpha2: "NZ",
    alpha3: "NZL",
    numeric: "554",
    emoji: "🇳🇿",
  },
  {
    name: "Oman",
    alpha2: "OM",
    alpha3: "OMN",
    numeric: "512",
    emoji: "🇴🇲",
  },
  {
    name: "Panama",
    alpha2: "PA",
    alpha3: "PAN",
    numeric: "591",
    emoji: "🇵🇦",
  },
  {
    name: "Peru",
    alpha2: "PE",
    alpha3: "PER",
    numeric: "604",
    emoji: "🇵🇪",
  },
  {
    name: "French Polynesia",
    alpha2: "PF",
    alpha3: "PYF",
    numeric: "258",
    emoji: "🇵🇫",
  },
  {
    name: "Papua New Guinea",
    alpha2: "PG",
    alpha3: "PNG",
    numeric: "598",
    emoji: "🇵🇬",
  },
  {
    name: "Philippines",
    alpha2: "PH",
    alpha3: "PHL",
    numeric: "608",
    emoji: "🇵🇭",
  },
  {
    name: "Pakistan",
    alpha2: "PK",
    alpha3: "PAK",
    numeric: "586",
    emoji: "🇵🇰",
  },
  {
    name: "Poland",
    alpha2: "PL",
    alpha3: "POL",
    numeric: "616",
    emoji: "🇵🇱",
  },
  {
    name: "Saint Pierre and Miquelon",
    alpha2: "PM",
    alpha3: "SPM",
    numeric: "666",
    emoji: "🇵🇲",
  },
  {
    name: "Pitcairn",
    alpha2: "PN",
    alpha3: "PCN",
    numeric: "612",
    emoji: "🇵🇳",
  },
  {
    name: "Puerto Rico",
    alpha2: "PR",
    alpha3: "PRI",
    numeric: "630",
    emoji: "🇵🇷",
  },
  {
    name: "Palestine, State of",
    alpha2: "PS",
    alpha3: "PSE",
    numeric: "275",
    emoji: "🇵🇸",
  },
  {
    name: "Portugal",
    alpha2: "PT",
    alpha3: "PRT",
    numeric: "620",
    emoji: "🇵🇹",
  },
  {
    name: "Palau",
    alpha2: "PW",
    alpha3: "PLW",
    numeric: "585",
    emoji: "🇵🇼",
  },
  {
    name: "Paraguay",
    alpha2: "PY",
    alpha3: "PRY",
    numeric: "600",
    emoji: "🇵🇾",
  },
  {
    name: "Qatar",
    alpha2: "QA",
    alpha3: "QAT",
    numeric: "634",
    emoji: "🇶🇦",
  },
  {
    name: "Réunion",
    alpha2: "RE",
    alpha3: "REU",
    numeric: "638",
    emoji: "🇷🇪",
  },
  {
    name: "Romania",
    alpha2: "RO",
    alpha3: "ROU",
    numeric: "642",
    emoji: "🇷🇴",
  },
  {
    name: "Serbia",
    alpha2: "RS",
    alpha3: "SRB",
    numeric: "688",
    emoji: "🇷🇸",
  },
  {
    name: "Russian Federation",
    alpha2: "RU",
    alpha3: "RUS",
    numeric: "643",
    emoji: "🇷🇺",
  },
  {
    name: "Rwanda",
    alpha2: "RW",
    alpha3: "RWA",
    numeric: "646",
    emoji: "🇷🇼",
  },
  {
    name: "Saudi Arabia",
    alpha2: "SA",
    alpha3: "SAU",
    numeric: "682",
    emoji: "🇸🇦",
  },
  {
    name: "Solomon Islands",
    alpha2: "SB",
    alpha3: "SLB",
    numeric: "090",
    emoji: "🇸🇧",
  },
  {
    name: "Seychelles",
    alpha2: "SC",
    alpha3: "SYC",
    numeric: "690",
    emoji: "🇸🇨",
  },
  {
    name: "Sudan",
    alpha2: "SD",
    alpha3: "SDN",
    numeric: "729",
    emoji: "🇸🇩",
  },
  {
    name: "Sweden",
    alpha2: "SE",
    alpha3: "SWE",
    numeric: "752",
    emoji: "🇸🇪",
  },
  {
    name: "Singapore",
    alpha2: "SG",
    alpha3: "SGP",
    numeric: "702",
    emoji: "🇸🇬",
  },
  {
    name: "Saint Helena, Ascension and Tristan da Cunha",
    alpha2: "SH",
    alpha3: "SHN",
    numeric: "654",
    emoji: "🇸🇭",
  },
  {
    name: "Slovenia",
    alpha2: "SI",
    alpha3: "SVN",
    numeric: "705",
    emoji: "🇸🇮",
  },
  {
    name: "Svalbard and Jan Mayen",
    alpha2: "SJ",
    alpha3: "SJM",
    numeric: "744",
    emoji: "🇸🇯",
  },
  {
    name: "Slovakia",
    alpha2: "SK",
    alpha3: "SVK",
    numeric: "703",
    emoji: "🇸🇰",
  },
  {
    name: "Sierra Leone",
    alpha2: "SL",
    alpha3: "SLE",
    numeric: "694",
    emoji: "🇸🇱",
  },
  {
    name: "San Marino",
    alpha2: "SM",
    alpha3: "SMR",
    numeric: "674",
    emoji: "🇸🇲",
  },
  {
    name: "Senegal",
    alpha2: "SN",
    alpha3: "SEN",
    numeric: "686",
    emoji: "🇸🇳",
  },
  {
    name: "Somalia",
    alpha2: "SO",
    alpha3: "SOM",
    numeric: "706",
    emoji: "🇸🇴",
  },
  {
    name: "Suriname",
    alpha2: "SR",
    alpha3: "SUR",
    numeric: "740",
    emoji: "🇸🇷",
  },
  {
    name: "South Sudan",
    alpha2: "SS",
    alpha3: "SSD",
    numeric: "728",
    emoji: "🇸🇸",
  },
  {
    name: "Sao Tome and Principe",
    alpha2: "ST",
    alpha3: "STP",
    numeric: "678",
    emoji: "🇸🇹",
  },
  {
    name: "El Salvador",
    alpha2: "SV",
    alpha3: "SLV",
    numeric: "222",
    emoji: "🇸🇻",
  },
  {
    name: "Sint Maarten (Dutch part)",
    alpha2: "SX",
    alpha3: "SXM",
    numeric: "534",
    emoji: "🇸🇽",
  },
  {
    name: "Syrian Arab Republic",
    alpha2: "SY",
    alpha3: "SYR",
    numeric: "760",
    emoji: "🇸🇾",
  },
  {
    name: "Eswatini",
    alpha2: "SZ",
    alpha3: "SWZ",
    numeric: "748",
    emoji: "🇸🇿",
  },
  {
    name: "Turks and Caicos Islands",
    alpha2: "TC",
    alpha3: "TCA",
    numeric: "796",
    emoji: "🇹🇨",
  },
  {
    name: "Chad",
    alpha2: "TD",
    alpha3: "TCD",
    numeric: "148",
    emoji: "🇹🇩",
  },
  {
    name: "French Southern Territories",
    alpha2: "TF",
    alpha3: "ATF",
    numeric: "260",
    emoji: "🇹🇫",
  },
  {
    name: "Togo",
    alpha2: "TG",
    alpha3: "TGO",
    numeric: "768",
    emoji: "🇹🇬",
  },
  {
    name: "Thailand",
    alpha2: "TH",
    alpha3: "THA",
    numeric: "764",
    emoji: "🇹🇭",
  },
  {
    name: "Tajikistan",
    alpha2: "TJ",
    alpha3: "TJK",
    numeric: "762",
    emoji: "🇹🇯",
  },
  {
    name: "Tokelau",
    alpha2: "TK",
    alpha3: "TKL",
    numeric: "772",
    emoji: "🇹🇰",
  },
  {
    name: "Timor-Leste",
    alpha2: "TL",
    alpha3: "TLS",
    numeric: "626",
    emoji: "🇹🇱",
  },
  {
    name: "Turkmenistan",
    alpha2: "TM",
    alpha3: "TKM",
    numeric: "795",
    emoji: "🇹🇲",
  },
  {
    name: "Tunisia",
    alpha2: "TN",
    alpha3: "TUN",
    numeric: "788",
    emoji: "🇹🇳",
  },
  {
    name: "Tonga",
    alpha2: "TO",
    alpha3: "TON",
    numeric: "776",
    emoji: "🇹🇴",
  },
  {
    name: "Türkiye",
    alpha2: "TR",
    alpha3: "TUR",
    numeric: "792",
    emoji: "🇹🇷",
  },
  {
    name: "Trinidad and Tobago",
    alpha2: "TT",
    alpha3: "TTO",
    numeric: "780",
    emoji: "🇹🇹",
  },
  {
    name: "Tuvalu",
    alpha2: "TV",
    alpha3: "TUV",
    numeric: "798",
    emoji: "🇹🇻",
  },
  {
    name: "Taiwan, Province of China",
    alpha2: "TW",
    alpha3: "TWN",
    numeric: "158",
    emoji: "🇹🇼",
  },
  {
    name: "Tanzania, United Republic of",
    alpha2: "TZ",
    alpha3: "TZA",
    numeric: "834",
    emoji: "🇹🇿",
  },
  {
    name: "Ukraine",
    alpha2: "UA",
    alpha3: "UKR",
    numeric: "804",
    emoji: "🇺🇦",
  },
  {
    name: "Uganda",
    alpha2: "UG",
    alpha3: "UGA",
    numeric: "800",
    emoji: "🇺🇬",
  },
  {
    name: "United States Minor Outlying Islands",
    alpha2: "UM",
    alpha3: "UMI",
    numeric: "581",
    emoji: "🇺🇲",
  },
  {
    name: "United States of America",
    alpha2: "US",
    alpha3: "USA",
    numeric: "840",
    emoji: "🇺🇸",
  },
  {
    name: "Uruguay",
    alpha2: "UY",
    alpha3: "URY",
    numeric: "858",
    emoji: "🇺🇾",
  },
  {
    name: "Uzbekistan",
    alpha2: "UZ",
    alpha3: "UZB",
    numeric: "860",
    emoji: "🇺🇿",
  },
  {
    name: "Holy See",
    alpha2: "VA",
    alpha3: "VAT",
    numeric: "336",
    emoji: "🇻🇦",
  },
  {
    name: "Saint Vincent and the Grenadines",
    alpha2: "VC",
    alpha3: "VCT",
    numeric: "670",
    emoji: "🇻🇨",
  },
  {
    name: "Venezuela (Bolivarian Republic of)",
    alpha2: "VE",
    alpha3: "VEN",
    numeric: "862",
    emoji: "🇻🇪",
  },
  {
    name: "Virgin Islands (British)",
    alpha2: "VG",
    alpha3: "VGB",
    numeric: "092",
    emoji: "🇻🇬",
  },
  {
    name: "Virgin Islands (U.S.)",
    alpha2: "VI",
    alpha3: "VIR",
    numeric: "850",
    emoji: "🇻🇮",
  },
  {
    name: "Viet Nam",
    alpha2: "VN",
    alpha3: "VNM",
    numeric: "704",
    emoji: "🇻🇳",
  },
  {
    name: "Vanuatu",
    alpha2: "VU",
    alpha3: "VUT",
    numeric: "548",
    emoji: "🇻🇺",
  },
  {
    name: "Wallis and Futuna",
    alpha2: "WF",
    alpha3: "WLF",
    numeric: "876",
    emoji: "🇼🇫",
  },
  {
    name: "Samoa",
    alpha2: "WS",
    alpha3: "WSM",
    numeric: "882",
    emoji: "🇼🇸",
  },
  {
    name: "Yemen",
    alpha2: "YE",
    alpha3: "YEM",
    numeric: "887",
    emoji: "🇾🇪",
  },
  {
    name: "Mayotte",
    alpha2: "YT",
    alpha3: "MYT",
    numeric: "175",
    emoji: "🇾🇹",
  },
  {
    name: "South Africa",
    alpha2: "ZA",
    alpha3: "ZAF",
    numeric: "710",
    emoji: "🇿🇦",
  },
  {
    name: "Zambia",
    alpha2: "ZM",
    alpha3: "ZMB",
    numeric: "894",
    emoji: "🇿🇲",
  },
  {
    name: "Zimbabwe",
    alpha2: "ZW",
    alpha3: "ZWE",
    numeric: "716",
    emoji: "🇿🇼",
  },
];

export const alphaToInfo = (alpha: string): Country => {
  const country = iso31661.find((c) => c.alpha2 === alpha);
  return country
    ? { ...country, name: country.name.toUpperCase() }
    : {
        name: "Unknown",
        emoji: "Unknown",
        alpha2: alpha,
        alpha3: "Unknown",
        numeric: "Unknown",
      };
};
