const teachers = {
    teacher1: {
      name: "Mr. Edouard Karekezi",
      subjects: ["Mathematics", "Computer science", "Chemistry"],
    },
    teacher2: {
      name: "Ms. Sarah Mukeshimana",
      subjects: ["English", "French", "Geography"],
    },
    teacher3: {
      name: "Mr. Joseph Harerimana",
      subjects: ["History", "French", "Kiswahili"],
    },
    teacher4: {
        name: "Mr. Gerard Munyaneza",
        subjects: ["Biology", "Geography", "History"],
      },
      teacher5: {
        name: "Mr. Remy Ndikuyeze",
        subjects: ["Chemistry", "Physics", "Mathematics"],
      },
      teacher6: {
        name: "Ms. Rosette Umukundwa",
        subjects: ["Kinyarwanda", "English", "Entrepreneurship"],
      },
      teacher7: {
        name: "Ms. Mutimukeye Berardine",
        subjects: ["Literature", "Computer science", "Kinyarwanda"],
      },
      teacher8: {
        name: "Ms. Irasubiza Domitilla",
        subjects: ["General Studies", "History", "Entrepreneurship"],
      },

  };
  
  function showSubjects(teacherId) {
    const modal = document.getElementById("subjects-modal");
    const teacherName = document.getElementById("teacher-name");
    const subjectsList = document.getElementById("subjects-list");
  
    // Set teacher name and subjects
    teacherName.textContent = teachers[teacherId].name;
    subjectsList.innerHTML = teachers[teacherId].subjects
      .map((subject) => `<li>${subject}</li>`)
      .join("");
  
    // Show modal
    modal.style.display = "flex";
  }
  
  function closeModal() {
    const modal = document.getElementById("subjects-modal");
    modal.style.display = "none";
  }
  