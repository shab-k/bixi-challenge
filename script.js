/* This will let us use the .remove() function later on */
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hiaSIsImEiOiJja3FsbHcxejUwdXc5MnBxdDd6YmZrYWp1In0.N-mH6zSK6gPfe7q5BYYFGQ';


/**
 * Adding map to the page
 */
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-73.5728, 45.5017],
    zoom: 15,
    scrollZoom: false
});

let stations = {
    'type': 'FeatureCollection',
    "features": [
      {
        "type": "Feature",
        "properties": {
          "code": "7138",
          "name": "Dumesnil / Bélanger"
        },
        "geometry": {
          "coordinates": [
            -73.569353,
            45.587777
          ],
          "type": "Point"
        },
        "id": "00c9a439c44e679a6309a39ebd64b617"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7136",
          "name": "Marcel-Laurin / Beaudet"
        },
        "geometry": {
          "coordinates": [
            -73.681756,
            45.506843
          ],
          "type": "Point"
        },
        "id": "010a6f948f97eea10496e35cb92745ad"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6188",
          "name": "de Mentana / Marie-Anne"
        },
        "geometry": {
          "coordinates": [
            -73.577858,
            45.526026
          ],
          "type": "Point"
        },
        "id": "0115840585eb6b719d7cb376e1022326"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6416",
          "name": "Notre-Dame-de-Grâce / Décarie"
        },
        "geometry": {
          "coordinates": [
            -73.615372,
            45.477353
          ],
          "type": "Point"
        },
        "id": "0129ed104ce1fc4ec899f17d84844030"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6023",
          "name": "de la Commune / Berri"
        },
        "geometry": {
          "coordinates": [
            -73.54983,
            45.51086
          ],
          "type": "Point"
        },
        "id": "031b5cb213d167120e965ed7c769b978"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6728",
          "name": "d'Outremont / Ogilvy"
        },
        "geometry": {
          "coordinates": [
            -73.626723,
            45.52687
          ],
          "type": "Point"
        },
        "id": "038ed8806674b15da75c85c11b3da9ea"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6341",
          "name": "Regina / de Verdun"
        },
        "geometry": {
          "coordinates": [
            -73.570769,
            45.467369
          ],
          "type": "Point"
        },
        "id": "03d06dcc1b208158a600ca5f7a57ab9e"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6088",
          "name": "Richmond / Notre-Dame"
        },
        "geometry": {
          "coordinates": [
            -73.567771,
            45.48916
          ],
          "type": "Point"
        },
        "id": "04757788faceac1a634ee4488ca2f41a"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6391",
          "name": "Aylwin / Ontario"
        },
        "geometry": {
          "coordinates": [
            -73.545339,
            45.544284
          ],
          "type": "Point"
        },
        "id": "04fdd1e82534296745102cc8de99108c"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7027",
          "name": "Terrasse Guindon / Fullum"
        },
        "geometry": {
          "coordinates": [
            -73.569138,
            45.537114
          ],
          "type": "Point"
        },
        "id": "0501bb71d234f10b8c994ebf906bde6c"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6358",
          "name": "1ère  avenue / St-Zotique"
        },
        "geometry": {
          "coordinates": [
            -73.593927,
            45.551937
          ],
          "type": "Point"
        },
        "id": "05076f3ff01da08169003d72d0d1ad99"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7084",
          "name": "McTavish / Sherbrooke"
        },
        "geometry": {
          "coordinates": [
            -73.576024,
            45.502812
          ],
          "type": "Point"
        },
        "id": "05b4cbfb471ed22ebed17c5512b31713"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6027",
          "name": "de Maisonneuve / Mansfield (sud)"
        },
        "geometry": {
          "coordinates": [
            -73.573465,
            45.502053
          ],
          "type": "Point"
        },
        "id": "063f7ac06ddef6720541ef1183ad77d7"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6014",
          "name": "St-Denis / René-Lévesque"
        },
        "geometry": {
          "coordinates": [
            -73.558466,
            45.512871
          ],
          "type": "Point"
        },
        "id": "06b67761a156fe0f2a7e9a493c476572"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6281",
          "name": "Resther / St-Joseph"
        },
        "geometry": {
          "coordinates": [
            -73.586252,
            45.527697
          ],
          "type": "Point"
        },
        "id": "0707b52fbc5336b5094f6504688aa4e2"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6343",
          "name": "Marquette / Villeray"
        },
        "geometry": {
          "coordinates": [
            -73.615293,
            45.550683
          ],
          "type": "Point"
        },
        "id": "0736f07f0fea32dc3cbeb0a0469d0d93"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6743",
          "name": "St-Marc / Sherbrooke"
        },
        "geometry": {
          "coordinates": [
            -73.583368,
            45.494514
          ],
          "type": "Point"
        },
        "id": "0781e95c890837b7193093daee1e1617"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6138",
          "name": "Gauthier / de Lorimier"
        },
        "geometry": {
          "coordinates": [
            -73.565413,
            45.531673
          ],
          "type": "Point"
        },
        "id": "07d1b3b362738d395ab37c0387d36c2c"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6355",
          "name": "Ontario / Sicard"
        },
        "geometry": {
          "coordinates": [
            -73.53744,
            45.556261
          ],
          "type": "Point"
        },
        "id": "07d8a3224de51ef85ee01aa2114f4182"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6150",
          "name": "Messier / du Mont-Royal"
        },
        "geometry": {
          "coordinates": [
            -73.571003,
            45.537114
          ],
          "type": "Point"
        },
        "id": "0827458e8a534fa9d08a0e7da93bd67b"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6344",
          "name": "St-Dominique / Jean-Talon"
        },
        "geometry": {
          "coordinates": [
            -73.617563,
            45.535248
          ],
          "type": "Point"
        },
        "id": "0b8bf37127538bf0992641064a456ed0"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6923",
          "name": "Marquette / Jean-Talon"
        },
        "geometry": {
          "coordinates": [
            -73.607668,
            45.547407
          ],
          "type": "Point"
        },
        "id": "0b8e9aad0909b2f79800a394d8667e93"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6302",
          "name": "Stuart / St-Viateur"
        },
        "geometry": {
          "coordinates": [
            -73.607797,
            45.516078
          ],
          "type": "Point"
        },
        "id": "0bd3e08f790c649e2c9045cc8c5ebeaf"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6013",
          "name": "Sanguinet / de Maisonneuve"
        },
        "geometry": {
          "coordinates": [
            -73.562594,
            45.513405
          ],
          "type": "Point"
        },
        "id": "0bdc26a639c01e45273d00eb2197332f"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6420",
          "name": "Métro Snowdon (de Westbury / Queen-Mary)"
        },
        "geometry": {
          "coordinates": [
            -73.628142,
            45.485384
          ],
          "type": "Point"
        },
        "id": "0c0ae4803bb14433060fca5ea8752e61"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7129",
          "name": "de l'Eglise / St-Germain"
        },
        "geometry": {
          "coordinates": [
            -73.67701,
            45.512559
          ],
          "type": "Point"
        },
        "id": "0c4d558fc8f209b565ac5d4ce34e985c"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6723",
          "name": "26e avenue / Beaubien"
        },
        "geometry": {
          "coordinates": [
            -73.577639,
            45.564944
          ],
          "type": "Point"
        },
        "id": "0d69eee85145a5c17d6426c662e3d64d"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6719",
          "name": "Park Row O / Sherbrooke"
        },
        "geometry": {
          "coordinates": [
            -73.634072,
            45.460729
          ],
          "type": "Point"
        },
        "id": "0e02f4f9a98fd2be3a147e3ece08db92"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6185",
          "name": "des Érables / Bélanger"
        },
        "geometry": {
          "coordinates": [
            -73.600873,
            45.54912
          ],
          "type": "Point"
        },
        "id": "0e66155e2f99da659a1b4b03e655dabd"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6194",
          "name": "Métro Atwater (Atwater / Ste-Catherine)"
        },
        "geometry": {
          "coordinates": [
            -73.584565,
            45.489476
          ],
          "type": "Point"
        },
        "id": "0e6fad15bf966379513c7df7e261db63"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6254",
          "name": "Boyer / Bélanger"
        },
        "geometry": {
          "coordinates": [
            -73.60897,
            45.54006
          ],
          "type": "Point"
        },
        "id": "0f081cfd04a4d64b3475e935109fd087"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6279",
          "name": "Louis-Hébert / Bélanger"
        },
        "geometry": {
          "coordinates": [
            -73.599164,
            45.551585
          ],
          "type": "Point"
        },
        "id": "0f67a9d79eca3920a91a6eca8fc84f96"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7099",
          "name": "Vezina / Victoria"
        },
        "geometry": {
          "coordinates": [
            -73.643216,
            45.497046
          ],
          "type": "Point"
        },
        "id": "0f8164c9cf93e5bfe4edc924c8a3e65d"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7142",
          "name": "Elgar / de l'Île-des-Sœurs"
        },
        "geometry": {
          "coordinates": [
            -73.546804,
            45.456823
          ],
          "type": "Point"
        },
        "id": "1047c5ae4ad92db8d3065dac3c8cad96"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6215",
          "name": "Metcalfe / St-Catherine"
        },
        "geometry": {
          "coordinates": [
            -73.572459,
            45.500832
          ],
          "type": "Point"
        },
        "id": "116288fcbe6159c93cfc9a5d782412cf"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7062",
          "name": "William / Robert-Bourassa"
        },
        "geometry": {
          "coordinates": [
            -73.55933,
            45.497165
          ],
          "type": "Point"
        },
        "id": "11e4eeff623f0afa47eae51a3a5ac93f"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7133",
          "name": "Thimens / Alexis-Nihon"
        },
        "geometry": {
          "coordinates": [
            -73.698563,
            45.508978
          ],
          "type": "Point"
        },
        "id": "129d331dadaaedd24a862a9d1f8af9df"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6164",
          "name": "de Lanaudière / Laurier"
        },
        "geometry": {
          "coordinates": [
            -73.583736,
            45.533313
          ],
          "type": "Point"
        },
        "id": "12c8cb820cb1a1a374476714fa4a05b1"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6066",
          "name": "McTavish / des Pins"
        },
        "geometry": {
          "coordinates": [
            -73.581002,
            45.505305
          ],
          "type": "Point"
        },
        "id": "1319f68cf701a908084f7f0205199c74"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6191",
          "name": "St-Zotique / Clark"
        },
        "geometry": {
          "coordinates": [
            -73.612674,
            45.531401
          ],
          "type": "Point"
        },
        "id": "133e1a893feabbc7fa1a71de383ae9d2"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6121",
          "name": "du Havre / de Rouen"
        },
        "geometry": {
          "coordinates": [
            -73.554786,
            45.534562
          ],
          "type": "Point"
        },
        "id": "13d659916607ecaf881e05e9277ced63"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6108",
          "name": "Logan / Fullum"
        },
        "geometry": {
          "coordinates": [
            -73.55117,
            45.528366
          ],
          "type": "Point"
        },
        "id": "13f50e3c007bcaf80a445b548bd1d0d0"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6219",
          "name": "de l'Hôtel-de-Ville / Roy"
        },
        "geometry": {
          "coordinates": [
            -73.574605,
            45.5174
          ],
          "type": "Point"
        },
        "id": "14cec2d3092ecf0a3d859dd5610a156e"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6408",
          "name": "Métro Georges-Vanier (St-Antoine / Canning)"
        },
        "geometry": {
          "coordinates": [
            -73.57656,
            45.4891
          ],
          "type": "Point"
        },
        "id": "1501e949da5ba1f70dad3f3c108535aa"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6036",
          "name": "de la Commune / St-Sulpice"
        },
        "geometry": {
          "coordinates": [
            -73.553469,
            45.504242
          ],
          "type": "Point"
        },
        "id": "16cbf6d919faed0b7b763ba1b6a0dcd9"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6907",
          "name": "Boyer / Rosemont"
        },
        "geometry": {
          "coordinates": [
            -73.595478,
            45.534136
          ],
          "type": "Point"
        },
        "id": "170e0a33a45695da1b2586b5c7fd0a2f"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6159",
          "name": "Ann / Wellington"
        },
        "geometry": {
          "coordinates": [
            -73.556752,
            45.494527
          ],
          "type": "Point"
        },
        "id": "18205cf0500b8208119a1f390de362f5"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7125",
          "name": "Rosemont / Viau"
        },
        "geometry": {
          "coordinates": [
            -73.566663,
            45.56833
          ],
          "type": "Point"
        },
        "id": "183f43c4d1eea2dd91bea3f3552ea312"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6206",
          "name": "Prince-Arthur / du Parc"
        },
        "geometry": {
          "coordinates": [
            -73.57547,
            45.51059
          ],
          "type": "Point"
        },
        "id": "1892a2906f29d488c05969ccf8b81a3d"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6356",
          "name": "de Monkland / Girouard"
        },
        "geometry": {
          "coordinates": [
            -73.621437,
            45.477106
          ],
          "type": "Point"
        },
        "id": "1897ee1a36bb7f3cb0d9c2a469b22ae2"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6406",
          "name": "Marché Atwater"
        },
        "geometry": {
          "coordinates": [
            -73.577598,
            45.480208
          ],
          "type": "Point"
        },
        "id": "18ca968ee75680087e274ab3046d742d"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6371",
          "name": "4e avenue / Masson"
        },
        "geometry": {
          "coordinates": [
            -73.575515,
            45.546978
          ],
          "type": "Point"
        },
        "id": "18fb602168d82d841a5e35b238d63e1a"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6091",
          "name": "Joseph-Manseau / René-Lévesque"
        },
        "geometry": {
          "coordinates": [
            -73.576767,
            45.491686
          ],
          "type": "Point"
        },
        "id": "194a33c3cdd8919998b095d7cb920ba9"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6128",
          "name": "Hogan / Ontario"
        },
        "geometry": {
          "coordinates": [
            -73.55116,
            45.535295
          ],
          "type": "Point"
        },
        "id": "195d6ef33556330d4415b00c710d23b5"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6103",
          "name": "du Havre / Hochelaga"
        },
        "geometry": {
          "coordinates": [
            -73.55794,
            45.535753
          ],
          "type": "Point"
        },
        "id": "1ab897b98e7f51693906f85893539cb4"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7005",
          "name": "Marquette / Fleury"
        },
        "geometry": {
          "coordinates": [
            -73.653787,
            45.567352
          ],
          "type": "Point"
        },
        "id": "1b19b7416cfdae77dec68ca2aa44f776"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6073",
          "name": "de Maisonneuve / Aylmer (ouest)"
        },
        "geometry": {
          "coordinates": [
            -73.57069,
            45.50501
          ],
          "type": "Point"
        },
        "id": "1b52a85fbc0469717533e587de5a9ee1"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6087",
          "name": "Notre-Dame / de la Montagne"
        },
        "geometry": {
          "coordinates": [
            -73.564817,
            45.493029
          ],
          "type": "Point"
        },
        "id": "1c17e0c6f396b71f8352e32df8526812"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7006",
          "name": "Clark / Fleury"
        },
        "geometry": {
          "coordinates": [
            -73.665565,
            45.547648
          ],
          "type": "Point"
        },
        "id": "1cb21395caec97542d260239f7f11418"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6314",
          "name": "de Lanaudière / Marie-Anne"
        },
        "geometry": {
          "coordinates": [
            -73.574806,
            45.529326
          ],
          "type": "Point"
        },
        "id": "1cb3929d5714f9b6d5a9883c066851ba"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6216",
          "name": "Parc Jeanne Mance (monument sir George-Etienne Cartier)"
        },
        "geometry": {
          "coordinates": [
            -73.584778,
            45.514839
          ],
          "type": "Point"
        },
        "id": "1ec2625ec26d5c2de66fe60392cae548"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6017",
          "name": "Atateken / du Square Amherst"
        },
        "geometry": {
          "coordinates": [
            -73.563905,
            45.520633
          ],
          "type": "Point"
        },
        "id": "1f21f02588832ad99dc538d03b2c8cf1"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6020",
          "name": "Sanguinet / Ontario"
        },
        "geometry": {
          "coordinates": [
            -73.565491,
            45.514767
          ],
          "type": "Point"
        },
        "id": "1f630aa18a76f94766833fe5e68503bc"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6388",
          "name": "d'Orléans / Hochelaga"
        },
        "geometry": {
          "coordinates": [
            -73.549427,
            45.550767
          ],
          "type": "Point"
        },
        "id": "1f88f8edb507ba32fe288286925ed63b"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6139",
          "name": "Gauthier / Parthenais"
        },
        "geometry": {
          "coordinates": [
            -73.563779,
            45.532926
          ],
          "type": "Point"
        },
        "id": "1f96da241bc362bae610ffb076e08846"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6152",
          "name": "Chabot / du Mont-Royal"
        },
        "geometry": {
          "coordinates": [
            -73.573588,
            45.534185
          ],
          "type": "Point"
        },
        "id": "1fdb8563dc30b32983f77bf6a0e962ba"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7089",
          "name": "du Tricentenaire / Prince-Albert"
        },
        "geometry": {
          "coordinates": [
            -73.491915,
            45.649545
          ],
          "type": "Point"
        },
        "id": "2011ad0a2c2bffac3eb430a4294acb9e"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6104",
          "name": "Wolfe / René-Lévesque"
        },
        "geometry": {
          "coordinates": [
            -73.554188,
            45.516817
          ],
          "type": "Point"
        },
        "id": "2079be0230e070c2f5a6bc4e95eaa50b"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6143",
          "name": "Rachel / de Brébeuf"
        },
        "geometry": {
          "coordinates": [
            -73.57264,
            45.52689
          ],
          "type": "Point"
        },
        "id": "2085b987ec4774a3ebe7b2688012bbd3"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6269",
          "name": "Wurtele / de Rouen"
        },
        "geometry": {
          "coordinates": [
            -73.553394,
            45.537627
          ],
          "type": "Point"
        },
        "id": "211ecdf3ec9c5dd039ac4fda485aad6e"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6412",
          "name": "Complexe sportif Claude-Robillard"
        },
        "geometry": {
          "coordinates": [
            -73.638615,
            45.553262
          ],
          "type": "Point"
        },
        "id": "21289efc72149e51dff5204b0ea96293"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6346",
          "name": "Nicolet / Sherbrooke"
        },
        "geometry": {
          "coordinates": [
            -73.554646,
            45.549695
          ],
          "type": "Point"
        },
        "id": "214c3b13a7be27b0313f9eb33a68b869"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6100",
          "name": "Mackay / de Maisonneuve"
        },
        "geometry": {
          "coordinates": [
            -73.57851,
            45.49659
          ],
          "type": "Point"
        },
        "id": "21ee94f4957527b5eb8a3aecf621c590"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6218",
          "name": "Prince-Arthur / St-Urbain"
        },
        "geometry": {
          "coordinates": [
            -73.573738,
            45.512587
          ],
          "type": "Point"
        },
        "id": "2244b91298133b563712144e58062c98"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6432",
          "name": "de Maisonneuve / Greene"
        },
        "geometry": {
          "coordinates": [
            -73.589293,
            45.48697
          ],
          "type": "Point"
        },
        "id": "227fcddc9e67be7478c5b522268d4456"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6011",
          "name": "St-André / St-Antoine"
        },
        "geometry": {
          "coordinates": [
            -73.552644,
            45.514114
          ],
          "type": "Point"
        },
        "id": "22973d003b11a8ec14f003665eff08de"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6247",
          "name": "St-Dominique / St-Zotique"
        },
        "geometry": {
          "coordinates": [
            -73.611063,
            45.532264
          ],
          "type": "Point"
        },
        "id": "22c3ffab9adc773e488b1a9ef69a48c6"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6173",
          "name": "Berri / Cherrier"
        },
        "geometry": {
          "coordinates": [
            -73.569509,
            45.519088
          ],
          "type": "Point"
        },
        "id": "234a58ea4a394e83b44a05e94169a83b"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7018",
          "name": "Valois / Ste-Catherine"
        },
        "geometry": {
          "coordinates": [
            -73.53725,
            45.545229
          ],
          "type": "Point"
        },
        "id": "235687c074560424c8950e04dd49c0f7"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6210",
          "name": "Métro Sauvé (Berri / Sauvé)"
        },
        "geometry": {
          "coordinates": [
            -73.656367,
            45.550692
          ],
          "type": "Point"
        },
        "id": "2475bd442a2c5c0c0171e22cb244e8a4"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6174",
          "name": "Roy / St-Denis"
        },
        "geometry": {
          "coordinates": [
            -73.5727,
            45.51908
          ],
          "type": "Point"
        },
        "id": "2480bf40aefd4c6127646cbe5bfa1f3c"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6248",
          "name": "St-Dominique / Rachel"
        },
        "geometry": {
          "coordinates": [
            -73.581566,
            45.518593
          ],
          "type": "Point"
        },
        "id": "24f1f8431328dc58fae39a03a66c1bf4"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6203",
          "name": "Aylmer / Sherbrooke"
        },
        "geometry": {
          "coordinates": [
            -73.573299,
            45.506586
          ],
          "type": "Point"
        },
        "id": "25380b906653d36b5677a31ecf02b643"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6329",
          "name": "Drolet / Gounod"
        },
        "geometry": {
          "coordinates": [
            -73.626374,
            45.540951
          ],
          "type": "Point"
        },
        "id": "256b9d6d700bc1cbd922e7cf2c48a5b9"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6042",
          "name": "de la Gauchetière / Robert-Bourassa"
        },
        "geometry": {
          "coordinates": [
            -73.565448,
            45.500605
          ],
          "type": "Point"
        },
        "id": "26573cf90ebae0037e404961ee79f29f"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "4000",
          "name": "Jeanne-d'Arc / Ontario"
        },
        "geometry": {
          "coordinates": [
            -73.541874,
            45.549597
          ],
          "type": "Point"
        },
        "id": "2665cb89098dd62e0caedf9d5ce7dbeb"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6357",
          "name": "13e avenue / St-Zotique"
        },
        "geometry": {
          "coordinates": [
            -73.588748,
            45.557487
          ],
          "type": "Point"
        },
        "id": "2673928e963df3401e48979eeba64ca1"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6182",
          "name": "de Bullion / du Mont-Royal"
        },
        "geometry": {
          "coordinates": [
            -73.585268,
            45.521751
          ],
          "type": "Point"
        },
        "id": "269d77f625b1ecd248781e6ecd636615"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6714",
          "name": "LaSalle / 90e avenue"
        },
        "geometry": {
          "coordinates": [
            -73.644224,
            45.417147
          ],
          "type": "Point"
        },
        "id": "26ad7744bd0b5540729059186f5c91a4"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7067",
          "name": "City Councillors / du President-Kennedy"
        },
        "geometry": {
          "coordinates": [
            -73.57139,
            45.506251
          ],
          "type": "Point"
        },
        "id": "26b535dd61a767ff3f30a2ccf3497fc0"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6276",
          "name": "de la Roche / Bélanger"
        },
        "geometry": {
          "coordinates": [
            -73.607604,
            45.541669
          ],
          "type": "Point"
        },
        "id": "26ff41a15249187e7a50b8d57dc58242"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6061",
          "name": "Mansfield / Ste-Catherine"
        },
        "geometry": {
          "coordinates": [
            -73.571786,
            45.501398
          ],
          "type": "Point"
        },
        "id": "27f0f788cde0d4ca7a3e57c66f799249"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7004",
          "name": "Émile-Journault / de Chateaubriand"
        },
        "geometry": {
          "coordinates": [
            -73.640632,
            45.549833
          ],
          "type": "Point"
        },
        "id": "28c55fe606a8b7cba2128b5dacbb6865"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6207",
          "name": "Ste-Famille / des Pins"
        },
        "geometry": {
          "coordinates": [
            -73.576887,
            45.512831
          ],
          "type": "Point"
        },
        "id": "2941595433160c10d7e6535a2409c218"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6109",
          "name": "Quai de la navette fluviale"
        },
        "geometry": {
          "coordinates": [
            -73.538382,
            45.513741
          ],
          "type": "Point"
        },
        "id": "29c314f8924414f2acc70ee1f10d9d56"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6230",
          "name": "Waverly / St-Viateur"
        },
        "geometry": {
          "coordinates": [
            -73.600126,
            45.523856
          ],
          "type": "Point"
        },
        "id": "2a84e3a33d436792b722de93317de8c3"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7040",
          "name": "St-Urbain / Beaubien"
        },
        "geometry": {
          "coordinates": [
            -73.610679,
            45.52951
          ],
          "type": "Point"
        },
        "id": "2b50ac35dc31be0ccd3480be851d6790"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6404",
          "name": "Quesnel / Vinet"
        },
        "geometry": {
          "coordinates": [
            -73.577514,
            45.485889
          ],
          "type": "Point"
        },
        "id": "2b7953600e5331357c909797972a10f8"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6414",
          "name": "Parc St-Henri (Laporte / Guay)"
        },
        "geometry": {
          "coordinates": [
            -73.585908,
            45.480133
          ],
          "type": "Point"
        },
        "id": "2bf3ce5a6561c7626214b8ee2b8566d9"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6046",
          "name": "Métro Bonaventure (de la Gauchetière / de la Cathédrale)"
        },
        "geometry": {
          "coordinates": [
            -73.567256,
            45.498312
          ],
          "type": "Point"
        },
        "id": "2c490efa2360074ef2c55b4f0d70d1a4"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6154",
          "name": "Marquette / du Mont-Royal"
        },
        "geometry": {
          "coordinates": [
            -73.57544,
            45.53229
          ],
          "type": "Point"
        },
        "id": "2c54b67efbbcb1ff680f8f6548eb31c8"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6166",
          "name": "Gerry-Boulet / St-Grégoire"
        },
        "geometry": {
          "coordinates": [
            -73.589306,
            45.533735
          ],
          "type": "Point"
        },
        "id": "2cca1f858602922786a3b48ba7e65093"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7073",
          "name": "Logan / de Champlain"
        },
        "geometry": {
          "coordinates": [
            -73.555842,
            45.523194
          ],
          "type": "Point"
        },
        "id": "2cd5a34ffd88f4cd5efe1e2819692fdc"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6367",
          "name": "3e avenue / Dandurand"
        },
        "geometry": {
          "coordinates": [
            -73.578998,
            45.547294
          ],
          "type": "Point"
        },
        "id": "2de9883bda9bbfba26169041715d2e61"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6726",
          "name": "Hamel / Sauvé"
        },
        "geometry": {
          "coordinates": [
            -73.650561,
            45.560761
          ],
          "type": "Point"
        },
        "id": "2dfbcbf649e00a3496b48108fcdce6b0"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6377",
          "name": "Grand Trunk / Hibernia"
        },
        "geometry": {
          "coordinates": [
            -73.56385,
            45.47968
          ],
          "type": "Point"
        },
        "id": "2e237869f4ade3c3d569a1ef3dcf405a"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6007",
          "name": "de l'Hôtel-de-Ville / Ste-Catherine"
        },
        "geometry": {
          "coordinates": [
            -73.562135,
            45.51166
          ],
          "type": "Point"
        },
        "id": "2e3bd62d2caa65a8262376ba5ab8d64f"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6227",
          "name": "de l'Esplanade / Laurier"
        },
        "geometry": {
          "coordinates": [
            -73.594906,
            45.521038
          ],
          "type": "Point"
        },
        "id": "2ea6cc8c9f61d3abab7e3052a575ec3e"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6908",
          "name": "de Bellechasse / de St-Vallier"
        },
        "geometry": {
          "coordinates": [
            -73.601124,
            45.53341
          ],
          "type": "Point"
        },
        "id": "2ed1986807610736bd2b25f805a10482"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6222",
          "name": "de l'Esplanade / du Mont-Royal"
        },
        "geometry": {
          "coordinates": [
            -73.588338,
            45.518252
          ],
          "type": "Point"
        },
        "id": "2ed8f906ff4755a4f2fa795fcef74889"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6193",
          "name": "de l'Esplanade / Fairmount"
        },
        "geometry": {
          "coordinates": [
            -73.596758,
            45.521495
          ],
          "type": "Point"
        },
        "id": "2f99a1e81f1345e1005f24d4e2a103aa"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7096",
          "name": "Chabanel / du Parc"
        },
        "geometry": {
          "coordinates": [
            -73.654883,
            45.538307
          ],
          "type": "Point"
        },
        "id": "2fa3f378ca29087a7fda2a7b8f95fc43"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7032",
          "name": "Drolet / Laurier"
        },
        "geometry": {
          "coordinates": [
            -73.589758,
            45.526251
          ],
          "type": "Point"
        },
        "id": "2fd487fedbfb6e3cc960318c6b1d868d"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6168",
          "name": "Marmier / St-Denis"
        },
        "geometry": {
          "coordinates": [
            -73.598345,
            45.530871
          ],
          "type": "Point"
        },
        "id": "2fdb3685d638aa49d50d7ad1e21be3d1"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6208",
          "name": "Hutchison / des Pins"
        },
        "geometry": {
          "coordinates": [
            -73.57805,
            45.51069
          ],
          "type": "Point"
        },
        "id": "30d6088f93819f04c5265599864545d4"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6151",
          "name": "Parthenais / du Mont-Royal"
        },
        "geometry": {
          "coordinates": [
            -73.571463,
            45.536469
          ],
          "type": "Point"
        },
        "id": "31b10c36d3d9fff5d916f4e61cdac4d2"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6250",
          "name": "Marché Jean-Talon (Henri-Julien / Jean-Talon)"
        },
        "geometry": {
          "coordinates": [
            -73.614887,
            45.536785
          ],
          "type": "Point"
        },
        "id": "31d0ebaec8dc66dde2b3050c9ab64640"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7065",
          "name": "de Lanaudière / Bélanger"
        },
        "geometry": {
          "coordinates": [
            -73.60565,
            45.54365
          ],
          "type": "Point"
        },
        "id": "31efaf4e4de56c870011e5968acd426d"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6197",
          "name": "de Bordeaux / Masson"
        },
        "geometry": {
          "coordinates": [
            -73.582445,
            45.538984
          ],
          "type": "Point"
        },
        "id": "3275ee5dd627c50f71f3f2f598b4b431"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7120",
          "name": "Notre-Dame / des Ormeaux"
        },
        "geometry": {
          "coordinates": [
            -73.512239,
            45.599206
          ],
          "type": "Point"
        },
        "id": "3279b1a7a850a8bdf82527b02cf57ba0"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6095",
          "name": "Chomedey / de Maisonneuve"
        },
        "geometry": {
          "coordinates": [
            -73.584006,
            45.4918
          ],
          "type": "Point"
        },
        "id": "328961e9f2894fbaa4aaefb49e371ad6"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7079",
          "name": "Notre-Dame / Gauvin"
        },
        "geometry": {
          "coordinates": [
            -73.560199,
            45.500105
          ],
          "type": "Point"
        },
        "id": "335cbd22db65d1bde5c2326e7858b54b"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7016",
          "name": "Métro Langelier (Langelier / Sherbrooke)"
        },
        "geometry": {
          "coordinates": [
            -73.542476,
            45.582846
          ],
          "type": "Point"
        },
        "id": "338418d2ad8d10f4fd3142ac3b4a2663"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7039",
          "name": "du Mont-Royal / Augustin-Frigon"
        },
        "geometry": {
          "coordinates": [
            -73.56772,
            45.543763
          ],
          "type": "Point"
        },
        "id": "33c021e5923ae68ab414c700e5a70f55"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7077",
          "name": "Jean Langlois / Fullum"
        },
        "geometry": {
          "coordinates": [
            -73.545752,
            45.526499
          ],
          "type": "Point"
        },
        "id": "34514164e691939f6bc0f3302f3ed192"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6243",
          "name": "Bloomfield / Bernard"
        },
        "geometry": {
          "coordinates": [
            -73.608427,
            45.520687
          ],
          "type": "Point"
        },
        "id": "34629fd01ad00650b49314c6aa6a9001"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6732",
          "name": "Fortune / Wellington"
        },
        "geometry": {
          "coordinates": [
            -73.559038,
            45.477923
          ],
          "type": "Point"
        },
        "id": "346c9e08d8f1891a7d16723a19e38623"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6422",
          "name": "Fleury / Lajeunesse"
        },
        "geometry": {
          "coordinates": [
            -73.662082,
            45.553578
          ],
          "type": "Point"
        },
        "id": "34c87d7eebac55fcc7481efe73467ad2"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6141",
          "name": "des Érables / Rachel"
        },
        "geometry": {
          "coordinates": [
            -73.566867,
            45.533547
          ],
          "type": "Point"
        },
        "id": "351b0a2c88819e0fca57eead1474316a"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6195",
          "name": "de Bullion / St-Joseph"
        },
        "geometry": {
          "coordinates": [
            -73.590143,
            45.524036
          ],
          "type": "Point"
        },
        "id": "355c2b85259697532e3a170adb9ecb64"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7092",
          "name": "Gare Bois-de-Boulogne"
        },
        "geometry": {
          "coordinates": [
            -73.677164,
            45.539725
          ],
          "type": "Point"
        },
        "id": "359a1ee81254024aa1778a10b62112b2"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7113",
          "name": "Casgrain / Maguire"
        },
        "geometry": {
          "coordinates": [
            -73.595252,
            45.525932
          ],
          "type": "Point"
        },
        "id": "360078f6ac747bbc93baf02d159c77d3"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6245",
          "name": "Bloomfield / Van Horne"
        },
        "geometry": {
          "coordinates": [
            -73.612657,
            45.522585
          ],
          "type": "Point"
        },
        "id": "3670ae42b9c2a1dd2c1f77ffeedbf6cf"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6394",
          "name": "Valois / Ontario"
        },
        "geometry": {
          "coordinates": [
            -73.544674,
            45.547404
          ],
          "type": "Point"
        },
        "id": "369ca3e29a4342a1bcd0297ef39702d4"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6200",
          "name": "Maguire / St-Laurent"
        },
        "geometry": {
          "coordinates": [
            -73.59581,
            45.524628
          ],
          "type": "Point"
        },
        "id": "373cbb06be95562823b2e467581d4c0d"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6068",
          "name": "2e avenue / Jean-Riletd"
        },
        "geometry": {
          "coordinates": [
            -73.61656,
            45.562509
          ],
          "type": "Point"
        },
        "id": "37c183f24162f84d0cdf4b9362e960c2"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6419",
          "name": "Beaucourt / de la Côte-Ste-Catherine"
        },
        "geometry": {
          "coordinates": [
            -73.633649,
            45.491513
          ],
          "type": "Point"
        },
        "id": "37ed16532b5a4aa2e01ec8ce6ea8e4ec"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7147",
          "name": "Métro de Castelnau (de Castelnau / Clark)"
        },
        "geometry": {
          "coordinates": [
            -73.620768,
            45.534739
          ],
          "type": "Point"
        },
        "id": "387af1e5e1f4e8e46c30b208405ad60d"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6741",
          "name": "Canning / Notre-Dame"
        },
        "geometry": {
          "coordinates": [
            -73.570233,
            45.486318
          ],
          "type": "Point"
        },
        "id": "38ec99dea75a92ebc712edd1162fb71f"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6012",
          "name": "Métro St-Laurent (de Maisonneuve / St-Laurent)"
        },
        "geometry": {
          "coordinates": [
            -73.56497,
            45.51066
          ],
          "type": "Point"
        },
        "id": "3992bd81126c6968dd49b1a20ebf1997"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6387",
          "name": "Métro Joliette  (Joliette / Hochelaga)"
        },
        "geometry": {
          "coordinates": [
            -73.551557,
            45.546907
          ],
          "type": "Point"
        },
        "id": "39a35b7ef8240dac9bbde199f7925d60"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6041",
          "name": "St-Jacques / McGill"
        },
        "geometry": {
          "coordinates": [
            -73.560144,
            45.501441
          ],
          "type": "Point"
        },
        "id": "39caf269bce76834f9cd6e6a54134951"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6700",
          "name": "de la Salle / Ste-Catherine"
        },
        "geometry": {
          "coordinates": [
            -73.534433,
            45.549963
          ],
          "type": "Point"
        },
        "id": "39db5493f5ad07f09b6b006632db5632"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6112",
          "name": "Montcalm / de Maisonneuve"
        },
        "geometry": {
          "coordinates": [
            -73.557865,
            45.519139
          ],
          "type": "Point"
        },
        "id": "39ea5e9ab16895ff296d5094875d2eb5"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6738",
          "name": "Union / René-Lévesque"
        },
        "geometry": {
          "coordinates": [
            -73.566582,
            45.50235
          ],
          "type": "Point"
        },
        "id": "3a1273afcd6b912e8daf554bad7c1212"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6744",
          "name": "Hamilton / Jolicoeur"
        },
        "geometry": {
          "coordinates": [
            -73.597557,
            45.456355
          ],
          "type": "Point"
        },
        "id": "3a2db8d3b008340e268bc4300edbd0d8"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6186",
          "name": "St-Hubert / Laurier"
        },
        "geometry": {
          "coordinates": [
            -73.588657,
            45.52931
          ],
          "type": "Point"
        },
        "id": "3a9985d9cb8d1e8151d7ad9a76c84e4e"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7116",
          "name": "Métro Honoré-Beaugrand (Sherbrooke / Honoré-Beaugrand)"
        },
        "geometry": {
          "coordinates": [
            -73.535179,
            45.596796
          ],
          "type": "Point"
        },
        "id": "3b1435a98accddbf33e87bb3831127ba"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6117",
          "name": "de Maisonneuve / Aylmer (est)"
        },
        "geometry": {
          "coordinates": [
            -73.57048,
            45.505263
          ],
          "type": "Point"
        },
        "id": "3b3125710d4ff6db967cd225ac3af0b9"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7078",
          "name": "Hochelaga / Chapleau"
        },
        "geometry": {
          "coordinates": [
            -73.559651,
            45.534452
          ],
          "type": "Point"
        },
        "id": "3b484ba834e4e04f451c3d929cb2523b"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7148",
          "name": "Papineau / Émile-Journault"
        },
        "geometry": {
          "coordinates": [
            -73.633568,
            45.559883
          ],
          "type": "Point"
        },
        "id": "3b5be2c9e5f60ff9caad15af016ea0b8"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6345",
          "name": "Louis-Hémon / Villeray"
        },
        "geometry": {
          "coordinates": [
            -73.610737,
            45.554961
          ],
          "type": "Point"
        },
        "id": "3b6d74e5c3d0f3c7823adea16d9d5304"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6079",
          "name": "Hutchison / Prince-Arthur"
        },
        "geometry": {
          "coordinates": [
            -73.576107,
            45.509758
          ],
          "type": "Point"
        },
        "id": "3c230926f88e7ce7be6905e4ffe559a0"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6393",
          "name": "Dézéry / Ontario"
        },
        "geometry": {
          "coordinates": [
            -73.547549,
            45.54111
          ],
          "type": "Point"
        },
        "id": "3c61c9c403b37d4f5c5320f71a9ee7a3"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6417",
          "name": "de la Salle / Hochelaga"
        },
        "geometry": {
          "coordinates": [
            -73.547493,
            45.554152
          ],
          "type": "Point"
        },
        "id": "3cfb5f0b2601319007868b60072c4f95"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6001",
          "name": "Métro Champ-de-Mars (Viger / Sanguinet)"
        },
        "geometry": {
          "coordinates": [
            -73.556508,
            45.51035
          ],
          "type": "Point"
        },
        "id": "3d0d4bd4a1f5664eb6e38312e41d067b"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6145",
          "name": "du Parc-La Fontaine / Duluth"
        },
        "geometry": {
          "coordinates": [
            -73.571976,
            45.524517
          ],
          "type": "Point"
        },
        "id": "3d0f34642f7b267e188884640169f892"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6157",
          "name": "de Brébeuf / du Mont-Royal"
        },
        "geometry": {
          "coordinates": [
            -73.578153,
            45.529407
          ],
          "type": "Point"
        },
        "id": "3d7df2f9a37cde165369566a28aa06df"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6031",
          "name": "de Maisonneuve / Robert-Bourassa"
        },
        "geometry": {
          "coordinates": [
            -73.571523,
            45.504262
          ],
          "type": "Point"
        },
        "id": "3dc52e15c4e0f3159799f2fa3b56951d"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6918",
          "name": "Garnier / des Carrières"
        },
        "geometry": {
          "coordinates": [
            -73.589939,
            45.537552
          ],
          "type": "Point"
        },
        "id": "3e90d7e50f7a16c653ffd8ff16d5b36d"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6369",
          "name": "U. Concordia - Campus Loyola (Sherbrooke / West Broadway)"
        },
        "geometry": {
          "coordinates": [
            -73.639485,
            45.457509
          ],
          "type": "Point"
        },
        "id": "3eb40d59ac2af0a898030da7e89e5945"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7042",
          "name": "Alexandra / Jean-Talon"
        },
        "geometry": {
          "coordinates": [
            -73.620186,
            45.53233
          ],
          "type": "Point"
        },
        "id": "3eb511af2ec063795da30d015f4d719e"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6189",
          "name": "Chabot / Everett"
        },
        "geometry": {
          "coordinates": [
            -73.60957,
            45.550723
          ],
          "type": "Point"
        },
        "id": "3f1cb6eabcb1204374be51b1b53225f5"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6748",
          "name": "Young / Wellington"
        },
        "geometry": {
          "coordinates": [
            -73.557978,
            45.492825
          ],
          "type": "Point"
        },
        "id": "3f426187054201efbea22eeb5048c293"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6429",
          "name": "Place du Commerce"
        },
        "geometry": {
          "coordinates": [
            -73.54259,
            45.46714
          ],
          "type": "Point"
        },
        "id": "3fb7a35b8cedf3e6899c29cf28b0b400"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7143",
          "name": "LaSalle / Godin"
        },
        "geometry": {
          "coordinates": [
            -73.572199,
            45.446934
          ],
          "type": "Point"
        },
        "id": "3feca123c82a074392e976c05444dc67"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6236",
          "name": "Laurier / de Bordeaux"
        },
        "geometry": {
          "coordinates": [
            -73.579784,
            45.537649
          ],
          "type": "Point"
        },
        "id": "400a86c225ea1445cfef2e31acb07cea"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6198",
          "name": "Hélène-Baillargeon / St-Denis"
        },
        "geometry": {
          "coordinates": [
            -73.59527,
            45.52974
          ],
          "type": "Point"
        },
        "id": "4013b01047072ee1cae0139a41842fbc"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7002",
          "name": "Meunier / Fleury"
        },
        "geometry": {
          "coordinates": [
            -73.666814,
            45.544858
          ],
          "type": "Point"
        },
        "id": "404fcab833dbd1af82150a3a82938d98"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6048",
          "name": "William / St-Henri"
        },
        "geometry": {
          "coordinates": [
            -73.557254,
            45.498919
          ],
          "type": "Point"
        },
        "id": "4173624be583e223edac24f50b5863f4"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6333",
          "name": "Leman / de Chateaubriand"
        },
        "geometry": {
          "coordinates": [
            -73.631103,
            45.547218
          ],
          "type": "Point"
        },
        "id": "42c230a0e3e4e6674bf64b6edf06ae3c"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6929",
          "name": "St-André / St-Grégoire"
        },
        "geometry": {
          "coordinates": [
            -73.59242,
            45.531474
          ],
          "type": "Point"
        },
        "id": "435da45906b3dda38a5eb87dac8539d9"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6146",
          "name": "du Parc-La Fontaine / Roy"
        },
        "geometry": {
          "coordinates": [
            -73.569012,
            45.52317
          ],
          "type": "Point"
        },
        "id": "43cdd86c80e6e22c9bbe8d14ed332740"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6202",
          "name": "Ste-Famille / Sherbrooke"
        },
        "geometry": {
          "coordinates": [
            -73.570752,
            45.510071
          ],
          "type": "Point"
        },
        "id": "444bdb1081e53694d7484bd2dc8c3660"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6373",
          "name": "7e avenue / St-Joseph Rosemont"
        },
        "geometry": {
          "coordinates": [
            -73.569869,
            45.547226
          ],
          "type": "Point"
        },
        "id": "459f76fbaff95f3319552d5fde7bfb94"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6221",
          "name": "du Mont-Royal / Clark"
        },
        "geometry": {
          "coordinates": [
            -73.58685,
            45.51941
          ],
          "type": "Point"
        },
        "id": "478d346dae5a6d9469aabf0abedb844e"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6209",
          "name": "Milton / Clark"
        },
        "geometry": {
          "coordinates": [
            -73.570677,
            45.512541
          ],
          "type": "Point"
        },
        "id": "48b2416a5321a2c69ac067ea20a76e6b"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6114",
          "name": "Métro Papineau (Cartier / Ste-Catherine)"
        },
        "geometry": {
          "coordinates": [
            -73.55199,
            45.52353
          ],
          "type": "Point"
        },
        "id": "492637220d71ba91308779585e2254b3"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7081",
          "name": "St-Denis / de Maisonneuve"
        },
        "geometry": {
          "coordinates": [
            -73.561732,
            45.514384
          ],
          "type": "Point"
        },
        "id": "4940e39dc45349ae8c0e9db2e2e65455"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6082",
          "name": "5e avenue / Rosemont"
        },
        "geometry": {
          "coordinates": [
            -73.583083,
            45.5499
          ],
          "type": "Point"
        },
        "id": "4963b3ba254780de2cd10bb352a5a30a"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6370",
          "name": "d'Orléans / Masson"
        },
        "geometry": {
          "coordinates": [
            -73.569847,
            45.557192
          ],
          "type": "Point"
        },
        "id": "4a27466358a5783d5c6fc263f158e0f2"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7012",
          "name": "St-Hubert / René-Lévesque"
        },
        "geometry": {
          "coordinates": [
            -73.556463,
            45.514335
          ],
          "type": "Point"
        },
        "id": "4a99e7478d7d62ff7055538073e3d356"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7054",
          "name": "de la Côte St-Paul / St-Ambroise"
        },
        "geometry": {
          "coordinates": [
            -73.593917,
            45.467665
          ],
          "type": "Point"
        },
        "id": "4b189434fdcf6b1503f01397832962d7"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6181",
          "name": "Clark / Rachel"
        },
        "geometry": {
          "coordinates": [
            -73.582128,
            45.517353
          ],
          "type": "Point"
        },
        "id": "4b8607cc934263527f3375ec8ae3cc92"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6910",
          "name": "Boyer / Beaubien"
        },
        "geometry": {
          "coordinates": [
            -73.602026,
            45.537041
          ],
          "type": "Point"
        },
        "id": "4b870662d17bfc8b020c6177f9bf8b1c"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6403",
          "name": "Georges-Vanier / Notre-Dame"
        },
        "geometry": {
          "coordinates": [
            -73.571963,
            45.485047
          ],
          "type": "Point"
        },
        "id": "4c533ad2c134b6a857fbe60b4f495e9b"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7024",
          "name": "Berri / St-Joseph"
        },
        "geometry": {
          "coordinates": [
            -73.586726,
            45.527231
          ],
          "type": "Point"
        },
        "id": "4c5f4debd84e21e129277bbc933d3a2c"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7150",
          "name": "du Souvenir / Chomedey"
        },
        "geometry": {
          "coordinates": [
            -73.74444,
            45.551886
          ],
          "type": "Point"
        },
        "id": "4c8f6ac9addaa2804b3e7dd9b0d9fd85"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6418",
          "name": "Paré / Mountain Sights"
        },
        "geometry": {
          "coordinates": [
            -73.652941,
            45.4981
          ],
          "type": "Point"
        },
        "id": "4cbd681e4ae45b76de73b5584d6ac36e"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6259",
          "name": "Dandurand / de Lorimier"
        },
        "geometry": {
          "coordinates": [
            -73.584157,
            45.540881
          ],
          "type": "Point"
        },
        "id": "4cbfbd4efb264ee576d2b7998f21b59d"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6379",
          "name": "de l'Église / Bannantyne"
        },
        "geometry": {
          "coordinates": [
            -73.575879,
            45.463253
          ],
          "type": "Point"
        },
        "id": "4d12096494b1931305c35816d6a5ec56"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7149",
          "name": "16e avenue / Jean-Talon"
        },
        "geometry": {
          "coordinates": [
            -73.595333,
            45.56244
          ],
          "type": "Point"
        },
        "id": "4d14da178dc76e6205692c9111e16dc2"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6384",
          "name": "Darling / Sherbrooke"
        },
        "geometry": {
          "coordinates": [
            -73.556669,
            45.545458
          ],
          "type": "Point"
        },
        "id": "4dc0d23f2956c0c017bf98d7537ef581"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7146",
          "name": "Lusignan / St-Jacques"
        },
        "geometry": {
          "coordinates": [
            -73.569348,
            45.492222
          ],
          "type": "Point"
        },
        "id": "4f7bb0845461ec7bc8bb324311ef35ac"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7023",
          "name": "CHSLD St-Michel (Jarry / 8e avenue)"
        },
        "geometry": {
          "coordinates": [
            -73.610512,
            45.56169
          ],
          "type": "Point"
        },
        "id": "4fc80fb6f722903824fc90d5a483a908"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6402",
          "name": "Ste-Émilie / Sir-Georges-Etienne-Cartier"
        },
        "geometry": {
          "coordinates": [
            -73.585389,
            45.472668
          ],
          "type": "Point"
        },
        "id": "4fd6f20886a1b020395c20604b0ea268"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7066",
          "name": "St-Urbain / de la Gauchetière"
        },
        "geometry": {
          "coordinates": [
            -73.561395,
            45.507078
          ],
          "type": "Point"
        },
        "id": "50a0c3e022ae52cdf19124f9d29225ce"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7098",
          "name": "Parc d'Antioche"
        },
        "geometry": {
          "coordinates": [
            -73.558589,
            45.595351
          ],
          "type": "Point"
        },
        "id": "519c9e179e846cc15c485e9fd73d2c18"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6912",
          "name": "Métro Beaubien (de Chateaubriand / Beaubien)"
        },
        "geometry": {
          "coordinates": [
            -73.603634,
            45.535359
          ],
          "type": "Point"
        },
        "id": "522a315e3e3a4e8d15f53669abfa92ac"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6745",
          "name": "de l'Épée / Jean-Talon"
        },
        "geometry": {
          "coordinates": [
            -73.623882,
            45.527979
          ],
          "type": "Point"
        },
        "id": "5275f218840a39b845ca0af2052b7dc5"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6502",
          "name": "Casino de Montréal"
        },
        "geometry": {
          "coordinates": [
            -73.524576,
            45.506373
          ],
          "type": "Point"
        },
        "id": "53c0ffc217df1ad50743863b72a60712"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6240",
          "name": "Parc Kent (de Kent / Hudson)"
        },
        "geometry": {
          "coordinates": [
            -73.629459,
            45.50572
          ],
          "type": "Point"
        },
        "id": "548c4b5ec401c98ddb27d00627ac2af5"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6132",
          "name": "Larivière / de Lorimier"
        },
        "geometry": {
          "coordinates": [
            -73.559233,
            45.529134
          ],
          "type": "Point"
        },
        "id": "54932660634f4c36c2ccf7235a483581"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7128",
          "name": "Métro Côte-Vertu (Gohier / Edouard-Laurin)"
        },
        "geometry": {
          "coordinates": [
            -73.682498,
            45.512989
          ],
          "type": "Point"
        },
        "id": "54a8f865c390f38a0214e1b5bee8c20e"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7121",
          "name": "de Bruxelles / Hochelaga"
        },
        "geometry": {
          "coordinates": [
            -73.525217,
            45.592648
          ],
          "type": "Point"
        },
        "id": "54cc0d41444e14fbff78f1d65980fb29"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6225",
          "name": "Villeneuve / St-Urbain"
        },
        "geometry": {
          "coordinates": [
            -73.590559,
            45.520188
          ],
          "type": "Point"
        },
        "id": "55474747dfd018b1803f51c6b447bea0"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7114",
          "name": "Smith / Peel"
        },
        "geometry": {
          "coordinates": [
            -73.556419,
            45.492837
          ],
          "type": "Point"
        },
        "id": "555c20f43960f145b0e08f37c22c74a2"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6323",
          "name": "Guizot / St-Laurent"
        },
        "geometry": {
          "coordinates": [
            -73.634474,
            45.539663
          ],
          "type": "Point"
        },
        "id": "56caaa701774aa18b5b1e5133707e382"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6410",
          "name": "Métro Crémazie (Crémazie / Lajeunesse)"
        },
        "geometry": {
          "coordinates": [
            -73.638428,
            45.546407
          ],
          "type": "Point"
        },
        "id": "57a31356ecf0512e68af2fed724785b0"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6322",
          "name": "St-Dominique / Gounod"
        },
        "geometry": {
          "coordinates": [
            -73.628021,
            45.538737
          ],
          "type": "Point"
        },
        "id": "57dddc39c31a6e01a693f8e027c8fa32"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6930",
          "name": "Cité des Arts du Cirque (Paul Boutet / des Regrattiers)"
        },
        "geometry": {
          "coordinates": [
            -73.615447,
            45.559842
          ],
          "type": "Point"
        },
        "id": "583c70ead86f7a99a51143c4550be87e"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6752",
          "name": "Hutchison / Beaubien"
        },
        "geometry": {
          "coordinates": [
            -73.612968,
            45.526058
          ],
          "type": "Point"
        },
        "id": "586d028e27f866dfe6a6a8eeae7b5e66"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7097",
          "name": "Bélanger / des Galeries d'Anjou"
        },
        "geometry": {
          "coordinates": [
            -73.56279,
            45.597221
          ],
          "type": "Point"
        },
        "id": "58b6a71c14041c83afecff66b7e1bc6a"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6106",
          "name": "Papineau / René-Lévesque"
        },
        "geometry": {
          "coordinates": [
            -73.54926,
            45.52114
          ],
          "type": "Point"
        },
        "id": "58bd616d0bf80bb9c3408ab79fe704d2"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6383",
          "name": "Bourbonnière / du Mont-Royal"
        },
        "geometry": {
          "coordinates": [
            -73.560494,
            45.55357
          ],
          "type": "Point"
        },
        "id": "598cc1e56dbdd428ec4c0491a7e9109d"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6749",
          "name": "St-Jacques / St-Laurent"
        },
        "geometry": {
          "coordinates": [
            -73.556465,
            45.506421
          ],
          "type": "Point"
        },
        "id": "599938a97548b1d1c5cf564e6884bc67"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6423",
          "name": "Hôpital général juif (de la Côte Ste-Catherine / Légaré)"
        },
        "geometry": {
          "coordinates": [
            -73.629822,
            45.496302
          ],
          "type": "Point"
        },
        "id": "59f54d9bdc5968de71d226f3fb52b8eb"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6904",
          "name": "Fabre / Beaubien"
        },
        "geometry": {
          "coordinates": [
            -73.597873,
            45.542059
          ],
          "type": "Point"
        },
        "id": "5b038d7843b9c3eaa8e1c7903bd00a1c"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7013",
          "name": "Benny / Sherbrooke"
        },
        "geometry": {
          "coordinates": [
            -73.626597,
            45.464876
          ],
          "type": "Point"
        },
        "id": "5b38b3677019fb9c7497239d133628a0"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7091",
          "name": "Fleury / André-Jobin"
        },
        "geometry": {
          "coordinates": [
            -73.646764,
            45.576
          ],
          "type": "Point"
        },
        "id": "5be38aae7c82742f61d364b4900b797e"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6120",
          "name": "Métro Frontenac (Ontario / du Havre)"
        },
        "geometry": {
          "coordinates": [
            -73.552179,
            45.533705
          ],
          "type": "Point"
        },
        "id": "5bf283f7a8e9735ce631c28c9b130bc3"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6271",
          "name": "St-Jean-Baptiste / Notre-Dame"
        },
        "geometry": {
          "coordinates": [
            -73.490113,
            45.640002
          ],
          "type": "Point"
        },
        "id": "5bf57cba7b891d1825640850991151b0"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7036",
          "name": "Labadie / du Parc"
        },
        "geometry": {
          "coordinates": [
            -73.596827,
            45.519894
          ],
          "type": "Point"
        },
        "id": "5c714da15b42f7d972896a0d0b7428db"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6096",
          "name": "Lucien L'Allier / St-Jacques"
        },
        "geometry": {
          "coordinates": [
            -73.568575,
            45.493569
          ],
          "type": "Point"
        },
        "id": "5cf92339e7048b8b738532765217fbfc"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6413",
          "name": "Union / Cathcart"
        },
        "geometry": {
          "coordinates": [
            -73.568755,
            45.503551
          ],
          "type": "Point"
        },
        "id": "5da8152914a636188a58b04eb7d8243b"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6053",
          "name": "du Président-Kennedy / Jeanne-Mance"
        },
        "geometry": {
          "coordinates": [
            -73.568814,
            45.508204
          ],
          "type": "Point"
        },
        "id": "5e3c5aed36352afc68b2c8159db98d53"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6277",
          "name": "Louis-Hébert / Beaubien"
        },
        "geometry": {
          "coordinates": [
            -73.59201,
            45.548186
          ],
          "type": "Point"
        },
        "id": "5eda3ac6780d4c8d27d827b553aafc79"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6220",
          "name": "Laval / Duluth"
        },
        "geometry": {
          "coordinates": [
            -73.57718,
            45.519216
          ],
          "type": "Point"
        },
        "id": "5f58f1deb19b92e38d2a187247fd607b"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6190",
          "name": "Pontiac / Gilford"
        },
        "geometry": {
          "coordinates": [
            -73.585765,
            45.527009
          ],
          "type": "Point"
        },
        "id": "5f923aaa8b08fd866382fdbb2062c480"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7056",
          "name": "Bibliothèque de Verdun (Brown / Bannantyne)"
        },
        "geometry": {
          "coordinates": [
            -73.577856,
            45.448262
          ],
          "type": "Point"
        },
        "id": "5f986c88e50d61f889f2385fd6f0f429"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7109",
          "name": "Cégep André-Laurendeau"
        },
        "geometry": {
          "coordinates": [
            -73.605651,
            45.435664
          ],
          "type": "Point"
        },
        "id": "605e2d49543502ea4191a496dd49800f"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6081",
          "name": "Mackay / Ste-Catherine"
        },
        "geometry": {
          "coordinates": [
            -73.576952,
            45.495709
          ],
          "type": "Point"
        },
        "id": "60a4c79209f359d4ac24fd303c05d818"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6085",
          "name": "Notre-Dame / Peel"
        },
        "geometry": {
          "coordinates": [
            -73.56328,
            45.4952
          ],
          "type": "Point"
        },
        "id": "615babe254d688b5984ffb759e0d7637"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6199",
          "name": "St-Viateur / St-Laurent"
        },
        "geometry": {
          "coordinates": [
            -73.598839,
            45.52593
          ],
          "type": "Point"
        },
        "id": "6180a9739ab8514f9ec206aee9789036"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6734",
          "name": "Lajeunesse / Villeray"
        },
        "geometry": {
          "coordinates": [
            -73.622547,
            45.542118
          ],
          "type": "Point"
        },
        "id": "618a0ca2646a15abb6598871e847a7df"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6368",
          "name": "10e avenue / Masson"
        },
        "geometry": {
          "coordinates": [
            -73.573352,
            45.550305
          ],
          "type": "Point"
        },
        "id": "61f2b4269fd1959f8de6797d63c7e0e3"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6380",
          "name": "Parc J.-Arthur-Champagne (de Chambly / du Mont-Royal)"
        },
        "geometry": {
          "coordinates": [
            -73.561916,
            45.551584
          ],
          "type": "Point"
        },
        "id": "620d7fa61833f5cad03fe9c732ac23cd"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6331",
          "name": "Guizot / St-Denis"
        },
        "geometry": {
          "coordinates": [
            -73.632461,
            45.543423
          ],
          "type": "Point"
        },
        "id": "624167e770710256cbc430aeaba52f92"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6267",
          "name": "Chabot / Beaubien"
        },
        "geometry": {
          "coordinates": [
            -73.595644,
            45.544375
          ],
          "type": "Point"
        },
        "id": "6291e5e6ae94a4213edfc0f065972a89"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6160",
          "name": "Garnier / St-Joseph"
        },
        "geometry": {
          "coordinates": [
            -73.581222,
            45.532977
          ],
          "type": "Point"
        },
        "id": "629b88e911621d5221f381558d26bba8"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7033",
          "name": "Aylmer / Prince-Arthur"
        },
        "geometry": {
          "coordinates": [
            -73.577697,
            45.508566
          ],
          "type": "Point"
        },
        "id": "6335455d30efdfbecb12fa8fd28cd5c0"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6232",
          "name": "Durocher / Van Horne"
        },
        "geometry": {
          "coordinates": [
            -73.611273,
            45.524265
          ],
          "type": "Point"
        },
        "id": "6399248ec2e05f7def83d23c089c3157"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7070",
          "name": "Bourgeoys / Faletd"
        },
        "geometry": {
          "coordinates": [
            -73.555921,
            45.47993
          ],
          "type": "Point"
        },
        "id": "642dbe4c08517ce8fbb1468c6fc03497"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7115",
          "name": "Métro Radisson (Sherbrooke / des Groseilliers)"
        },
        "geometry": {
          "coordinates": [
            -73.539656,
            45.589175
          ],
          "type": "Point"
        },
        "id": "6431af274754c88649b84ad1ae9560d5"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6905",
          "name": "Parc Rosemont (Dandurand / d'Iberville)"
        },
        "geometry": {
          "coordinates": [
            -73.581018,
            45.544377
          ],
          "type": "Point"
        },
        "id": "650634169bddfb4744069dcfa0824aee"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6338",
          "name": "de Chateaubriand / Jarry"
        },
        "geometry": {
          "coordinates": [
            -73.626991,
            45.545954
          ],
          "type": "Point"
        },
        "id": "656d936065ccc07c0c9dbfe9a58a8c6b"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6231",
          "name": "Jeanne-Mance / St-Viateur"
        },
        "geometry": {
          "coordinates": [
            -73.60184,
            45.523026
          ],
          "type": "Point"
        },
        "id": "66780b8047b4626834056ae51e0f9da6"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6360",
          "name": "8e avenue / Beaubien"
        },
        "geometry": {
          "coordinates": [
            -73.58752,
            45.553215
          ],
          "type": "Point"
        },
        "id": "67d6ca58067629918cffddc3bcd38b94"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6156",
          "name": "Marie-Anne / de la Roche"
        },
        "geometry": {
          "coordinates": [
            -73.576185,
            45.527758
          ],
          "type": "Point"
        },
        "id": "681962a0971c67658ddf6f849774f59e"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6311",
          "name": "Drolet / St-Zotique"
        },
        "geometry": {
          "coordinates": [
            -73.609412,
            45.534882
          ],
          "type": "Point"
        },
        "id": "685ff0df4f47b0786ea374d92244b9de"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7041",
          "name": "de Maisonneuve / Peel"
        },
        "geometry": {
          "coordinates": [
            -73.574578,
            45.50095
          ],
          "type": "Point"
        },
        "id": "686d26859d19547463aa3514ea2feff5"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6375",
          "name": "Métro Place St-Henri (St-Ferdinand / St-Jacques)"
        },
        "geometry": {
          "coordinates": [
            -73.587238,
            45.477249
          ],
          "type": "Point"
        },
        "id": "69a0f214cb31a3949bba8964a4b6ab51"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7057",
          "name": "2e avenue / Wellington"
        },
        "geometry": {
          "coordinates": [
            -73.567528,
            45.457893
          ],
          "type": "Point"
        },
        "id": "69ea62c2c446bb25476df7961687f1e3"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7069",
          "name": "Jeanne-Mance / René-Lévesque"
        },
        "geometry": {
          "coordinates": [
            -73.5642,
            45.506371
          ],
          "type": "Point"
        },
        "id": "6a0da8836afefd7bcddad9e469fcbe8c"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6501",
          "name": "Metro Jean-Drapeau (Chemin Macdonald)"
        },
        "geometry": {
          "coordinates": [
            -73.531115,
            45.5128
          ],
          "type": "Point"
        },
        "id": "6a60ad934d6dba43069e85edebf15fe7"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7010",
          "name": "Coolbrook / Queen-Mary"
        },
        "geometry": {
          "coordinates": [
            -73.630344,
            45.482852
          ],
          "type": "Point"
        },
        "id": "6a680f9a682c8e8d0a3a6cdf110e6624"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6125",
          "name": "Ellendale / de la Côte-des-Neiges"
        },
        "geometry": {
          "coordinates": [
            -73.629298,
            45.499757
          ],
          "type": "Point"
        },
        "id": "6a8b3f208f2f1c30e93813d2b53197d8"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6058",
          "name": "Cypress / Peel"
        },
        "geometry": {
          "coordinates": [
            -73.571767,
            45.499325
          ],
          "type": "Point"
        },
        "id": "6a9dfa2da967c446dbea80117d5d86af"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6328",
          "name": "De Gaspé / Villeray"
        },
        "geometry": {
          "coordinates": [
            -73.624293,
            45.538938
          ],
          "type": "Point"
        },
        "id": "6bb6e1dfb4c9a5b2faf0613a012a83c5"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6155",
          "name": "Garnier / du Mont-Royal"
        },
        "geometry": {
          "coordinates": [
            -73.57674,
            45.53092
          ],
          "type": "Point"
        },
        "id": "6c3a4539190f41fe5f65301cedba2b8a"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6253",
          "name": "Métro Jean-Talon (de Chateaubriand / Jean-Talon)"
        },
        "geometry": {
          "coordinates": [
            -73.614028,
            45.540138
          ],
          "type": "Point"
        },
        "id": "6caeca12401b75f253698facfadcab3a"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6265",
          "name": "Parthenais / Laurier"
        },
        "geometry": {
          "coordinates": [
            -73.577459,
            45.539258
          ],
          "type": "Point"
        },
        "id": "6ccaf35a730f7891c3fc3fb7a6ea2f01"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6148",
          "name": "Émile-Duployé / Sherbrooke"
        },
        "geometry": {
          "coordinates": [
            -73.564729,
            45.5272
          ],
          "type": "Point"
        },
        "id": "6d888131d6c80b2ef9b40743f80933ea"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6063",
          "name": "Drummond / de Maisonneuve"
        },
        "geometry": {
          "coordinates": [
            -73.57591,
            45.49947
          ],
          "type": "Point"
        },
        "id": "6ed379ccd5b1869539e5e90f959cf0a3"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6124",
          "name": "Poupart / Ontario"
        },
        "geometry": {
          "coordinates": [
            -73.553438,
            45.531938
          ],
          "type": "Point"
        },
        "id": "6fcf41b0e6c9ce11dc13397eab406d45"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6005",
          "name": "Metcalfe / du Square-Dorchester"
        },
        "geometry": {
          "coordinates": [
            -73.571137,
            45.500208
          ],
          "type": "Point"
        },
        "id": "6fd9f2602f84aaec0db4b880474ffc88"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6133",
          "name": "Chapleau / Terrasse Mercure"
        },
        "geometry": {
          "coordinates": [
            -73.565166,
            45.536738
          ],
          "type": "Point"
        },
        "id": "700399ce2ad6419ed102f37e158abf14"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6176",
          "name": "de Mentana / Rachel"
        },
        "geometry": {
          "coordinates": [
            -73.575558,
            45.524963
          ],
          "type": "Point"
        },
        "id": "7075905ef8afc8883508d84c27f8b461"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7108",
          "name": "Gagne / LaSalle"
        },
        "geometry": {
          "coordinates": [
            -73.601194,
            45.422451
          ],
          "type": "Point"
        },
        "id": "708f3b0c3e23d4afcb6e3786af268cc1"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6075",
          "name": "University / des Pins"
        },
        "geometry": {
          "coordinates": [
            -73.580642,
            45.508295
          ],
          "type": "Point"
        },
        "id": "709346e6c3563cc2b1456ab1ea36f759"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6187",
          "name": "Resther / du Mont-Royal"
        },
        "geometry": {
          "coordinates": [
            -73.581774,
            45.525628
          ],
          "type": "Point"
        },
        "id": "7099fe280ed6678b1142579dcbf8414c"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6212",
          "name": "Duluth / de l'Esplanade"
        },
        "geometry": {
          "coordinates": [
            -73.581141,
            45.515091
          ],
          "type": "Point"
        },
        "id": "70e172128f849ee11280b8e31622ed20"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6362",
          "name": "1ère avenue / Rosemont"
        },
        "geometry": {
          "coordinates": [
            -73.584867,
            45.547799
          ],
          "type": "Point"
        },
        "id": "720fe3979b3dce0c5340e6009f6c695d"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6105",
          "name": "Plessis / René-Lévesque"
        },
        "geometry": {
          "coordinates": [
            -73.551958,
            45.519372
          ],
          "type": "Point"
        },
        "id": "729d15b140e9fdc58e6cdc4e960975ca"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6098",
          "name": "Bishop / Ste-Catherine"
        },
        "geometry": {
          "coordinates": [
            -73.576501,
            45.496583
          ],
          "type": "Point"
        },
        "id": "72f43e3c73e302175b95a829ee6800eb"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "5004",
          "name": "St-Charles / Grant"
        },
        "geometry": {
          "coordinates": [
            -73.508752,
            45.539824
          ],
          "type": "Point"
        },
        "id": "732358e05b4ca4913892dba01e12d545"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6301",
          "name": "Parc Outremont (Bloomfield / Elmwood)"
        },
        "geometry": {
          "coordinates": [
            -73.603286,
            45.518309
          ],
          "type": "Point"
        },
        "id": "7452a21719a9ee3d7d602a93b9c30fac"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6089",
          "name": "Henri-Julien / du Carmel"
        },
        "geometry": {
          "coordinates": [
            -73.594821,
            45.527839
          ],
          "type": "Point"
        },
        "id": "7473362d3d3f5e86c54b30960e4efe92"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6092",
          "name": "Crescent / Ste-Catherine"
        },
        "geometry": {
          "coordinates": [
            -73.575549,
            45.497092
          ],
          "type": "Point"
        },
        "id": "749f21d1f6548a9acb75529887cc654b"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6349",
          "name": "Ryde / Charlevoix"
        },
        "geometry": {
          "coordinates": [
            -73.5646,
            45.475743
          ],
          "type": "Point"
        },
        "id": "74fe35669898316efefe0437e4b97153"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6171",
          "name": "Wolfe / Robin"
        },
        "geometry": {
          "coordinates": [
            -73.560115,
            45.51958
          ],
          "type": "Point"
        },
        "id": "752c71ced71b26a96ea05527fc491642"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "5007",
          "name": "Métro Longueuil - Université de Sherbrooke"
        },
        "geometry": {
          "coordinates": [
            -73.520126,
            45.523318
          ],
          "type": "Point"
        },
        "id": "758112a787f01979ff996482f1fc23b8"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7072",
          "name": "Beaudry / Sherbrooke"
        },
        "geometry": {
          "coordinates": [
            -73.565394,
            45.523034
          ],
          "type": "Point"
        },
        "id": "75e90b994f1bbf4f9f43edf7ca11cd95"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6084",
          "name": "Duke / Brennan"
        },
        "geometry": {
          "coordinates": [
            -73.55371,
            45.495581
          ],
          "type": "Point"
        },
        "id": "763f024e416361f56c72692557073a87"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6315",
          "name": "Métro Côte-des-Neiges (Jean-Brillant / de la Côte-des-Neiges)"
        },
        "geometry": {
          "coordinates": [
            -73.621543,
            45.496264
          ],
          "type": "Point"
        },
        "id": "770f6f229b3e8ea073622ac69c0e23ed"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7020",
          "name": "St-Germain / Hochelaga"
        },
        "geometry": {
          "coordinates": [
            -73.553673,
            45.543698
          ],
          "type": "Point"
        },
        "id": "77b14e0ae4e2e96e2392b41784e4a2cf"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7087",
          "name": "St-Jean-Baptiste / René-Lévesque"
        },
        "geometry": {
          "coordinates": [
            -73.500375,
            45.641557
          ],
          "type": "Point"
        },
        "id": "77ecd1fb3efbb2ec01d13e56132f233b"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6731",
          "name": "28e avenue / Rosemont"
        },
        "geometry": {
          "coordinates": [
            -73.571244,
            45.564353
          ],
          "type": "Point"
        },
        "id": "7857a4f94f8f1542f1a1486a91822c22"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6115",
          "name": "Benny / de Monkland"
        },
        "geometry": {
          "coordinates": [
            -73.631627,
            45.466851
          ],
          "type": "Point"
        },
        "id": "78ec7a811c2fcc1c08598ca72754da43"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6385",
          "name": "de Bordeaux / Gilford"
        },
        "geometry": {
          "coordinates": [
            -73.576287,
            45.53611
          ],
          "type": "Point"
        },
        "id": "7989bbb217c4933ac4a86f0e8a3a8c38"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6730",
          "name": "35e avenue / Beaubien"
        },
        "geometry": {
          "coordinates": [
            -73.573047,
            45.570081
          ],
          "type": "Point"
        },
        "id": "7a16cdd05c37eb64215285d85d4b0d45"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6306",
          "name": "Métro Édouard-Montpetit (du Mont-Royal / Vincent-d'Indy)"
        },
        "geometry": {
          "coordinates": [
            -73.611429,
            45.510086
          ],
          "type": "Point"
        },
        "id": "7b2374484592346c4138ca712494a5f6"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7008",
          "name": "Rousselot / Jarry"
        },
        "geometry": {
          "coordinates": [
            -73.62091,
            45.550769
          ],
          "type": "Point"
        },
        "id": "7b31c178c7d870e6678ea892b06a45b5"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6050",
          "name": "St-Maurice / Robert-Bourassa"
        },
        "geometry": {
          "coordinates": [
            -73.560242,
            45.498577
          ],
          "type": "Point"
        },
        "id": "7d22e2e24ca2632418102bb3652997fa"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6724",
          "name": "Léa-Roback / Sir-Georges-Etienne-Cartier"
        },
        "geometry": {
          "coordinates": [
            -73.582643,
            45.471668
          ],
          "type": "Point"
        },
        "id": "7d4a3e853ad36f7f6b5823e064935474"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7052",
          "name": "Shearer / Centre"
        },
        "geometry": {
          "coordinates": [
            -73.562186,
            45.483005
          ],
          "type": "Point"
        },
        "id": "7dbe060ce63848e0b233bafa29e05657"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7103",
          "name": "St-Joseph / 8e avenue Lachine"
        },
        "geometry": {
          "coordinates": [
            -73.671205,
            45.431471
          ],
          "type": "Point"
        },
        "id": "7de49f0b01be84a374aa40fa50a20860"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6504",
          "name": "La Ronde"
        },
        "geometry": {
          "coordinates": [
            -73.535332,
            45.521565
          ],
          "type": "Point"
        },
        "id": "7e284265a312a4cf9a6b72fefebb3ea2"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6701",
          "name": "Stanley / Sherbrooke"
        },
        "geometry": {
          "coordinates": [
            -73.577177,
            45.501041
          ],
          "type": "Point"
        },
        "id": "7e9a0497c1e271f849b0c10cc9933a4d"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6727",
          "name": "de la Sucrerie / Centre"
        },
        "geometry": {
          "coordinates": [
            -73.560917,
            45.484081
          ],
          "type": "Point"
        },
        "id": "7eb452594f412674d5bcfa1a70fbbc8c"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6386",
          "name": "Métro Préfontaine (Moreau / Hochelaga)"
        },
        "geometry": {
          "coordinates": [
            -73.555714,
            45.54178
          ],
          "type": "Point"
        },
        "id": "7ed74195a8743b6e001a40b4c39b3b5c"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6411",
          "name": "Clark / Prince-Arthur"
        },
        "geometry": {
          "coordinates": [
            -73.572961,
            45.513302
          ],
          "type": "Point"
        },
        "id": "7f0cc974ad5f05606139b7519e6aad43"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7038",
          "name": "Guilbault / Clark"
        },
        "geometry": {
          "coordinates": [
            -73.57523,
            45.514107
          ],
          "type": "Point"
        },
        "id": "7f210ae4dea5bf4a19b3907bc178c52e"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6374",
          "name": "15e avenue / Masson"
        },
        "geometry": {
          "coordinates": [
            -73.571386,
            45.553898
          ],
          "type": "Point"
        },
        "id": "7f68587c9ed0b69ce8461188e016b191"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6002",
          "name": "Ste-Catherine / Dezery"
        },
        "geometry": {
          "coordinates": [
            -73.540999,
            45.539385
          ],
          "type": "Point"
        },
        "id": "7fd2a3ae7450f1c0e4bef385f0df84f3"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6118",
          "name": "de Champlain / Ontario"
        },
        "geometry": {
          "coordinates": [
            -73.560205,
            45.525109
          ],
          "type": "Point"
        },
        "id": "80941566cc34567c0b902932b6e8aae7"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6717",
          "name": "de Kent / Victoria"
        },
        "geometry": {
          "coordinates": [
            -73.638702,
            45.494564
          ],
          "type": "Point"
        },
        "id": "80c7f6ddb705e5601327391bed7c92e9"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7071",
          "name": "St-Mathieu / Sherbrooke"
        },
        "geometry": {
          "coordinates": [
            -73.582595,
            45.495789
          ],
          "type": "Point"
        },
        "id": "80e6503fe7595ac7d9e22e8b32cc0108"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7134",
          "name": "Poirier / O'Brien"
        },
        "geometry": {
          "coordinates": [
            -73.691564,
            45.52246
          ],
          "type": "Point"
        },
        "id": "817710bdb3fbfccddb59904b68329e0c"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6710",
          "name": "Chambord / Fleury"
        },
        "geometry": {
          "coordinates": [
            -73.658325,
            45.559828
          ],
          "type": "Point"
        },
        "id": "81aa91e74d94a6ce770ee10b4dca9735"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6405",
          "name": "Duvernay / Charlevoix"
        },
        "geometry": {
          "coordinates": [
            -73.574876,
            45.482098
          ],
          "type": "Point"
        },
        "id": "81c61e6b51f1a0f379185ed75c523d5e"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6004",
          "name": "du Champ-de-Mars / Gosford"
        },
        "geometry": {
          "coordinates": [
            -73.554008,
            45.509655
          ],
          "type": "Point"
        },
        "id": "81d703dd853fef6ebaf4d20f915d29fe"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7043",
          "name": "Ernest-Gendreau / du Mont-Royal"
        },
        "geometry": {
          "coordinates": [
            -73.563848,
            45.549713
          ],
          "type": "Point"
        },
        "id": "832ef2deee9f83e83cd3429ed78e65c4"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6192",
          "name": "Berri / St-Grégoire"
        },
        "geometry": {
          "coordinates": [
            -73.591902,
            45.529969
          ],
          "type": "Point"
        },
        "id": "844bd40b50ddcd427765e9fe7fe41066"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6313",
          "name": "Palm / St-Remi"
        },
        "geometry": {
          "coordinates": [
            -73.589848,
            45.470303
          ],
          "type": "Point"
        },
        "id": "8471d9aeda4d6dcc070f3ad6412027ce"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6204",
          "name": "Milton / Durocher"
        },
        "geometry": {
          "coordinates": [
            -73.574929,
            45.50814
          ],
          "type": "Point"
        },
        "id": "84beddb052b4cde07adae801df7cef4a"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6134",
          "name": "Bercy / Rachel"
        },
        "geometry": {
          "coordinates": [
            -73.561964,
            45.538403
          ],
          "type": "Point"
        },
        "id": "84f64930a8364bb8235cb4dd0a6bfc44"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6228",
          "name": "Waverly / Van Horne"
        },
        "geometry": {
          "coordinates": [
            -73.607723,
            45.527363
          ],
          "type": "Point"
        },
        "id": "8569153d1b23ce590f580d6bb1e42896"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7021",
          "name": "Dollard / Van Horne"
        },
        "geometry": {
          "coordinates": [
            -73.616469,
            45.519152
          ],
          "type": "Point"
        },
        "id": "8619c72658e45f7dacc1688832f71f49"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7118",
          "name": "Tellier / des Futailles"
        },
        "geometry": {
          "coordinates": [
            -73.521838,
            45.586009
          ],
          "type": "Point"
        },
        "id": "864d27151fa9c006a0a9372c3ecc8591"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6024",
          "name": "Bellerive / Duchesneau"
        },
        "geometry": {
          "coordinates": [
            -73.509821,
            45.607615
          ],
          "type": "Point"
        },
        "id": "872624a3d71ed9c9427e928b786e2bee"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6398",
          "name": "Desjardins / Ontario"
        },
        "geometry": {
          "coordinates": [
            -73.540872,
            45.551191
          ],
          "type": "Point"
        },
        "id": "874e49061484c029a6a8ed827ca2e44e"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6729",
          "name": "St-André / Ste-Catherine"
        },
        "geometry": {
          "coordinates": [
            -73.558112,
            45.516426
          ],
          "type": "Point"
        },
        "id": "87d09e4c6d599ac4b01d42481eff4880"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6428",
          "name": "Berlioz / de l'Île des Soeurs"
        },
        "geometry": {
          "coordinates": [
            -73.543955,
            45.459985
          ],
          "type": "Point"
        },
        "id": "88c483e333157cda16f6ba682ac4defc"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6397",
          "name": "Marché Maisonneuve"
        },
        "geometry": {
          "coordinates": [
            -73.539782,
            45.553218
          ],
          "type": "Point"
        },
        "id": "88d4495eb7fb43740f610ca5e3c2ec9b"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6359",
          "name": "Ste-Catherine / St-Laurent"
        },
        "geometry": {
          "coordinates": [
            -73.563895,
            45.509813
          ],
          "type": "Point"
        },
        "id": "8927d6e647d26421ee385a4e21277f70"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6703",
          "name": "Jardin Botanique (Pie-IX / Sherbrooke)"
        },
        "geometry": {
          "coordinates": [
            -73.555355,
            45.555004
          ],
          "type": "Point"
        },
        "id": "8950c2b6f3ac211ac410d251267f5ff7"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6733",
          "name": "Villeray / de Normanville"
        },
        "geometry": {
          "coordinates": [
            -73.618521,
            45.547172
          ],
          "type": "Point"
        },
        "id": "89b57ef140186a52981932078d85f8b5"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6165",
          "name": "Laurier / de Brébeuf"
        },
        "geometry": {
          "coordinates": [
            -73.584811,
            45.532513
          ],
          "type": "Point"
        },
        "id": "89ce85f54c6a416028f7634e756da29c"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6261",
          "name": "Louis-Hémon / Rosemont"
        },
        "geometry": {
          "coordinates": [
            -73.588222,
            45.544598
          ],
          "type": "Point"
        },
        "id": "8aef5018b7d5864d3c3b6408b608ccc2"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6201",
          "name": "Villeneuve / de l'Hôtel-de-Ville"
        },
        "geometry": {
          "coordinates": [
            -73.587332,
            45.523544
          ],
          "type": "Point"
        },
        "id": "8b5aa865fc5d0f6720e642915f9b6992"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6249",
          "name": "Bélanger / St-Denis"
        },
        "geometry": {
          "coordinates": [
            -73.61199,
            45.53696
          ],
          "type": "Point"
        },
        "id": "8b78c0fb6621f414872fe141c5fd166c"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6090",
          "name": "Métro Lucien-L'Allier  (Lucien l'Allier / Argyle)"
        },
        "geometry": {
          "coordinates": [
            -73.571123,
            45.494871
          ],
          "type": "Point"
        },
        "id": "8bec2c4dc14a791c65328c6e81656830"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6094",
          "name": "de Gaspé / Fairmount"
        },
        "geometry": {
          "coordinates": [
            -73.592927,
            45.525647
          ],
          "type": "Point"
        },
        "id": "8c8053fadf8806011c140d21b640b22f"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6702",
          "name": "Métro Assomption (Chauveau / de l'Assomption)"
        },
        "geometry": {
          "coordinates": [
            -73.548081,
            45.569789
          ],
          "type": "Point"
        },
        "id": "8cf5acb4656a355c0d77314f1a2e8ba5"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6233",
          "name": "Bernard / Jeanne-Mance"
        },
        "geometry": {
          "coordinates": [
            -73.604973,
            45.524286
          ],
          "type": "Point"
        },
        "id": "8e458dd67917f64cf16dbcd5290e66fb"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7152",
          "name": "Parc St-Claude (7e avenue / 8e rue)"
        },
        "geometry": {
          "coordinates": [
            -73.692362,
            45.562668
          ],
          "type": "Point"
        },
        "id": "8ec577683bb45f7ffee38ab39bdfaf3f"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6274",
          "name": "de la Roche / St-Joseph"
        },
        "geometry": {
          "coordinates": [
            -73.583695,
            45.531164
          ],
          "type": "Point"
        },
        "id": "8f0a9a0b06a29e45fa9a49776dbdda44"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7119",
          "name": "Notre-Dame / Liébert"
        },
        "geometry": {
          "coordinates": [
            -73.510465,
            45.592802
          ],
          "type": "Point"
        },
        "id": "8f8de820d674f7c0ed8bb3a0f94b99d7"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6273",
          "name": "Cartier / Bélanger"
        },
        "geometry": {
          "coordinates": [
            -73.602663,
            45.546797
          ],
          "type": "Point"
        },
        "id": "901040b6a25337b34d008e0709bbe8cb"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7044",
          "name": "Hôpital Santa Cabrini (St-Zotique / Jeanne-Jugan)"
        },
        "geometry": {
          "coordinates": [
            -73.570504,
            45.579324
          ],
          "type": "Point"
        },
        "id": "901779ebc07d96f9a5e12d9fdf49da21"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6263",
          "name": "de Hampton / de Monkland"
        },
        "geometry": {
          "coordinates": [
            -73.627002,
            45.471179
          ],
          "type": "Point"
        },
        "id": "90227c8bd3ce6c61ca9f3524d1b9c5a3"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6305",
          "name": "Davaar / de la Côte-Ste-Catherine"
        },
        "geometry": {
          "coordinates": [
            -73.610871,
            45.514379
          ],
          "type": "Point"
        },
        "id": "90458179cac56e108609d1c7efeb046e"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6149",
          "name": "Chapleau / du Mont-Royal"
        },
        "geometry": {
          "coordinates": [
            -73.56936,
            45.53867
          ],
          "type": "Point"
        },
        "id": "90638b573edacbab641eb68d174567db"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6022",
          "name": "William-Tremblay / Molson"
        },
        "geometry": {
          "coordinates": [
            -73.565177,
            45.541719
          ],
          "type": "Point"
        },
        "id": "90a2fc4daac17d1f12db504861588aea"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6711",
          "name": "Alexandra / Waverly"
        },
        "geometry": {
          "coordinates": [
            -73.617842,
            45.531938
          ],
          "type": "Point"
        },
        "id": "90a52470de73bbf17246b60f5a123879"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7075",
          "name": "CIUSSS (du Trianon / Pierre-de-Coubertin)"
        },
        "geometry": {
          "coordinates": [
            -73.531907,
            45.587531
          ],
          "type": "Point"
        },
        "id": "91005238ee837c549802093672a4526f"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6137",
          "name": "Cartier / Gauthier"
        },
        "geometry": {
          "coordinates": [
            -73.566987,
            45.530347
          ],
          "type": "Point"
        },
        "id": "9100c26d8e1ddee3dbf4e9d237321fcd"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6040",
          "name": "St-Jacques / St-Pierre"
        },
        "geometry": {
          "coordinates": [
            -73.559134,
            45.502786
          ],
          "type": "Point"
        },
        "id": "911ea58a20b81ff813c13ef2043ead06"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6093",
          "name": "Atwater / Sherbrooke"
        },
        "geometry": {
          "coordinates": [
            -73.58763,
            45.491225
          ],
          "type": "Point"
        },
        "id": "912479b230a3f39603283e243542b7f8"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6110",
          "name": "Poupart / Ste-Catherine"
        },
        "geometry": {
          "coordinates": [
            -73.546199,
            45.529002
          ],
          "type": "Point"
        },
        "id": "9129adca7ea28916012565b5c97fddd2"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6335",
          "name": "du Rosaire / St-Hubert"
        },
        "geometry": {
          "coordinates": [
            -73.62151,
            45.544819
          ],
          "type": "Point"
        },
        "id": "91a36358b7f5bd48e125ae143b7b06ab"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6407",
          "name": "Charlevoix / Lionel-Groulx"
        },
        "geometry": {
          "coordinates": [
            -73.577311,
            45.483928
          ],
          "type": "Point"
        },
        "id": "91ad45750a6f0f36e45d05f87187834a"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6260",
          "name": "Cartier / Dandurand"
        },
        "geometry": {
          "coordinates": [
            -73.585945,
            45.539235
          ],
          "type": "Point"
        },
        "id": "934acaf37305af47816749e0d1c09794"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6252",
          "name": "Mozart / St-Laurent"
        },
        "geometry": {
          "coordinates": [
            -73.61544,
            45.53318
          ],
          "type": "Point"
        },
        "id": "938118ec9d50c674f8755cf8d3813afb"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6280",
          "name": "Casgrain / Laurier"
        },
        "geometry": {
          "coordinates": [
            -73.59181,
            45.524374
          ],
          "type": "Point"
        },
        "id": "9403898e195df817c8db679dc3e98c60"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7131",
          "name": "Bibliothèque du Boisé (Thimens / Todd)"
        },
        "geometry": {
          "coordinates": [
            -73.704432,
            45.504634
          ],
          "type": "Point"
        },
        "id": "94196d2963d598699d20c8ec742ebfa6"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7123",
          "name": "des Récollets / Martial"
        },
        "geometry": {
          "coordinates": [
            -73.640617,
            45.590891
          ],
          "type": "Point"
        },
        "id": "9458c7e2ca8886a74728e90e2f9b7c7d"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6264",
          "name": "Chabot / de Bellechasse"
        },
        "geometry": {
          "coordinates": [
            -73.592144,
            45.542569
          ],
          "type": "Point"
        },
        "id": "94c3aacff406da761b7c6c7195d8665e"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6039",
          "name": "McGill / des Récollets"
        },
        "geometry": {
          "coordinates": [
            -73.558826,
            45.500779
          ],
          "type": "Point"
        },
        "id": "95163646b60f546381e253c0df66053f"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6913",
          "name": "Drolet / Beaubien"
        },
        "geometry": {
          "coordinates": [
            -73.605834,
            45.533348
          ],
          "type": "Point"
        },
        "id": "95240f092f6f556d089a3e8ad80d054c"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "5006",
          "name": "Collège Édouard-Montpetit (de Gentilly / de Normandie)"
        },
        "geometry": {
          "coordinates": [
            -73.495067,
            45.537226
          ],
          "type": "Point"
        },
        "id": "95a3aa1d2fd673f24de076d0c144c926"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6709",
          "name": "Le Caron / Marc-Sauvalle "
        },
        "geometry": {
          "coordinates": [
            -73.584039,
            45.461685
          ],
          "type": "Point"
        },
        "id": "95fb6d23eebb98a3edcba96b271a46f6"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7085",
          "name": "de la Grande-Allée / Ste-Catherine"
        },
        "geometry": {
          "coordinates": [
            -73.506857,
            45.631379
          ],
          "type": "Point"
        },
        "id": "963e55c820ddc04878e2787760569077"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7112",
          "name": "Newman / Senkus"
        },
        "geometry": {
          "coordinates": [
            -73.613752,
            45.444043
          ],
          "type": "Point"
        },
        "id": "963fe867f837826bbdc20cc07f3c43c7"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6424",
          "name": "Square Chaboillez (St-Jacques / de la Cathédrale)"
        },
        "geometry": {
          "coordinates": [
            -73.564917,
            45.496563
          ],
          "type": "Point"
        },
        "id": "974da637bce767d17154fe798829fb38"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6381",
          "name": "Omer-Lavallée / du Midway"
        },
        "geometry": {
          "coordinates": [
            -73.562174,
            45.545775
          ],
          "type": "Point"
        },
        "id": "97eb1b38ba407c6d2c7240132fe515d8"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6258",
          "name": "Parc Père-Marquette (Chambord / Rosemont)"
        },
        "geometry": {
          "coordinates": [
            -73.593218,
            45.537087
          ],
          "type": "Point"
        },
        "id": "980fbd4d07f547031139a1d289ca1995"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6032",
          "name": "Métro Place-d'Armes (Viger / St-Urbain)"
        },
        "geometry": {
          "coordinates": [
            -73.55976,
            45.50623
          ],
          "type": "Point"
        },
        "id": "985653201fd31b83f7219a65a1d2a0e4"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6223",
          "name": "du Mont-Royal / du Parc"
        },
        "geometry": {
          "coordinates": [
            -73.589,
            45.517
          ],
          "type": "Point"
        },
        "id": "995959668f92f9c48d6ae6b0c399cc0d"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "5005",
          "name": "St-Charles / St-Jean"
        },
        "geometry": {
          "coordinates": [
            -73.511914,
            45.536907
          ],
          "type": "Point"
        },
        "id": "9a26e49b02ade5efe48b46ae0d68281b"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6211",
          "name": "Roy / St-Laurent"
        },
        "geometry": {
          "coordinates": [
            -73.575808,
            45.515616
          ],
          "type": "Point"
        },
        "id": "9aa7c690e30c46916dffcc559329dab4"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7031",
          "name": "Berri / Rachel"
        },
        "geometry": {
          "coordinates": [
            -73.577204,
            45.522718
          ],
          "type": "Point"
        },
        "id": "9acc3ac9386e2b71a71914bf074559d4"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6021",
          "name": "de l'Hôtel-de-Ville / Sherbrooke"
        },
        "geometry": {
          "coordinates": [
            -73.568406,
            45.514564
          ],
          "type": "Point"
        },
        "id": "9b22b7603486af624d5a212a2652a03b"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "10002",
          "name": "Métro Charlevoix (Centre / Charlevoix)"
        },
        "geometry": {
          "coordinates": [
            -73.569651,
            45.478227
          ],
          "type": "Point"
        },
        "id": "9b29d0f2c33a5240c60dca1d0b675b0c"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7007",
          "name": "Kirkfield / de Chambois"
        },
        "geometry": {
          "coordinates": [
            -73.63389,
            45.512933
          ],
          "type": "Point"
        },
        "id": "9b43a117cbebc90db084ca308312eecf"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7061",
          "name": "Lajeunesse / de Castelnau"
        },
        "geometry": {
          "coordinates": [
            -73.616817,
            45.540396
          ],
          "type": "Point"
        },
        "id": "9c0dfb044c7b99bcfe425bc1915e4788"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7090",
          "name": "de St-Firmin / Fleury"
        },
        "geometry": {
          "coordinates": [
            -73.651842,
            45.570656
          ],
          "type": "Point"
        },
        "id": "9c2f399918cd4165fe25b31afe31450b"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6099",
          "name": "Ste-Catherine / Labelle"
        },
        "geometry": {
          "coordinates": [
            -73.559229,
            45.515065
          ],
          "type": "Point"
        },
        "id": "9c3290c3f49804b234980fdb62e393cc"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7017",
          "name": "Bennett / Ste-Catherine"
        },
        "geometry": {
          "coordinates": [
            -73.532427,
            45.553053
          ],
          "type": "Point"
        },
        "id": "9c71fc86ca9e8f3e194e2e4daf8fe99f"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6016",
          "name": "Jacques-Le Ber / de la Pointe Nord"
        },
        "geometry": {
          "coordinates": [
            -73.539285,
            45.472503
          ],
          "type": "Point"
        },
        "id": "9c735f35c5b132a962a2bc1ef6118d9b"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6746",
          "name": "Métro Acadie (de l'Acadie / Beaumont)"
        },
        "geometry": {
          "coordinates": [
            -73.623442,
            45.523574
          ],
          "type": "Point"
        },
        "id": "9d244cc4f206bc3f3ef9f2e7a36878cd"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7088",
          "name": "du Tricentenaire / de Montigny"
        },
        "geometry": {
          "coordinates": [
            -73.500412,
            45.651405
          ],
          "type": "Point"
        },
        "id": "9d92d62525bad274113e73b5026d7f8a"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7050",
          "name": "Ottawa / William"
        },
        "geometry": {
          "coordinates": [
            -73.564062,
            45.489727
          ],
          "type": "Point"
        },
        "id": "9df82b594661916dde0c83ff7d9d580c"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6116",
          "name": "Plessis / Ontario"
        },
        "geometry": {
          "coordinates": [
            -73.56073,
            45.523492
          ],
          "type": "Point"
        },
        "id": "9dffd202264f8e89bcd03e462123deaf"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6158",
          "name": "Gilford / de Brébeuf"
        },
        "geometry": {
          "coordinates": [
            -73.581625,
            45.530816
          ],
          "type": "Point"
        },
        "id": "9e182a82939ff66bf5f934cb5a3b0964"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6330",
          "name": "de Gaspé / Jarry"
        },
        "geometry": {
          "coordinates": [
            -73.6304,
            45.54078
          ],
          "type": "Point"
        },
        "id": "9eb63500ed03abf53b9b89f3c39a4211"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7135",
          "name": "Cavendish / Poirier"
        },
        "geometry": {
          "coordinates": [
            -73.711481,
            45.506222
          ],
          "type": "Point"
        },
        "id": "9ecd414377d8097f442e928afa37e46f"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6038",
          "name": "McGill / Place d'Youville"
        },
        "geometry": {
          "coordinates": [
            -73.55566,
            45.49975
          ],
          "type": "Point"
        },
        "id": "9f88319769c338807e7df85210d52b35"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7132",
          "name": "Ste-Croix / Tassé"
        },
        "geometry": {
          "coordinates": [
            -73.685104,
            45.519492
          ],
          "type": "Point"
        },
        "id": "a01290f5fbed509709593a3050bc1594"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6366",
          "name": "Wilderton  / Van Horne"
        },
        "geometry": {
          "coordinates": [
            -73.624751,
            45.510141
          ],
          "type": "Point"
        },
        "id": "a0dffe9e965692025c22d2bd0116cedf"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "4002",
          "name": "Graham / Wicksteed"
        },
        "geometry": {
          "coordinates": [
            -73.640483,
            45.516936
          ],
          "type": "Point"
        },
        "id": "a0f4320ac893ae249b24c2a7f9e91018"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6275",
          "name": "Chambord / Jean-Talon"
        },
        "geometry": {
          "coordinates": [
            -73.610536,
            45.544845
          ],
          "type": "Point"
        },
        "id": "a1201a9d9dd4dd8b2ef7691a6247f464"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6037",
          "name": "St-Nicolas / Place d'Youville"
        },
        "geometry": {
          "coordinates": [
            -73.555152,
            45.501966
          ],
          "type": "Point"
        },
        "id": "a189346732096a6f36c87911cb2ffefd"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6742",
          "name": "St-Patrick / Briand"
        },
        "geometry": {
          "coordinates": [
            -73.596435,
            45.463397
          ],
          "type": "Point"
        },
        "id": "a229ed8c89111dcad6ce992392305ed2"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6059",
          "name": "de la Cathédrale / René-Lévesque"
        },
        "geometry": {
          "coordinates": [
            -73.56942,
            45.499191
          ],
          "type": "Point"
        },
        "id": "a27553a46bd40874bdcd8942d45b98e3"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6425",
          "name": "Métro de l'Église (Ross / de l'Église)"
        },
        "geometry": {
          "coordinates": [
            -73.565921,
            45.462846
          ],
          "type": "Point"
        },
        "id": "a2f08e7e370376ee3d6c7c6d58c293d5"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6716",
          "name": "Francis / Fleury"
        },
        "geometry": {
          "coordinates": [
            -73.655567,
            45.563872
          ],
          "type": "Point"
        },
        "id": "a3043ed8e630ba7233a618fe78b32c3a"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7019",
          "name": "Casgrain / St-Viateur"
        },
        "geometry": {
          "coordinates": [
            -73.59879,
            45.527512
          ],
          "type": "Point"
        },
        "id": "a371ed7d238359bd096ae799599ac0ab"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7080",
          "name": "du President-Kennedy / Union"
        },
        "geometry": {
          "coordinates": [
            -73.572027,
            45.505011
          ],
          "type": "Point"
        },
        "id": "a3df9304ab9653a6a40f7173a4e7cf45"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7053",
          "name": "Ropery / Augustin-Cantin"
        },
        "geometry": {
          "coordinates": [
            -73.56846,
            45.480914
          ],
          "type": "Point"
        },
        "id": "a53a13aacbb7c047afe1fc3ed99a8e34"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6086",
          "name": "Basin / du Séminaire"
        },
        "geometry": {
          "coordinates": [
            -73.560172,
            45.490452
          ],
          "type": "Point"
        },
        "id": "a58a4bbc5a747bed2dc1fba4ae9b90f5"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6175",
          "name": "St-Christophe / Cherrier"
        },
        "geometry": {
          "coordinates": [
            -73.568216,
            45.520277
          ],
          "type": "Point"
        },
        "id": "a5c99ef00f03b44576ad89bd83712e5e"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6426",
          "name": "Métro Verdun (Willibrord / de Verdun)"
        },
        "geometry": {
          "coordinates": [
            -73.572092,
            45.459487
          ],
          "type": "Point"
        },
        "id": "a66c7631d8154f91ff7b7fdb8ebdb054"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7022",
          "name": "Durocher / Bernard"
        },
        "geometry": {
          "coordinates": [
            -73.606687,
            45.522225
          ],
          "type": "Point"
        },
        "id": "a67ca45e1b9b39e9fef93bc4228c2656"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6372",
          "name": "1ère avenue / Masson"
        },
        "geometry": {
          "coordinates": [
            -73.57645,
            45.545199
          ],
          "type": "Point"
        },
        "id": "a68546ba9f9d8d16b0b838bf154da942"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "5003",
          "name": "Place Longueuil"
        },
        "geometry": {
          "coordinates": [
            -73.517165,
            45.52841
          ],
          "type": "Point"
        },
        "id": "a6b688b22c9dd344bbf48e832fd414de"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6097",
          "name": "Ste-Catherine / St-Marc"
        },
        "geometry": {
          "coordinates": [
            -73.580294,
            45.492897
          ],
          "type": "Point"
        },
        "id": "a6e9ad23baf097df2a67e81400364f6e"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6917",
          "name": "Basile-Routhier / Chabanel"
        },
        "geometry": {
          "coordinates": [
            -73.647656,
            45.549868
          ],
          "type": "Point"
        },
        "id": "a7d5161ba6d33bdf4af7887f332b2ad8"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6339",
          "name": "Harletd / de Monkland"
        },
        "geometry": {
          "coordinates": [
            -73.624035,
            45.474565
          ],
          "type": "Point"
        },
        "id": "a8215631377883385008385c8835e7d9"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6019",
          "name": "Métro Sherbrooke (de Rigaud / Berri)"
        },
        "geometry": {
          "coordinates": [
            -73.568184,
            45.517998
          ],
          "type": "Point"
        },
        "id": "a82e9498fac00eabea1b8febd2543b03"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7082",
          "name": "Métro Lionel-Groulx (Atwater / Lionel-Groulx)"
        },
        "geometry": {
          "coordinates": [
            -73.579741,
            45.482941
          ],
          "type": "Point"
        },
        "id": "a874c8de34f8e1f5e620a8e4444598d8"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6163",
          "name": "Marquette / Laurier"
        },
        "geometry": {
          "coordinates": [
            -73.5822,
            45.53543
          ],
          "type": "Point"
        },
        "id": "a8e3baa775fb1754e4d52ab8b0464886"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7153",
          "name": "Métro Cartier (des Laurentides / Cartier)"
        },
        "geometry": {
          "coordinates": [
            -73.681335,
            45.560029
          ],
          "type": "Point"
        },
        "id": "a90332814b14e766ba6f92087e30dbe5"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7014",
          "name": "Métro Université de Montréal (Édouard-Montpetit / Louis-Collin)"
        },
        "geometry": {
          "coordinates": [
            -73.617976,
            45.504277
          ],
          "type": "Point"
        },
        "id": "a9f38323a7d8ccc14db8174fa3a5d454"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7046",
          "name": "de Maisonneuve / Mansfield (nord)"
        },
        "geometry": {
          "coordinates": [
            -73.573337,
            45.502386
          ],
          "type": "Point"
        },
        "id": "ab59b92b03a7941a5d8d3858afa07bbf"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7100",
          "name": "Métro Namur (des Jockeys / Décarie)"
        },
        "geometry": {
          "coordinates": [
            -73.654494,
            45.494044
          ],
          "type": "Point"
        },
        "id": "ab7d1f2238d89c66e0a3a84fb993790b"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6234",
          "name": "de l'Arcade / Clark"
        },
        "geometry": {
          "coordinates": [
            -73.603935,
            45.52741
          ],
          "type": "Point"
        },
        "id": "abfad43422693ce3530dab00beb64ae2"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6130",
          "name": "Sherbrooke / Frontenac"
        },
        "geometry": {
          "coordinates": [
            -73.56081,
            45.5367
          ],
          "type": "Point"
        },
        "id": "ac67cdd13f28bbce2036ba9cb48ce332"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6754",
          "name": "Eadie / Dubois"
        },
        "geometry": {
          "coordinates": [
            -73.590528,
            45.457596
          ],
          "type": "Point"
        },
        "id": "ac7179a1a414ec63866ca986443549a6"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6415",
          "name": "de Melrose / Sherbrooke"
        },
        "geometry": {
          "coordinates": [
            -73.616961,
            45.469819
          ],
          "type": "Point"
        },
        "id": "ac9f28bc91ca22dced68007eef07e2cf"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7051",
          "name": "Jogues / Allard"
        },
        "geometry": {
          "coordinates": [
            -73.600306,
            45.45002
          ],
          "type": "Point"
        },
        "id": "acc1ed6dcc20448f219218fdde37f2bd"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6737",
          "name": "Jacques-Casault / Christophe-Colomb"
        },
        "geometry": {
          "coordinates": [
            -73.630103,
            45.552123
          ],
          "type": "Point"
        },
        "id": "ad517a55df971ad096269774f1ec482a"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6129",
          "name": "de Bordeaux / Sherbrooke"
        },
        "geometry": {
          "coordinates": [
            -73.563053,
            45.52997
          ],
          "type": "Point"
        },
        "id": "ad7d90877e8ea830f13e21c3d70aa495"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6153",
          "name": "Cartier / Marie-Anne"
        },
        "geometry": {
          "coordinates": [
            -73.571776,
            45.532674
          ],
          "type": "Point"
        },
        "id": "ae54e9ee1529db7cab181c8d9de0aa7f"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7009",
          "name": "Place Émilie-Gamelin (de Maisonneuve / Berri)"
        },
        "geometry": {
          "coordinates": [
            -73.560966,
            45.51569
          ],
          "type": "Point"
        },
        "id": "ae6573bca88e957eeb89a5ff12d6912c"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6312",
          "name": "de Kent / de la Côte-des-Neiges"
        },
        "geometry": {
          "coordinates": [
            -73.63305,
            45.501449
          ],
          "type": "Point"
        },
        "id": "af42dbfe7e3ccd2afd4225a924d9389c"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6327",
          "name": "Drolet / Faillon"
        },
        "geometry": {
          "coordinates": [
            -73.620878,
            45.539269
          ],
          "type": "Point"
        },
        "id": "b00e933411e85de59eeddc3408b63db1"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6161",
          "name": "Cartier / St-Joseph"
        },
        "geometry": {
          "coordinates": [
            -73.57869,
            45.535828
          ],
          "type": "Point"
        },
        "id": "b040c7eeebb589acd6a75e0255e445b8"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6009",
          "name": "Crescent / de Maisonneuve"
        },
        "geometry": {
          "coordinates": [
            -73.577615,
            45.498111
          ],
          "type": "Point"
        },
        "id": "b04576d2d48611725ceb9eb82ae213f1"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6712",
          "name": "LaSalle / Crawford"
        },
        "geometry": {
          "coordinates": [
            -73.58274,
            45.437913
          ],
          "type": "Point"
        },
        "id": "b16fe4d6112b46dc999e69f09ceab5db"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6136",
          "name": "Métro Laurier (Riletd / Laurier)"
        },
        "geometry": {
          "coordinates": [
            -73.589114,
            45.527616
          ],
          "type": "Point"
        },
        "id": "b1c8a450df180b563f48eb4e8a5ffcd1"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6035",
          "name": "Viger / Chenneville"
        },
        "geometry": {
          "coordinates": [
            -73.560891,
            45.505311
          ],
          "type": "Point"
        },
        "id": "b1d69294c0e2375bae26b6cf53cab38d"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6101",
          "name": "Métro Villa-Maria (Décarie / de Monkland)"
        },
        "geometry": {
          "coordinates": [
            -73.61979,
            45.479483
          ],
          "type": "Point"
        },
        "id": "b1fcaf51b745a1515396c172a1b9f0f5"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6123",
          "name": "Alexandre-DeSève / la Fontaine"
        },
        "geometry": {
          "coordinates": [
            -73.558218,
            45.523276
          ],
          "type": "Point"
        },
        "id": "b21c7b369d60e27878752d20dbe2da6c"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6713",
          "name": "29e avenue / St-Zotique"
        },
        "geometry": {
          "coordinates": [
            -73.579688,
            45.567765
          ],
          "type": "Point"
        },
        "id": "b27f64534225bbb5bd45b6e3d29d6462"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6078",
          "name": "St-Alexandre / Ste-Catherine"
        },
        "geometry": {
          "coordinates": [
            -73.567634,
            45.505382
          ],
          "type": "Point"
        },
        "id": "b2dbf595b9a03af2d3f54905ec7a14fb"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7045",
          "name": "Casgrain / Mozart"
        },
        "geometry": {
          "coordinates": [
            -73.614792,
            45.534727
          ],
          "type": "Point"
        },
        "id": "b30d19d8b0496277434dd18b276a8d87"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7003",
          "name": "Métro Guy-Concordia (Guy / St-Catherine)"
        },
        "geometry": {
          "coordinates": [
            -73.577732,
            45.494981
          ],
          "type": "Point"
        },
        "id": "b35e05ebb9f8c0dcbb6cc9f7646e0ee8"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6303",
          "name": "Pratt / Van Horne"
        },
        "geometry": {
          "coordinates": [
            -73.620302,
            45.514144
          ],
          "type": "Point"
        },
        "id": "b3994d34836e0c5ecc12cdd221f9520d"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6435",
          "name": "Victoria Hall"
        },
        "geometry": {
          "coordinates": [
            -73.60033,
            45.481291
          ],
          "type": "Point"
        },
        "id": "b3a0434ce6841df6af3e2495aa423937"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6102",
          "name": "Lincoln / du Fort"
        },
        "geometry": {
          "coordinates": [
            -73.583836,
            45.493034
          ],
          "type": "Point"
        },
        "id": "b4ebadd0c90fa72e027a7b7b0bbc5ae9"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6334",
          "name": "Métro Jarry (Lajeunesse / Jarry)"
        },
        "geometry": {
          "coordinates": [
            -73.628284,
            45.543711
          ],
          "type": "Point"
        },
        "id": "b53b5ed0c631b2a0ac78e098a6aab746"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6722",
          "name": "du Quesne / Pierre-de-Coubertin"
        },
        "geometry": {
          "coordinates": [
            -73.538848,
            45.574984
          ],
          "type": "Point"
        },
        "id": "b578830f0d3fd4ec4626166d8e931cce"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6107",
          "name": "St-Mathieu / Ste-Catherine"
        },
        "geometry": {
          "coordinates": [
            -73.579146,
            45.493679
          ],
          "type": "Point"
        },
        "id": "b57a06c26fe44960d2e30f30b967c992"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6025",
          "name": "Notre-Dame / St-Gabriel"
        },
        "geometry": {
          "coordinates": [
            -73.555119,
            45.507143
          ],
          "type": "Point"
        },
        "id": "b5923ef7266ba6066ecfb806c366e7b2"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7104",
          "name": "8e avenue / Notre-Dame Lachine"
        },
        "geometry": {
          "coordinates": [
            -73.670798,
            45.434987
          ],
          "type": "Point"
        },
        "id": "b5d56c9dfbfd60d9813730ac8652d1fe"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6052",
          "name": "de la Commune / King"
        },
        "geometry": {
          "coordinates": [
            -73.55257,
            45.497515
          ],
          "type": "Point"
        },
        "id": "b613e3859af8c7981532adb3ff998d18"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6928",
          "name": "Jean-Brillant / McKenna"
        },
        "geometry": {
          "coordinates": [
            -73.618869,
            45.498767
          ],
          "type": "Point"
        },
        "id": "b6b79130a302f9826f3154f4fcbb1006"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6721",
          "name": "Métro Cadillac (de Cadillac / Sherbrooke)"
        },
        "geometry": {
          "coordinates": [
            -73.546836,
            45.576963
          ],
          "type": "Point"
        },
        "id": "b6e0e7731934392ca71eb153b41eebc7"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6434",
          "name": "Victoria / de Maisonneuve"
        },
        "geometry": {
          "coordinates": [
            -73.600169,
            45.477428
          ],
          "type": "Point"
        },
        "id": "b74af7c12b6618355e7c6845a7069e49"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7034",
          "name": "Atwater / Greene"
        },
        "geometry": {
          "coordinates": [
            -73.577826,
            45.480495
          ],
          "type": "Point"
        },
        "id": "b7888b91463ad14ab7d1e6c52c61cf21"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6421",
          "name": "Cartier / Rosemont"
        },
        "geometry": {
          "coordinates": [
            -73.591044,
            45.541247
          ],
          "type": "Point"
        },
        "id": "b7b013f63553fc6ea2d3bef867a5a918"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6226",
          "name": "Hôpital Maisonneuve-Rosemont (Rosemont / Chatelain)"
        },
        "geometry": {
          "coordinates": [
            -73.561562,
            45.575707
          ],
          "type": "Point"
        },
        "id": "b7ec096d4c69a4eafbf5b93e8cacb2cf"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6395",
          "name": "Métro Viau (Pierre-de-Coubertin / Viau)"
        },
        "geometry": {
          "coordinates": [
            -73.546611,
            45.561782
          ],
          "type": "Point"
        },
        "id": "b831aed18f45db43a76d4969bbce9e4c"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6747",
          "name": "Waverly / St-Zotique"
        },
        "geometry": {
          "coordinates": [
            -73.614708,
            45.530505
          ],
          "type": "Point"
        },
        "id": "b863817defb1fbf1f78d1b50b0423bd3"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6332",
          "name": "de Gaspé / de Liège"
        },
        "geometry": {
          "coordinates": [
            -73.636341,
            45.542485
          ],
          "type": "Point"
        },
        "id": "b8729bc8bebb02b9fe07411fd49f5baa"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7107",
          "name": "19e avenue / St-Joseph Lachine"
        },
        "geometry": {
          "coordinates": [
            -73.681405,
            45.433123
          ],
          "type": "Point"
        },
        "id": "b8e0a7829220e7801d407612ea20f876"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6336",
          "name": "Faillon / St-Hubert"
        },
        "geometry": {
          "coordinates": [
            -73.617939,
            45.542971
          ],
          "type": "Point"
        },
        "id": "b94d8dbbe21d544280fc085e83b28c7c"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6140",
          "name": "Marquette / Rachel"
        },
        "geometry": {
          "coordinates": [
            -73.570289,
            45.529801
          ],
          "type": "Point"
        },
        "id": "b96ac677b3ddab56d1b23b757f0b36db"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7068",
          "name": "Basin / Richmond"
        },
        "geometry": {
          "coordinates": [
            -73.56507,
            45.48753
          ],
          "type": "Point"
        },
        "id": "b99a675da7afab72d2111e8437cf3637"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7145",
          "name": "Argyle / Bannantyne"
        },
        "geometry": {
          "coordinates": [
            -73.576775,
            45.453318
          ],
          "type": "Point"
        },
        "id": "b9cbe8b71446128049d71263f1db774a"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7137",
          "name": "de Lisieux / Jean-Talon"
        },
        "geometry": {
          "coordinates": [
            -73.58168,
            45.579349
          ],
          "type": "Point"
        },
        "id": "ba2cfa5e302dacebc9130fd0ab564feb"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6049",
          "name": "Queen / Wellington"
        },
        "geometry": {
          "coordinates": [
            -73.555349,
            45.497605
          ],
          "type": "Point"
        },
        "id": "ba5c76d8a28e80cb83d3e4ce58d27941"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6062",
          "name": "Drummond / Ste-Catherine"
        },
        "geometry": {
          "coordinates": [
            -73.574227,
            45.498639
          ],
          "type": "Point"
        },
        "id": "bb34b9befdc099991baf513b38744849"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7058",
          "name": "Gordon / Wellington"
        },
        "geometry": {
          "coordinates": [
            -73.567306,
            45.461077
          ],
          "type": "Point"
        },
        "id": "bb568642ffc9d52a991c1a528014492a"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6224",
          "name": "Villeneuve / du Parc"
        },
        "geometry": {
          "coordinates": [
            -73.59235,
            45.51829
          ],
          "type": "Point"
        },
        "id": "bb690b55cdd06d757d26567594f384da"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6268",
          "name": "Chambord / Beaubien"
        },
        "geometry": {
          "coordinates": [
            -73.599343,
            45.539932
          ],
          "type": "Point"
        },
        "id": "bb7434f3739b5d571a48fa127445e1b4"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6750",
          "name": "de Mentana / Gilford"
        },
        "geometry": {
          "coordinates": [
            -73.583858,
            45.528723
          ],
          "type": "Point"
        },
        "id": "bbb5e986deb7a32557a58569bd807245"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6906",
          "name": "Métro Rosemont (de St-Vallier / Rosemont)"
        },
        "geometry": {
          "coordinates": [
            -73.59816,
            45.531954
          ],
          "type": "Point"
        },
        "id": "bbc1ebfa5d3c118cbb4c4cc357d050cc"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6718",
          "name": "Grand Bouleletd / Sherbrooke"
        },
        "geometry": {
          "coordinates": [
            -73.623295,
            45.466569
          ],
          "type": "Point"
        },
        "id": "bbd1ca567f9efecdeb443cdc7ce3f2d0"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6184",
          "name": "Métro Mont-Royal (Riletd / du Mont-Royal)"
        },
        "geometry": {
          "coordinates": [
            -73.58255,
            45.524673
          ],
          "type": "Point"
        },
        "id": "bbf5d6b5e42d7825f35de081507ae76c"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7086",
          "name": "Parc de l'Hôtel-de-Ville (Dubé / Laurendeau)"
        },
        "geometry": {
          "coordinates": [
            -73.494994,
            45.63065
          ],
          "type": "Point"
        },
        "id": "bc942378760817a022d83ef52d7bf758"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6503",
          "name": "Métro Parc  (Ogilvy / Hutchison)"
        },
        "geometry": {
          "coordinates": [
            -73.624392,
            45.530351
          ],
          "type": "Point"
        },
        "id": "bc9f156494830a10f7ad7b6ff8f565a8"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6067",
          "name": "Porte-de-Québec / St-Hubert"
        },
        "geometry": {
          "coordinates": [
            -73.550878,
            45.512494
          ],
          "type": "Point"
        },
        "id": "bcb6245b8d008e1db7b8455dbcf9ae46"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7029",
          "name": "Cartier / Masson"
        },
        "geometry": {
          "coordinates": [
            -73.583523,
            45.53802
          ],
          "type": "Point"
        },
        "id": "bd5ad9e7c9bf34ef4ce52da45f179cc3"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6214",
          "name": "Square St-Louis (du Square St-Louis / Laval)"
        },
        "geometry": {
          "coordinates": [
            -73.570128,
            45.51609
          ],
          "type": "Point"
        },
        "id": "bda3dbeb31d44fa36a0ff09b9616598b"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6018",
          "name": "St-André / Ontario"
        },
        "geometry": {
          "coordinates": [
            -73.56353,
            45.51889
          ],
          "type": "Point"
        },
        "id": "be34ffc440bfe6e2c6c6c2a29583bbc6"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6229",
          "name": "Coloniale / du Mont-Royal"
        },
        "geometry": {
          "coordinates": [
            -73.585615,
            45.521161
          ],
          "type": "Point"
        },
        "id": "be56fc2d164b124c6f1d1ad2346086f1"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7140",
          "name": "St-Jacques / des Seigneurs"
        },
        "geometry": {
          "coordinates": [
            -73.5719,
            45.489185
          ],
          "type": "Point"
        },
        "id": "be792da0ed0a6364f38c3d3c8d4a07bb"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6064",
          "name": "Métro Peel (de Maisonneuve / Stanley)"
        },
        "geometry": {
          "coordinates": [
            -73.57507,
            45.50038
          ],
          "type": "Point"
        },
        "id": "beaef6ac56f4eee796ed65d9155871cd"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6354",
          "name": "Marcil / Sherbrooke"
        },
        "geometry": {
          "coordinates": [
            -73.613924,
            45.471743
          ],
          "type": "Point"
        },
        "id": "bf256b80f6e4358cb57831c2246a2011"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7151",
          "name": "Métro Montmorency (de l'Avenir / Jacques-Tétreault)"
        },
        "geometry": {
          "coordinates": [
            -73.719597,
            45.558108
          ],
          "type": "Point"
        },
        "id": "bf83a00b9e607134b0e6b5b3456a9cfa"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6169",
          "name": "Boyer / du Mont-Royal"
        },
        "geometry": {
          "coordinates": [
            -73.579916,
            45.527432
          ],
          "type": "Point"
        },
        "id": "c02960748ea0071ee8e369d3778834bd"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6350",
          "name": "Island / Centre"
        },
        "geometry": {
          "coordinates": [
            -73.564753,
            45.48149
          ],
          "type": "Point"
        },
        "id": "c08550e694601a8692e4e99e54b1b6ae"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6361",
          "name": "Molson / Beaubien"
        },
        "geometry": {
          "coordinates": [
            -73.591154,
            45.549685
          ],
          "type": "Point"
        },
        "id": "c0b1da12217747fbdd11b73dac5accfd"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6324",
          "name": "de Liège / Lajeunesse"
        },
        "geometry": {
          "coordinates": [
            -73.63474,
            45.545603
          ],
          "type": "Point"
        },
        "id": "c1801ed2443dfdaff9d6e1fdb561f43b"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7035",
          "name": "Fullum / Gilford"
        },
        "geometry": {
          "coordinates": [
            -73.573836,
            45.539223
          ],
          "type": "Point"
        },
        "id": "c294a5b501db6e50eae9eb882a4bc345"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6364",
          "name": "de Chambly / Rachel"
        },
        "geometry": {
          "coordinates": [
            -73.558262,
            45.54991
          ],
          "type": "Point"
        },
        "id": "c2a6d5b502babd70b0a6bed40a5b5e76"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6070",
          "name": "Milton / University"
        },
        "geometry": {
          "coordinates": [
            -73.576348,
            45.506448
          ],
          "type": "Point"
        },
        "id": "c3102f183ad3e5ac3a899e728766d44e"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7110",
          "name": "LaSalle / 67e avenue"
        },
        "geometry": {
          "coordinates": [
            -73.626514,
            45.415348
          ],
          "type": "Point"
        },
        "id": "c34ca56292d12d4b70f96221e6c3aeae"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7001",
          "name": "Ball / Querbes"
        },
        "geometry": {
          "coordinates": [
            -73.632135,
            45.531177
          ],
          "type": "Point"
        },
        "id": "c4941e2a4256f4c5eaac529e21cacfc3"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6205",
          "name": "Milton / du Parc"
        },
        "geometry": {
          "coordinates": [
            -73.573863,
            45.509361
          ],
          "type": "Point"
        },
        "id": "c4fae35f444e4abac39058614210229c"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6396",
          "name": "Métro Pie-IX (Pierre-de-Coubertin / Pie-IX)"
        },
        "geometry": {
          "coordinates": [
            -73.551559,
            45.554213
          ],
          "type": "Point"
        },
        "id": "c513619d020ca9c125dfa290f97af3a0"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6111",
          "name": "Parthenais / Ste-Catherine"
        },
        "geometry": {
          "coordinates": [
            -73.548864,
            45.526005
          ],
          "type": "Point"
        },
        "id": "c59c6f94fefd84ef157335dfb6877216"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6266",
          "name": "Louis-Hébert / de Bellechasse"
        },
        "geometry": {
          "coordinates": [
            -73.588684,
            45.546661
          ],
          "type": "Point"
        },
        "id": "c6f65458486715e996318e08284b5cdb"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6083",
          "name": "Square Phillips"
        },
        "geometry": {
          "coordinates": [
            -73.568106,
            45.503737
          ],
          "type": "Point"
        },
        "id": "c710fca1a5704064e69b9aa357d1d998"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6739",
          "name": "Pierre-de-Coubertin / Langelier"
        },
        "geometry": {
          "coordinates": [
            -73.535313,
            45.580314
          ],
          "type": "Point"
        },
        "id": "c7181f1385d9e355f7412a66d8ac04f6"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6170",
          "name": "de Mentana / Laurier"
        },
        "geometry": {
          "coordinates": [
            -73.587638,
            45.53045
          ],
          "type": "Point"
        },
        "id": "c73bc30ca5cc8979a1a56af2d255189d"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6183",
          "name": "Laval / du Mont-Royal"
        },
        "geometry": {
          "coordinates": [
            -73.584145,
            45.522364
          ],
          "type": "Point"
        },
        "id": "c7a79a830aa95e9d5c96bdcda1c1825e"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6307",
          "name": "Laval / Rachel"
        },
        "geometry": {
          "coordinates": [
            -73.579423,
            45.520178
          ],
          "type": "Point"
        },
        "id": "c9d563f6641d65b08456345ce6b5939a"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7083",
          "name": "Parc de Bullion (de Bullion / Prince-Arthur)"
        },
        "geometry": {
          "coordinates": [
            -73.572134,
            45.515604
          ],
          "type": "Point"
        },
        "id": "ca6d7c70fbf08babdadae9efd9b085ad"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6436",
          "name": "Argyle / Sherbrooke"
        },
        "geometry": {
          "coordinates": [
            -73.595797,
            45.4858
          ],
          "type": "Point"
        },
        "id": "ca94119ce5ba409f86e052afb5a77d2d"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6389",
          "name": "Boyer / Jean-Talon"
        },
        "geometry": {
          "coordinates": [
            -73.61248,
            45.541586
          ],
          "type": "Point"
        },
        "id": "cbd2be388de83e3400dddcf833a501ff"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6270",
          "name": "Fabre / St-Zotique"
        },
        "geometry": {
          "coordinates": [
            -73.60101,
            45.543451
          ],
          "type": "Point"
        },
        "id": "cc6393d60c8746b95563f3c28fea9329"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7122",
          "name": "de Belleville / Fleury"
        },
        "geometry": {
          "coordinates": [
            -73.641243,
            45.58116
          ],
          "type": "Point"
        },
        "id": "cd806a1fa1e945867130b85e9e881d46"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6272",
          "name": "de Bordeaux / St-Zotique"
        },
        "geometry": {
          "coordinates": [
            -73.598664,
            45.546539
          ],
          "type": "Point"
        },
        "id": "cddf2f97734e992612ae6445dfc281ee"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6925",
          "name": "des Écores / Jean-Talon"
        },
        "geometry": {
          "coordinates": [
            -73.602867,
            45.552363
          ],
          "type": "Point"
        },
        "id": "ce5c329dee3827d1116cc144852c01f5"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6309",
          "name": "4e avenue / de Verdun"
        },
        "geometry": {
          "coordinates": [
            -73.572607,
            45.456884
          ],
          "type": "Point"
        },
        "id": "ceffc519fb2be15a623bceeaf2980d23"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6113",
          "name": "Alexandre-DeSève / Ste-Catherine"
        },
        "geometry": {
          "coordinates": [
            -73.553861,
            45.52123
          ],
          "type": "Point"
        },
        "id": "cf5ea194370eb9d7cad1d1b5ec0903bd"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7028",
          "name": "de Gaspé / St-Viateur"
        },
        "geometry": {
          "coordinates": [
            -73.597438,
            45.527748
          ],
          "type": "Point"
        },
        "id": "d089f553db49924017454b29f36c3d2f"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6704",
          "name": "19e avenue / St-Zotique"
        },
        "geometry": {
          "coordinates": [
            -73.585643,
            45.561594
          ],
          "type": "Point"
        },
        "id": "d0d298c7783baa0b8bd9e09aea6394b5"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6126",
          "name": "Fullum / de Rouen"
        },
        "geometry": {
          "coordinates": [
            -73.558713,
            45.532136
          ],
          "type": "Point"
        },
        "id": "d18c31ea619d52c21b18f0821bbac3cb"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6179",
          "name": "Duluth / St-Denis"
        },
        "geometry": {
          "coordinates": [
            -73.575983,
            45.520604
          ],
          "type": "Point"
        },
        "id": "d1d23ef27d181f50b5a1d60e9a203774"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7047",
          "name": "Ottawa / Peel"
        },
        "geometry": {
          "coordinates": [
            -73.559507,
            45.493908
          ],
          "type": "Point"
        },
        "id": "d1ef26f4825e3868ac5290799025b058"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6310",
          "name": "de Soissons / de Darlington"
        },
        "geometry": {
          "coordinates": [
            -73.623591,
            45.506876
          ],
          "type": "Point"
        },
        "id": "d2d06741f2498115afb50abad3ae6cd5"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6217",
          "name": "Vallières / St-Laurent"
        },
        "geometry": {
          "coordinates": [
            -73.583616,
            45.518967
          ],
          "type": "Point"
        },
        "id": "d31557c1f999c09674baff3832956c27"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6015",
          "name": "BAnQ (Berri / de Maisonneuve)"
        },
        "geometry": {
          "coordinates": [
            -73.561273,
            45.515299
          ],
          "type": "Point"
        },
        "id": "d3e6c8f06e155edba8e1529c967ff189"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6255",
          "name": "Boyer / St-Zotique"
        },
        "geometry": {
          "coordinates": [
            -73.60556,
            45.53848
          ],
          "type": "Point"
        },
        "id": "d40882c4782e05b9f415a313d3b4347e"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6262",
          "name": "de la Roche /  de Bellechasse"
        },
        "geometry": {
          "coordinates": [
            -73.597476,
            45.537159
          ],
          "type": "Point"
        },
        "id": "d458e2c60c3774cb32baa213b72acd6f"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6720",
          "name": "Ontario / Viau"
        },
        "geometry": {
          "coordinates": [
            -73.535496,
            45.559481
          ],
          "type": "Point"
        },
        "id": "d5527988178954c350691361bd039dec"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7106",
          "name": "Victoria / 18e avenue Lachine"
        },
        "geometry": {
          "coordinates": [
            -73.68019,
            45.435793
          ],
          "type": "Point"
        },
        "id": "d553ddc108c3c8373c6dd48b28c0583f"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6162",
          "name": "Legendre / Henri-Julien"
        },
        "geometry": {
          "coordinates": [
            -73.646646,
            45.546123
          ],
          "type": "Point"
        },
        "id": "d573571d165ac2d5224c279ab3585fff"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6246",
          "name": "Métro Outremont (Wiseman / Van Horne)"
        },
        "geometry": {
          "coordinates": [
            -73.614849,
            45.52027
          ],
          "type": "Point"
        },
        "id": "d5f0ab06a33d1cac93de524559ffa914"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7095",
          "name": "Chabanel / de l'Esplanade"
        },
        "geometry": {
          "coordinates": [
            -73.653376,
            45.540685
          ],
          "type": "Point"
        },
        "id": "d62ffe3b0438723d32114c714d332eec"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7063",
          "name": "Drolet / Jarry"
        },
        "geometry": {
          "coordinates": [
            -73.629941,
            45.541954
          ],
          "type": "Point"
        },
        "id": "d66b496827fdbcd57c3ec3cef2f72046"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6924",
          "name": "de Bordeaux / Jean-Talon"
        },
        "geometry": {
          "coordinates": [
            -73.605566,
            45.549754
          ],
          "type": "Point"
        },
        "id": "d6ad709cc559c1d0b006f89c3114476b"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6916",
          "name": "Parc du Pélican (2e avenue / St-Joseph)"
        },
        "geometry": {
          "coordinates": [
            -73.571564,
            45.544513
          ],
          "type": "Point"
        },
        "id": "d6e7b1a6ed40b57780556b3aa5668365"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7102",
          "name": "Grand Bouleletd / de Terrebonne"
        },
        "geometry": {
          "coordinates": [
            -73.63168,
            45.470543
          ],
          "type": "Point"
        },
        "id": "d70774383dc0a410c6d22dfc0bdcf334"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7074",
          "name": "St-André / Robin"
        },
        "geometry": {
          "coordinates": [
            -73.561851,
            45.518128
          ],
          "type": "Point"
        },
        "id": "d73d213c66221f23a33263d21d91f264"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6026",
          "name": "de la Commune / Place Jacques-Cartier"
        },
        "geometry": {
          "coordinates": [
            -73.551836,
            45.50761
          ],
          "type": "Point"
        },
        "id": "d7e036f46dc6640974bf86e18e172ff5"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7025",
          "name": "St-Dominique / Bernard"
        },
        "geometry": {
          "coordinates": [
            -73.601222,
            45.527933
          ],
          "type": "Point"
        },
        "id": "d91c106232995b9bd5ce78b69ae9c9cb"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7094",
          "name": "Alfred Laliberté / de Poutrincourt"
        },
        "geometry": {
          "coordinates": [
            -73.694596,
            45.53308
          ],
          "type": "Point"
        },
        "id": "d9408f834fd94b3e0efc7daad6190fc8"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6705",
          "name": "5e avenue / Bannantyne"
        },
        "geometry": {
          "coordinates": [
            -73.57614,
            45.456365
          ],
          "type": "Point"
        },
        "id": "d95cd0042e8149408f57321624bb3bbb"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7076",
          "name": "Tupper / du Fort"
        },
        "geometry": {
          "coordinates": [
            -73.580782,
            45.491229
          ],
          "type": "Point"
        },
        "id": "d97d28ebee4b53f0b748ee09134b5d9b"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7130",
          "name": "Métro du Collège (Cartier / Décarie)"
        },
        "geometry": {
          "coordinates": [
            -73.672964,
            45.508439
          ],
          "type": "Point"
        },
        "id": "daa5cc9d7cacb0f1e37ca5274a3a920b"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6915",
          "name": "Alma / Beaubien"
        },
        "geometry": {
          "coordinates": [
            -73.606655,
            45.532435
          ],
          "type": "Point"
        },
        "id": "dac908ad6f5e74b4635d332a7c56704e"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6376",
          "name": "de Chambly / St-Joseph"
        },
        "geometry": {
          "coordinates": [
            -73.565295,
            45.552842
          ],
          "type": "Point"
        },
        "id": "daec14c8f8e465263158de87891042ca"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7141",
          "name": "Turgeon / Notre-Dame"
        },
        "geometry": {
          "coordinates": [
            -73.581989,
            45.478888
          ],
          "type": "Point"
        },
        "id": "dbd74c139ed0d41ef270fdbe7f8ae1fb"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6321",
          "name": "Gary-Carter / St-Laurent"
        },
        "geometry": {
          "coordinates": [
            -73.622442,
            45.535899
          ],
          "type": "Point"
        },
        "id": "dc745bf25c6373e9e831729c333140fd"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6051",
          "name": "de Gaspé / Marmier"
        },
        "geometry": {
          "coordinates": [
            -73.601728,
            45.529686
          ],
          "type": "Point"
        },
        "id": "dccaa20bb4121b580911170bea0ed581"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7060",
          "name": "de l'Église / de Verdun"
        },
        "geometry": {
          "coordinates": [
            -73.571568,
            45.463001
          ],
          "type": "Point"
        },
        "id": "dce117310e8af238409271c159ead083"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6147",
          "name": "Calixa-Lavallée / Sherbrooke"
        },
        "geometry": {
          "coordinates": [
            -73.56545,
            45.52479
          ],
          "type": "Point"
        },
        "id": "dce63b75f096f2ba06d60cf8c1b65b1d"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6736",
          "name": "Métro Henri-Bourassa (Henri-Bourassa / Millen)"
        },
        "geometry": {
          "coordinates": [
            -73.667161,
            45.556751
          ],
          "type": "Point"
        },
        "id": "dd28f0351e8c1a3518e7e627bf3ba595"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6715",
          "name": "Natatorium (LaSalle / Rolland)"
        },
        "geometry": {
          "coordinates": [
            -73.57509,
            45.444547
          ],
          "type": "Point"
        },
        "id": "ddacb259b7e7f2e56b39614a79b2a421"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7064",
          "name": "Clark / de Liège"
        },
        "geometry": {
          "coordinates": [
            -73.638134,
            45.539983
          ],
          "type": "Point"
        },
        "id": "ddb2b0104fd8cd5816c251d2f921946c"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6076",
          "name": "de Ville-Marie / Ste-Catherine"
        },
        "geometry": {
          "coordinates": [
            -73.529147,
            45.557921
          ],
          "type": "Point"
        },
        "id": "dde92541d8b542beb82bb05f4590b42f"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7037",
          "name": "Prince-Arthur / Ste-Famille"
        },
        "geometry": {
          "coordinates": [
            -73.574634,
            45.511638
          ],
          "type": "Point"
        },
        "id": "de8834454235279466a5394c0d1b88a0"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6029",
          "name": "Bourget / St-Jacques"
        },
        "geometry": {
          "coordinates": [
            -73.583861,
            45.480845
          ],
          "type": "Point"
        },
        "id": "de8c4fe9e931bc4f03469cd7beb6836f"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6347",
          "name": "Métro St-Michel (Shaughnessy / St-Michel)"
        },
        "geometry": {
          "coordinates": [
            -73.599658,
            45.559199
          ],
          "type": "Point"
        },
        "id": "df8f611852f31d9e7a69ea43c02c4757"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6725",
          "name": "Métro Monk (Allard / Beaulieu)"
        },
        "geometry": {
          "coordinates": [
            -73.594027,
            45.450851
          ],
          "type": "Point"
        },
        "id": "dfdf3bd05d4382155d07b092a70d9fdf"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6003",
          "name": "Clark / Evans"
        },
        "geometry": {
          "coordinates": [
            -73.567602,
            45.511006
          ],
          "type": "Point"
        },
        "id": "e002d365a181a459633707584a7813d7"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6119",
          "name": "Ontario / de Lorimier"
        },
        "geometry": {
          "coordinates": [
            -73.557538,
            45.52773
          ],
          "type": "Point"
        },
        "id": "e158431d54f0f05bd7bbae9ace478d42"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6033",
          "name": "16e avenue / Beaubien"
        },
        "geometry": {
          "coordinates": [
            -73.583158,
            45.55828
          ],
          "type": "Point"
        },
        "id": "e1c74c03795bc64c7677ff530369bbb3"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7015",
          "name": "Parc des Rapides (LaSalle / 6e avenue)"
        },
        "geometry": {
          "coordinates": [
            -73.593099,
            45.429471
          ],
          "type": "Point"
        },
        "id": "e1ed66f88d5a958ae66e36fb5c2c0344"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6057",
          "name": "Peel / de la Gauchetiere"
        },
        "geometry": {
          "coordinates": [
            -73.56818,
            45.497718
          ],
          "type": "Point"
        },
        "id": "e2c36c0200d80031d82fb0e49cdb593f"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7127",
          "name": "Jeanne-Mance / Beaubien"
        },
        "geometry": {
          "coordinates": [
            -73.612299,
            45.52765
          ],
          "type": "Point"
        },
        "id": "e3b7211bf229f461d28ed4ebc955493d"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6926",
          "name": "Marie-Anne / St-Hubert"
        },
        "geometry": {
          "coordinates": [
            -73.578896,
            45.524682
          ],
          "type": "Point"
        },
        "id": "e4d616f594e82795908266344ccb1f59"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6180",
          "name": "St-Dominique / René-Lévesque"
        },
        "geometry": {
          "coordinates": [
            -73.561357,
            45.509418
          ],
          "type": "Point"
        },
        "id": "e4f153a25a10c299e7dd4967389c194e"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7049",
          "name": "William / Guy"
        },
        "geometry": {
          "coordinates": [
            -73.56473,
            45.489865
          ],
          "type": "Point"
        },
        "id": "e5672db464ebbad35d93d9eb5e11b649"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6142",
          "name": "Calixa-Lavallée / Rachel"
        },
        "geometry": {
          "coordinates": [
            -73.571939,
            45.527794
          ],
          "type": "Point"
        },
        "id": "e6f2ad07efe96f64f046d01a17fde8da"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6902",
          "name": "Montcalm / Ontario"
        },
        "geometry": {
          "coordinates": [
            -73.562275,
            45.521081
          ],
          "type": "Point"
        },
        "id": "e7168094ad607afdaeb5d6dfac97e831"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6127",
          "name": "de Gaspé / Jean-Talon"
        },
        "geometry": {
          "coordinates": [
            -73.616225,
            45.536582
          ],
          "type": "Point"
        },
        "id": "e8024bdd47c555e23fe3bf7d8ff9f7e2"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6237",
          "name": "Gilford / de Lanaudière"
        },
        "geometry": {
          "coordinates": [
            -73.580444,
            45.532008
          ],
          "type": "Point"
        },
        "id": "e8b126d270d58e8d0bef2a6b2be3ad49"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6409",
          "name": "Lionel-Groulx / George-Vanier"
        },
        "geometry": {
          "coordinates": [
            -73.573746,
            45.486219
          ],
          "type": "Point"
        },
        "id": "e8b2a4f005bc74f0342e24f4026ec91c"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7105",
          "name": "St-Joseph / 34e avenue Lachine"
        },
        "geometry": {
          "coordinates": [
            -73.693491,
            45.432839
          ],
          "type": "Point"
        },
        "id": "e8b3fffb55832d4e30835a53e375c621"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6340",
          "name": "de la Roche / Everett"
        },
        "geometry": {
          "coordinates": [
            -73.614841,
            45.544867
          ],
          "type": "Point"
        },
        "id": "e93fc44007d10fe2db459cb7d166d7e3"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6060",
          "name": "Belmont / Robert-Bourassa"
        },
        "geometry": {
          "coordinates": [
            -73.565837,
            45.501366
          ],
          "type": "Point"
        },
        "id": "eab0e71695d44982d795178a85021fdd"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6316",
          "name": "Swail / Decelles"
        },
        "geometry": {
          "coordinates": [
            -73.618652,
            45.497054
          ],
          "type": "Point"
        },
        "id": "eb89fd3bc33010eefdf376693ca1a62b"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6043",
          "name": "Square Victoria (Viger / du Square-Victoria)"
        },
        "geometry": {
          "coordinates": [
            -73.56295,
            45.50206
          ],
          "type": "Point"
        },
        "id": "ec22afada1b11e9048ff37bdcf409d2a"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6241",
          "name": "Querbes / Laurier"
        },
        "geometry": {
          "coordinates": [
            -73.597831,
            45.517539
          ],
          "type": "Point"
        },
        "id": "ecc81b0ca61d853a04da73683471021d"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7011",
          "name": "Panet / de Maisonneuve"
        },
        "geometry": {
          "coordinates": [
            -73.556143,
            45.520573
          ],
          "type": "Point"
        },
        "id": "ecdd1f8f4ee3e7413de46f5951e6ab70"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6122",
          "name": "Logan / d'Iberville"
        },
        "geometry": {
          "coordinates": [
            -73.54913,
            45.53057
          ],
          "type": "Point"
        },
        "id": "edbf2f1e997496523da1f031ca105a5b"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7048",
          "name": "Métro Angrignon (Lamont /  des Trinitaires)"
        },
        "geometry": {
          "coordinates": [
            -73.602178,
            45.447043
          ],
          "type": "Point"
        },
        "id": "ee528bf0a41c43b1d432f8f222fb377f"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6047",
          "name": "University / Prince-Arthur"
        },
        "geometry": {
          "coordinates": [
            -73.578443,
            45.507401
          ],
          "type": "Point"
        },
        "id": "eee500736a98fd2752030d58a883bc43"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6196",
          "name": "Villeneuve / St-Laurent"
        },
        "geometry": {
          "coordinates": [
            -73.589419,
            45.521341
          ],
          "type": "Point"
        },
        "id": "ef03b9ad4e8b85cfe4de659c6aad1524"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6735",
          "name": "Villeray / St-Michel"
        },
        "geometry": {
          "coordinates": [
            -73.603967,
            45.561059
          ],
          "type": "Point"
        },
        "id": "ef2ac3577f86f494b6cfe47dce349a1a"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6072",
          "name": "Metcalfe / de Maisonneuve"
        },
        "geometry": {
          "coordinates": [
            -73.57413,
            45.501714
          ],
          "type": "Point"
        },
        "id": "ef5ee25bf9d878834d54227498519c80"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6919",
          "name": "Bibliothèque de Rosemont (9e avenue / Rosemont)"
        },
        "geometry": {
          "coordinates": [
            -73.581855,
            45.552016
          ],
          "type": "Point"
        },
        "id": "ef642f5f887c90204787063f7d21cdd3"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7144",
          "name": "Hickson / Wellington"
        },
        "geometry": {
          "coordinates": [
            -73.566997,
            45.464892
          ],
          "type": "Point"
        },
        "id": "ef76132aad812b39f388c9d449e145bd"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7139",
          "name": "Parc Plage"
        },
        "geometry": {
          "coordinates": [
            -73.527792,
            45.502827
          ],
          "type": "Point"
        },
        "id": "ef8eee321558732adf887300b3525697"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7026",
          "name": "Maguire / Henri-Julien"
        },
        "geometry": {
          "coordinates": [
            -73.59347,
            45.527041
          ],
          "type": "Point"
        },
        "id": "efb082ec91f53d526a91289dd4ce4ed2"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6363",
          "name": "de la Côte St-Antoine / Royal"
        },
        "geometry": {
          "coordinates": [
            -73.61987,
            45.468926
          ],
          "type": "Point"
        },
        "id": "efb33795b30dc1516961a20c6ab8739c"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6304",
          "name": "Rockland / Lajoie"
        },
        "geometry": {
          "coordinates": [
            -73.614991,
            45.515617
          ],
          "type": "Point"
        },
        "id": "f08f846dc95e409977b775ac60c35530"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6707",
          "name": "Métro Jolicoeur (Drake / de Sève)"
        },
        "geometry": {
          "coordinates": [
            -73.581937,
            45.456085
          ],
          "type": "Point"
        },
        "id": "f0b749e7ac8f1bbbefa65f7187e7853f"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7117",
          "name": "François-Boivin / Bélanger"
        },
        "geometry": {
          "coordinates": [
            -73.566175,
            45.592596
          ],
          "type": "Point"
        },
        "id": "f0d95bdcb501b3cec2829e9c4e6ad8b6"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7055",
          "name": "Rose-de-Lima / Notre-Dame"
        },
        "geometry": {
          "coordinates": [
            -73.580535,
            45.47995
          ],
          "type": "Point"
        },
        "id": "f0ec7e2def47589cac1e8450b97125e1"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6921",
          "name": "Augustin-Cantin / Shearer"
        },
        "geometry": {
          "coordinates": [
            -73.563436,
            45.484018
          ],
          "type": "Point"
        },
        "id": "f154e3c14d3e7040be087dd0c249d5a5"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7126",
          "name": "41e avenue / Rosemont"
        },
        "geometry": {
          "coordinates": [
            -73.564314,
            45.571789
          ],
          "type": "Point"
        },
        "id": "f20220faedc095afa9133fa1b3f0fbf9"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6433",
          "name": "Hillside / Ste-Catherine"
        },
        "geometry": {
          "coordinates": [
            -73.590843,
            45.482826
          ],
          "type": "Point"
        },
        "id": "f2793e23eac55198cdf7271c71255105"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6251",
          "name": "Dante / de Gaspé"
        },
        "geometry": {
          "coordinates": [
            -73.612316,
            45.534414
          ],
          "type": "Point"
        },
        "id": "f3b53057f559e2008ce72e378343459f"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7101",
          "name": "Métro de la Savane (de Sorel / Bougainville)"
        },
        "geometry": {
          "coordinates": [
            -73.661428,
            45.50045
          ],
          "type": "Point"
        },
        "id": "f43173910142022ed482858083009240"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7059",
          "name": "Argyle / de Verdun"
        },
        "geometry": {
          "coordinates": [
            -73.571915,
            45.453015
          ],
          "type": "Point"
        },
        "id": "f45cb31f406264227c82ff7a8a771bfd"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6401",
          "name": "des Seigneurs / Notre-Dame"
        },
        "geometry": {
          "coordinates": [
            -73.569082,
            45.487722
          ],
          "type": "Point"
        },
        "id": "f4ce40b971f4a70f8c16c8a78ce09410"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6903",
          "name": "St-Dominique / Napoléon"
        },
        "geometry": {
          "coordinates": [
            -73.57722,
            45.516664
          ],
          "type": "Point"
        },
        "id": "f56e7062f483b75e2954d0db67cd2b62"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6177",
          "name": "St-Hubert / Duluth"
        },
        "geometry": {
          "coordinates": [
            -73.574184,
            45.522425
          ],
          "type": "Point"
        },
        "id": "f58f837d0d212ccdf23c5c655bf8e4b6"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6257",
          "name": "de St-Vallier / St-Zotique"
        },
        "geometry": {
          "coordinates": [
            -73.607545,
            45.536261
          ],
          "type": "Point"
        },
        "id": "f6663ec2c0d11ad98aa14027ce13bf65"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6065",
          "name": "de la Montagne / Sherbrooke"
        },
        "geometry": {
          "coordinates": [
            -73.579033,
            45.499744
          ],
          "type": "Point"
        },
        "id": "f691cc58c6cc73785ae2004a87781f07"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6753",
          "name": "Centre ÉPIC (St-Zotique / 40e avenue)"
        },
        "geometry": {
          "coordinates": [
            -73.574621,
            45.574147
          ],
          "type": "Point"
        },
        "id": "f6da6bf91257ec9a8fc29b75c5b9da63"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6901",
          "name": "Gare d'autocars de Montréal (Berri / Ontario)"
        },
        "geometry": {
          "coordinates": [
            -73.563948,
            45.516896
          ],
          "type": "Point"
        },
        "id": "f705f4966fff0de580d4ded4611e226f"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6080",
          "name": "Métro Vendôme (de Marlowe / de Maisonneuve)"
        },
        "geometry": {
          "coordinates": [
            -73.604734,
            45.47393
          ],
          "type": "Point"
        },
        "id": "f86a6001ee3b4fd8ad8e5bc76f4c4b03"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6131",
          "name": "Fullum / Sherbrooke"
        },
        "geometry": {
          "coordinates": [
            -73.562425,
            45.533924
          ],
          "type": "Point"
        },
        "id": "f9522bad31aabe77bacd7f89831855f1"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7111",
          "name": "Highlands / LaSalle"
        },
        "geometry": {
          "coordinates": [
            -73.657415,
            45.426123
          ],
          "type": "Point"
        },
        "id": "fa6c46918c07044b35ce8ff97d3e7e75"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6008",
          "name": "Sanguinet / Ste-Catherine"
        },
        "geometry": {
          "coordinates": [
            -73.561462,
            45.512796
          ],
          "type": "Point"
        },
        "id": "fb2299e575ceddfc06704c876ffd09f9"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7093",
          "name": "Laforest / Dudemaine"
        },
        "geometry": {
          "coordinates": [
            -73.687266,
            45.539806
          ],
          "type": "Point"
        },
        "id": "fb4d1680dbc7076b1916be5635e522f9"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7030",
          "name": "de Bordeaux / Marie-Anne"
        },
        "geometry": {
          "coordinates": [
            -73.570657,
            45.533409
          ],
          "type": "Point"
        },
        "id": "fb916f7f1205be4380f5ce87c7a9bf7e"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "7124",
          "name": "Dollard / Bernard"
        },
        "geometry": {
          "coordinates": [
            -73.611422,
            45.516782
          ],
          "type": "Point"
        },
        "id": "fbe62ddedb4e99191f989d211fd5a754"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6427",
          "name": "Métro Lasalle (de Rushbrooke / Caisse)"
        },
        "geometry": {
          "coordinates": [
            -73.565422,
            45.470696
          ],
          "type": "Point"
        },
        "id": "fc6b4824c3fd4e312b79cbe94ceb7097"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6044",
          "name": "Roy / St-André"
        },
        "geometry": {
          "coordinates": [
            -73.570367,
            45.521564
          ],
          "type": "Point"
        },
        "id": "fc83dd3f2ee961d6b7d6c923bae64756"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6927",
          "name": "Édouard-Montpetit / de Stirling"
        },
        "geometry": {
          "coordinates": [
            -73.615085,
            45.50723
          ],
          "type": "Point"
        },
        "id": "fc91ef007cd7d55e75a40939d1a8ba6f"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6213",
          "name": "Duluth / St-Laurent"
        },
        "geometry": {
          "coordinates": [
            -73.57946,
            45.516876
          ],
          "type": "Point"
        },
        "id": "fcb5ecc736d71f5f10d7342c59b55141"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "5002",
          "name": "St-Charles / Montarville"
        },
        "geometry": {
          "coordinates": [
            -73.51526,
            45.533681
          ],
          "type": "Point"
        },
        "id": "fcdea32a73d5ef8f5188b395ddd8eb41"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "4001",
          "name": "Graham / Brookfield"
        },
        "geometry": {
          "coordinates": [
            -73.629775,
            45.520074
          ],
          "type": "Point"
        },
        "id": "fd306ceb0bd9954817abc0e06abfa516"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6178",
          "name": "Riletd / Rachel"
        },
        "geometry": {
          "coordinates": [
            -73.57759,
            45.522277
          ],
          "type": "Point"
        },
        "id": "fe85bcbd72193068a5bebc5f65a2c900"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6235",
          "name": "St-Dominique / St-Viateur"
        },
        "geometry": {
          "coordinates": [
            -73.598275,
            45.526557
          ],
          "type": "Point"
        },
        "id": "febfc355d470e6fec574815533cc1612"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6278",
          "name": "Louis-Hébert / St-Zotique"
        },
        "geometry": {
          "coordinates": [
            -73.59576,
            45.55001
          ],
          "type": "Point"
        },
        "id": "fee23aab5a0d55f9710b98aa442b1951"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6706",
          "name": "Beatty / de Verdun"
        },
        "geometry": {
          "coordinates": [
            -73.572574,
            45.450729
          ],
          "type": "Point"
        },
        "id": "fee722512e8836e27d23fba249ec7615"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6006",
          "name": "18e avenue / Rosemont"
        },
        "geometry": {
          "coordinates": [
            -73.576529,
            45.557895
          ],
          "type": "Point"
        },
        "id": "ffc2ba63971e5a3472fb8958f476a8a6"
      },
      {
        "type": "Feature",
        "properties": {
          "code": "6167",
          "name": "Marquette / St-Grégoire"
        },
        "geometry": {
          "coordinates": [
            -73.58584,
            45.53703
          ],
          "type": "Point"
        },
        "id": "ffcec97d3e0da9c47588c53dd7c14980"
      }
    ]
};

// Sort by Code
stations.features.sort((a, b) => (a.properties.code - b.properties.code));

/**
 * Assign a unique id to each station. We'll use this `id`
 * later to associate each point on the map with a listing
 * in the sidebar.
 */
stations.features.forEach(function (station, i) {
    station.properties.id = i;
});

/**
 * Wait until the map loads to make changes to the map.
 */
map.on('load', function (e) {
    /**
     * This is where your '.addLayer()' used to be, instead
     * add only the source without styling a layer
     */
    map.addSource('places', {
        'type': 'geojson',
        'data': stations
    });

    // Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

    /**
     * Add all the things to the page:
     * - The location listings on the side of the page
     * - The markers onto the map
     */
    buildLocationList(stations);
    addMarkers();
});

/**
 * Add a marker to the map for every station listing.
 **/
function addMarkers() {
    /* For each feature in the GeoJSON object above: */
    stations.features.forEach(function (marker) {
        /* Create a div element for the marker. */
        let el = document.createElement('div');
        /* Assign a unique `id` to the marker. */
        el.id = 'marker-' + marker.properties.id;
        /* Assign the `marker` class to each marker for styling. */
        el.className = 'marker';

        /**
         * Creates a marker using the div element
         * defined above and add it to the map.
         **/
        new mapboxgl.Marker(el, {
                offset: [0, -23]
            })
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);


        el.addEventListener('click', function (e) {
            /* Fly to the point */
            flyToStation(marker);
            /* Close all other popups and display popup for clicked station */
            createPopUp(marker);
            /* Highlight listing in sidebar */
            let activeItem = document.getElementsByClassName('active');
            e.stopPropagation();
            if (activeItem[0]) {
                activeItem[0].classList.remove('active');
            }
            let listing = document.getElementById(
                'listing-' + marker.properties.id
            );
            listing.classList.add('active');
        });
    });
}

/**
 * Add a listing for each station to the sidebar.
 **/
function buildLocationList(data) {
    data.features.forEach(function (station, i) {
        /**
         * Create a shortcut for `station.properties`,
         * which will be used several times below.
         **/
        let prop = station.properties;

        /* Add a new listing section to the sidebar. */
        let listings = document.getElementById('listings');
        let listing = listings.appendChild(document.createElement('div'));
        /* Assign a unique `id` to the listing. */
        listing.id = 'listing-' + prop.id;
        /* Assign the `item` class to each listing for styling. */
        listing.className = 'item';

        /* Add the link to the individual listing created above. */
        let link = listing.appendChild(document.createElement('a'));
        link.href = '#';
        link.className = 'title';
        link.id = 'link-' + prop.id;
        link.innerHTML = prop.name;

        /* Station Code */
        let stationCodeContainer = listing.appendChild(document.createElement('div'));
        stationCodeContainer.innerHTML = 'Code: ' + prop.code;
       
    
        /*  Longitude */
        let longitudeNo = listing.appendChild(document.createElement('div'));
        longitudeNo.innerHTML = 'Longitude: ' + station.geometry.coordinates[0];
       
        /* Latitude */
        let latitudeNo = listing.appendChild(document.createElement('div'));
        latitudeNo.innerHTML = 'Latitude: ' + station.geometry.coordinates[1];

        link.addEventListener('click', function (e) {
            for (let i = 0; i < data.features.length; i++) {
                if (this.id === 'link-' + data.features[i].properties.id) {
                    let clickedListing = data.features[i];
                    flyToStation(clickedListing);
                    createPopUp(clickedListing);
                }
            }
            let activeItem = document.getElementsByClassName('active');
            if (activeItem[0]) {
                activeItem[0].classList.remove('active');
            }
            this.parentNode.classList.add('active');
        });
    });
}

/**
 * Use Mapbox GL JS's `flyTo` to move the camera smoothly
 * a given center point.
 **/
function flyToStation(currentFeature) {
    map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 15
    });
}

/**
 * Create a Mapbox GL JS `Popup`.
 **/
function createPopUp(currentFeature) {
    let popUps = document.getElementsByClassName('mapboxgl-popup');
    if (popUps[0]) popUps[0].remove();
    let popup = new mapboxgl.Popup({
            closeOnClick: false
        })
        .setLngLat(currentFeature.geometry.coordinates)
        .setHTML(
            '<h3>Station</h3>' +
            '<h4>' +
            currentFeature.properties.name +
            '<br/>' +
            currentFeature.properties.code +
            '</h4>'
        )
        .addTo(map);
}