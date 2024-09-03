import { Injectable } from '@nestjs/common';

@Injectable()
export class LotsService {
	private lots = [
		{
		  "pk_id": 5,
		  "lot_name": "Borman",
		  "lot_address": "18718 Borman St",
		  "lot_city": "Detroit",
		  "lot_state": "MI",
		  "lot_zip": 48228,
		  "lot_capacity": 3000,
		  "lot_active": 1,
		  "lot_man": "Ford"
		},
		{
		  "pk_id": 15,
		  "lot_name": "Huber",
		  "lot_address": "550 Town Center Drive",
		  "lot_city": "Dearborn",
		  "lot_state": "MI",
		  "lot_zip": 48126,
		  "lot_capacity": 2500,
		  "lot_active": 1,
		  "lot_man": "GM"
		},
		{
		  "pk_id": 19,
		  "lot_name": "MapAD",
		  "lot_address": "5909 Bellville Rd",
		  "lot_city": "Van Buren Twp",
		  "lot_state": "MI",
		  "lot_zip": 48111,
		  "lot_capacity": 2500,
		  "lot_active": 1,
		  "lot_man": "Ford"
		},
		{
		  "pk_id": 27,
		  "lot_name": "Parts Galore",
		  "lot_address": "14533 Telegraph Rd",
		  "lot_city": "Flat Rock",
		  "lot_state": "MI",
		  "lot_zip": 48134,
		  "lot_capacity": 2350,
		  "lot_active": 1,
		  "lot_man": "Ford"
		},
		{
		  "pk_id": 7,
		  "lot_name": "Carvana",
		  "lot_address": "6301 Wyoming",
		  "lot_city": "Dearborn",
		  "lot_state": "MI",
		  "lot_zip": 48126,
		  "lot_capacity": 0,
		  "lot_active": 1,
		  "lot_man": "Ford"
		},
		{
		  "pk_id": 34,
		  "lot_name": "Wyoming",
		  "lot_address": "777 Bowles",
		  "lot_city": "Dearborn",
		  "lot_state": "MI",
		  "lot_zip": 48126,
		  "lot_capacity": 3350,
		  "lot_active": 0,
		  "lot_man": "Ford"
		},
		{
		  "pk_id": 3,
		  "lot_name": "American Axle North",
		  "lot_address": "9541 Dequindre",
		  "lot_city": "Hamtramck",
		  "lot_state": "MI",
		  "lot_zip": 48212,
		  "lot_capacity": 2650,
		  "lot_active": 0,
		  "lot_man": "Ford"
		},
		{
		  "pk_id": 17,
		  "lot_name": "ITEK",
		  "lot_address": "15575 Lundy Pkwy",
		  "lot_city": "Dearborn",
		  "lot_state": "MI",
		  "lot_zip": 48126,
		  "lot_capacity": 2250,
		  "lot_active": 0,
		  "lot_man": "Ford"
		},
		{
		  "pk_id": 13,
		  "lot_name": "Flat Rock Manheim",
		  "lot_address": "29500 Gateway Blvd",
		  "lot_city": "Flat Rock",
		  "lot_state": "MI",
		  "lot_zip": 48314,
		  "lot_capacity": 2000,
		  "lot_active": 0,
		  "lot_man": "Ford"
		},
		{
		  "pk_id": 24,
		  "lot_name": "ODC Jefferson",
		  "lot_address": "7701 W Jefferson Ave",
		  "lot_city": "Detroit",
		  "lot_state": "MI",
		  "lot_zip": 48209,
		  "lot_capacity": 2000,
		  "lot_active": 0,
		  "lot_man": "Ford"
		},
		{
		  "pk_id": 30,
		  "lot_name": "Telegraph",
		  "lot_address": "10101 Telegraph Rd",
		  "lot_city": "Carleton",
		  "lot_state": "MI",
		  "lot_zip": 48117,
		  "lot_capacity": 1550,
		  "lot_active": 0,
		  "lot_man": "Ford"
		},
		{
		  "pk_id": 36,
		  "lot_name": "Ypsilanti",
		  "lot_address": "188 Spring St",
		  "lot_city": "Ypsilanti",
		  "lot_state": "MI",
		  "lot_zip": 48197,
		  "lot_capacity": 1500,
		  "lot_active": 0,
		  "lot_man": "Ford"
		},
		{
		  "pk_id": 28,
		  "lot_name": "Regent Court",
		  "lot_address": "16800 Executive Plaza Dr",
		  "lot_city": "Dearborn",
		  "lot_state": "MI",
		  "lot_zip": 48126,
		  "lot_capacity": 1400,
		  "lot_active": 0,
		  "lot_man": "Ford"
		},
		{
		  "pk_id": 26,
		  "lot_name": "Park 2 Fly",
		  "lot_address": "8715 Wickham Rd",
		  "lot_city": "Romulus",
		  "lot_state": "MI",
		  "lot_zip": 48174,
		  "lot_capacity": 1150,
		  "lot_active": 0,
		  "lot_man": "Ford"
		},
		{
		  "pk_id": 12,
		  "lot_name": "Fairlane",
		  "lot_address": "1303 Fairlane Circle",
		  "lot_city": "Allen Park",
		  "lot_state": "MI",
		  "lot_zip": 48101,
		  "lot_capacity": 1000,
		  "lot_active": 0,
		  "lot_man": "Ford"
		},
		{
		  "pk_id": 25,
		  "lot_name": "Park &amp; Jet",
		  "lot_address": "31875 Smith Rd",
		  "lot_city": "Romulus",
		  "lot_state": "MI",
		  "lot_zip": 48174,
		  "lot_capacity": 1000,
		  "lot_active": 0,
		  "lot_man": "Ford"
		},
		{
		  "pk_id": 31,
		  "lot_name": "Tireman",
		  "lot_address": "5945 Tireman",
		  "lot_city": "Detroit",
		  "lot_state": "MI",
		  "lot_zip": 48204,
		  "lot_capacity": 1000,
		  "lot_active": 0,
		  "lot_man": "Ford"
		},
		{
		  "pk_id": 18,
		  "lot_name": "Kmart",
		  "lot_address": "21001 Van Born Rd",
		  "lot_city": "Taylor",
		  "lot_state": "MI",
		  "lot_zip": 48180,
		  "lot_capacity": 1000,
		  "lot_active": 0,
		  "lot_man": "Ford"
		},
		{
		  "pk_id": 4,
		  "lot_name": "Bulk Storage",
		  "lot_address": "5751 W Jefferson Ave",
		  "lot_city": "Detroit",
		  "lot_state": "MI",
		  "lot_zip": 48209,
		  "lot_capacity": 1000,
		  "lot_active": 0,
		  "lot_man": "Ford"
		},
		{
		  "pk_id": 20,
		  "lot_name": "Marathon",
		  "lot_address": "3691 Greenfield Rd",
		  "lot_city": "Melvindale",
		  "lot_state": "MI",
		  "lot_zip": 48122,
		  "lot_capacity": 970,
		  "lot_active": 0,
		  "lot_man": "Ford"
		},
		{
		  "pk_id": 2,
		  "lot_name": "Advertising",
		  "lot_address": "550 Town Center Drive",
		  "lot_city": "Dearborn",
		  "lot_state": "MI",
		  "lot_zip": 48126,
		  "lot_capacity": 900,
		  "lot_active": 0,
		  "lot_man": "Ford"
		},
		{
		  "pk_id": 14,
		  "lot_name": "FOC",
		  "lot_address": "5005 Mercury Dr",
		  "lot_city": "Dearborn",
		  "lot_state": "MI",
		  "lot_zip": 48126,
		  "lot_capacity": 900,
		  "lot_active": 0,
		  "lot_man": "Ford"
		},
		{
		  "pk_id": 11,
		  "lot_name": "Enright",
		  "lot_address": "15700 Lundy Parkway",
		  "lot_city": "Dearborn",
		  "lot_state": "MI",
		  "lot_zip": 48126,
		  "lot_capacity": 900,
		  "lot_active": 0,
		  "lot_man": "Ford"
		},
		{
		  "pk_id": 10,
		  "lot_name": "Edward",
		  "lot_address": "600 Town Center Drive",
		  "lot_city": "Dearborn",
		  "lot_state": "MI",
		  "lot_zip": 48126,
		  "lot_capacity": 850,
		  "lot_active": 0,
		  "lot_man": "Ford"
		},
		{
		  "pk_id": 16,
		  "lot_name": "Hyatt",
		  "lot_address": "570 Town Center Dr",
		  "lot_city": "Dearborn",
		  "lot_state": "MI",
		  "lot_zip": 48126,
		  "lot_capacity": 525,
		  "lot_active": 0,
		  "lot_man": "Ford"
		},
		{
		  "pk_id": 1,
		  "lot_name": "AAA South",
		  "lot_address": "1 Auto Club Drive",
		  "lot_city": "Dearborn",
		  "lot_state": "MI",
		  "lot_zip": 48126,
		  "lot_capacity": 0,
		  "lot_active": 0,
		  "lot_man": "Ford"
		},
		{
		  "pk_id": 8,
		  "lot_name": "DSC",
		  "lot_address": "1800 Fairlane Drive",
		  "lot_city": "Dearborn",
		  "lot_state": "MI",
		  "lot_zip": 48101,
		  "lot_capacity": 0,
		  "lot_active": 0,
		  "lot_man": "Ford"
		},
		{
		  "pk_id": 9,
		  "lot_name": "Ecorse",
		  "lot_address": "3869 W Jefferson",
		  "lot_city": "Ecorse",
		  "lot_state": "MI",
		  "lot_zip": 48229,
		  "lot_capacity": 0,
		  "lot_active": 0,
		  "lot_man": "Ford"
		},
		{
		  "pk_id": 6,
		  "lot_name": "Cabot",
		  "lot_address": "4815 Cabot St",
		  "lot_city": "Detroit",
		  "lot_state": "MI",
		  "lot_zip": 48210,
		  "lot_capacity": 0,
		  "lot_active": 0,
		  "lot_man": "Ford"
		},
		{
		  "pk_id": 21,
		  "lot_name": "McClouth",
		  "lot_address": "1491 W Jefferson",
		  "lot_city": "Trenton",
		  "lot_state": "MI",
		  "lot_zip": 48183,
		  "lot_capacity": 0,
		  "lot_active": 0,
		  "lot_man": "Ford"
		},
		{
		  "pk_id": 22,
		  "lot_name": "Mellville",
		  "lot_address": "8100 Mellville",
		  "lot_city": "Detroit",
		  "lot_state": "MI",
		  "lot_zip": 48209,
		  "lot_capacity": 0,
		  "lot_active": 0,
		  "lot_man": "Ford"
		},
		{
		  "pk_id": 23,
		  "lot_name": "MIS",
		  "lot_address": "12626 US-12",
		  "lot_city": "Brooklyn",
		  "lot_state": "MI",
		  "lot_zip": 49209,
		  "lot_capacity": 0,
		  "lot_active": 0,
		  "lot_man": "Ford"
		},
		{
		  "pk_id": 32,
		  "lot_name": "US Steel",
		  "lot_address": "530 East Grate Lakes St",
		  "lot_city": "River Rouge",
		  "lot_state": "MI",
		  "lot_zip": 48218,
		  "lot_capacity": 0,
		  "lot_active": 0,
		  "lot_man": "Ford"
		},
		{
		  "pk_id": 33,
		  "lot_name": "World Head Quarters",
		  "lot_address": "4751 Mercury Drive",
		  "lot_city": "Dearborn",
		  "lot_state": "MI",
		  "lot_zip": 48126,
		  "lot_capacity": 0,
		  "lot_active": 0,
		  "lot_man": "Ford"
		},
		{
		  "pk_id": 29,
		  "lot_name": "Romeo Engine Plant",
		  "lot_address": "32 Mile Rd",
		  "lot_city": "Romeo",
		  "lot_state": "MI",
		  "lot_zip": 48065,
		  "lot_capacity": 0,
		  "lot_active": 0,
		  "lot_man": "Ford"
		},
		{
		  "pk_id": 35,
		  "lot_name": "Wyoming 2",
		  "lot_address": "6201 Wyoming St",
		  "lot_city": "Dearborn",
		  "lot_state": "MI",
		  "lot_zip": 48126,
		  "lot_capacity": 0,
		  "lot_active": 0,
		  "lot_man": "Ford"
		}
	];
}

getLots(lot_active?: '1' | '0') {
	if(lot_active) {
		return this.lots.filter(lot => lot.lot_active === lot_active)
	}
}
