// information about each state
let data = [  
{
"state": "Alabama",
"abbreviations": "AL",
"population": "5,190,726",
"unemployed": "65,864",
"foodStampRecipient": "763,102",
"gdp": "$241,463,978,610",
"debt": "$21,107,315,128",
"debtToGdpRatio": "8.82%",
"inStateRevenue": "$45,536,312,167",
"spending": "$53,974,144,762",
"debtPerCitizen": "$4,078",
"timeStamp": "2022-02-14T21:50:13.221Z"
},
{
"state": "Alaska",
"abbreviations": "AK",
"population": "735,928",
"unemployed": "20,870",
"foodStampRecipient": "90,342",
"gdp": "$51,967,027,109",
"debt": "$9,774,904,991",
"debtToGdpRatio": "18.99%",
"inStateRevenue": "$9,674,904,992",
"spending": "$14,800,000,000",
"debtPerCitizen": "$13,286",
"timeStamp": "2022-02-14T21:50:17.058Z"
},
{
"state": "Arizona",
"abbreviations": "AZ",
"population": "6,976,642",
"unemployed": "184,294",
"foodStampRecipient": "822,399",
"gdp": "$405,180,415,959",
"debt": "$42,662,547,496",
"debtToGdpRatio": "10.63%",
"inStateRevenue": "$60,110,837,687",
"spending": "$70,798,480,177",
"debtPerCitizen": "$6,101",
"timeStamp": "2022-02-14T21:50:20.037Z"
},
{
"state": "Arkansas",
"abbreviations": "AR",
"population": "3,002,891",
"unemployed": "49,057",
"foodStampRecipient": "304,405",
"gdp": "$138,646,405,422",
"debt": "$20,287,262,576",
"debtToGdpRatio": "14.78%",
"inStateRevenue": "$24,661,787,730",
"spending": "$31,349,430,182",
"debtPerCitizen": "$6,754",
"timeStamp": "2022-02-14T21:50:22.957Z"
},
{
"state": "California",
"abbreviations": "CA",
"population": "39,573,961",
"unemployed": "1,343,166",
"foodStampRecipient": "4,259,558",
"gdp": "$3,322,743,335,216",
"debt": "$537,942,214,450",
"debtToGdpRatio": "16.35%",
"inStateRevenue": "$658,434,239,191",
"spending": "$704,372,831,053",
"debtPerCitizen": "$13,595",
"timeStamp": "2022-02-14T21:50:26.644Z"
},
{
"state": "Colorado",
"abbreviations": "CO",
"population": "5,794,302",
"unemployed": "166,361",
"foodStampRecipient": "579,801",
"gdp": "$420,709,630,825",
"debt": "$78,272,247,246",
"debtToGdpRatio": "18.79%",
"inStateRevenue": "$60,586,123,629",
"spending": "$70,661,408,426",
"debtPerCitizen": "$13,513",
"timeStamp": "2022-02-14T21:50:30.416Z"
},
{
"state": "Connecticut",
"abbreviations": "CT",
"population": "3,661,828",
"unemployed": "111,790",
"foodStampRecipient": "368,558",
"gdp": "$299,825,393,523",
"debt": "$57,411,598,506",
"debtToGdpRatio": "19.34%",
"inStateRevenue": "$48,849,051,063",
"spending": "$45,924,335,745",
"debtPerCitizen": "$15,700",
"timeStamp": "2022-02-14T21:50:34.163Z"
},
{
"state": "Delaware",
"abbreviations": "DE",
"population": "1,012,193",
"unemployed": "25,054",
"foodStampRecipient": "110,882",
"gdp": "$80,792,489,600",
"debt": "$7,337,452,562",
"debtToGdpRatio": "9.17%",
"inStateRevenue": "$11,624,715,379",
"spending": "$14,087,262,815",
"debtPerCitizen": "$7,315",
"timeStamp": "2022-02-14T21:50:37.847Z"
},
{
"state": "Florida",
"abbreviations": "FL",
"population": "21,621,277",
"unemployed": "476,480",
"foodStampRecipient": "3,136,730",
"gdp": "$1,180,321,439,389",
"debt": "$133,673,766,927",
"debtToGdpRatio": "11.44%",
"inStateRevenue": "$180,483,468,871",
"spending": "$218,170,731,770",
"debtPerCitizen": "$6,185",
"timeStamp": "2022-02-14T21:50:41.612Z"
},
{
"state": "Georgia",
"abbreviations": "GA",
"population": "10,841,780",
"unemployed": "153,529",
"foodStampRecipient": "1,510,877",
"gdp": "$666,639,543,821",
"debt": "$64,386,504,346",
"debtToGdpRatio": "9.75%",
"inStateRevenue": "$88,497,344,935",
"spending": "$99,035,935,410",
"debtPerCitizen": "$5,945",
"timeStamp": "2022-02-14T21:50:45.360Z"
},
{
"state": "Hawaii",
"abbreviations": "HI",
"population": "1,509,426",
"unemployed": "39,682",
"foodStampRecipient": "206,288",
"gdp": "$93,784,248,007",
"debt": "$18,787,262,988",
"debtToGdpRatio": "20.24%",
"inStateRevenue": "$17,137,452,597",
"spending": "$19,987,262,989",
"debtPerCitizen": "$12,487",
"timeStamp": "2022-02-14T21:50:49.124Z"
},
{
"state": "Idaho",
"abbreviations": "ID",
"population": "1,910,638",
"unemployed": "24,353",
"foodStampRecipient": "121,414",
"gdp": "$91,348,293,853",
"debt": "$6,337,452,606",
"debtToGdpRatio": "7.01%",
"inStateRevenue": "$15,437,073,465",
"spending": "$17,237,073,466",
"debtPerCitizen": "$3,328",
"timeStamp": "2022-02-14T21:50:52.069Z"
},
{
"state": "Illinois",
"abbreviations": "IL",
"population": "13,005,886",
"unemployed": "359,710",
"foodStampRecipient": "1,942,710",
"gdp": "$921,196,797,896",
"debt": "$166,586,504,946",
"debtToGdpRatio": "18.27%",
"inStateRevenue": "$137,384,230,559",
"spending": "$161,523,199,440",
"debtPerCitizen": "$12,826",
"timeStamp": "2022-02-14T21:50:54.847Z"
},
{
"state": "Indiana",
"abbreviations": "IN",
"population": "6,858,803",
"unemployed": "106,985",
"foodStampRecipient": "611,833",
"gdp": "$399,090,549,293",
"debt": "$50,287,263,139",
"debtToGdpRatio": "12.72%",
"inStateRevenue": "$60,410,841,984",
"spending": "$71,823,578,844",
"debtPerCitizen": "$7,339",
"timeStamp": "2022-02-14T21:50:58.554Z"
},
{
"state": "Iowa",
"abbreviations": "IA",
"population": "3,238,888",
"unemployed": "62,835",
"foodStampRecipient": "267,526",
"gdp": "$207,462,127,836",
"debt": "$21,162,168,479",
"debtToGdpRatio": "10.30%",
"inStateRevenue": "$40,173,768,644",
"spending": "$39,649,431,683",
"debtPerCitizen": "$6,543",
"timeStamp": "2022-02-14T21:51:02.243Z"
},
{
"state": "Kansas",
"abbreviations": "KS",
"population": "2,971,647",
"unemployed": "56,748",
"foodStampRecipient": "192,249",
"gdp": "$185,640,035,920",
"debt": "$25,937,452,649",
"debtToGdpRatio": "14.11%",
"inStateRevenue": "$31,899,242,413",
"spending": "$33,974,526,509",
"debtPerCitizen": "$8,737",
"timeStamp": "2022-02-14T21:51:05.908Z"
},
{
"state": "Kentucky",
"abbreviations": "KY",
"population": "4,558,292",
"unemployed": "82,130",
"foodStampRecipient": "534,223",
"gdp": "$224,107,818,852",
"debt": "$59,273,769,139",
"debtToGdpRatio": "26.71%",
"inStateRevenue": "$36,823,958,510",
"spending": "$48,137,073,939",
"debtPerCitizen": "$13,017",
"timeStamp": "2022-02-14T21:51:08.549Z"
},
{
"state": "Louisiana",
"abbreviations": "LA",
"population": "4,670,077",
"unemployed": "108,375",
"foodStampRecipient": "806,767",
"gdp": "$253,136,278,393",
"debt": "$31,062,925,963",
"debtToGdpRatio": "12.39%",
"inStateRevenue": "$37,974,148,076",
"spending": "$52,874,526,710",
"debtPerCitizen": "$6,653",
"timeStamp": "2022-02-14T21:51:12.411Z"
},
{
"state": "Maine",
"abbreviations": "ME",
"population": "1,387,303",
"unemployed": "32,102",
"foodStampRecipient": "159,098",
"gdp": "$70,744,180,741",
"debt": "$8,674,905,360",
"debtToGdpRatio": "12.38%",
"inStateRevenue": "$13,999,621,463",
"spending": "$14,687,263,414",
"debtPerCitizen": "$6,263",
"timeStamp": "2022-02-14T21:51:15.267Z"
},
{
"state": "Maryland",
"abbreviations": "MD",
"population": "6,358,035",
"unemployed": "173,266",
"foodStampRecipient": "864,138",
"gdp": "$455,320,511,302",
"debt": "$60,549,053,868",
"debtToGdpRatio": "13.43%",
"inStateRevenue": "$65,248,675,421",
"spending": "$81,723,580,809",
"debtPerCitizen": "$9,548",
"timeStamp": "2022-02-14T21:51:19.440Z"
},
{
"state": "Massachusetts",
"abbreviations": "MA",
"population": "7,218,796",
"unemployed": "191,232",
"foodStampRecipient": "1,000,374",
"gdp": "$624,517,859,478",
"debt": "$99,899,243,261",
"debtToGdpRatio": "16.15%",
"inStateRevenue": "$83,459,898,785",
"spending": "$104,386,128,451",
"debtPerCitizen": "$13,871",
"timeStamp": "2022-02-14T21:51:22.497Z"
},
{
"state": "Michigan",
"abbreviations": "MI",
"population": "10,201,690",
"unemployed": "282,864",
"foodStampRecipient": "1,275,249",
"gdp": "$545,755,330,242",
"debt": "$77,836,317,910",
"debtToGdpRatio": "14.41%",
"inStateRevenue": "$94,722,446,685",
"spending": "$117,635,561,372",
"debtPerCitizen": "$7,638",
"timeStamp": "2022-02-14T21:51:26.461Z"
},
{
"state": "Minnesota",
"abbreviations": "MN",
"population": "5,798,398",
"unemployed": "103,334",
"foodStampRecipient": "448,095",
"gdp": "$399,496,557,433",
"debt": "$54,549,810,911",
"debtToGdpRatio": "13.79%",
"inStateRevenue": "$71,273,392,745",
"spending": "$73,849,432,732",
"debtPerCitizen": "$9,421",
"timeStamp": "2022-02-14T21:51:30.121Z"
},
{
"state": "Mississippi",
"abbreviations": "MS",
"population": "2,940,840",
"unemployed": "67,810",
"foodStampRecipient": "434,162",
"gdp": "$122,609,716,245",
"debt": "$15,149,810,948",
"debtToGdpRatio": "12.48%",
"inStateRevenue": "$25,374,527,369",
"spending": "$31,762,169,158",
"debtPerCitizen": "$5,149",
"timeStamp": "2022-02-14T21:51:33.156Z"
},
{
"state": "Missouri",
"abbreviations": "MO",
"population": "6,178,947",
"unemployed": "111,239",
"foodStampRecipient": "656,386",
"gdp": "$344,180,090,424",
"debt": "$46,487,263,729",
"debtToGdpRatio": "13.64%",
"inStateRevenue": "$54,486,129,631",
"spending": "$64,061,413,157",
"debtPerCitizen": "$7,526",
"timeStamp": "2022-02-14T21:51:36.011Z"
},
{
"state": "Montana",
"abbreviations": "MT",
"population": "1,105,457",
"unemployed": "16,418",
"foodStampRecipient": "96,940",
"gdp": "$54,808,979,481",
"debt": "$5,400,000,000",
"debtToGdpRatio": "9.95%",
"inStateRevenue": "$9,649,811,015",
"spending": "$11,437,452,753",
"debtPerCitizen": "$4,893",
"timeStamp": "2022-02-14T21:51:38.595Z"
},
{
"state": "Nebraska",
"abbreviations": "NE",
"population": "1,998,748",
"unemployed": "18,782",
"foodStampRecipient": "159,470",
"gdp": "$138,747,917,072",
"debt": "$14,374,905,524",
"debtToGdpRatio": "10.47%",
"inStateRevenue": "$23,737,074,867",
"spending": "$24,724,716,578",
"debtPerCitizen": "$7,204",
"timeStamp": "2022-02-14T21:51:41.374Z"
},
{
"state": "Nevada",
"abbreviations": "NV",
"population": "3,138,232",
"unemployed": "109,498",
"foodStampRecipient": "423,679",
"gdp": "$183,407,086,504",
"debt": "$31,674,527,741",
"debtToGdpRatio": "17.44%",
"inStateRevenue": "$29,336,697,162",
"spending": "$32,849,433,288",
"debtPerCitizen": "$10,103",
"timeStamp": "2022-02-14T21:51:44.167Z"
},
{
"state": "New Hampshire",
"abbreviations": "NH",
"population": "1,402,020",
"unemployed": "20,738",
"foodStampRecipient": "67,464",
"gdp": "$90,536,315,359",
"debt": "$10,374,905,568",
"debtToGdpRatio": "11.57%",
"inStateRevenue": "$11,874,905,570",
"spending": "$14,012,358,357",
"debtPerCitizen": "$7,411",
"timeStamp": "2022-02-14T21:51:47.966Z"
},
{
"state": "New Jersey",
"abbreviations": "NJ",
"population": "9,848,157",
"unemployed": "299,794",
"foodStampRecipient": "932,469",
"gdp": "$660,549,711,826",
"debt": "$88,212,736,015",
"debtToGdpRatio": "13.48%",
"inStateRevenue": "$107,135,187,055",
"spending": "$118,561,036,708",
"debtPerCitizen": "$9,003",
"timeStamp": "2022-02-14T21:51:51.731Z"
},
{
"state": "New Mexico",
"abbreviations": "NM",
"population": "2,145,965",
"unemployed": "60,144",
"foodStampRecipient": "561,995",
"gdp": "$105,659,534,941",
"debt": "$16,812,358,426",
"debtToGdpRatio": "16.07%",
"inStateRevenue": "$23,937,075,279",
"spending": "$27,662,169,668",
"debtPerCitizen": "$7,844",
"timeStamp": "2022-02-14T21:51:55.452Z"
},
{
"state": "New York",
"abbreviations": "NY",
"population": "21,228,967",
"unemployed": "621,134",
"foodStampRecipient": "2,788,414",
"gdp": "$1,794,689,630,857",
"debt": "$363,622,829,741",
"debtToGdpRatio": "20.46%",
"inStateRevenue": "$340,469,244,118",
"spending": "$395,032,923,602",
"debtPerCitizen": "$17,203",
"timeStamp": "2022-02-14T21:51:59.209Z"
},
{
"state": "North Carolina",
"abbreviations": "NC",
"population": "10,372,454",
"unemployed": "202,099",
"foodStampRecipient": "1,718,508",
"gdp": "$631,419,762,521",
"debt": "$50,936,698,132",
"debtToGdpRatio": "8.14%",
"inStateRevenue": "$96,747,547,232",
"spending": "$112,460,283,102",
"debtPerCitizen": "$4,908",
"timeStamp": "2022-02-14T21:52:02.948Z"
},
{
"state": "North Dakota",
"abbreviations": "ND",
"population": "802,505",
"unemployed": "12,930",
"foodStampRecipient": "51,561",
"gdp": "$56,635,947,376",
"debt": "$11,562,169,875",
"debtToGdpRatio": "20.62%",
"inStateRevenue": "$11,112,358,518",
"spending": "$10,637,452,838",
"debtPerCitizen": "$14,445",
"timeStamp": "2022-02-14T21:52:05.586Z"
},
{
"state": "Ohio",
"abbreviations": "OH",
"population": "11,951,124",
"unemployed": "280,789",
"foodStampRecipient": "1,521,457",
"gdp": "$718,302,153,337",
"debt": "$88,711,981,371",
"debtToGdpRatio": "12.48%",
"inStateRevenue": "$115,384,623,971",
"spending": "$143,160,661,237",
"debtPerCitizen": "$7,431",
"timeStamp": "2022-02-14T21:52:09.439Z"
},
{
"state": "Oklahoma",
"abbreviations": "OK",
"population": "3,962,627",
"unemployed": "48,982",
"foodStampRecipient": "635,410",
"gdp": "$193,049,413,747",
"debt": "$22,762,170,033",
"debtToGdpRatio": "11.91%",
"inStateRevenue": "$33,449,434,345",
"spending": "$38,711,981,482",
"debtPerCitizen": "$5,745",
"timeStamp": "2022-02-14T21:52:12.363Z"
},
{
"state": "Oregon",
"abbreviations": "OR",
"population": "4,264,085",
"unemployed": "92,843",
"foodStampRecipient": "668,427",
"gdp": "$269,274,499,053",
"debt": "$46,498,868,997",
"debtToGdpRatio": "17.45%",
"inStateRevenue": "$55,348,303,494",
"spending": "$67,498,491,993",
"debtPerCitizen": "$10,911",
"timeStamp": "2022-02-14T21:52:16.105Z"
},
{
"state": "Pennsylvania",
"abbreviations": "PA",
"population": "13,278,583",
"unemployed": "366,867",
"foodStampRecipient": "1,776,910",
"gdp": "$827,108,142,355",
"debt": "$122,249,811,541",
"debtToGdpRatio": "14.93%",
"inStateRevenue": "$133,409,343,302",
"spending": "$171,759,908,681",
"debtPerCitizen": "$9,224",
"timeStamp": "2022-02-14T21:52:19.829Z"
},
{
"state": "Rhode Island",
"abbreviations": "RI",
"population": "1,149,636",
"unemployed": "28,673",
"foodStampRecipient": "138,310",
"gdp": "$64,146,809,154",
"debt": "$12,512,358,683",
"debtToGdpRatio": "19.70%",
"inStateRevenue": "$11,662,170,256",
"spending": "$14,449,811,577",
"debtPerCitizen": "$10,928",
"timeStamp": "2022-02-14T21:52:22.477Z"
},
{
"state": "South Carolina",
"abbreviations": "SC",
"population": "5,076,792",
"unemployed": "91,591",
"foodStampRecipient": "613,381",
"gdp": "$258,008,211,122",
"debt": "$39,886,887,734",
"debtToGdpRatio": "15.62%",
"inStateRevenue": "$47,374,152,244",
"spending": "$57,174,152,246",
"debtPerCitizen": "$7,851",
"timeStamp": "2022-02-14T21:52:25.425Z"
},
{
"state": "South Dakota",
"abbreviations": "SD",
"population": "889,427",
"unemployed": "12,961",
"foodStampRecipient": "69,673",
"gdp": "$59,376,398,137",
"debt": "$5,837,452,911",
"debtToGdpRatio": "9.93%",
"inStateRevenue": "$7,174,905,824",
"spending": "$8,574,905,823",
"debtPerCitizen": "$6,565",
"timeStamp": "2022-02-14T21:52:28.227Z"
},
{
"state": "Tennessee",
"abbreviations": "TN",
"population": "7,023,092",
"unemployed": "135,768",
"foodStampRecipient": "827,846",
"gdp": "$387,113,817,798",
"debt": "$48,261,793,858",
"debtToGdpRatio": "12.60%",
"inStateRevenue": "$62,148,681,871",
"spending": "$70,861,417,252",
"debtPerCitizen": "$6,881",
"timeStamp": "2022-02-14T21:52:31.216Z"
},
{
"state": "Texas",
"abbreviations": "TX",
"population": "29,351,168",
"unemployed": "747,660",
"foodStampRecipient": "3,131,644",
"gdp": "$1,854,066,109,088",
"debt": "$315,996,611,175",
"debtToGdpRatio": "17.21%",
"inStateRevenue": "$257,532,181,483",
"spending": "$313,007,840,424",
"debtPerCitizen": "$10,773",
"timeStamp": "2022-02-14T21:52:34.907Z"
},
{
"state": "Utah",
"abbreviations": "UT",
"population": "3,361,865",
"unemployed": "36,290",
"foodStampRecipient": "148,163",
"gdp": "$213,044,549,035",
"debt": "$22,712,358,828",
"debtToGdpRatio": "10.76%",
"inStateRevenue": "$35,361,417,679",
"spending": "$39,149,058,859",
"debtPerCitizen": "$6,772",
"timeStamp": "2022-02-14T21:52:37.873Z"
},
{
"state": "Vermont",
"abbreviations": "VT",
"population": "669,314",
"unemployed": "8,517",
"foodStampRecipient": "70,177",
"gdp": "$34,712,356,382",
"debt": "$4,537,452,951",
"debtToGdpRatio": "13.20%",
"inStateRevenue": "$7,312,358,856",
"spending": "$9,512,358,859",
"debtPerCitizen": "$6,803",
"timeStamp": "2022-02-14T21:52:40.548Z"
},
{
"state": "Virginia",
"abbreviations": "VA",
"population": "8,763,175",
"unemployed": "149,662",
"foodStampRecipient": "754,273",
"gdp": "$594,372,982,215",
"debt": "$62,875,282,217",
"debtToGdpRatio": "10.68%",
"inStateRevenue": "$95,634,442,667",
"spending": "$98,623,212,638",
"debtPerCitizen": "$7,185",
"timeStamp": "2022-02-14T21:52:44.197Z"
},
{
"state": "Washington",
"abbreviations": "WA",
"population": "7,829,522",
"unemployed": "192,351",
"foodStampRecipient": "845,543",
"gdp": "$674,353,502,386",
"debt": "$101,385,760,039",
"debtToGdpRatio": "15.18%",
"inStateRevenue": "$103,846,802,236",
"spending": "$110,560,289,788",
"debtPerCitizen": "$12,968",
"timeStamp": "2022-02-14T21:52:47.860Z"
},
{
"state": "West Virginia",
"abbreviations": "WV",
"population": "1,795,873",
"unemployed": "33,346",
"foodStampRecipient": "295,169",
"gdp": "$76,732,578,192",
"debt": "$16,437,076,845",
"debtToGdpRatio": "21.64%",
"inStateRevenue": "$15,162,170,889",
"spending": "$19,887,264,920",
"debtPerCitizen": "$9,153",
"timeStamp": "2022-02-14T21:52:50.578Z"
},
{
"state": "Wisconsin",
"abbreviations": "WI",
"population": "5,991,700",
"unemployed": "97,647",
"foodStampRecipient": "784,030",
"gdp": "$360,013,830,876",
"debt": "$51,424,341,927",
"debtToGdpRatio": "14.43%",
"inStateRevenue": "$51,598,871,874",
"spending": "$68,749,059,900",
"debtPerCitizen": "$8,595",
"timeStamp": "2022-02-14T21:52:54.378Z"
},
{
"state": "Wyoming",
"abbreviations": "WY",
"population": "574,228",
"unemployed": "11,699",
"foodStampRecipient": "29,797",
"gdp": "$36,945,315,761",
"debt": "$2,037,453,004",
"debtToGdpRatio": "5.57%",
"inStateRevenue": "$7,574,906,012",
"spending": "$9,937,453,004",
"debtPerCitizen": "$3,546",
"timeStamp": "2022-02-14T21:52:57.382Z"
}
]

// creates variables relating to the state's position in the data list
let alabama = data[0];
let alaska = data[1];
let arizona = data[2];
let arkansas = data[3];
let california = data[4];
let colorado = data[5];
let connecticut = data[6];
let delaware = data[7];
let florida = data[8];
let georgia = data[9];
let hawaii = data[10];
let idaho = data[11];
let illinois = data[12];
let india = data[13];
let iowa = data[14];
let kansas = data[15];
let kentuky = data[16];
let louisiana = data[17];
let maine = data[18];
let maryland = data[19];
let massachusetts = data[20];
let michigan = data[21];
let minnesota = data[22];
let mississippi = data[23];
let missouri = data[24];
let montana = data[25];
let nebraska = data[26];
let nevada = data[27];
let newhampshire = data[28];
let newjersey = data[29];
let newmexico = data[30];
let newyork = data[31];
let northcarolina = data[32];
let northdakota = data[33];
let ohio = data[34];
let oklahoma = data[35];
let oregon = data[36];
let pennsylvania = data[37];
let rhodeisland = data[38];
let southcarolina = data[39];
let southdakota = data[40];
let tennessee = data[41];
let texas =  data[42];
let utah = data[43];
let vermont = data[44];
let virginia = data[45];
let washington = data[46];
let westvirginia = data[47];
let wisconsin = data[48];
let wyoming = data[49];

let orign = document.getElementById('yourState');
let want = document.getElementById('wantedState');
let comp = document.getElementById('comparator');
let y;
let z;

// takes the text boxes and turns them into variables relating to the above data. Then it prints the data requested to a readable output
function compare(){
let o = orign.value.toLowerCase();
o = o.split(" ").join('');
let w = want.value.toLowerCase();
w = w.split(" ").join("");
let x = comp.value.toLowerCase();
    if(x == "population"){
        y = eval(o).population;
        z = eval(w).population;
    }else if(x == "amount unemployed"){
        y = eval(o).unemployed;
        z = eval(w).unemployed;
    }else if(x == "amount of food stamp recipents"){
        y = eval(o).foodStampRecipient;
        z = eval(w).foodStampRecipient;
    }else if(x == "gdp"){
        y = eval(o).gdp;
        z = eval(w).gdp;
    }else if(x == "debt"){
        y = eval(o).debt;
        z = eval(w).debt;
    }else if(x == "debt to gpd"){
        y = eval(o).debtToGdpRatio;
        z = eval(w).debtToGdpRatio;
    }else if(x == "state revenue"){
        y = eval(o).inStateRevenue;
        z = eval(w).inStateRevenue;
    }else if(x == "average state spending"){
        y = eval(o).spending;
        z = eval(w).spending;
    }else if(x == "average debt per citizen"){
        y = eval(o).debtPerCitizen;
        z = eval(w).debtPerCitizen;
    }
    document.getElementById('text').innerHTML = `${o}'s ${x} is ${y} and ${w}'s ${x} is ${z}`;
}

// creates functions for <a> elements that auto complete the text input's field when clicked
function AL(){orign.value = 'Alabama';}
function AK(){orign.value = 'Alaska';}
function AZ(){orign.value = 'Arizona';}
function AR(){orign.value = 'Arkansas';}
function CA(){orign.value = 'California';}
function CO(){orign.value = 'Colorado';}
function CT(){orign.value = 'Connecticut';}
function DE(){orign.value = 'Delaware';}
function FL(){orign.value = 'Florida';}
function GA(){orign.value = 'Georgia';}
function HI(){orign.value = 'Hawaii';}
function ID(){orign.value = 'Idaho';}
function IL(){orign.value = 'Illinois';}
function IN(){orign.value = 'Indiana';}
function IA(){orign.value = 'Iowa';}
function KS(){orign.value = 'Kansas';}
function KY(){orign.value = 'Kentuky';}
function LA(){orign.value = 'Louisiana';}
function ME(){orign.value = 'Maine';}
function MD(){orign.value = 'Maryland';}
function MA(){orign.value = 'Massachusetts';}
function MI(){orign.value = 'Michigan';}
function MN(){orign.value = 'Minnesota';}
function MS(){orign.value = 'Mississippi';}
function MO(){orign.value = 'Missouri';}
function MT(){orign.value = 'Montana';}
function NE(){orign.value = 'Nebraska';}
function NV(){orign.value = 'Nevada';}
function NH(){orign.value = 'New Hampshire';}
function NJ(){orign.value = 'New Jersey';}
function NM(){orign.value = 'New Mexico';}
function NY(){orign.value = 'New York';}
function NC(){orign.value = 'North Carolina';}
function ND(){orign.value = 'North Dakota';}
function OH(){orign.value = 'Ohio';}
function OK(){orign.value = 'Oklahoma';}
function OR(){orign.value = 'Oregon';}
function PA(){orign.value = 'Pennsylvania';}
function RI(){orign.value = 'Rhode Island';}
function SC(){orign.value = 'South Carolina';}
function SD(){orign.value = 'South Dakota';}
function TN(){orign.value = 'Tennessee';}
function TX(){orign.value = 'Texas';}
function UT(){orign.value = 'Utah';}
function VT(){orign.value = 'Vermont';}
function VA(){orign.value = 'Virginia';}
function WA(){orign.value = 'Virginia';}
function WV(){orign.value = 'West Virgina';}
function WI(){orign.value = 'Wisconsin';}
function WY(){orign.value = 'Wyoming';}

function AL2(){want.value = 'Alabama';}
function AK2(){want.value = 'Alaska';}
function AZ2(){want.value = 'Arizona';}
function AR2(){want.value = 'Arkansas';}
function CA2(){want.value = 'California';}
function CO2(){want.value = 'Colorado';}
function CT2(){want.value = 'Connecticut';}
function DE2(){want.value = 'Delaware';}
function FL2(){want.value = 'Florida';}
function GA2(){want.value = 'Georgia';}
function HI2(){want.value = 'Hawaii';}
function ID2(){want.value = 'Idaho';}
function IL2(){want.value = 'Illinois';}
function IN2(){want.value = 'Indiana';}
function IA2(){want.value = 'Iowa';}
function KS2(){want.value = 'Kansas';}
function KY2(){want.value = 'Kentuky';}
function LA2(){want.value = 'Louisiana';}
function ME2(){want.value = 'Maine';}
function MD2(){want.value = 'Maryland';}
function MA2(){want.value = 'Massachusetts';}
function MI2(){want.value = 'Michigan';}
function MN2(){want.value = 'Minnesota';}
function MS2(){want.value = 'Mississippi';}
function MO2(){want.value = 'Missouri';}
function MT2(){want.value = 'Montana';}
function NE2(){want.value = 'Nebraska';}
function NV2(){want.value = 'Nevada';}
function NH2(){want.value = 'New Hampshire';}
function NJ2(){want.value = 'New Jersey';}
function NM2(){want.value = 'New Mexico';}
function NY2(){want.value = 'New York';}
function NC2(){want.value = 'North Carolina';}
function ND2(){want.value = 'North Dakota';}
function OH2(){want.value = 'Ohio';}
function OK2(){want.value = 'Oklahoma';}
function OR2(){want.value = 'Oregon';}
function PA2(){want.value = 'Pennsylvania';}
function RI2(){want.value = 'Rhode Island';}
function SC2(){want.value = 'South Carolina';}
function SD2(){want.value = 'South Dakota';}
function TN2(){want.value = 'Tennessee';}
function TX2(){want.value = 'Texas';}
function UT2(){want.value = 'Utah';}
function VT2(){want.value = 'Vermont';}
function VA2(){want.value = 'Virginia';}
function WA2(){want.value = 'Virginia';}
function WV2(){want.value = 'West Virgina';}
function WI2(){want.value = 'Wisconsin';}
function WY2(){want.value = 'Wyoming';}

