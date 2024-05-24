function countries(){return{AD:"Andorra",A2:"Andorra Test",AE:"United Arab Emirates",AF:"Afghanistan",AG:"Antigua and Barbuda",AI:"Anguilla",AL:"Albania",AM:"Armenia",AN:"Netherlands Antilles",AO:"Angola",AQ:"Antarctica",AR:"Argentina",AS:"American Samoa",AT:"Austria",AU:"Australia",AW:"Aruba",AX:"Åland Islands",AZ:"Azerbaijan",BA:"Bosnia and Herzegovina",BB:"Barbados",BD:"Bangladesh",BE:"Belgium",BF:"Burkina Faso",BG:"Bulgaria",BH:"Bahrain",BI:"Burundi",BJ:"Benin",BL:"Saint Barthélemy",BM:"Bermuda",BN:"Brunei",BO:"Bolivia",BQ:"British Antarctic Territory",BR:"Brazil",BS:"Bahamas",BT:"Bhutan",BV:"Bouvet Island",BW:"Botswana",BY:"Belarus",BZ:"Belize",CA:"Canada",CC:"Cocos [Keeling] Islands",CD:"Congo - Kinshasa",CF:"Central African Republic",CG:"Congo - Brazzaville",CH:"Switzerland",CI:"Côte d’Ivoire",CK:"Cook Islands",CL:"Chile",CM:"Cameroon",CN:"China",CO:"Colombia",CR:"Costa Rica",CS:"Serbia and Montenegro",CT:"Canton and Enderbury Islands",CU:"Cuba",CV:"Cape Verde",CX:"Christmas Island",CY:"Cyprus",CZ:"Czech Republic",DD:"East Germany",DE:"Germany",DJ:"Djibouti",DK:"Denmark",DM:"Dominica",DO:"Dominican Republic",DZ:"Algeria",EC:"Ecuador",EE:"Estonia",EG:"Egypt",EH:"Western Sahara",ER:"Eritrea",ES:"Spain",ET:"Ethiopia",FI:"Finland",FJ:"Fiji",FK:"Falkland Islands",FM:"Micronesia",FO:"Faroe Islands",FQ:"French Southern and Antarctic Territories",FR:"France",FX:"Metropolitan France",GA:"Gabon",GB:"United Kingdom",GD:"Grenada",GE:"Georgia",GF:"French Guiana",GG:"Guernsey",GH:"Ghana",GI:"Gibraltar",GL:"Greenland",GM:"Gambia",GN:"Guinea",GP:"Guadeloupe",GQ:"Equatorial Guinea",GR:"Greece",GS:"South Georgia and the South Sandwich Islands",GT:"Guatemala",GU:"Guam",GW:"Guinea-Bissau",GY:"Guyana",HK:"Hong Kong SAR China",HM:"Heard Island and McDonald Islands",HN:"Honduras",HR:"Croatia",HT:"Haiti",HU:"Hungary",ID:"Indonesia",IE:"Ireland",IL:"Israel",IM:"Isle of Man",IN:"India",IO:"British Indian Ocean Territory",IQ:"Iraq",IR:"Iran",IS:"Iceland",IT:"Italy",JE:"Jersey",JM:"Jamaica",JO:"Jordan",JP:"Japan",JT:"Johnston Island",KE:"Kenya",KG:"Kyrgyzstan",KH:"Cambodia",KI:"Kiribati",KM:"Comoros",KN:"Saint Kitts and Nevis",KP:"North Korea",KR:"South Korea",KW:"Kuwait",KY:"Cayman Islands",KZ:"Kazakhstan",LA:"Laos",LB:"Lebanon",LC:"Saint Lucia",LI:"Liechtenstein",LK:"Sri Lanka",LR:"Liberia",LS:"Lesotho",LT:"Lithuania",LU:"Luxembourg",LV:"Latvia",LY:"Libya",MA:"Morocco",MC:"Monaco",MD:"Moldova",ME:"Montenegro",MF:"Saint Martin",MG:"Madagascar",MH:"Marshall Islands",MI:"Midway Islands",MK:"Macedonia",ML:"Mali",MM:"Myanmar [Burma]",MN:"Mongolia",MO:"Macau SAR China",MP:"Northern Mariana Islands",MQ:"Martinique",MR:"Mauritania",MS:"Montserrat",MT:"Malta",MU:"Mauritius",MV:"Maldives",MW:"Malawi",MX:"Mexico",MY:"Malaysia",MZ:"Mozambique",NA:"Namibia",NC:"New Caledonia",NE:"Niger",NF:"Norfolk Island",NG:"Nigeria",NI:"Nicaragua",NL:"Netherlands",NO:"Norway",NP:"Nepal",NQ:"Dronning Maud Land",NR:"Nauru",NT:"Neutral Zone",NU:"Niue",NZ:"New Zealand",OM:"Oman",PA:"Panama",PC:"Pacific Islands Trust Territory",PE:"Peru",PF:"French Polynesia",PG:"Papua New Guinea",PH:"Philippines",PK:"Pakistan",PL:"Poland",PM:"Saint Pierre and Miquelon",PN:"Pitcairn Islands",PR:"Puerto Rico",PS:"Palestinian Territories",PT:"Portugal",PU:"U.S. Miscellaneous Pacific Islands",PW:"Palau",PY:"Paraguay",PZ:"Panama Canal Zone",QA:"Qatar",RE:"Réunion",RO:"Romania",RS:"Serbia",RU:"Russia",RW:"Rwanda",SA:"Saudi Arabia",SB:"Solomon Islands",SC:"Seychelles",SD:"Sudan",SE:"Sweden",SG:"Singapore",SH:"Saint Helena",SI:"Slovenia",SJ:"Svalbard and Jan Mayen",SK:"Slovakia",SL:"Sierra Leone",SM:"San Marino",SN:"Senegal",SO:"Somalia",SR:"Suriname",ST:"São Tomé and Príncipe",SU:"Union of Soviet Socialist Republics",SV:"El Salvador",SY:"Syria",SZ:"Swaziland",TC:"Turks and Caicos Islands",TD:"Chad",TF:"French Southern Territories",TG:"Togo",TH:"Thailand",TJ:"Tajikistan",TK:"Tokelau",TL:"Timor-Leste",TM:"Turkmenistan",TN:"Tunisia",TO:"Tonga",TR:"Turkey",TT:"Trinidad and Tobago",TV:"Tuvalu",TW:"Taiwan",TZ:"Tanzania",UA:"Ukraine",UG:"Uganda",UM:"U.S. Minor Outlying Islands",US:"United States",UY:"Uruguay",UZ:"Uzbekistan",VA:"Vatican City",VC:"Saint Vincent and the Grenadines",VD:"North Vietnam",VE:"Venezuela",VG:"British Virgin Islands",VI:"U.S. Virgin Islands",VN:"Vietnam",VU:"Vanuatu",WF:"Wallis and Futuna",WK:"Wake Island",WS:"Samoa",YD:"People's Democratic Republic of Yemen",YE:"Yemen",YT:"Mayotte",ZA:"South Africa",ZM:"Zambia",ZW:"Zimbabwe",ZZ:"Unknown or Invalid Region"}}!function(n){n('[data-toggle="select2"]').select2(),n("input#defaultconfig").maxlength({warningClass:"badge bg-success",limitReachedClass:"badge bg-danger"}),n("input#thresholdconfig").maxlength({threshold:20,warningClass:"badge bg-success",limitReachedClass:"badge bg-danger"}),n("input#alloptions").maxlength({alwaysShow:!0,separator:" out of ",preText:"You typed ",postText:" chars available.",validate:!0,warningClass:"badge bg-success",limitReachedClass:"badge bg-danger"}),n("textarea#textarea").maxlength({alwaysShow:!0,warningClass:"badge bg-success",limitReachedClass:"badge bg-danger"}),n("input#placement").maxlength({alwaysShow:!0,placement:"top-left",warningClass:"badge bg-success",limitReachedClass:"badge bg-danger"}),n("#selectize-tags").selectize({persist:!1,createOnBlur:!0,create:!0}),n("#selectize-select").selectize({create:!0,sortField:{field:"text",direction:"asc"},dropdownParent:"body"}),n("#selectize-maximum").selectize({maxItems:3}),n("#selectize-links").selectize({theme:"links",maxItems:null,valueField:"id",searchField:"title",options:[{id:1,title:"Line Seiki",url:"https://Line Seiki.com/"},{id:2,title:"Google",url:"http://google.com"},{id:3,title:"Yahoo",url:"http://yahoo.com"}],render:{option:function(a,e){return'<div class="option"><span class="title">'+e(a.title)+'</span><span class="url">'+e(a.url)+"</span></div>"},item:function(a,e){return'<div class="item"><a href="'+e(a.url)+'">'+e(a.title)+"</a></div>"}},create:function(a){return{id:0,title:a,url:"#"}}}),n("#selectize-confirm").selectize({delimiter:",",persist:!1,onDelete:function(a){return confirm(1<a.length?"Are you sure you want to remove these "+a.length+" items?":'Are you sure you want to remove "'+a[0]+'"?')}}),n("#selectize-optgroup").selectize({sortField:"text"}),n("#selectize-programmatic").selectize({placeholder:"Please select ...",options:[{class:"mammal",value:"dog",name:"Dog"},{class:"mammal",value:"cat",name:"Cat"},{class:"mammal",value:"horse",name:"Horse"},{class:"mammal",value:"kangaroo",name:"Kangaroo"},{class:"bird",value:"duck",name:"Duck"},{class:"bird",value:"chicken",name:"Chicken"},{class:"bird",value:"ostrich",name:"Ostrich"},{class:"bird",value:"seagull",name:"Seagull"},{class:"reptile",value:"snake",name:"Snake"},{class:"reptile",value:"lizard",name:"Lizard"},{class:"reptile",value:"alligator",name:"Alligator"},{class:"reptile",value:"turtle",name:"Turtle"}],optgroups:[{value:"mammal",label:"Mammal",label_scientific:"Mammalia"},{value:"bird",label:"Bird",label_scientific:"Aves"},{value:"reptile",label:"Reptile",label_scientific:"Reptilia"}],optgroupField:"class",labelField:"name",searchField:["name"],render:{optgroup_header:function(a,e){return'<div class="optgroup-header">'+e(a.label)+' <span class="scientific">('+e(a.label_scientific)+")</span></div>"}}}),n("#selectize-optgroup-column").selectize({placeholder:"Please select ...",options:[{id:"avenger",make:"dodge",model:"Avenger"},{id:"caliber",make:"dodge",model:"Caliber"},{id:"caravan-grand-passenger",make:"dodge",model:"Caravan Grand Passenger"},{id:"challenger",make:"dodge",model:"Challenger"},{id:"ram-1500",make:"dodge",model:"Ram 1500"},{id:"viper",make:"dodge",model:"Viper"},{id:"a3",make:"audi",model:"A3"},{id:"a6",make:"audi",model:"A6"},{id:"r8",make:"audi",model:"R8"},{id:"rs-4",make:"audi",model:"RS 4"},{id:"s4",make:"audi",model:"S4"},{id:"s8",make:"audi",model:"S8"},{id:"tt",make:"audi",model:"TT"},{id:"avalanche",make:"chevrolet",model:"Avalanche"},{id:"aveo",make:"chevrolet",model:"Aveo"},{id:"cobalt",make:"chevrolet",model:"Cobalt"},{id:"silverado",make:"chevrolet",model:"Silverado"},{id:"suburban",make:"chevrolet",model:"Suburban"},{id:"tahoe",make:"chevrolet",model:"Tahoe"},{id:"trail-blazer",make:"chevrolet",model:"TrailBlazer"}],optgroups:[{$order:3,id:"dodge",name:"Dodge"},{$order:2,id:"audi",name:"Audi"},{$order:1,id:"chevrolet",name:"Chevrolet"}],labelField:"model",valueField:"id",optgroupField:"make",optgroupLabelField:"name",optgroupValueField:"id",lockOptgroupOrder:!0,searchField:["model"],plugins:["optgroup_columns"],openOnFocus:!1}),n(".selectize-close-btn").selectize({plugins:["remove_button"],persist:!1,create:!0,render:{item:function(a,e){return'<div>"'+e(a.text)+'"</div>'}},onDelete:function(a){return confirm(1<a.length?"Are you sure you want to remove these "+a.length+" items?":'Are you sure you want to remove "'+a[0]+'"?')}}),n(".selectize-drop-header").selectize({sortField:"text",hideSelected:!1,plugins:{dropdown_header:{title:"Language"}}}),n('[data-plugin="switchery"]').each(function(a,e){new Switchery(n(this)[0],n(this).data())}),n('[data-toggle="touchspin"]').each(function(a,e){var i=n.extend({},{},n(e).data());n(e).TouchSpin(i)}),0<n('[data-plugin="multiselect"]').length&&n('[data-plugin="multiselect"]').multiSelect(n(this).data());var t=n.map(countries(),function(a,e){return{value:a,data:e}}),a=(n.mockjax({url:"*",responseTime:2e3,response:function(a){var a=a.data.query,e=a.toLowerCase(),i=new RegExp("\\b"+n.Autocomplete.utils.escapeRegExChars(e),"gi"),e=n.grep(t,function(a){return i.test(a.value)});this.responseText=JSON.stringify({query:a,suggestions:e})}}),n("#autocomplete-ajax").autocomplete({lookup:t,lookupFilter:function(a,e,i){return new RegExp("\\b"+n.Autocomplete.utils.escapeRegExChars(i),"gi").test(a.value)},onSelect:function(a){n("#selction-ajax").html("You selected: "+a.value+", "+a.data)},onHint:function(a){n("#autocomplete-ajax-x").val(a)},onInvalidateSelection:function(){n("#selction-ajax").html("You selected: none")}}),n.map(["Anaheim Ducks","Atlanta Thrashers","Boston Bruins","Buffalo Sabres","Calgary Flames","Carolina Hurricanes","Chicago Blackhawks","Colorado Avalanche","Columbus Blue Jackets","Dallas Stars","Detroit Red Wings","Edmonton OIlers","Florida Panthers","Los Angeles Kings","Minnesota Wild","Montreal Canadiens","Nashville Predators","New Jersey Devils","New Rork Islanders","New York Rangers","Ottawa Senators","Philadelphia Flyers","Phoenix Coyotes","Pittsburgh Penguins","Saint Louis Blues","San Jose Sharks","Tampa Bay Lightning","Toronto Maple Leafs","Vancouver Canucks","Washington Capitals"],function(a){return{value:a,data:{category:"NHL"}}})),e=n.map(["Atlanta Hawks","Boston Celtics","Charlotte Bobcats","Chicago Bulls","Cleveland Cavaliers","Dallas Mavericks","Denver Nuggets","Detroit Pistons","Golden State Warriors","Houston Rockets","Indiana Pacers","LA Clippers","LA Lakers","Memphis Grizzlies","Miami Heat","Milwaukee Bucks","Minnesota Timberwolves","New Jersey Nets","New Orleans Hornets","New York Knicks","Oklahoma City Thunder","Orlando Magic","Philadelphia Sixers","Phoenix Suns","Portland Trail Blazers","Sacramento Kings","San Antonio Spurs","Toronto Raptors","Utah Jazz","Washington Wizards"],function(a){return{value:a,data:{category:"NBA"}}}),a=a.concat(e);n("#autocomplete").devbridgeAutocomplete({lookup:a,minChars:1,onSelect:function(a){n("#selection").html("You selected: "+a.value+", "+a.data.category)},showNoSuggestionNotice:!0,noSuggestionNotice:"Sorry, no matching results",groupBy:"category"}),n("#autocomplete-custom-append").autocomplete({lookup:t,appendTo:"#suggestions-container"}),n("#autocomplete-dynamic").autocomplete({lookup:t})}(jQuery);