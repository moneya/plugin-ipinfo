# Extism Plugin README

## Introduction
The Extism IPINFO plugin facilitates retrieving detailed information about an IP address using the IP-API service. This README provides an overview of the plugin, its components, usage instructions, dependencies, and other relevant details.

## Components

1. **`ipInfo(ipAddress)` Function:**
   - Constructs the API URL based on the provided IP address.
   - Defines a request object containing necessary details such as method, URL, and headers.
   - Executes an HTTP request to the constructed URL using `Http.request`.
   - Checks if the response status is not 200, indicating an error, and throws an exception if so.
   - Parses the response body as JSON.
   - Outputs the parsed JSON data.

2. **`run()` Function:**
   - Retrieves an IP address as input.
   - Calls the `ipInfo` function with the provided IP address.

3. **Export:**
   - Exports the `run` function, allowing external modules to utilize this plugin.

## Usage
To utilize this plugin, follow these steps:
1. Ensure the plugin is correctly integrated into the hosting environment.
2. Call the `run` function.
3. Provide the IP address as input when prompted.
4. Receive detailed information about the IP address as output.

Example:
```javascript

//risky
extism call plugin.wasm run --input "146.70.99.211" --wasi --allow-host '*'

// safe
extism call plugin.wasm run --input "146.70.99.211" --wasi --allow-host 'ip-api.com'
