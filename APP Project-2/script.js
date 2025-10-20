document.getElementById("skillSelect").addEventListener("change", function () {
    const selected = this.value;
    const customSkill = document.getElementById("customSkill");
    customSkill.style.display = selected === "Other" ? "block" : "none";
});

function findJobs() {
    const selectedSkill = document.getElementById("skillSelect").value;
    const otherSkill = document.getElementById("otherSkillInput").value.trim();
    const jobResults = document.getElementById("jobResults");

    jobResults.innerHTML = "";

    let skill = selectedSkill === "Other" ? otherSkill : selectedSkill;

    if (!skill) {
        alert("Please select or enter a skill!");
        return;
    }

    const availableSkills = [
        "HTML", "CSS", "JavaScript", "Python", "Java",
        "C", "C++", "MongoDB", "SQL", "Angular", "Django", "Ruby"
    ];

    if (!availableSkills.includes(skill)) {
        jobResults.innerHTML = `<p style="color:red;font-weight:bold;">No jobs available for "${skill}".</p>`;
        return;
    }

    const jobs = [
        {
            title: "Frontend Developer",
            company: "Creative Web Co.",
            skills: ["HTML", "CSS", "JavaScript", "React"],
            image: "images/job1.png"
        },
        {
            title: "Backend Developer",
            company: "Techify Solutions",
            skills: ["Python", "Django", "SQL", "MongoDB"],
            image: "images/job2.png"
        },
        {
            title: "Full Stack Developer",
            company: "InnovateX Labs",
            skills: ["Java", "Angular", "MongoDB", "C++"],
            image: "images/job3.png"
        }
    ];

    let matchedJobs = jobs.filter(job =>
        job.skills.some(s => s.toLowerCase() === skill.toLowerCase())
    );

    if (matchedJobs.length === 0) {
        jobResults.innerHTML = `<p style="color:red;font-weight:bold;">No jobs available for "${skill}".</p>`;
    } else {
        matchedJobs.forEach(job => {
            const jobCard = `
                <div class="job-card">
                    <img src="${job.image}" alt="Job">
                    <h3>${job.title}</h3>
                    <p>${job.company}</p>
                    <p><strong>Required Skills:</strong> ${job.skills.join(", ")}</p>
                    <button>Apply</button>
                </div>
            `;
            jobResults.innerHTML += jobCard;
        });
    }
}
