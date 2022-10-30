let orign = document.getElementById('yourState');
let want = document.getElementById('wantedState');
let comp = document.getElementById('comparator');
let y;
let z;
let sign;

let data = require('./data/statedata.json');

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

function compare(){
    let o = orign.value.toLowerCase();
    let w = want.value.toLowerCase();
    let x = comp.value.toLowerCase();
    if(x == "population"){
        y = data[0].x;
        z = w.x;
    }else if(x == "amount unemployed"){
        y = o.x;
        z = w.x;
    }else if(x == "amount of food stamp recipents"){
        y = o.x;
        z = w.x;
    }else if(x == "gdp"){
        y = o.x;
        z = w.x;
    }else if(x == "debtS"){
        y = o.x;
        z = w.x;
    }else if(x == "debt to gpd"){
        y = o.x;
        z = w.x;
    }else if(x == "state revenue"){
        y = o.x;
        z = w.x;
    }else if(x == "average state spending"){
        y = o.x;
        z = w.x;
    }else if(x == "average debt per citizen"){
        y = o.x;
        z = w.x;
    }
    document.getElementById('text').innerHTML = `${o}'s ${x} is ${y} and ${w}'s ${x} is ${z}`;
}

// function AL(){
//     orign.value = 'Alabama';
// }
// function AK(){
//     orign.value = 'Alaska';
// }
// function AZ(){
//     orign.value = 'Arizona';
// }
// function AR(){
//     orign.value = 'Arkansas';
// }
// function CA(){
//     orign.value = 'California';
// }
// function CO(){
//     orign.value = 'Colorado';
// }
// function CT(){
//     orign.value = 'Connecticut';
// }
// function DE(){
//     orign.value = 'Delaware';
// }
// function FL(){
//     orign.value = 'Florida';
// }
// function GA(){
//     orign.value = 'Georgia';
// }
// function HI(){
//     orign.value = 'Hawaii';
// }
// function ID(){
//     orign.value = 'Idaho';
// }
// function IL(){
//     orign.value = 'Illinois';
// }
// function IN(){
//     orign.value = 'Indiana';
// }
// function IA(){
//     orign.value = 'Iowa';
// }
// function KS(){
//     orign.value = 'Kansas';
// }
// function KY(){
//     orign.value = 'Kentuky';
// }
// function LA(){
//     orign.value = 'Louisiana';
// }
// function ME(){
//     orign.value = 'Maine';
// }
// function MD(){
//     orign.value = 'Maryland';
// }
// function MA(){
//     orign.value = 'Massachusetts';
// }
// function MI(){
//     orign.value = 'Michigan';
// }
// function MN(){
//     orign.value = 'Minnesota';
// }
// function MS(){
//     orign.value = 'Mississippi';
// }
// function MO(){
//     orign.value = 'Missouri';
// }
// function MT(){
//     orign.value = 'Montana';
// }
// function NE(){
//     orign.value = 'Nebraska';
// }
// function NV(){
//     orign.value = 'Nevada';
// }
// function NH(){
//     orign.value = 'New Hampshire';
// }
// function NJ(){
//     orign.value = 'New Jersey';
// }
// function NM(){
//     orign.value = 'New Mexico';
// }
// function NY(){
//     orign.value = 'New York';
// }
// function NC(){
//     orign.value = 'North Carolina';
// }
// function ND(){
//     orign.value = 'North Dakota';
// }
// function OH(){
//     orign.value = 'Ohio';
// }
// function OK(){
//     orign.value = 'Oklahoma';
// }
// function OR(){
//     orign.value = 'Oregon';
// }
// function PA(){
//     orign.value = 'Pennsylvania';
// }
// function RI(){
//     orign.value = 'Rhode Island';
// }
// function SC(){
//     orign.value = 'South Carolina';
// }
// function SD(){
//     orign.value = 'South Dakota';
// }
// function TN(){
//     orign.value = 'Tennessee';
// }
// function TX(){
//     orign.value = 'Texas';
// }
// function UT(){
//     orign.value = 'Utah';
// }
// function VT(){
//     orign.value = 'Vermont';
// }
// function VA(){
//     orign.value = 'Virginia';
// }
// function WA(){
//     orign.value = 'Virginia';
// }
// function WV(){
//     orign.value = 'West Virgina';
// }
// function WI(){
//     orign.value = 'Wisconsin';
// }
// function WY(){
//     orign.value = 'Wyoming';
// }

// function AL2(){
//     origin.value = 'Alabama';
// }
// function AK2(){
//     want.value = 'Alaska';
// }
// function AZ2(){
//     want.value = 'Arizona';
// }
// function AR2(){
//     want.value = 'Arkansas';
// }
// function CA2(){
//     want.value = 'California';
// }
// function CO2(){
//     want.value = 'Colorado';
// }
// function CT2(){
//     want.value = 'Connecticut';
// }
// function DE2(){
//     want.value = 'Delaware';
// }
// function FL2(){
//     want.value = 'Florida';
// }
// function GA2(){
//     want.value = 'Georgia';
// }
// function HI2(){
//     want.value = 'Hawaii';
// }
// function ID2(){
//     want.value = 'Idaho';
// }
// function IL2(){
//     want.value = 'Illinois';
// }
// function IN2(){
//     want.value = 'Indiana';
// }
// function IA2(){
//     want.value = 'Iowa';
// }
// function KS2(){
//     want.value = 'Kansas';
// }
// function KY2(){
//     want.value = 'Kentuky';
// }
// function LA2(){
//     want.value = 'Louisiana';
// }
// function ME2(){
//     want.value = 'Maine';
// }
// function MD2(){
//     want.value = 'Maryland';
// }
// function MA2(){
//     want.value = 'Massachusetts';
// }
// function MI2(){
//     want.value = 'Michigan';
// }
// function MN2(){
//     want.value = 'Minnesota';
// }
// function MS2(){
//     want.value = 'Mississippi';
// }
// function MO2(){
//     want.value = 'Missouri';
// }
// function MT2(){
//     want.value = 'Montana';
// }
// function NE2(){
//     want.value = 'Nebraska';
// }
// function NV2(){
//     want.value = 'Nevada';
// }
// function NH2(){
//     want.value = 'New Hampshire';
// }
// function NJ2(){
//     want.value = 'New Jersey';
// }
// function NM2(){
//     want.value = 'New Mexico';
// }
// function NY2(){
//     want.value = 'New York';
// }
// function NC2(){
//     want.value = 'North Carolina';
// }
// function ND2(){
//     want.value = 'North Dakota';
// }
// function OH2(){
//     want.value = 'Ohio';
// }
// function OK2(){
//     want.value = 'Oklahoma';
// }
// function OR2(){
//     want.value = 'Oregon';
// }
// function PA2(){
//     want.value = 'Pennsylvania';
// }
// function RI2(){
//     want.value = 'Rhode Island';
// }
// function SC2(){
//     want.value = 'South Carolina';
// }
// function SD2(){
//     want.value = 'South Dakota';
// }
// function TN2(){
//     want.value = 'Tennessee';
// }
// function TX2(){
//     want.value = 'Texas';
// }
// function UT2(){
//     want.value = 'Utah';
// }
// function VT2(){
//     want.value = 'Vermont';
// }
// function VA2(){
//     want.value = 'Virginia';
// }
// function WA2(){
//     want.value = 'Virginia';
// }
// function WV2(){
//     want.value = 'West Virgina';
// }
// function WI2(){
//     want.value = 'Wisconsin';
// }
// function WY2(){
//     want.value = 'Wyoming';
// }

