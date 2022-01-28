//function to search the json object returned. Returns an array of matching restaurant objects.
function search (searchString) {
  const query = searchString.toLowerCase().trim(); //makes the search string actually used all lowercase and removed of trailing or leading spaces.
  let results = []; //initializes a results array;

  const RestaurantList = loadData(); //gets the list of restaurant objects 

  //loop to travese the JSON array of restaurant objects and return matching restaurants by name or cuisine type
  for (let i = 0; i < RestaurantList.length; i++) {
    let restaurantName = RestaurantList[i].Name.toLowerCase().trim();   //stores the name string of each Restaurant.
    let restaurantCuisine = RestaurantList[i].Cuisine.toLowerCase().trim(); //stores the cuisine string of each Restaurant.


    //add all restaurant objects that contain the search string in the name or cuisine.
    if(restaurantName.includes(query) || restaurantCuisine.includes(query)) {
      results.push(RestaurantList[i]);
    }
  }

  return results; //returns the list of restaurant objects
}







//function to load the data. For now, the json object is listed. An API-fetch will be implemented later
function loadData() {
  return localRestaurants;
}

//for now, the json object is listed. An API-fetch will be implemented later
const localRestaurants = [
    {
      "ID": "027687d6-34f3-4b54-abeb-2a29ca488e64",
      "Name": "El Toro II",
      "Cuisine": "mexican",
      "Website": "http://www.eltororestaurante.com/"
    },
    {
      "ID": "028ab5ab-2d99-4185-92ab-47391fab4aab",
      "Name": "Taco Shack",
      "Cuisine": "mexican",
      "Website": "http://tacoshackchampaign.square.site/"
    },
    {
      "ID": "029db49b-2006-4283-ba72-988e4223cda6",
      "Name": "Sushi Siam",
      "Cuisine": "sushi",
      "Website": "http://sushisiam.net/"
    },
    {
      "ID": "02d87226-749e-4577-8101-f7f864a9121c",
      "Name": "Biaggi's Ristorante Italiano",
      "Cuisine": "italian",
      "Website": "http://www.biaggis.com/"
    },
    {
      "ID": "02fb03a3-d8e9-4ec1-8c76-bac21219e6ba",
      "Name": "Jimmy John's",
      "Cuisine": "sandwich shop",
      "Website": "https://locations.jimmyjohns.com/il/urbana/sandwiches-9008.html?utm_source=google%20my%20business&utm_medium=organic&utm_campaign=website%20link"
    },
    {
      "ID": "0316dbd6-015f-46c0-9467-07f061e70007",
      "Name": "Star Karaoke",
      "Cuisine": "korean",
      "Website": "https://www.starkaraokemenu.com/"
    },
    {
      "ID": "0316dd34-595f-4165-81f0-e179d21a58be",
      "Name": "Applebee's Grill + Bar",
      "Cuisine": "",
      "Website": "https://restaurants.applebees.com/en-us/il/champaign/2121-n.-prospect-93091?utm_source=google&utm_medium=organic&utm_campaign=google_my_business&utm_term=93091&utm_content=website"
    },
    {
      "ID": "032900f9-6285-42e4-a664-bba64282417f",
      "Name": "Maize at the Station",
      "Cuisine": "mexican",
      "Website": "http://www.maizemexicangrill.com/"
    },
    {
      "ID": "079965ba-8b88-4f7f-abec-5d75377298f3",
      "Name": "Culver's",
      "Cuisine": "american",
      "Website": "http://www.culvers.com/restaurants/urbana-il-w-university-ave?utm_source=Google&utm_medium=Maps&utm_campaign=Google+Places"
    },
    {
      "ID": "07b903ce-154e-492f-9d3d-c1aaa7c2f460",
      "Name": "Jip Bap",
      "Cuisine": "korean",
      "Website": "http://www.jipbapcu.com/"
    },
    {
      "ID": "08b72d2a-e528-4675-81e2-e0a13e8c0f0e",
      "Name": "Signature Grill",
      "Cuisine": "",
      "Website": "http://thesignaturegrill.com/"
    },
    {
      "ID": "093bb670-6a58-4b08-a40b-8f666b96978b",
      "Name": "Chili's Grill & Bar",
      "Cuisine": "tex-mex",
      "Website": "https://www.chilis.com/locations/us/illinois/champaign/champaign"
    },
    {
      "ID": "0a5c264f-839f-4321-8155-0cc5d418aba5",
      "Name": "Kung Fu BBQ",
      "Cuisine": "",
      "Website": "http://www.kungfuhotpot.us/"
    },
    {
      "ID": "0a6adae6-1a57-4388-b551-4fafef43c932",
      "Name": "Dos Reales Mexican Restaurant",
      "Cuisine": "",
      "Website": ""
    },
    {
      "ID": "0aa92b56-7e8e-4156-ae8e-b27a3de0d58e",
      "Name": "Guido's Bar & Grill",
      "Cuisine": "bar & grill",
      "Website": "http://www.guidosbar.com/"
    },
    {
      "ID": "0aae0541-025d-440b-b5d6-9f9272678248",
      "Name": "Tropical Smoothie Cafe",
      "Cuisine": "",
      "Website": "https://locations.tropicalsmoothiecafe.com/il/urbana/1401-west-green-street?y_source=1_MjQ5MTcyNjItNzE1LWxvY2F0aW9uLndlYnNpdGU%3D"
    },
    {
      "ID": "0b1c0b8e-951b-4ea2-9fbc-6d85bbb65d33",
      "Name": "Fiesta Cafe",
      "Cuisine": "mexican",
      "Website": "https://www.fiestacafe.com/"
    },
    {
      "ID": "0c3124dd-81d9-4a8a-a638-3592ccb174a4",
      "Name": "Eighty-Three Vietnamese Cuisine",
      "Cuisine": "",
      "Website": "https://www.83viet.com/"
    },
    {
      "ID": "0cb36db9-13aa-4cd9-ae0f-3ed97d3ed801",
      "Name": "BrewLab Coffee",
      "Cuisine": "coffee shop",
      "Website": "https://brewlab.coffee/"
    },
    {
      "ID": "0e40605d-8e5a-4edf-8df0-34c359e91b8b",
      "Name": "Chick Shack/Campus Burger",
      "Cuisine": "hamburger",
      "Website": "http://www.campusburgeril.com/"
    },
    {
      "ID": "0e7b1fe6-002a-4cab-b07b-0d5ea92c1778",
      "Name": "Bangkok Thai Restaurant & Pho 911",
      "Cuisine": "thai",
      "Website": ""
    },
    {
      "ID": "0f783417-d41e-496e-9291-d27cb30207d9",
      "Name": "Dunkin'",
      "Cuisine": "coffee shop",
      "Website": "https://www.dunkindonuts.com/?utm_source=google&utm_medium=local&utm_campaign=localmaps&utm_content=336486"
    },
    {
      "ID": "0f8f208c-377c-4af9-811e-471b49cd6cc8",
      "Name": "Hickory River Smokehouse",
      "Cuisine": "barbecue",
      "Website": "https://www.hickoryriver.com/locations/illinois/urbana/overview.html"
    },
    {
      "ID": "0fe46aff-43ca-4ba7-a375-0c7068419ee5",
      "Name": "Bangkok Thai & PHO911#2",
      "Cuisine": "thai",
      "Website": ""
    },
    {
      "ID": "10028871-34fd-4415-bdb5-98f843db9c08",
      "Name": "Northern Cuisine",
      "Cuisine": "chinese",
      "Website": ""
    },
    {
      "ID": "120eb6ac-df37-430d-b019-72d108272dc7",
      "Name": "Jerusalem Middle Eastern Cuisine",
      "Cuisine": "middle eastern",
      "Website": "http://jerusalem-cuisine.keeq.io/"
    },
    {
      "ID": "140ef96a-2eb9-4ef3-bcc6-243247a7bb96",
      "Name": "Apple Dumpling",
      "Cuisine": "american",
      "Website": ""
    },
    {
      "ID": "1453a83c-c681-47ca-bfb4-0abad38a3272",
      "Name": "Baxters American Grille",
      "Cuisine": "american",
      "Website": "https://baxtersgrille.com/"
    },
    {
      "ID": "147e1658-1cb8-49d5-be51-4eedd63969a2",
      "Name": "Thorntons",
      "Cuisine": "convenience store",
      "Website": "https://www.thorntonsinc.com/"
    },
    {
      "ID": "150673ce-307f-4697-afc1-f94bf2eb1dc3",
      "Name": "Tres nopales",
      "Cuisine": "mexican",
      "Website": "https://tres-nopales.business.site/?utm_source=gmb&utm_medium=referral"
    },
    {
      "ID": "16c83c0b-2c63-4c38-805a-0afb016513d9",
      "Name": "Dairy Queen Grill & Chill",
      "Cuisine": "fast food",
      "Website": "https://www.dairyqueen.com/us-en/Locator/Detail/?localechange=1&store-id=7955&y_source=1_ODk5NDgyMS03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D"
    },
    {
      "ID": "178e4690-cab1-4b1d-bd1a-161b72bdaaf8",
      "Name": "Blaze Pizza",
      "Cuisine": "pizza",
      "Website": "http://www.blazepizza.com/locations/champaign/"
    },
    {
      "ID": "18114bcc-b21b-44e2-819b-56a84b64c2ed",
      "Name": "Big J J Fish & Chicken",
      "Cuisine": "american",
      "Website": ""
    },
    {
      "ID": "18186264-20a7-4c68-8aef-0b86fbdf344a",
      "Name": "Fat Sandwich Company",
      "Cuisine": "american",
      "Website": "https://fatsandwichchampaignil.com/"
    },
    {
      "ID": "1b591dd6-265c-4df8-8f74-42799eda2b2f",
      "Name": "Bunny's Tavern",
      "Cuisine": "",
      "Website": "http://bunnystavern.com/"
    },
    {
      "ID": "1caca6ed-f3a9-43a6-ba48-740167121182",
      "Name": "El Paraiso",
      "Cuisine": "",
      "Website": ""
    },
    {
      "ID": "1d4ac80f-cc17-460f-8dd2-271b535dcbc1",
      "Name": "Ming Garden",
      "Cuisine": "chinese",
      "Website": ""
    },
    {
      "ID": "1df26ff8-2673-4f67-9781-430c7253fef3",
      "Name": "Arby's",
      "Cuisine": "fast food",
      "Website": "https://locations.arbys.com/il/champaign/2310-s-neil-st.html"
    },
    {
      "ID": "1e5aff7d-157e-43d1-a7b2-60df14ba805a",
      "Name": "Pizza Hut",
      "Cuisine": "pizza delivery",
      "Website": "https://locations.pizzahut.com/il/champaign/409-n-mattis-ave?utm_medium=organic&utm_source=local&utm_campaign=googlelistings&utm_content=website&utm_term=291851"
    },
    {
      "ID": "214178a5-7dcd-4dea-8049-5b18f24b52b8",
      "Name": "A-Ri-Rang",
      "Cuisine": "korean",
      "Website": "http://www.a-ri-rang.com/"
    },
    {
      "ID": "229f8bef-2a87-4081-ade1-c486c092980e",
      "Name": "Schnucks Champaign",
      "Cuisine": "grocery store",
      "Website": "https://locations.schnucks.com/il-champaign-707"
    },
    {
      "ID": "238786f3-1766-405f-a297-5f8f5224ba13",
      "Name": "Hot Wok Express",
      "Cuisine": "chinese",
      "Website": "https://www.hotwokexpressil.com/"
    },
    {
      "ID": "258c3280-a89c-4e3c-b911-7e558b09f96e",
      "Name": "Lai Lai Wok",
      "Cuisine": "chinese",
      "Website": "http://www.lailaiwokchampaign.com/"
    },
    {
      "ID": "25c84fa4-bac7-495b-a467-bed7a5455ef1",
      "Name": "Rosati's Pizza",
      "Cuisine": "pizza",
      "Website": "http://www.myrosatis.com/urbana"
    },
    {
      "ID": "274bdb8c-d746-40f7-ae00-781d28fecbea",
      "Name": "Sonic Drive-In",
      "Cuisine": "fast food",
      "Website": "https://locations.sonicdrivein.com/il/champaign/601-north-mattis-avenue.html"
    },
    {
      "ID": "284e11ea-2f2a-4a4f-b88a-4b97c5473b4c",
      "Name": "Bobo's Barbecue",
      "Cuisine": "barbecue",
      "Website": "https://bobosbbqchampaign.com/"
    },
    {
      "ID": "289c8ae0-6c2e-48bf-89a7-ab7f1f780a06",
      "Name": "AM-KO Oriental Foods & Gifts",
      "Cuisine": "grocery store",
      "Website": "https://www.amkogrocery.com/"
    },
    {
      "ID": "2aa4cdb6-6e9d-4c1e-9848-e5a5f7ccf26f",
      "Name": "Cravings",
      "Cuisine": "chinese",
      "Website": "https://cravings2538.com/"
    },
    {
      "ID": "2b92c1ae-5085-4093-9680-df49736e89ac",
      "Name": "Silvercreek",
      "Cuisine": "",
      "Website": "https://www.couriersilvercreek.com/"
    },
    {
      "ID": "2c78d28b-4aa0-4518-8134-81a5ea2a14b4",
      "Name": "Black Dog Smoke & Ale House",
      "Cuisine": "barbecue",
      "Website": "http://www.blackdogsmoke.com/"
    },
    {
      "ID": "2dd25707-ce6a-4695-adcf-b1dc52516514",
      "Name": "Restaurant Aunty Lee's",
      "Cuisine": "chinese",
      "Website": "https://auntieleestogo.com/"
    },
    {
      "ID": "2fb4df87-32d8-48a7-aeb9-78c9d79105ff",
      "Name": "Sweet Basil Cafe of Champaign",
      "Cuisine": "",
      "Website": "http://www.sweetbasilcafes.com/"
    },
    {
      "ID": "307fb45b-81e5-4a07-b033-399b589e1153",
      "Name": "Caffe Paradiso",
      "Cuisine": "coffee shop",
      "Website": "http://www.enjoyparadiso.com/"
    },
    {
      "ID": "32d1ae75-d1d2-4f9c-88ac-5a57916efe0c",
      "Name": "Garcia's Pizza In A Pan",
      "Cuisine": "pizza",
      "Website": "https://garciaspizzainapanchampaign.com/6356"
    },
    {
      "ID": "33fb1f35-bb05-4f68-ae69-2125b083a1b9",
      "Name": "Cracked the Egg Came First",
      "Cuisine": "breakfast",
      "Website": "http://www.crackedongreen.com/"
    },
    {
      "ID": "3448dc66-b51b-4a2c-8ade-9399197ba2b5",
      "Name": "Red Robin Gourmet Burgers and Brews",
      "Cuisine": "",
      "Website": "https://www.redrobin.com/locations/il/champaign/champaign-725"
    },
    {
      "ID": "34944616-b7a6-4372-a0da-d027bb02e52e",
      "Name": "First Wok",
      "Cuisine": "takeout",
      "Website": "http://www.firstwokil.com/"
    },
    {
      "ID": "34d0a0eb-6b28-4005-bcdc-e0b45dfba79e",
      "Name": "Hamilton Walker's",
      "Cuisine": "steak house",
      "Website": "http://www.hamiltonwalkers.com/"
    },
    {
      "ID": "354ea76e-4f32-4f00-9e4c-ac3a5659af27",
      "Name": "Maize Mexican Grill",
      "Cuisine": "mexican",
      "Website": "http://www.maizemexicangrill.com/"
    },
    {
      "ID": "362748f3-ece7-4b70-8e5d-2025f5acae41",
      "Name": "Panera Bread",
      "Cuisine": "cafe",
      "Website": "https://locations.panerabread.com/il/champaign/1903-convenience-place.html?utm_medium=yext&utm_source=local&utm_campaign=yext&utm_content=local-search"
    },
    {
      "ID": "375571d7-9782-4610-ad89-b977106863ef",
      "Name": "Sam's Cafe",
      "Cuisine": "diner",
      "Website": "https://www.facebook.com/samscafechampaign/"
    },
    {
      "ID": "37c752fe-54d4-4dec-92e8-96cf442f9882",
      "Name": "Murphy's Pub",
      "Cuisine": "bar",
      "Website": "http://murphyspubuofi.com/"
    },
    {
      "ID": "382bf8b5-9425-4c7a-97ce-d7a3f97aa74b",
      "Name": "Sunny China Buffet",
      "Cuisine": "chinese",
      "Website": "https://www.sunnychinabuffet.com/"
    },
    {
      "ID": "3a9b4aa1-2577-4947-917c-df21a896e405",
      "Name": "El Oasis",
      "Cuisine": "ice cream shop",
      "Website": "https://www.facebook.com/El.Oasis.in.Urbana.IL/"
    },
    {
      "ID": "3d4a0814-4241-483a-a714-6f4f5261b594",
      "Name": "Big Grove Tavern",
      "Cuisine": "american",
      "Website": "http://www.biggrovetavern.com/"
    },
    {
      "ID": "3e4aa3e1-1ecf-4b25-b7a5-70172e25d274",
      "Name": "Neil St Blues",
      "Cuisine": "",
      "Website": "https://www.neilstblues.com/"
    },
    {
      "ID": "3ee75667-9832-401f-975b-3a5b22ccc765",
      "Name": "Thara Thai Restaurant",
      "Cuisine": "thai",
      "Website": "http://tharathairestaurant.com/"
    },
    {
      "ID": "41adb3d7-9c3b-418e-95ec-f74485e39332",
      "Name": "Broadway Food Hall",
      "Cuisine": "",
      "Website": "http://broadwayfoodhall.com/"
    },
    {
      "ID": "422db1c1-8fbc-4607-83ec-38a1c4b4d434",
      "Name": "Cheese & Crackers",
      "Cuisine": "deli",
      "Website": "http://www.crackerscheese.com/"
    },
    {
      "ID": "42c60d7c-8150-4bfc-aabd-f01180a60ebc",
      "Name": "La Mixteca Restaurant",
      "Cuisine": "mexican",
      "Website": "http://lamixtecarestaurant.net/"
    },
    {
      "ID": "443e67fa-6327-4738-8be4-7eb37cad3c59",
      "Name": "Siam Terrace",
      "Cuisine": "thai",
      "Website": "https://www.siamterraceurbana.com/"
    },
    {
      "ID": "44722219-fbbd-4974-a6aa-dc17c87d967e",
      "Name": "KoFusion Urbana",
      "Cuisine": "",
      "Website": "https://www.kofusioncampus.com/"
    },
    {
      "ID": "44b53c27-9cec-4986-b0a8-4cd5da83e5e8",
      "Name": "The Bread Company",
      "Cuisine": "bistro",
      "Website": "http://www.thebread.co/"
    },
    {
      "ID": "44d13356-6e90-4ddb-b2bb-968c37fec8c5",
      "Name": "Wienerschnitzel",
      "Cuisine": "fast food",
      "Website": "http://www.wienerschnitzel.com/"
    },
    {
      "ID": "44f4f47e-5208-4f81-bdfe-e89a606b29b1",
      "Name": "LongHorn Steakhouse",
      "Cuisine": "steak house",
      "Website": "https://www.longhornsteakhouse.com/locations/il/champaign/champaign/5404?cmpid=br:lh_ag:ie_ch:loc_ca:LHGMB_sn:gmb_gt:champaign-il-5404_pl:locurl_rd:1347"
    },
    {
      "ID": "46433fc1-d78a-4613-a740-432fa6f835ed",
      "Name": "The Empanadas House",
      "Cuisine": "south american",
      "Website": "http://www.theempanadashousechampaign.com/"
    },
    {
      "ID": "472c1524-9b73-45d3-929b-7c56f6e7f9a7",
      "Name": "The Wild Hare Bar and Grill",
      "Cuisine": "bar & grill",
      "Website": ""
    },
    {
      "ID": "4736da51-895e-43ca-a17d-42c892708bee",
      "Name": "QDOBA Mexican Eats",
      "Cuisine": "mexican",
      "Website": "https://locations.qdoba.com/us/il/urbana/1401-w-green-st.html"
    },
    {
      "ID": "49eb8eb1-05a3-486d-b761-ecba6f566a04",
      "Name": "It's Just Wings",
      "Cuisine": "chicken wings",
      "Website": "https://locations.itsjustwings.com/location/IJW0010051763/?utm_campaign=localmaps"
    },
    {
      "ID": "4dca46fb-2f7f-4722-ac35-41908470a24e",
      "Name": "Einstein Brothers Bagels",
      "Cuisine": "cafe",
      "Website": "https://www.einsteinbros.com/"
    },
    {
      "ID": "4ec0f281-7296-4c9e-af77-213edaf91d2d",
      "Name": "Mahomet Family Restaurant",
      "Cuisine": "family",
      "Website": "https://mahometfamilyrestaurant.com/"
    },
    {
      "ID": "4f881ffd-998b-4491-aa4d-67637186a364",
      "Name": "Crane Alley",
      "Cuisine": "gastropub",
      "Website": "http://crane-alley.com/"
    },
    {
      "ID": "4f97a2f2-9398-461a-96b5-73a1824913ab",
      "Name": "Baldarotta's Porketta & Sicilian Sausage",
      "Cuisine": "sandwich shop",
      "Website": "http://www.baldarottas.com/"
    },
    {
      "ID": "51afd236-ec90-4ffb-b909-8cda081ae6f2",
      "Name": "Sarku Japan",
      "Cuisine": "japanese",
      "Website": "https://www.sarkujapan.com/"
    },
    {
      "ID": "51fc3da8-5555-411d-aa7d-ed5decb4f150",
      "Name": "The Ribeye",
      "Cuisine": "steak house",
      "Website": "http://theribeyerestaurant.org/"
    },
    {
      "ID": "5562f96a-b31b-4491-a22d-4f83cf2fafb9",
      "Name": "NAYA Bar & Eatery",
      "Cuisine": "bar & grill",
      "Website": "http://nayarestaurant.com/"
    },
    {
      "ID": "58c2ef76-beb1-4ba5-b503-29e883b2ee48",
      "Name": "Xinh Xinh Cafe",
      "Cuisine": "vietnamese",
      "Website": "http://www.xinhxinhcafeurbana.com/?utm_source=gmb&utm_medium=website"
    },
    {
      "ID": "58e40c65-6569-46b2-a6fd-ffb01f16dd70",
      "Name": "Rainbow Garden",
      "Cuisine": "chinese",
      "Website": "https://rainbowgardenurbana.carry-out.com/default.asp"
    },
    {
      "ID": "59242a44-89e0-4701-babf-aae0b0db8a0b",
      "Name": "Monical's Pizza",
      "Cuisine": "pizza",
      "Website": "https://www.monicals.com/locations/monicals-pizza-of-urbana"
    },
    {
      "ID": "5a715b49-fc94-4df0-800b-6273b1e369cc",
      "Name": "Watson's Shack & Rail",
      "Cuisine": "chicken",
      "Website": "http://www.watsonschicken.com/"
    },
    {
      "ID": "5aae94b2-0602-4e66-b09d-7097244d112f",
      "Name": "Aspen Tap House",
      "Cuisine": "",
      "Website": "https://aspentaphouse.com/"
    },
    {
      "ID": "5c437a4b-8f33-4dc3-8670-63952c149754",
      "Name": "Kung Fu Tea",
      "Cuisine": "bubble tea store",
      "Website": "https://kungfutea.com/"
    },
    {
      "ID": "5e41341c-aa14-4347-83c9-9202addac97d",
      "Name": "Shawarma Joint",
      "Cuisine": "middle eastern",
      "Website": "https://www.ordershawarmajoint.com/"
    },
    {
      "ID": "5e556dbc-51c4-4d7e-8400-0cd44af9bd86",
      "Name": "Cactus Grill",
      "Cuisine": "tex-mex",
      "Website": "http://www.cactusgrillchampaign.com/"
    },
    {
      "ID": "5e80150b-2fa4-461e-84fe-b88d161056de",
      "Name": "Pekara Bakery And Bistro",
      "Cuisine": "",
      "Website": "https://pekarabakery.com/"
    },
    {
      "ID": "5eb9ffb4-d37a-4160-ad0a-acd60d5658bf",
      "Name": "Boomerangs Bar & Grill",
      "Cuisine": "bar & grill",
      "Website": "http://www.boomerangsbarandgrill.com/"
    },
    {
      "ID": "6061755c-91d8-4b43-8069-c90b97bc1b09",
      "Name": "Cafe Sababa",
      "Cuisine": "vegetarian",
      "Website": "https://www.illinihillel.org/cafesababa"
    },
    {
      "ID": "61b7940d-74b2-4edd-8653-7d504ea2582e",
      "Name": "Stango Cuisine",
      "Cuisine": "african",
      "Website": "http://stangocu.com/"
    },
    {
      "ID": "630fcf52-8d5a-4be1-9b02-fea793cd7605",
      "Name": "Top Food Restaurant - 闽江楼",
      "Cuisine": "",
      "Website": "https://www.topfoodrestaurant.com/"
    },
    {
      "ID": "67083e98-2811-440f-bf06-075542ff24c1",
      "Name": "Buffalo Wild Wings",
      "Cuisine": "chicken wings",
      "Website": "https://www.buffalowildwings.com/en/locations/detail/3092/?utm_source=google&utm_medium=organic&utm_campaign=rio"
    },
    {
      "ID": "689d2091-4329-4455-ac70-67afb849b6d9",
      "Name": "Panda Express",
      "Cuisine": "chinese",
      "Website": "https://www.pandaexpress.com/userlocation/2836/IL/Urbana/106-E-University-Ave"
    },
    {
      "ID": "6d00e434-797d-4596-b07b-4b912084ed08",
      "Name": "NOLA's Rock Bar",
      "Cuisine": "",
      "Website": "https://nolasrockbar.com/"
    },
    {
      "ID": "70114697-e71b-40ca-ad91-17063569d022",
      "Name": "Little Caesars Pizza",
      "Cuisine": "pizza",
      "Website": "https://littlecaesars.com/en-us/store/10838"
    },
    {
      "ID": "7123acc5-ad3d-49e8-8127-8a2284ca24a0",
      "Name": "Mandarin Wok",
      "Cuisine": "chinese",
      "Website": "https://order.online/store/mandarin-wok-157828"
    },
    {
      "ID": "7154e35e-3f54-4bc3-a1a1-9335b63f18a9",
      "Name": "Papa John's Pizza",
      "Cuisine": "pizza",
      "Website": "https://locations.papajohns.com/united-states/il/61801/urbana/1307-e-florida-ave?utm_source=gmb&utm_medium=organic&y_source=1_MTA2OTA5MDQtNzE1LWxvY2F0aW9uLmdvb2dsZV93ZWJzaXRlX292ZXJyaWRl"
    },
    {
      "ID": "71fda932-b61e-413d-81c1-5861d628de15",
      "Name": "Shiquan",
      "Cuisine": "chinese",
      "Website": "https://shiquaniltogo.com/"
    },
    {
      "ID": "727252b8-2f6d-4404-b96f-ad769a4f181c",
      "Name": "Wendy's",
      "Cuisine": "fast food",
      "Website": "https://locations.wendys.com/united-states/il/urbana/505-n-cunningham?utm_source=Yext&utm_medium=Google_My_Business&utm_campaign=Local_Search&utm_content=EN_US"
    },
    {
      "ID": "729cf04e-8203-4001-a681-b6191d4011c8",
      "Name": "Five Guys",
      "Cuisine": "hamburger",
      "Website": "https://restaurants.fiveguys.com/901-b-west-anthony-drive"
    },
    {
      "ID": "7350af1a-8a53-4d4e-b9cd-f62671a4368d",
      "Name": "Jet's Pizza",
      "Cuisine": "pizza",
      "Website": "https://www.jetspizza.com/stores/illinois/champaign/512-s-neil-st/?utm_source=GMB&utm_medium=GMB-SEO&utm_campaign=IL-008&utm_content=Website"
    },
    {
      "ID": "73fb2af0-0293-4aea-aedc-7d1b44b3c11a",
      "Name": "Aroma Cafe",
      "Cuisine": "",
      "Website": "https://www.aroma-cafe.com/"
    },
    {
      "ID": "77825645-c1a5-4c73-a76c-e56e840bc490",
      "Name": "Chipotle Mexican Grill",
      "Cuisine": "mexican",
      "Website": "https://locations.chipotle.com/il/champaign/528-e-green-st?utm_source=google&utm_medium=yext&utm_campaign=yext_listings"
    },
    {
      "ID": "78502a34-e27f-41b6-8bc6-13c75103dcb5",
      "Name": "Einstein Bros. Bagels",
      "Cuisine": "bagel shop",
      "Website": "https://locations.einsteinbros.com/us/il/champaign/803-w-anthony-dr?y_source=1_OTA1MDEwOC03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D"
    },
    {
      "ID": "7a3c27ff-463b-4982-8f2a-ec5ef498f477",
      "Name": "Sushi Ichiban",
      "Cuisine": "sushi",
      "Website": "https://www.sushiichiban.net/"
    },
    {
      "ID": "7c15199c-f990-4c21-a682-aa5f2e4c4b05",
      "Name": "Four Breakfast & More",
      "Cuisine": "breakfast",
      "Website": "https://www.facebook.com/fourbreakfastandmore/"
    },
    {
      "ID": "7c50cbc7-e785-4052-bd69-4f744caecb1c",
      "Name": "Steak 'n Shake",
      "Cuisine": "hamburger",
      "Website": "http://www.steaknshake.com/locations/23413-steak-n-shake-kenyon-road-urbana"
    },
    {
      "ID": "7c66b81e-ef1d-4c1a-8847-b92f8293466b",
      "Name": "Chick-fil-A",
      "Cuisine": "fast food",
      "Website": "https://www.chick-fil-a.com/champaignil"
    },
    {
      "ID": "7cd7a32f-390a-4cca-809c-3e7c13979db1",
      "Name": "Jumbo Crab",
      "Cuisine": "seafood",
      "Website": "http://www.jumbocrabchampaign.com/"
    },
    {
      "ID": "7d0123b8-2007-4bae-b8e4-2e27ce74622d",
      "Name": "Rumberger's Wings - Champaign",
      "Cuisine": "chicken wings",
      "Website": "https://www.rumbergerswings.com/"
    },
    {
      "ID": "7d808b9c-c5d1-4ec5-b951-4d248160f503",
      "Name": "Wood N’ Hog BBQ",
      "Cuisine": "barbecue",
      "Website": "http://www.woodnhogbarbecue.com/"
    },
    {
      "ID": "7ecd22a6-14a8-4792-bea8-58dc8fb704b6",
      "Name": "Jupiter's At The Crossing",
      "Cuisine": "pizza",
      "Website": "http://jupitersatcrossing.com/"
    },
    {
      "ID": "7f923c86-5a4b-4cac-87e0-6cc88cf27cea",
      "Name": "Chinatown Buffet",
      "Cuisine": "buffet",
      "Website": ""
    },
    {
      "ID": "7fe1cc3b-5048-44dd-9274-fa296ac8c3c7",
      "Name": "Golden Wok",
      "Cuisine": "chinese",
      "Website": ""
    },
    {
      "ID": "7fe8a421-07a8-4ba0-be1c-3791babfddec",
      "Name": "Captain D's",
      "Cuisine": "seafood",
      "Website": "https://locations.captainds.com/ll/US/IL/Champaign/1409--N_-Prospect-Ave"
    },
    {
      "ID": "8181bd2f-3f33-4200-b9af-224a8b8dd537",
      "Name": "Mia Za's",
      "Cuisine": "italian",
      "Website": "http://www.miazas.com/"
    },
    {
      "ID": "828bb0c2-179a-4ed4-977e-25c7faba821b",
      "Name": "Array Cafe",
      "Cuisine": "cafe",
      "Website": "https://www.igb.illinois.edu/facilities-services/array-cafe"
    },
    {
      "ID": "82fa5833-00da-4401-aab6-6d55f2b86db3",
      "Name": "Garbanzo Mediterranean Fresh",
      "Cuisine": "fast food",
      "Website": "http://www.eatgarbanzo.com/"
    },
    {
      "ID": "8307e49e-946c-4ee0-b04b-e80e37296fcc",
      "Name": "Taco Bell",
      "Cuisine": "fast food",
      "Website": "https://locations.tacobell.com/il/urbana/1003-university.html?utm_source=yext&utm_campaign=googlelistings&utm_medium=referral&utm_term=016248&utm_content=website&y_source=1_NjE0NzM4Ny03MTUtbG9jYXRpb24uZ29vZ2xlX3dlYnNpdGVfb3ZlcnJpZGU%3D"
    },
    {
      "ID": "839dbef4-61a1-49bb-8082-bb5eba6c7f0d",
      "Name": "Jarling's Custard Cup",
      "Cuisine": "ice cream shop",
      "Website": "http://www.jarlingscustardcup.com/"
    },
    {
      "ID": "8614e4c2-53a6-4624-bbf6-0755babdc1bb",
      "Name": "Pizzeria Antica",
      "Cuisine": "pizza",
      "Website": "http://anticachampaign.com/"
    },
    {
      "ID": "8634aeac-004d-44be-a543-debba01abbd3",
      "Name": "Great American Grill",
      "Cuisine": "",
      "Website": ""
    },
    {
      "ID": "86f09d73-82e9-4d82-80b1-26de58053cc6",
      "Name": "Popeyes Louisiana Kitchen",
      "Cuisine": "chicken",
      "Website": "https://locations.popeyes.com/il/champaign/910-w-bloomington-rd"
    },
    {
      "ID": "8969d77a-adc8-4f61-83ab-9289b1658249",
      "Name": "Golden Harbor Authentic Chinese Cuisine",
      "Cuisine": "chinese",
      "Website": "http://www.goldenharboronline.com/?utm_source=google&utm_medium=website"
    },
    {
      "ID": "8c6dc8ab-032d-4833-9bd9-7cab929d9df5",
      "Name": "Riggs Beer Company",
      "Cuisine": "brewery",
      "Website": "http://www.riggsbeer.com/"
    },
    {
      "ID": "8d810579-997c-497c-a80e-d6e37b48f081",
      "Name": "Portillo's Hot Dogs",
      "Cuisine": "fast food",
      "Website": "https://www.portillos.com/locations/champaign/?utm_source=google&utm_medium=yext&utm_campaign=website"
    },
    {
      "ID": "8dc3bd66-98c4-4b47-b7b0-22a20c7820b5",
      "Name": "Moe's Southwest Grill",
      "Cuisine": "mexican",
      "Website": "https://locations.moes.com/il/champaign/2041-south-neil-street?utm_source=google&utm_medium=organic&utm_campaign=locations_partner"
    },
    {
      "ID": "8ee4b9b2-7bb8-47d2-a268-44ee3739d07e",
      "Name": "Caribbean Grill",
      "Cuisine": "caribbean",
      "Website": "http://www.caribbeangrill.net/"
    },
    {
      "ID": "8f6a53a7-5beb-4ff9-8a77-d1d3086768ac",
      "Name": "Masijta Grill",
      "Cuisine": "korean",
      "Website": "https://masijta-grill.business.site/?m=true"
    },
    {
      "ID": "8fb34cb1-d738-4ddd-9baf-d30ab6daf9ba",
      "Name": "Freddy's Frozen Custard & Steakburgers",
      "Cuisine": "hamburger",
      "Website": "https://freddysusa.com/store/champaign/"
    },
    {
      "ID": "8ffdcdf9-85ff-4bb4-bc0e-54f6c7591704",
      "Name": "Papa Murphy's | Take 'N' Bake Pizza",
      "Cuisine": "pizza",
      "Website": "https://locations.papamurphys.com/il/urbana/114-north-vine-street?utm_source=organic&utm_medium=gmb&utm_campaign=yext&y_source=1_MTU0Mjk4MDQtNzE1LWxvY2F0aW9uLmdvb2dsZV93ZWJzaXRlX292ZXJyaWRl"
    },
    {
      "ID": "91a40b52-3a0e-438f-ae40-10b878e893c3",
      "Name": "Fresh International Market",
      "Cuisine": "asian grocery store",
      "Website": "http://freshimarket.com/"
    },
    {
      "ID": "9215e2bb-bdc4-46f9-b4c0-2df4dca037cb",
      "Name": "Green Jade",
      "Cuisine": "chinese",
      "Website": "https://www.greenjadecu.com/"
    },
    {
      "ID": "9247635d-53f9-4231-a4ad-d386bee69f0f",
      "Name": "Subway",
      "Cuisine": "sandwich shop",
      "Website": "https://restaurants.subway.com/united-states/il/urbana/2740-south-philo-road?utm_source=yxt-goog&utm_medium=local&utm_term=acq&utm_content=44837&utm_campaign=evergreen-2020&y_source=1_MTQ5MTA4NDktNzE1LWxvY2F0aW9uLmdvb2dsZV93ZWJzaXRlX292ZXJyaWRl"
    },
    {
      "ID": "92cff251-7117-4f23-bd4a-76c2d4f49256",
      "Name": "Café Kopi",
      "Cuisine": "cafe",
      "Website": "http://cafe-kopi.com/"
    },
    {
      "ID": "92eb5714-ca10-48ec-a843-6dee47b4c518",
      "Name": "The Yellow Canary Cafe LLC",
      "Cuisine": "",
      "Website": ""
    },
    {
      "ID": "94444662-cb8c-4448-b37f-f58966ba1ee2",
      "Name": "Farmhouse Restaurant",
      "Cuisine": "breakfast",
      "Website": "http://www.goharvestmarket.com/"
    },
    {
      "ID": "948041e9-57f4-46fd-a4b6-1b25e2bc81e4",
      "Name": "Baxters American Grille",
      "Cuisine": "",
      "Website": "http://www.baxtersgrille.com/"
    },
    {
      "ID": "94d92818-44a7-4734-ae5e-72b7834cc342",
      "Name": "Mr crab Cajun boil seafood house",
      "Cuisine": "seafood",
      "Website": "https://www.mrcrabszechuanchina.com/"
    },
    {
      "ID": "94de1448-4a95-4fef-b822-e6e7d8aa2fc8",
      "Name": "The Courier Café",
      "Cuisine": "",
      "Website": "http://thecouriercafe.com/"
    },
    {
      "ID": "9725bf47-fb9f-4c5b-b114-c4e456e40d93",
      "Name": "Lao Sze Chuan Chinese Restaurant and Bar",
      "Cuisine": "chinese",
      "Website": "https://www.laoszechuanchampaign.com/"
    },
    {
      "ID": "97b38c3a-52cf-4dcd-b571-a8f8556288ee",
      "Name": "Penn Station East Coast Subs",
      "Cuisine": "sandwich shop",
      "Website": "http://www.penn-station.com/"
    },
    {
      "ID": "994cf771-60af-4885-8e54-faca52b029f4",
      "Name": "Seven Saints",
      "Cuisine": "bar & grill",
      "Website": "http://www.sevensaintsbar.com/"
    },
    {
      "ID": "9c8fd5ca-c2a8-4f99-a0ab-39e34f5e1ef0",
      "Name": "K Bowl Inc.",
      "Cuisine": "",
      "Website": "http://sushi-kame.com/"
    },
    {
      "ID": "9d697062-0e78-41fd-8670-20f0eca805d3",
      "Name": "McDonald's",
      "Cuisine": "fast food",
      "Website": "https://www.mcdonalds.com/us/en-us/location/IL/URBANA/1705-S-PHILO-ROAD/6265.html?cid=RF:YXT:GMB::Clicks"
    },
    {
      "ID": "9d7fe61e-a4bb-4b92-b936-eeb08de0b788",
      "Name": "Urbana Garden Family Restaurant",
      "Cuisine": "american",
      "Website": "http://urbanagardenrestaurant.com/"
    },
    {
      "ID": "9e6a4af1-f65f-40ff-8eff-886536e8ca51",
      "Name": "Papa Del's Pizza Factory",
      "Cuisine": "pizza",
      "Website": "https://www.papadels.com/"
    },
    {
      "ID": "9ece6624-b4c6-4a14-819e-6ef1451c0a4e",
      "Name": "Ko Fusion",
      "Cuisine": "asian fusion",
      "Website": "http://www.kofusion.com/"
    },
    {
      "ID": "a03cfd89-49b8-45c2-aac7-f9370732f525",
      "Name": "Basil Thai At Urbana",
      "Cuisine": "thai",
      "Website": "https://orders.cake.net/10200534"
    },
    {
      "ID": "a151bc2d-7614-47a5-9f6f-7d76be7aeb54",
      "Name": "emma’s urbana",
      "Cuisine": "",
      "Website": ""
    },
    {
      "ID": "a1e8c7cd-d21a-47bb-991c-dd8098c75134",
      "Name": "Perkins Restaurant & Bakery",
      "Cuisine": "",
      "Website": "https://stores.perkinsrestaurants.com/us/il/urbana/1214-west-university-ave.html"
    },
    {
      "ID": "a2b898b4-aa6c-4868-bc0e-6c84899a5fe6",
      "Name": "Bevier Cafe",
      "Cuisine": "",
      "Website": "http://beviercafe.illinois.edu/"
    },
    {
      "ID": "a3f3197c-904b-40bd-9aed-33a3d2d9a1ab",
      "Name": "Vinny's by the slice and More",
      "Cuisine": "pizza",
      "Website": "http://vinnysbytheslice.com/"
    },
    {
      "ID": "a464918e-1ac3-4265-a52a-b893e05cad25",
      "Name": "Wood N' Hog Barbecue",
      "Cuisine": "barbecue",
      "Website": "http://www.woodnhogbarbecue.com/"
    },
    {
      "ID": "a4b90429-cfcc-4831-a8db-a22388238225",
      "Name": "The Caffeinator",
      "Cuisine": "cafe",
      "Website": ""
    },
    {
      "ID": "a7d5f497-c06b-479e-b764-fd39391e681b",
      "Name": "Pia's Sports Bar & Grill",
      "Cuisine": "bar & grill",
      "Website": "http://www.piassportspub.com/"
    },
    {
      "ID": "a8d4d47a-0ed1-4ef8-9e31-fd52991c1eee",
      "Name": "Olive Garden Italian Restaurant",
      "Cuisine": "italian",
      "Website": "https://www.olivegarden.com/locations/il/champaign/champaign/1176?cmpid=br:og_ag:ie_ch:loc_ca:OGGMB_sn:gmb_gt:champaign-il-1176_pl:locurl_rd:1126"
    },
    {
      "ID": "a95964f6-fe1a-4ef8-8182-5fcf5d65c839",
      "Name": "The C-U Original Pancake House",
      "Cuisine": "breakfast",
      "Website": "http://ophchampaign.com/"
    },
    {
      "ID": "a996b2c1-f25c-4522-b5d1-2389f2b14f90",
      "Name": "Everyday Kitchen — Champaign",
      "Cuisine": "",
      "Website": "http://www.everydaykitchen.com/Champaign"
    },
    {
      "ID": "aa0055c4-a695-4fc3-9d24-c11a8ab6684b",
      "Name": "Denny's",
      "Cuisine": "diner",
      "Website": "https://locations.dennys.com/IL/CHAMPAIGN/248655?utm_source=yext&utm_medium=local-listing&utm_campaign=yext-listing"
    },
    {
      "ID": "ab1cc07b-fdec-4324-9833-b0ec00a0581b",
      "Name": "Cracker Barrel Old Country Store",
      "Cuisine": "american",
      "Website": "https://www.crackerbarrel.com/Locations/States/il/urbana/129/?utm_source=google&utm_medium=maps&utm_campaign=crackerbarrelurl"
    },
    {
      "ID": "ac630983-78fe-4fba-895d-a9a091f714d1",
      "Name": "Good Fella",
      "Cuisine": "korean",
      "Website": "http://goodfellacu.com/"
    },
    {
      "ID": "ac718ac2-4ccf-45a8-9a2a-7f97e9642c4a",
      "Name": "Firefly Grill",
      "Cuisine": "",
      "Website": "https://www.ffgrill.com/?y_source=1_MTc0OTMyOTEtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D"
    },
    {
      "ID": "ad252981-617a-4b18-9098-c4aecd804440",
      "Name": "El Toro Bravo",
      "Cuisine": "mexican",
      "Website": "http://www.eltororestaurante.com/"
    },
    {
      "ID": "ad683d39-2728-4176-8cd2-df1e3a5796e8",
      "Name": "Sticky Rice",
      "Cuisine": "",
      "Website": "http://www.stickyricechampaign.com/"
    },
    {
      "ID": "b01eff4d-7478-420e-982a-b1eda209f59f",
      "Name": "Taco John's",
      "Cuisine": "fast food",
      "Website": "https://locations.tacojohns.com/il/champaign/902-meijer-dr.html"
    },
    {
      "ID": "b39af341-40d3-4a55-bb59-a5dcc4aa3563",
      "Name": "Naf Naf Grill",
      "Cuisine": "middle eastern",
      "Website": "https://www.nafnafgrill.com/"
    },
    {
      "ID": "b861f95a-79cc-4674-aeae-dc090c945d68",
      "Name": "El Toro at the Fields",
      "Cuisine": "",
      "Website": "http://www.eltororestaurante.com/"
    },
    {
      "ID": "b891dea9-620a-4e02-9eac-34360449cb10",
      "Name": "Jupiter's Pizzeria & Billiards",
      "Cuisine": "italian",
      "Website": "http://www.jupiterspizza.com/"
    },
    {
      "ID": "b8acebe2-2292-4709-a052-cd75e4f32dce",
      "Name": "Esquire Lounge",
      "Cuisine": "",
      "Website": "http://www.esquirelounge.com/"
    },
    {
      "ID": "ba0bfbb2-b90e-4ea7-b6ee-6604de50b22a",
      "Name": "Sun Singer Restaurant, Wine & Spirits",
      "Cuisine": "",
      "Website": "http://www.sunsingerwines.com/"
    },
    {
      "ID": "bb075707-bf11-4c40-bd35-c4bff30e9885",
      "Name": "Yogi Korean Restaurant",
      "Cuisine": "korean",
      "Website": ""
    },
    {
      "ID": "bc273ce1-fbf4-4076-9d71-3130389fbf87",
      "Name": "Chester's Bbq",
      "Cuisine": "barbecue",
      "Website": ""
    },
    {
      "ID": "bc9d2fa9-bd61-4aff-8705-6f5a878899a1",
      "Name": "A Taste of Both Worlds",
      "Cuisine": "",
      "Website": "https://www.facebook.com/A-Taste-Of-Both-Worlds-107568034501107"
    },
    {
      "ID": "bdcb886c-ad7f-4989-97ae-84edabaa14af",
      "Name": "Manzella's Italian Patio",
      "Cuisine": "italian",
      "Website": "http://manzellasitalianrestaurant.com/"
    },
    {
      "ID": "be08fab5-6a47-450d-a3aa-dfbb7abcf63c",
      "Name": "Casa Del Mar",
      "Cuisine": "mexican",
      "Website": "https://www.facebook.com/Casa-Del-Mar-2353893441503807/"
    },
    {
      "ID": "bed556c0-79a9-4008-b9fb-d1282d8125ab",
      "Name": "Timpone's",
      "Cuisine": "italian",
      "Website": "http://timpones-urbana.com/"
    },
    {
      "ID": "c058069c-7c33-4eed-8c95-0e7366db0928",
      "Name": "Manolo's Pizza & Empanadas",
      "Cuisine": "pizza",
      "Website": "http://manolospizza.com/"
    },
    {
      "ID": "c0d8d441-6080-4a82-944e-f1eba6385cc7",
      "Name": "Alexander's Steakhouse",
      "Cuisine": "steak house",
      "Website": "http://www.alexanderssteak.com/"
    },
    {
      "ID": "c102c13f-a593-407e-90a3-cc198db7ddfb",
      "Name": "Oishi Hibachi Steakhouse",
      "Cuisine": "asian",
      "Website": "http://www.oishichampaign.com/"
    },
    {
      "ID": "c413dcf8-bcc5-4e8c-85ef-6fea73ba4099",
      "Name": "Spoon House Korean Kitchen",
      "Cuisine": "asian",
      "Website": "http://www.spoonhousecu.com/"
    },
    {
      "ID": "c4c87f29-0e15-4a15-a5a6-3acc88da9695",
      "Name": "San Maru",
      "Cuisine": "korean",
      "Website": "http://sanmarucu.com/"
    },
    {
      "ID": "c5613c88-0206-4e9b-8570-21adfc6e269d",
      "Name": "Mr. Delivery Champaign, IL",
      "Cuisine": "delivery",
      "Website": ""
    },
    {
      "ID": "c5a8cecc-d0c4-4099-b74a-1d974a301e24",
      "Name": "Golden Crab - Boiled Seafood & Bar",
      "Cuisine": "",
      "Website": "http://www.goldencrabil.com/"
    },
    {
      "ID": "c6c4ee13-95ca-40b2-8ea2-9d4bfac550e1",
      "Name": "Windy City Express",
      "Cuisine": "fast food",
      "Website": "https://windycityexpress.e-tab.com/windycityexpress#!/order-type"
    },
    {
      "ID": "c8555bb7-0d19-43be-ae22-3f6ad8f065e8",
      "Name": "La Bamba Mexican Restaurant",
      "Cuisine": "mexican",
      "Website": "http://www.labambaburritos.com/"
    },
    {
      "ID": "cac5439e-658e-4a8b-8942-064c388101f8",
      "Name": "Auntie Anne's",
      "Cuisine": "pretzel store",
      "Website": "https://locations.auntieannes.com/il/urbana/1401-west-green-street?utm_source=google&utm_medium=organic&utm_campaign=locations_partner"
    },
    {
      "ID": "cb8df127-1502-4070-8c58-761b6b24904d",
      "Name": "El Patio",
      "Cuisine": "mexican",
      "Website": ""
    },
    {
      "ID": "cbb5c524-8dc2-45ce-9d17-32504375889d",
      "Name": "Caffé Bene",
      "Cuisine": "coffee shop",
      "Website": "https://www.caffebeneurbana.com/"
    },
    {
      "ID": "cbd00363-0ae0-477f-8c8e-3be787dff703",
      "Name": "Outback Steakhouse",
      "Cuisine": "steak house",
      "Website": "https://locations.outback.com/illinois/champaign/2402-north-prospect-avenue"
    },
    {
      "ID": "cdb5e7a2-7364-4a18-85d6-4e5686aa5048",
      "Name": "Texas Roadhouse",
      "Cuisine": "steak house",
      "Website": "https://www.texasroadhouse.com/locations/illinois/champaign"
    },
    {
      "ID": "cdfc9e1e-aaf1-4b3c-9406-3dc4df643e1a",
      "Name": "Slim Chickens",
      "Cuisine": "chicken shop",
      "Website": "https://slimchickens.com/location/champaign-il-2037-south-neil-street-61820/"
    },
    {
      "ID": "ce04b72e-dd92-479a-ab7c-0177ae484f6f",
      "Name": "Evo Cafe",
      "Cuisine": "chinese",
      "Website": "https://evocafeil.com/"
    },
    {
      "ID": "ce157b46-4ee6-4202-ba45-a2be88575d7d",
      "Name": "Fazoli's",
      "Cuisine": "italian",
      "Website": "https://locations.fazolis.com/il/champaign/2029-n--prospect-avenue.html?utm_source=yext+GMB&utm_medium=local&utm_campaign=website&y_source=1_MzExNjk5NC03MTUtbG9jYXRpb24uZ29vZ2xlX3dlYnNpdGVfb3ZlcnJpZGU%3D"
    },
    {
      "ID": "ce2d9f33-0755-4b16-bde7-becce5251eaa",
      "Name": "Sammy's Pancake House",
      "Cuisine": "breakfast",
      "Website": "http://sammyspancakehouse.com/"
    },
    {
      "ID": "cef64bfd-7440-41cc-8863-bf06443726f2",
      "Name": "Insomnia Cookies",
      "Cuisine": "cookie shop",
      "Website": "https://insomniacookies.com/locations/store/7"
    },
    {
      "ID": "cf51c051-857c-4898-94d6-f4d6eb9dd25c",
      "Name": "Toro Loco",
      "Cuisine": "mexican",
      "Website": "http://eltororestaurante.com/"
    },
    {
      "ID": "d0847aa7-8d7f-4633-8802-69d10387ae4c",
      "Name": "Mo's Burritos Restaurant",
      "Cuisine": "mexican",
      "Website": ""
    },
    {
      "ID": "d102704c-eb25-44c4-a0bc-eb9d7aa754f9",
      "Name": "The Poke Shack",
      "Cuisine": "",
      "Website": "http://facebook.com/thepokeshackfields"
    },
    {
      "ID": "d11b0a93-c87e-405b-93ec-9fdd0bdb3b49",
      "Name": "Caffe Bene",
      "Cuisine": "coffee shop",
      "Website": ""
    },
    {
      "ID": "d276e998-b654-4b7e-8921-732576b99820",
      "Name": "Gordon Food Service Store",
      "Cuisine": "grocery store",
      "Website": "https://gfsstore.com/"
    },
    {
      "ID": "d3570a1d-4587-4cc8-883a-627244cb1545",
      "Name": "Spice Box",
      "Cuisine": "",
      "Website": "https://spicebox.illinois.edu/"
    },
    {
      "ID": "d54bbb0c-609a-483c-adf9-f10f1f07411a",
      "Name": "Ambar India Restaurant",
      "Cuisine": "indian",
      "Website": "http://www.ambarindiarestaurant.com/?utm_source=gmb&utm_medium=website"
    },
    {
      "ID": "d5aa3243-796f-4156-b935-2f5e0c0b42d7",
      "Name": "Green Onion Asian Market",
      "Cuisine": "grocery store",
      "Website": "https://www.facebook.com/greenonionasianmarket/"
    },
    {
      "ID": "d6497ab7-6895-49fa-ba9a-3f843b6e64b5",
      "Name": "Red Herring Vegetarian Restaurant",
      "Cuisine": "vegetarian",
      "Website": "https://www.redherringlove.com/"
    },
    {
      "ID": "d680ea2a-2888-4911-ae2a-e277f90c7deb",
      "Name": "Cowboy Monkey",
      "Cuisine": "",
      "Website": "http://www.cowboy-monkey.com/"
    },
    {
      "ID": "d6f63a20-5132-423f-8cb6-201e30e88c6b",
      "Name": "Le Peep",
      "Cuisine": "breakfast",
      "Website": "http://champaignlepeep.com/"
    },
    {
      "ID": "d7092bc3-ec3c-4504-86c1-945cde75e6e0",
      "Name": "The Dancing Dog Eatery & Juicery",
      "Cuisine": "vegan",
      "Website": "https://www.dancingdogeatery.com/"
    },
    {
      "ID": "d7896727-5aa4-4e87-8076-f36112e8e0da",
      "Name": "D.P. Dough",
      "Cuisine": "pizza",
      "Website": "http://www.dpdough.com/"
    },
    {
      "ID": "da567a9b-442a-4ffc-9c7b-e905e10bcba4",
      "Name": "Mid Summer Lounge",
      "Cuisine": "",
      "Website": ""
    },
    {
      "ID": "df205946-1c32-48e8-a8d9-f6cabc914f93",
      "Name": "Domino's Pizza",
      "Cuisine": "pizza delivery",
      "Website": "https://www.dominos.com/en/?utm_source=google&utm_medium=loclist&utm_campaign=localmaps"
    },
    {
      "ID": "dfce42d0-62e0-4c06-8145-41ea73ddc347",
      "Name": "Peking Garden Restaurant in Champaign IL",
      "Cuisine": "chinese",
      "Website": "http://www.pekinggardenil.com/"
    },
    {
      "ID": "e301e1c4-b7d0-4218-abac-c5b0a7f35d01",
      "Name": "Po' Boys",
      "Cuisine": "barbecue",
      "Website": "https://www.poboysurbana.com/"
    },
    {
      "ID": "e312434e-920c-4165-b2b3-be31df651666",
      "Name": "Houlihan's",
      "Cuisine": "american",
      "Website": "http://www.houlihans.com/my-houlihans/champaign"
    },
    {
      "ID": "e3d0291b-1463-4336-9cd2-d2102d98f6d9",
      "Name": "The Himalayan Chimney",
      "Cuisine": "indian",
      "Website": "https://oo.shift4payments.com/#/98ff7b1c-8f55-46c3-a82a-fcb5f06609e9"
    },
    {
      "ID": "e4b97946-55e2-4003-a077-a5387f723b3a",
      "Name": "Sakanaya",
      "Cuisine": "sushi",
      "Website": "http://www.sakanayarestaurant.com/"
    },
    {
      "ID": "e7efd4f8-31f3-44f0-8874-12519f39547c",
      "Name": "Baskin-Robbins",
      "Cuisine": "ice cream shop",
      "Website": "https://www.baskinrobbins.com/?utm_source=google&utm_medium=organic&utm_campaign=Yext"
    },
    {
      "ID": "e81f1297-373f-4df2-b754-0ca4e363c589",
      "Name": "Burrito King Mexican Grill",
      "Cuisine": "mexican",
      "Website": "https://www.burritokingmexicangrill.com/"
    },
    {
      "ID": "e828fbff-4069-4987-b0a9-bc023ed36bdc",
      "Name": "Potbelly Sandwich Shop",
      "Cuisine": "sandwich shop",
      "Website": "https://www.potbelly.com/locations/illinois/champaign?utm_source=google&utm_medium=organic&utm_campaign=Yext"
    },
    {
      "ID": "ea398f9a-ef9b-4620-9b5b-5a96f52e1a91",
      "Name": "Bob Evans",
      "Cuisine": "family",
      "Website": "https://www.bobevans.com/locations/champaign?utm_source=Yext&utm_medium=Listings&utm_campaign=Organic&y_source=1_MzY0NzE4MS03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D"
    },
    {
      "ID": "ea4bd621-73c0-47e0-a6e8-8baa71c8c98b",
      "Name": "Sushi Kame",
      "Cuisine": "japanese",
      "Website": "http://sushi-kame.com/"
    },
    {
      "ID": "ebe3823c-5526-45af-989b-1220b9216373",
      "Name": "Dumpling noodle BBQ",
      "Cuisine": "",
      "Website": ""
    },
    {
      "ID": "ec08f500-5d3a-4c25-9ff5-4b7c15479cd6",
      "Name": "Smoky's House BBQ",
      "Cuisine": "barbecue",
      "Website": "http://www.smokysbbqsavoy.com/"
    },
    {
      "ID": "ecdcb4fc-df03-4753-adde-0e6088fd67f9",
      "Name": "Chopstix",
      "Cuisine": "chinese",
      "Website": "http://www.chopstix217.com/"
    },
    {
      "ID": "edb0634a-7116-4780-9a25-a853631b69f8",
      "Name": "Jurassic Grill",
      "Cuisine": "delivery",
      "Website": "https://www.grubhub.com/restaurant/jurassic-grill-404-e-green-st-champaign/302999"
    },
    {
      "ID": "ee955584-68ee-4c70-bb75-4a24317222aa",
      "Name": "Bab Plus Restaurant",
      "Cuisine": "korean",
      "Website": "http://babpluskorean.com/"
    },
    {
      "ID": "efa6278c-2c46-4bb8-bda7-d31963ea20cb",
      "Name": "Miga",
      "Cuisine": "japanese",
      "Website": "http://www.miga-restaurant.com/"
    },
    {
      "ID": "f0a089b3-abb4-420b-a121-13057564df18",
      "Name": "Farren's Pub & Eatery",
      "Cuisine": "pub",
      "Website": "http://www.farrenspub.com/"
    },
    {
      "ID": "f28f0a4c-dd51-4b1e-ab70-2ad2fb680a8e",
      "Name": "Long John Silver's",
      "Cuisine": "fast food",
      "Website": "https://www.ljsilvers.com/"
    },
    {
      "ID": "f2cf7b8b-635c-4162-9648-c3d941f6dfa6",
      "Name": "Spicy Tang",
      "Cuisine": "chinese",
      "Website": ""
    },
    {
      "ID": "f2d2d3cb-6038-4756-9ecc-8e5f56204ee3",
      "Name": "Smoothie King",
      "Cuisine": "juice shop",
      "Website": "https://locations.smoothieking.com/ll/US/IL/Champaign/1904-S_-Neil-St"
    },
    {
      "ID": "f300c96c-d683-49f5-bd9c-070d93f95e88",
      "Name": "Billy Barooz Pub & Grill",
      "Cuisine": "sports bar",
      "Website": "http://www.billybarooz.com/"
    },
    {
      "ID": "f3743902-06c1-4c09-a3f0-d1240c093919",
      "Name": "Legends",
      "Cuisine": "bar",
      "Website": "http://legendsbarchampaign.com/"
    },
    {
      "ID": "f3ebf7cf-4f94-4efa-a0af-654d50ba093b",
      "Name": "Wingstop",
      "Cuisine": "chicken wings",
      "Website": "https://www.wingstop.com/location/wingstop-653-champaign-il-61820/menu?utm_source=google&utm_medium=distrib&utm_campaign=google-distrib"
    },
    {
      "ID": "f45f513c-2ae7-42ff-8a72-b15b382e5169",
      "Name": "Harvest Market",
      "Cuisine": "grocery store",
      "Website": "http://www.goharvestmarket.com/"
    },
    {
      "ID": "f4d76ba2-5c6a-4516-b488-1234a2755660",
      "Name": "Moki Sushi",
      "Cuisine": "sushi",
      "Website": "http://mokisushichampaign.com/"
    },
    {
      "ID": "f508b5de-41da-4938-b0e4-372052a53c5c",
      "Name": "KFC",
      "Cuisine": "chicken",
      "Website": "https://locations.kfc.com/il/urbana/410-university-avenue"
    },
    {
      "ID": "f5161b09-21b3-4604-aa1c-c06dc997b848",
      "Name": "Paris super crepes",
      "Cuisine": "dessert",
      "Website": "http://parissupercrepes.com/"
    },
    {
      "ID": "f519fab3-f370-4a94-a3dc-a8a81608defd",
      "Name": "Merry Ann's Diner (Original)",
      "Cuisine": "diner",
      "Website": "http://www.merryannsdiner.com/"
    },
    {
      "ID": "f5b89ed5-e3bb-41a0-a258-7be3598081de",
      "Name": "Burger King",
      "Cuisine": "",
      "Website": "https://burgerking.com/store-locator/store/restaurant_62722"
    },
    {
      "ID": "f64d3c57-2167-4fd8-9d97-921928602bfa",
      "Name": "Common Ground",
      "Cuisine": "grocery store",
      "Website": "http://www.commonground.coop/"
    },
    {
      "ID": "f6670374-2aa1-4f6e-9ace-9eb11f7d9148",
      "Name": "Huaraches Moroleon",
      "Cuisine": "mexican",
      "Website": "http://huarachesmoroleon.com/"
    },
    {
      "ID": "f6c71062-7773-4a87-98a2-a9550a9addc5",
      "Name": "Nando Milano",
      "Cuisine": "italian",
      "Website": "http://www.nandomilanochampaign.com/"
    },
    {
      "ID": "fa0afbae-3234-4697-a8a7-313faf9f727c",
      "Name": "Red Lobster",
      "Cuisine": "seafood",
      "Website": "https://www.redlobster.com/locations/list/il/champaign/1901-n-prospect-ave"
    },
    {
      "ID": "faff5e95-3c10-4d6c-8717-dcfe088dc2f6",
      "Name": "Noodles and Company",
      "Cuisine": "",
      "Website": "https://locations.noodles.com/il/champaign/528-east-green.html"
    },
    {
      "ID": "fe6c9179-b653-4185-b04c-e2445c091fe4",
      "Name": "Kohinoor Indian Restaurant and Lounge",
      "Cuisine": "",
      "Website": "https://www.kohinoorchampaign.com/"
    },
    {
      "ID": "ff8bc50d-a5e5-41b3-be28-33c64a8805c0",
      "Name": "Hardee's",
      "Cuisine": "fast food",
      "Website": "https://www.hardees.com/?utm_source=Yext&utm_medium=Visit%20Website&utm_campaign=Homepage"
    }
]