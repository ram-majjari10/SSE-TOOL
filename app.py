from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html", title="Tools")

@app.route("/cgpa")
def cgpa():
    return render_template("cgpa.html", title="CGPA Calculator")

@app.route("/atnds")
def attendance():
    return render_template("attendance.html", title="Attendance Calculator")

if __name__ == "__main__":
    app.run()
