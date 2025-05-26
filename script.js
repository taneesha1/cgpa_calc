function generateFields() {
    const count = parseInt(document.getElementById('subject-count').value);
    const container = document.getElementById('main-cont');

    container.innerHTML = '';
    if (!count || count < 1) return;

    for (let i = 1; i <= count; i++) {
        container.innerHTML += `
            <h4 style=" margin-bottom:2vh">Subject ${i}</h4>
            <div class="subject-container">
            
               <div class=credit-container>
               <div> Credit: </div>
               <div> <input type="number" class="credit" data-id="${i}" oninput="calculateSGPA()"><br></div>
               </div>

                <div class=marks-container>
               <div> Marks: </div>
               <div><input type="number" class="marks" data-id="${i}" oninput="calculateSGPA()"><br><br>
               </div>
               </div>

            </div>
        `;
    }
}

function getGradePoint(marks) {
    if (marks >= 93) return 10;
    if (marks >= 85) return 9;
    if (marks >= 77) return 8;
    if (marks >= 69) return 7;
    if (marks >= 61) return 6;
    if (marks >= 53) return 5;
    if (marks >= 45) return 5;
    return 0;
}

function calculateSGPA() {
    const credits = document.querySelectorAll('.credit');
    const marks = document.querySelectorAll('.marks');

    let totalCredits = 0;
    let totalPoints = 0;

    for (let i = 0; i < credits.length; i++) {
        const credit = parseFloat(credits[i].value);
        const mark = parseFloat(marks[i].value);
        if (!isNaN(credit) && !isNaN(mark)) {
            const grade = getGradePoint(mark);
            totalCredits += credit;
            totalPoints += credit * grade;
        }
    }

    if (totalCredits > 0) {
        const sgpa = (totalPoints / totalCredits).toFixed(2);
        document.getElementById('output').innerText = `Your SGPA is: ${sgpa}`;

    } else {
        document.getElementById('output').innerText = '';
    }
}



function generateFields2() {
    const count = parseInt(document.getElementById('sem-count').value);
    const container = document.getElementById('main-cont2');

    container.innerHTML = '';
    if (!count || count < 1) return;

    for (let i = 1; i <= count; i++) {
        container.innerHTML += `
            <h4 style=" margin-bottom:2vh">Semester ${i}</h4>
            <div class="sem-container">
            
               <div class=credit-container>
               <div> Credit: </div>
               <div> <input type="number" class="credit-per-sem" data-id="${i}" oninput="calculateCGPA()"><br></div>
               </div>

                <div class=sg-container>
               <div> SGPA: </div>
               <div><input type="number" class="sgpa-per-sem" data-id="${i}" oninput="calculateCGPA()"><br><br>
               </div>
               </div>

            </div>
        `;
    }
}


function calculateCGPA() {
    const credits = document.querySelectorAll('.credit-per-sem');
    const sgpas = document.querySelectorAll('.sgpa-per-sem');

    let totalCredits = 0;
    let total_sg_points = 0;

    for (let i = 0; i < credits.length; i++) {
        const credit = parseFloat(credits[i].value);
        const sgpa = parseFloat(sgpas[i].value);

        if (!isNaN(credit) && !isNaN(sgpa)) {
            totalCredits += credit;
            total_sg_points += credit * sgpa;
        }
    }

    if (totalCredits > 0) {
        const cgpa = (total_sg_points / totalCredits).toFixed(2);
        document.getElementById('output2').innerText = `Your CGPA is: ${cgpa}`;

    } else {
        document.getElementById('output2').innerText = '';
    }
}