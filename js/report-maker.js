function reportMaker() {
    document.getElementById("tdName").innerHTML = document.getElementById("txtFullname").value;
    document.getElementById("tdAge").innerHTML = document.getElementById("txtAge").value;
    document.getElementById("tdGender").innerHTML = document.getElementById("chkGender").value;
    document.getElementById("tdSkillHtml").innerHTML = document.getElementById("skillHtml").value;
    document.getElementById("tdSkillCss").innerHTML = document.getElementById("skillCss").value;
    document.getElementById("tdSkillJs").innerHTML = document.getElementById("skillJs").value;
}