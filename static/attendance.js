function calculateAttendance() {

    const min = parseFloat(document.getElementById("min-percent").value);
    const present = parseInt(document.getElementById("classes-present").value);
    const total = parseInt(document.getElementById("classes-total").value);

    const output = document.getElementById("attendance-result");

    // Validation
    if (
        isNaN(min) || isNaN(present) || isNaN(total) ||
        min <= 0 || min >= 100 ||
        total <= 0 || present < 0 || present > total
    ) {
        output.innerHTML = "❌ Please enter valid inputs";
        return;
    }

    const currentPercent = (present / total) * 100;

    let message = `📊 Current Attendance: <strong>${currentPercent.toFixed(2)}%</strong><br><br>`;

    if (currentPercent >= min) {

        // Can bunk
        const bunk = Math.floor(
            (present * 100 - min * total) / min
        );

        message += `✅ You are safe.<br>You can bunk <strong>${bunk}</strong> more classes.`;

    } else {

        // Must attend (correct future logic)
        const attend = Math.ceil(
            (min * total - 100 * present) / (100 - min)
        );

        message += `⚠️ Attendance low.<br>
        You must attend <strong>${attend}</strong> more classes to reach ${min}%.`;
    }

    output.innerHTML = message;
}
