window.onload = dataSubmit;

function dataSubmit() {
    document.forms[0].onsubmit = function () {
        if (this.checkValidity()) {
            alert("Data passes initial validation tests");
            document.forms[0].reset();
        }
        else {
            alert("please fill all fields before submitting ")
        }
        return false;
    }
    document.forms[1].onsubmit = function () {
        if (this.checkValidity()) {
            alert("Data passes initial validation tests");
            document.forms[1].reset();
        }
        else {
            alert("please fill all fields before submitting ")
        }
        return false;
    }
    document.forms[2].onsubmit = function () {
        if (this.checkValidity()) {
            alert("Data passes initial validation tests");
            document.forms[2].reset();
        }
        else {
            alert("please fill all fields before submitting ")
        }
        return false;
    }
    document.forms[3].onsubmit = function () {
        if (this.checkValidity()) {
            alert("Data passes initial validation tests");
            document.forms[3].reset();
        }
        else {
            alert("please fill all fields before submitting ")
        }
        return false;
    }
}