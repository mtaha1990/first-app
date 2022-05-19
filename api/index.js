/*exports.handler = async function http (req) {
  console.log('Begin API called')
  return {
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from your Begin API!'
    })
  }
}

*/

const http = require('http');


http.createServer((req,res)=>{

res.send(req.url);
});


http.listen(3500, () => {
  console.log('listening...');
});
