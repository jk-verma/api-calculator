const caps = {
  category1A: 60,
  category1B: 20,
  category1C: 15,
  category2A: 15,
  category2B: 15,
  category2C: 15,
};

const options = {
  courseIn: ["Post Graduate", "Under Graduate"],
  examModes: ["Examination Duty", "Viva", "Evaluation", "Invigilation"],
  cat2A: {
    "NSS/NCC": 100,
    Counselling: 50,
    Sports: 20,
    Exhibition: 20,
    Competition: 20,
    "Departmental Cultural Activities": 20,
    NGO: 100,
    "Institutional Cultural Activities": 50,
    "Port Visit": 200,
    "Study Tour": 20,
    Workshop: 50,
  },
  cat2B: {
    "Dean/Chairperson/Admission Committee Chairman": 60,
    "Programme Director/Incharge (Certificate Programme)": 45,
    "Programme Director (Full-Time)/Part-Time/Executive": 30,
    "PD for MDP of 1-3 days": 10,
    "PD for MDP of 3-7 days": 12.5,
    "Examination Cell In-charge/Controller of Examination/Admission Committee Member": 45,
    "Committee Member/Warden": 15,
    "Asst. Warden": 7.5,
    "Board Member": 30,
    "GD/PI/VIVA": 2,
    "Academic Council Coordinator": 15,
    "BoM Member": 15,
  },
  cat2C: {
    "Seminar / Workshop / Symposia": 20,
    Conferences: 20,
    "Faculty Development Course": 20,
    "Short Term Training Courses": 20,
    "Membership of Association (National Level)": 30,
    "Membership of Association (State Level)": 20,
    "General Article Publications": 20,
    "General Awareness Activity": 20,
    "Community work": 10,
    Editorial: 100,
    "Committee Member": 50,
    "Committee Chair": 100,
  },
  cat3A: {
    "Papers in ABDC with A or A*": {
      "Single Author": 45,
      "First or Corresponding Author/Supervisor/Mentor": 31.5,
      "Co-Author": 13.5,
    },
    "ABDC with B": {
      "Single Author": 40,
      "First or Corresponding Author/Supervisor/Mentor": 28,
      "Co-Author": 12,
    },
    "ABDC with C / Scopus / UGC": {
      "Single Author": 35,
      "First or Corresponding Author/Supervisor/Mentor": 24.5,
      "Co-Author": 10.5,
    },
    "Any other / Impact Factor less than 1": {
      "Single Author": 30,
      "First or Corresponding Author/Supervisor/Mentor": 21,
      "Co-Author": 9,
    },
    "Papers published in Refereed Journal (Without Impact Factor)": {
      "Single Author": 25,
      "First or Corresponding Author/Supervisor/Mentor": 17.5,
      "Co-Author": 7.5,
    },
    "Paper in Other Reputed Journal (Non-Refereed Journal)": {
      "Single Author": 10,
      "First or Corresponding Author/Supervisor/Mentor": 7,
      "Co-Author": 3,
    },
  },
  cat3B: {
    "Award and Fellowship": {
      "International Award / Fellowship from Academic Bodies/Associations": 15,
      "National Award / Fellowship from Academic Bodies/Associations": 10,
      "State / University Award/Fellowship from Academic Bodies/Associations": 5,
    },
    "Invited Lecture": {
      International: 7,
      National: 5,
      "Regional/State/Local": 3,
    },
    "Papers Presented in Conferences/Seminars/Workshops": {
      International: 5,
      National: 3,
      "Regional/State": 2,
    },
    "Chapters in Books": {
      "Coauthor (International)": 3,
      "Coauthor (National)": 1.5,
      "First or Corresponding Author/Supervisor/Mentor (International)": 7,
      "First or Corresponding Author/Supervisor/Mentor (National)": 3.5,
      "Single Author (International)": 10,
      "Single Author (National)": 5,
    },
    "Subject Books Published by National level Publisher/State with ISBN/ISSN Number": {
      Coauthor: 6,
      "First or Corresponding Author/Supervisor/Mentor": 14,
      "Single Author": 20,
    },
    "Subject Books published by Other local publishers, with ISBN/ISSN number": {
      Coauthor: 4.5,
      "First or Corresponding Author/Supervisor/Mentor": 10.5,
      "Single Author": 15,
    },
    "Text/Reference Books published by an International Publisher with ISBN/ISSN number": {
      "Single Author": 30,
      "First or Corresponding Author/Supervisor/Mentor": 21,
      Coauthor: 9,
    },
    "Research Guidance": {
      "M.Phil": 5,
      "Ph.D. Awarded": 15,
      "Ph.D. thesis submitted": 10,
      "MBA/Executive MBA / Part-Time / Weekend": 3,
    },
    "Consultancy Projects": {
      "Sci./Engineering/Agri./Medical/Veterinary (Min 10.0 lakhs)": 10,
      "Lang./Humanities/Arts/Social Sci./Mgmt. (Min 2.0 lakhs)": 10,
    },
    "Project Outcomes / Outputs": {
      "Major Policy Document of Government Bodies at International level (AH/SS)": 30,
      "Major Policy Document of Government Bodies at Central/State level (AH/SS)": 20,
      "Major Policy Document of Government Bodies at State level (AH/SS)": 10,
      "Major Policy Document of Government Bodies at Local Bodies (AH/SS)": 5,
      "Patent/Technology transfer/Product/Process at International level (Science)": 30,
      "Patent/Technology transfer/Product/Process at Central/State level (Science)": 20,
    },
    "Sponsored Research Projects": {
      "Languages/Humanities/Arts/Social Sci./Lib./Mgmt Project between 3-5 lakhs": 15,
      "Sciences/Engineering/Agri./Medical/Veterinary Project between 5-30 lakhs": 15,
      "Sciences/Engineering/Agriculture/Medical/Veterinary Project >30 lakhs": 20,
      "Languages/Humanities/Arts/Social Sci./Lib./Mgmt Project >5 lakhs": 20,
      "Languages/Humanities/Arts/Social Sci./Lib./Mgmt Project between 1-3 lakhs": 10,
      "Sciences/Engineering/Agriculture/Medical/Veterinary Project between 1-5 lakhs": 10,
    },
  },
};

const state = {
  teachingRows: [],
  examRows: [],
  cat2ARows: [],
  cat2BRows: [],
  cat2CRows: [],
  cat3ARows: [],
  cat3BRows: [],
};

const dom = {
  academicYear: document.querySelector("#academicYear"),
  teachingBody: document.querySelector("#teachingBody"),
  examBody: document.querySelector("#examBody"),
  innovativeBody: document.querySelector("#innovativeBody"),
  cat2ABody: document.querySelector("#cat2ABody"),
  cat2BBody: document.querySelector("#cat2BBody"),
  cat2CBody: document.querySelector("#cat2CBody"),
  cat3ABody: document.querySelector("#cat3ABody"),
  cat3BBody: document.querySelector("#cat3BBody"),
};

const uid = () => Math.random().toString(36).slice(2, 10);

function currentYear() {
  return dom.academicYear.value;
}

function round(value) {
  return Number((value || 0).toFixed(2));
}

function format(value) {
  return round(value).toFixed(2);
}

function parseNumber(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function createOptionList(values, selectedValue = "") {
  return values
    .map((value) => `<option value="${escapeHtml(value)}" ${value === selectedValue ? "selected" : ""}>${escapeHtml(value)}</option>`)
    .join("");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function addRow(key, value) {
  state[key].push({ id: uid(), ...value });
}

function updateRow(key, id, patch) {
  const row = state[key].find((item) => item.id === id);
  if (!row) return;
  Object.assign(row, patch);
  render();
}

function removeRow(key, id) {
  state[key] = state[key].filter((item) => item.id !== id);
  render();
}

function teachingDerived(row) {
  const hours = parseNumber(row.courseHours);
  if (!row.courseName || !row.courseIn || !hours) {
    return { totalCourseHours: 0, apiScore: 0, innovativeHours: 0 };
  }
  const pgHours = Math.round((hours * 7) / 3);
  const totalCourseHours = row.courseIn === "Under Graduate" ? pgHours / 2 : pgHours;
  return {
    totalCourseHours,
    apiScore: totalCourseHours / 10,
    innovativeHours: hours / 3,
  };
}

function examDerived(row) {
  return parseNumber(row.hours) / 10;
}

function renderTeaching() {
  dom.teachingBody.innerHTML = state.teachingRows
    .map((row, index) => {
      const derived = teachingDerived(row);
      return `
        <tr>
          <td>${index + 1}</td>
          <td><input data-key="teachingRows" data-id="${row.id}" data-field="courseName" value="${escapeHtml(row.courseName || "")}" placeholder="Course name"></td>
          <td>
            <select data-key="teachingRows" data-id="${row.id}" data-field="courseIn">
              <option value="">Select</option>
              ${createOptionList(options.courseIn, row.courseIn)}
            </select>
          </td>
          <td><input type="number" min="0" step="0.01" data-key="teachingRows" data-id="${row.id}" data-field="courseHours" value="${row.courseHours || ""}" placeholder="Hours"></td>
          <td class="readonly">${derived.totalCourseHours || ""}</td>
          <td class="readonly">${derived.apiScore ? format(derived.apiScore) : ""}</td>
          <td class="readonly">${currentYear()}</td>
          <td><button type="button" class="delete-button" data-remove-key="teachingRows" data-remove-id="${row.id}">Remove</button></td>
        </tr>
      `;
    })
    .join("");

  const totalHours = state.teachingRows.reduce((sum, row) => sum + parseNumber(row.courseHours), 0);
  const totalCourseHours = state.teachingRows.reduce((sum, row) => sum + teachingDerived(row).totalCourseHours, 0);
  const api = state.teachingRows.reduce((sum, row) => sum + teachingDerived(row).apiScore, 0);

  document.querySelector("#teachingHours").textContent = round(totalHours);
  document.querySelector("#teachingCourseHours").textContent = round(totalCourseHours);
  document.querySelector("#teachingApi").textContent = format(api);
  document.querySelector("#teachingApiCapped").textContent = format(Math.min(api, caps.category1A));

  return { api, capped: Math.min(api, caps.category1A) };
}

function renderExam(courseCount) {
  const qpsHours = courseCount * 10;
  const aseHours = courseCount * 20;
  const qpsScore = qpsHours / 10;
  const aseScore = aseHours / 10;

  dom.examBody.innerHTML = state.examRows
    .map((row, index) => `
      <tr>
        <td>${index + 1}</td>
        <td><input data-key="examRows" data-id="${row.id}" data-field="detail" value="${escapeHtml(row.detail || "")}" placeholder="Course or duty detail"></td>
        <td>
          <select data-key="examRows" data-id="${row.id}" data-field="activity">
            <option value="">Select</option>
            ${createOptionList(options.examModes, row.activity)}
          </select>
        </td>
        <td><input type="number" min="0" step="0.01" data-key="examRows" data-id="${row.id}" data-field="hours" value="${row.hours || ""}" placeholder="Hours"></td>
        <td class="readonly">${row.activity && row.hours ? format(examDerived(row)) : ""}</td>
        <td class="readonly">${currentYear()}</td>
        <td><button type="button" class="delete-button" data-remove-key="examRows" data-remove-id="${row.id}">Remove</button></td>
      </tr>
    `)
    .join("");

  const manualHours = state.examRows.reduce((sum, row) => sum + parseNumber(row.hours), 0);
  const manualScore = state.examRows.reduce((sum, row) => sum + examDerived(row), 0);
  const totalHours = qpsHours + aseHours + manualHours;
  const api = qpsScore + aseScore + manualScore;

  document.querySelector("#qpsHours").textContent = round(qpsHours);
  document.querySelector("#qpsScore").textContent = format(qpsScore);
  document.querySelector("#aseHours").textContent = round(aseHours);
  document.querySelector("#aseScore").textContent = format(aseScore);
  document.querySelector("#examHours").textContent = round(totalHours);
  document.querySelector("#examApi").textContent = format(api);
  document.querySelector("#examApiCapped").textContent = format(Math.min(api, caps.category1B));

  return { api, capped: Math.min(api, caps.category1B) };
}

function renderInnovative() {
  dom.innovativeBody.innerHTML = state.teachingRows
    .map((row, index) => {
      const derived = teachingDerived(row);
      return `
        <tr>
          <td>${index + 1}</td>
          <td>${escapeHtml(row.courseName || "")}</td>
          <td>${escapeHtml(row.courseIn || "")}</td>
          <td>${row.courseHours || ""}</td>
          <td>${derived.innovativeHours ? format(derived.innovativeHours) : ""}</td>
          <td>${currentYear()}</td>
        </tr>
      `;
    })
    .join("");

  const innovativeHours = state.teachingRows.reduce((sum, row) => sum + teachingDerived(row).innovativeHours, 0);
  const api = innovativeHours / 10;

  document.querySelector("#innovativeHours").textContent = format(innovativeHours);
  document.querySelector("#innovativeApi").textContent = format(api);
  document.querySelector("#innovativeApiCapped").textContent = format(Math.min(api, caps.category1C));

  return { api, capped: Math.min(api, caps.category1C) };
}

function renderLookupCategory({ key, body, scoreId, cappedId, scoreMap, cap, pointsFn, includeCount }) {
  body.innerHTML = state[key]
    .map((row, index) => {
      const baseScore = row.type ? scoreMap[row.type] || 0 : 0;
      const score = includeCount ? parseNumber(row.count) * baseScore : baseScore;
      const points = pointsFn(score);
      const countCols = includeCount
        ? `
          <td><input type="number" min="0" step="0.01" data-key="${key}" data-id="${row.id}" data-field="count" value="${row.count || ""}" placeholder="Count"></td>
          <td class="readonly">${score ? format(score) : ""}</td>
          <td class="readonly">${points ? format(points) : ""}</td>
        `
        : `
          <td class="readonly">${baseScore || ""}</td>
          <td class="readonly">${points ? format(points) : ""}</td>
        `;

      return `
        <tr>
          <td>${index + 1}</td>
          <td><input data-key="${key}" data-id="${row.id}" data-field="detail" value="${escapeHtml(row.detail || "")}" placeholder="Supporting details"></td>
          <td>
            <select data-key="${key}" data-id="${row.id}" data-field="type">
              <option value="">Select</option>
              ${createOptionList(Object.keys(scoreMap), row.type)}
            </select>
          </td>
          ${countCols}
          <td class="readonly">${currentYear()}</td>
          <td><button type="button" class="delete-button" data-remove-key="${key}" data-remove-id="${row.id}">Remove</button></td>
        </tr>
      `;
    })
    .join("");

  const total = state[key].reduce((sum, row) => {
    const score = row.type ? scoreMap[row.type] || 0 : 0;
    const finalScore = includeCount ? parseNumber(row.count) * score : score;
    return sum + pointsFn(finalScore);
  }, 0);

  document.querySelector(scoreId).textContent = format(total);
  document.querySelector(cappedId).textContent = format(Math.min(total, cap));
  return { total, capped: Math.min(total, cap) };
}

function renderCat3A() {
  dom.cat3ABody.innerHTML = state.cat3ARows
    .map((row, index) => {
      const authorOptions = row.classification ? Object.keys(options.cat3A[row.classification]) : [];
      const points = row.classification && row.authorType ? options.cat3A[row.classification][row.authorType] || 0 : 0;

      return `
        <tr>
          <td>${index + 1}</td>
          <td><input data-key="cat3ARows" data-id="${row.id}" data-field="title" value="${escapeHtml(row.title || "")}" placeholder="Paper title"></td>
          <td><input data-key="cat3ARows" data-id="${row.id}" data-field="link" value="${escapeHtml(row.link || "")}" placeholder="Link"></td>
          <td><input data-key="cat3ARows" data-id="${row.id}" data-field="journal" value="${escapeHtml(row.journal || "")}" placeholder="Journal"></td>
          <td>
            <select data-key="cat3ARows" data-id="${row.id}" data-field="classification">
              <option value="">Select</option>
              ${createOptionList(Object.keys(options.cat3A), row.classification)}
            </select>
          </td>
          <td>
            <select data-key="cat3ARows" data-id="${row.id}" data-field="authorType">
              <option value="">Select</option>
              ${createOptionList(authorOptions, row.authorType)}
            </select>
          </td>
          <td class="readonly">${points ? format(points) : ""}</td>
          <td class="readonly">${currentYear()}</td>
          <td><button type="button" class="delete-button" data-remove-key="cat3ARows" data-remove-id="${row.id}">Remove</button></td>
        </tr>
      `;
    })
    .join("");

  const total = state.cat3ARows.reduce((sum, row) => {
    if (!row.classification || !row.authorType) return sum;
    return sum + (options.cat3A[row.classification][row.authorType] || 0);
  }, 0);

  document.querySelector("#cat3ATotal").textContent = format(total);
  return total;
}

function renderCat3B() {
  dom.cat3BBody.innerHTML = state.cat3BRows
    .map((row, index) => {
      const typeMap = row.category ? options.cat3B[row.category] : {};
      const points = row.category && row.type ? typeMap[row.type] || 0 : 0;

      return `
        <tr>
          <td>${index + 1}</td>
          <td><input data-key="cat3BRows" data-id="${row.id}" data-field="detail" value="${escapeHtml(row.detail || "")}" placeholder="Supporting information"></td>
          <td>
            <select data-key="cat3BRows" data-id="${row.id}" data-field="category">
              <option value="">Select</option>
              ${createOptionList(Object.keys(options.cat3B), row.category)}
            </select>
          </td>
          <td>
            <select data-key="cat3BRows" data-id="${row.id}" data-field="type">
              <option value="">Select</option>
              ${createOptionList(Object.keys(typeMap), row.type)}
            </select>
          </td>
          <td class="readonly">${points ? format(points) : ""}</td>
          <td class="readonly">${currentYear()}</td>
          <td><button type="button" class="delete-button" data-remove-key="cat3BRows" data-remove-id="${row.id}">Remove</button></td>
        </tr>
      `;
    })
    .join("");

  const total = state.cat3BRows.reduce((sum, row) => {
    if (!row.category || !row.type) return sum;
    return sum + (options.cat3B[row.category][row.type] || 0);
  }, 0);

  document.querySelector("#cat3BTotal").textContent = format(total);
  return total;
}

function render() {
  const teaching = renderTeaching();
  const validTeachingCount = state.teachingRows.filter((row) => row.courseName && row.courseIn && parseNumber(row.courseHours) > 0).length;
  const exam = renderExam(validTeachingCount);
  const innovative = renderInnovative();

  const cat2A = renderLookupCategory({
    key: "cat2ARows",
    body: dom.cat2ABody,
    scoreId: "#cat2ATotal",
    cappedId: "#cat2ACapped",
    scoreMap: options.cat2A,
    cap: caps.category2A,
    pointsFn: (score) => score / 10,
    includeCount: false,
  });

  const cat2B = renderLookupCategory({
    key: "cat2BRows",
    body: dom.cat2BBody,
    scoreId: "#cat2BTotal",
    cappedId: "#cat2BCapped",
    scoreMap: options.cat2B,
    cap: caps.category2B,
    pointsFn: (score) => score / 10,
    includeCount: true,
  });

  const cat2C = renderLookupCategory({
    key: "cat2CRows",
    body: dom.cat2CBody,
    scoreId: "#cat2CTotal",
    cappedId: "#cat2CCapped",
    scoreMap: options.cat2C,
    cap: caps.category2C,
    pointsFn: (score) => score / 10,
    includeCount: false,
  });

  const cat3A = renderCat3A();
  const cat3B = renderCat3B();

  const category1Grand = teaching.capped + exam.capped + innovative.capped;
  const category2Grand = cat2A.capped + cat2B.capped + cat2C.capped;
  const category3Grand = cat3A + cat3B;

  document.querySelector("#category1Grand").textContent = format(category1Grand);
  document.querySelector("#category2Grand").textContent = format(category2Grand);
  document.querySelector("#category3Grand").textContent = format(category3Grand);
  document.querySelector("#overallGrand").textContent = format(category1Grand + category2Grand + category3Grand);
}

function seed() {
  addRow("teachingRows", { courseName: "", courseIn: "", courseHours: "" });
  addRow("examRows", { detail: "", activity: "", hours: "" });
  addRow("cat2ARows", { detail: "", type: "" });
  addRow("cat2BRows", { detail: "", type: "", count: "" });
  addRow("cat2CRows", { detail: "", type: "" });
  addRow("cat3ARows", { title: "", link: "", journal: "", classification: "", authorType: "" });
  addRow("cat3BRows", { detail: "", category: "", type: "" });
}

document.querySelector("#addTeachingRow").addEventListener("click", () => { addRow("teachingRows", { courseName: "", courseIn: "", courseHours: "" }); render(); });
document.querySelector("#addExamRow").addEventListener("click", () => { addRow("examRows", { detail: "", activity: "", hours: "" }); render(); });
document.querySelector("#addCat2ARow").addEventListener("click", () => { addRow("cat2ARows", { detail: "", type: "" }); render(); });
document.querySelector("#addCat2BRow").addEventListener("click", () => { addRow("cat2BRows", { detail: "", type: "", count: "" }); render(); });
document.querySelector("#addCat2CRow").addEventListener("click", () => { addRow("cat2CRows", { detail: "", type: "" }); render(); });
document.querySelector("#addCat3ARow").addEventListener("click", () => { addRow("cat3ARows", { title: "", link: "", journal: "", classification: "", authorType: "" }); render(); });
document.querySelector("#addCat3BRow").addEventListener("click", () => { addRow("cat3BRows", { detail: "", category: "", type: "" }); render(); });

document.body.addEventListener("input", (event) => {
  const target = event.target;
  if (!target.matches("[data-key][data-id][data-field]")) return;
  const { key, id, field } = target.dataset;
  updateRow(key, id, { [field]: target.value });
});

document.body.addEventListener("change", (event) => {
  const target = event.target;
  if (target.matches("[data-key][data-id][data-field]")) {
    const { key, id, field } = target.dataset;
    const patch = { [field]: target.value };
    if (field === "classification") patch.authorType = "";
    if (field === "category") patch.type = "";
    updateRow(key, id, patch);
    return;
  }
  if (target === dom.academicYear) render();
});

document.body.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-key][data-remove-id]");
  if (!button) return;
  removeRow(button.dataset.removeKey, button.dataset.removeId);
});

seed();
render();
