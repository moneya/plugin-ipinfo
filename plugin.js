const { httpFetch } = Host.getFunctions();


function ipInfo(ipAddress) {
  // Construct the URL for the API request
  const apiUrl = `http://ip-api.com/json/${ipAddress}?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,offset,currency,isp,org,as,asname,reverse,mobile,proxy,hosting,query`;

  // Define the request object
  const request = {
    method: "GET",
    url: apiUrl,
    headers: {
      "Content-Type": "application/json",
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
    }
  };

  // Make the HTTP request using Http.request
  const response = Http.request(request);

  // Check if the response status is not 200
  if (response.status !== 200) {
    const errorMessage = `Error ${response.status}: ${response.statusText}`;
    Host.outputString(errorMessage);
    throw new Error(errorMessage);
  }

  // Parse response JSON
  const data = JSON.parse(response.body);

  // Output the response body
  Host.outputString(JSON.stringify(data));
}




function run() {
  const ipAddress = Host.inputString();
  ipInfo(ipAddress);
}

module.exports = { run };