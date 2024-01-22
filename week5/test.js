//test
// Object containing your information
const me = {
  name: "Jan Michael Villeza",
  occupation: "Machine Learning Engineer",
  skills: ["JavaScript", "Python", "HTML", "CSS"],
  socialMedia: {
    github: "https://www.github.com/",
    linkedin: "https://www.linkedin.com/in/jan-michael-villeza-3b991b248/",
    instagram: "https://www.instagram.com/jmvlza/",
  },
};

// Function to generate skills list
function generateSkillsList() {
  const skillsContainer = document.getElementById("skills-container");
  const skillsList = document.createElement("ul");
  for (const skill of me.skills) {
    const skillItem = document.createElement("li");
    skillItem.textContent = skill;
    skillsList.appendChild(skillItem);
  }
  skillsContainer.appendChild(skillsList);
}

// Function to generate social media icons
function generateSocialIcons() {
    const iconsContainer = document.querySelector(".social-media");
    for (const platform in me.socialMedia) {
      const iconLink = document.createElement("a");
      iconLink.href = me.socialMedia[platform];
      iconLink.classList.add("fa", `fa-${platform}`);
      iconLink.style.fontSize = "48px";
      iconLink.style.color = "black";
      iconLink.style.marginRight = "10px";
      iconsContainer.appendChild(iconLink);
    }
  }  

// Generate skills and social media icons
generateSkillsList();
generateSocialIcons();
