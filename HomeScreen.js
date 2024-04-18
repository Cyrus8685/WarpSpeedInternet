            /*document.getElementById('addressForm').addEventListener('submit', function(event) {
                event.preventDefault();
                var address = document.getElementById('address').value;
                //  Logic needed to show availability with an API
                //  Just shows basic event list atm,
                document.getElementById('result').innerHTML = "<p>Checking availability for: " + address + "</p>";
            });*/
        /*let  address;
        function initAddress() {
            address = new us-autocomplete-pro.api.smarty.com.Address (document.getElementById('address'));
            address.addListener('address_results', onAddressResult);
        }

           function onAddressResults () {
            var results = address.getResults();
            if (!results.geometry) {
                document.getElementById('address').placeholer = 'Type Address Here';
            } else {
                document.getElementById('details').innerHTML = address.name;
            }
           }*/

           const addressInput = document.querySelector('#address');
           const suggestionsOutput = document.getElementById("result");
           
           addressInput.addEventListener("keyup" , (e) => {
               prepareRequest(e.target.value);
           });
           
           const prepareRequest = async (lookupValue) => {
            const SmartySDK = require("smartystreets-javascript-sdk");
            const SmartyCore = SmartySDK.core;
            const Lookup = SmartySDK.usAutocompletePro.Lookup;
            
            // for Server-to-server requests, use this code:
            // let authId = process.env.SMARTY_AUTH_ID;
            // let authToken = process.env.SMARTY_AUTH_TOKEN;
            // const credentials = new SmartyCore.StaticCredentials(authId, authToken);
            
            // for client-side requests (browser/mobile), use this code:
            let key = "196979706711951117"
            const credentials = new SmartyCore.SharedCredentials(key);
            
            // The appropriate license values to be used for your subscriptions
            // can be found on the Subscription page of the account dashboard.
            // https://www.smarty.com/docs/cloud/licensing
            let clientBuilder = new SmartyCore.ClientBuilder(credentials).withLicenses(["us-autocomplete-pro-cloud"]);
            // .withBaseUrl("");
            let client = clientBuilder.buildUsAutocompleteProClient();
            
            // Documentation for input fields can be found at:
            // https://www.smarty.com/docs/cloud/us-autocomplete-api#pro-http-request-input-fields
            
            // *** Simple Lookup ***
            let lookup = new Lookup("Lookup");
            
            await handleRequest(lookup, "Simple Lookup");
            
            // *** Using Filter and Prefer ***
           /* lookup = new Lookup("4770 Lincoln");
            
            lookup.maxResults = 10;
            lookup.includeOnlyCities = ["Chicago,La Grange,IL", "Blaine,WA"];
            lookup.preferStates = ["IL"];
            lookup.preferRatio = 33;
            lookup.source = "all";
            
            await handleRequest(lookup, "Using Filter and Prefer");
            
            // *** Using 'selected' to Expand Secondaries ***
            lookup = new Lookup("4770 Lincoln");
            
            lookup.selected = "4770 N Lincoln Ave Ste 2 (3) Chicago, IL 60625";
            
            await handleRequest(lookup, "Using 'selected' to Expand Secondaries") */
            
            // ************************************************
            
            function logSuggestions(response, message) {
                console.log(message);
                console.log(response.result);
                console.log("*********************");
            }
            
            async function handleRequest(lookup, lookupType) {
                try {
                    const results = await client.send(lookup);
                    logSuggestions(results, lookupType);
                } catch(err) {
                    console.log(err)
                }
            }
           };