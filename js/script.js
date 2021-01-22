
/**
 * Given a page number and a list of student data, this function builds the correct page displaying all the data from student data.
 * @param  {object} studentData Data object found in data.js containing student info
 * @param  {Number} page The page number to display
 */
function showPage (studentData, page) {
   let startIndex = (page * 9) - 9;
   let endIndex = page * 9;
   let studentList = document.getElementsByClassName('student-list')[0];
   studentList.innerHTML = '';

   for (let i in studentData) {
      if (i >= startIndex && i < endIndex) {
             
         let liContainer = document.createElement('li');
         liContainer.className = 'student-item cf';
         let student = studentData[i];

         liContainer.innerHTML = 
         `<div class="student-details">
            <img class="avatar" src="${student.picture.large}" alt="${student.name.first} ${student.name.last} Profile Picture">
            <h3>${student.name.first} ${student.name.last}</h3>
            <span class="email">${student.email}</span>
         </div>
         <div class="joined-details">
            <span class="date">Joined ${student.registered.date}</span>
         </div>`;

         studentList.appendChild(liContainer);
      }
   }
}

/**
 * Builds a page selector menu at the bottom of the list and calls the showPage function to display the correct page based on which
 * number is clicked.
 * @param  {object} studentData Data object found in data.js containing student info
 */
function pageSelector (studentData) {
   let pageCount = Math.ceil(studentData.length / 9);
   let pageList = document.getElementsByClassName('link-list')[0];
   pageList.innerHTML = '';

   for (let i = 0; i < pageCount; i++) {
      let pageButton = document.createElement('li');
      pageButton.innerHTML = `<button type="button">${i+1}</button>`;
      pageList.appendChild(pageButton);
   }

   document.querySelector('button[type=button]').className = 'active';

   pageList.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
         pageList.querySelector('button[class=active]').className = '';
         e.target.className = 'active';
         let pageNumber = e.target.textContent;
         showPage(studentData, pageNumber);         
      }
   });

}

//Calling the functions. First showPage for initial loading and pageSelector for subsequent page selection.
showPage(data, 1);
pageSelector(data);