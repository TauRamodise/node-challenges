let id = 1;

class Visitor {
     constructor(fullName, age, visitDate, visitTime, comments, assistedBy) {
          console.log('New patient file has been created');
          this.fullName = fullName;
          this.age = age;
          this.visitDate = visitDate;
          this.visitTime = visitTime;
          this.comments = comments;
          this.assistedBy = assistedBy;

     }
     counter(id) {
          while (id) {
               return id++
          }
     }

     save() {
          let count = this.counter;
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


          fs.writeFile(`visitor_${count}.json`, fileData, err => {
               if (err) {
                    throw (Error + 'Cannot save file');
               } else {
                    console.log('File was saved');
               }
          });
     }
}

let visitor = new Visitor("Dee Ram",
     "23",
     "20 / 07 / 2019",
     "09h56",
     "Persistent Cough",
     "Sister B");

