// ############################## Typed.js ##############################

document.getElementsByClassName("type").innerHTML;
var typed = new Typed(".type", {
  strings: [
    "",
    "Your Website Name",
    "",
    "Your Website URL",
    "",
    "Fast",
    "",
    "Secure",
    "",
    "Anytime!",
  ],
  typeSpeed: 0,
  backSpeed: 0,
  smartBackspace: true,
  loop: true,
});
// ############################## Typed.js ##############################

// ############################## SiteList ##############################
var siteNameInput = document.getElementById("siteNameInput");
var siteUrlInput = document.getElementById("siteUrlInput");

var siteList = [];

if (localStorage.getItem("sites") != null) {
  siteList = JSON.parse(localStorage.getItem("sites"));
  displayData();
}

// ############################## SiteList ##############################

// ############################## AddSite ##############################

function addSite() {
  if (validationName() == true && validationUrl() == true) {
    var site = {
      name: siteNameInput.value,
      url: siteUrlInput.value,
    };

    siteList.push(site);

    localStorage.setItem("sites", JSON.stringify(siteList));

    successBox.classList.remove("d-none");
  } else {
    messageLayout.classList.remove("d-none");
  }

  displayData();

  clearInput();

  siteNameInput.classList.remove("is-valid");

  siteUrlInput.classList.remove("is-valid");
}

// ############################## AddSite ##############################

// ############################## ClearInputs ##############################

function clearInput() {
  siteNameInput.value = "";
  siteUrlInput.value = "";
}

// ############################## ClearInputs ##############################

// ############################## DisplayData ##############################
function displayData() {
  var dataBox = "";

  for (var i = 0; i < siteList.length; i++) {
    dataBox += `<tr>
        <td>${i + 1}</td>
        <td>${siteList[i].name}</td>
        <td>
        
        <a href="${siteList[i].url}" target="-blank">
        <button onclick="${
          siteList[i].url
        }" class="btn btn-warning btn-sm">Visit
        </button>
        </a>
        
        </td>
        <td>
        <button onclick="deleteSite( ${i} )" class="btn btn-danger btn-sm">Delete</button>
        </td>
    </tr>`;
  }

  document.getElementById("tableBody").innerHTML = dataBox;
}

// ############################## DisplayData ##############################

// ############################## DeleteSite ##############################

function deleteSite(index) {
  siteList.splice(index, 1);

  localStorage.setItem("sites", JSON.stringify(siteList));

  displayData();
}

// ############################## DeleteSite ##############################

// ############################## Validation ##############################

var nameMessage = document.getElementById("nameMessage");

function validationName() {
  var text = siteNameInput.value;
  var regexName = /^([A-Z]|[a-z]){3,}$/;

  if (regexName.test(text)) {
    siteNameInput.classList.add("is-valid");
    siteNameInput.classList.remove("is-invalid");

    nameMessage.classList.add("d-none");

    return true;
  } else {
    siteNameInput.classList.add("is-invalid");
    siteNameInput.classList.remove("is-valid");

    nameMessage.classList.remove("d-none");

    return false;
  }
}

function validationUrl() {
  var siteurl = siteUrlInput.value;
  var regexUrl =
    /^[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/gi;

  if (regexUrl.test(siteurl)) {
    siteUrlInput.classList.add("is-valid");
    siteUrlInput.classList.remove("is-invalid");

    urlMessage.classList.add("d-none");

    return true;
  } else {
    siteUrlInput.classList.add("is-invalid");
    siteUrlInput.classList.remove("is-valid");

    urlMessage.classList.remove("d-none");

    return false;
  }
}

// ############################## Validation ##############################

// ############################## CloseBox ##############################

function closeBox() {
  messageLayout.classList.add("d-none");
  successBox.classList.add("d-none");
}

// ############################## CloseBox ##############################