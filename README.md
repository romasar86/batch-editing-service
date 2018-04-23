# batch-editing-service
To run service use the following command:
> npm start

##Example
url: http://127.0.0.1:3000/batch
method: POST
body: 
```
{
	"endpoint": {
		"url": "https://guesty-user-service.herokuapp.com/user/{userId}",
		"verb": "PATCH"
	},
	"payload": [
			{
				"path": {
					"userId": "ja2S-hs81-ksn3-iQI9"
				},
				"data": {
					"age": 30
				}
			},
			{
				"path": {
					"userId": "ja2S-hs81-ksn3-iQI9"
				},
				"data": {
					"age": 30
				}
			},
			{
				"path": {
					"userId": "ja2S-hs81-ksn3-iQI9"
				},
				"data": {
					"age": 30
				}
			}
		]
}
```