let id = 0;


module.exports = class Visitor {
     constructor(fullName, age, visitDate, visitTime, comments, assistedBy) {

          this.fullName = fullName;
          this.age = age;
          this.visitDate = visitDate;
          this.visitTime = visitTime;
          this.comments = comments;
          this.assistedBy = assistedBy;
          console.log('Patient information added to file');
          this.id = id;
     }

     save() {

          let files = new Visitor(
               this.fullName,
               this.age,
               this.visitDate,
               this.visitTime,
               this.comments,
               this.assistedBy
          );
          let fileData = JSON.stringify(files)
          const fs = require('fs');
          
          id++;

          fs.writeFile(`visitor_ ${id}.json`, fileData, err => {
               if (err) {
                    throw (Error + 'Cannot save file');
               }               
          });

          return 'File was saved';
     }
     load(id) {
          const fs = require("fs")
          if(id <= 0) {
              console.log("File doesn't exist");
          }
          var fileID = "visitor_" + id + ".json";
          var visitor =  fs.readFileSync(fileID);
          let visitorData = JSON.parse(visitor);
      }
}

