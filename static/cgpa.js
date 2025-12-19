function calculateCGPA() {

    const grades = {
        s: 10,
        a: 9,
        b: 8,
        c: 7,
        d: 6,
        e: 5
    };

    let totalPoints = 0;
    let totalSubjects = 0;

    for (let g in grades) {
        let count = parseInt(document.getElementById(g).value) || 0;
        totalPoints += count * grades[g];
        totalSubjects += count;
    }

    if (totalSubjects === 0) {
        document.getElementById("cgpa-result").innerText = "0.00";
        document.getElementById("cgpa-msg").innerText = "Enter at least one grade";
        return;
    }

    let cgpa = (totalPoints / totalSubjects).toFixed(2);
    document.getElementById("cgpa-result").innerText = cgpa;

    let msg = "Good effort 👍";

    if (cgpa >= 9) msg = "🔥 Excellent performance!";
    else if (cgpa >= 8) msg = "You need more S/A grades for 9+ CGPA";
    else msg = "Focus on improving higher grades";

    document.getElementById("cgpa-msg").innerText = msg;
}
