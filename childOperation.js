const fs=require('fs');
var path=require('path');
process.on('message',(msg)=>
{
    var readStream=fs.createReadStream(path.join(__dirname,'/file.txt'),{
    	encoding: 'utf8',highWaterMark:16*1024});
    readStream.on('data',function(chunkdata)
    {
         process.send(chunkdata);

    })
   
});