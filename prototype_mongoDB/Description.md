# Solution for file handling in Elementice Bulletkam project

## 1. Preliminary Decision making:

### Why MongoDB?

It’s a distributed NoSQL database system which has advantages of

* dynamic schema
* scalability
* flexibility
* speed
 
Since, we cannot define schema of our project and we require high performance on queries.
The MongoDB seems like a perfect choice to our scenario

### Why do we need GridFS?

GridFS is a specification for storing and retrieving files that exceed the BSON-document size limit of 16 MB.

Since MongoDB has a size limit on BSON document which is 16MB, we need tools to handle large media files, images and videos.

* Multer – GridFS storage engine for Multer to store uploaded files directly to MongoDb.
* Gridfs-stream - Easily stream files to and from MongoDB GridFS. E.g. display images which we upload and delete file from database.


### Why switch from MongoDB atlas to mlab?

Two remote clouds bring substantial functions. However, mlab provide more support on database support, backups, or data transfer with no extra charges compare to atlas.

### How file store in database?

The file is breaked into two collections:

* fs.chunks - store the actual data of file, each chunck is linked to the information of file by "files_id"
* fs.files - store the information of file e.g. filename, average size of each chunck..etc.


## 2. Implementing and learning roadmap:
* create package.json file ```npm init```
* add dependencies ```npm i express ejs body-parser mongoose multer multer-gridfs-storage gridfs-stream method-override```
* add dev dependency - to avoid keep restarting the server, make constantly watch. ```npm i --save-dev nodemon```
* add start and dev scripts in package.json

## 3. How our file handling system look like: 
![](
      Elementice-TechLauncher/Images/file handle.png
    )


