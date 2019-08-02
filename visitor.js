let id = 0;


class Visitor {
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
          let fs = require('fs');
          
          id++;

          fs.writeFile(`visitor_ ${id}.json`, fileData, err => {
               if (err) {
                    throw (Error + 'Cannot save file');
               } else {
                    console.log('File was saved');
               }
          });


     }
     load(id) {
          var fs = require("fs")
          if(id <= 0) {
              console.log("File doesn't exist");
          }
          var fileID = "visitor_" + id + ".json";
          var visitor =  fs.readFileSync(fileID);
          let visitorData = JSON.parse(visitor);
      }
}

let visitor = new Visitor("Dee Ram",
     "23",
     "20 / 07 / 2019",
     "09h56",
     "Persistent Cough",
     "Sister B");

let visitor1 = new Visitor(
     "Ram Gee",
     "23",
     "20 / 07 /19",
     "09h56",
     "Persistent cough",
     "Sister B")

let visitor2 = new Visitor(
     "Jay K",
     "23",
     "20 / 07 /19",
     "09h56",
     "Persistent cough",
     "Sister B")

/* visitor.save();
visitor1.save();
visitor2.save(); */

visitor.load(1);
/* visitor1.load(2);
visitor2.load(3); */
