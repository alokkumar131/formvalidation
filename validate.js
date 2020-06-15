function formValidation(oEvent) {
	oEvent = oEvent || window.event;
	var txtField = oEvent.target || oEvent.srcElement;

	var t1ck = true;
    var msg = " ";
    var nameReg = /^[a-zA-Z]{2,10}$/;
    var name = document.getElementById("t1");
	if (!nameReg.test(name.value)) {
        t1ck = false;
        name.classList.add('is-invalid');
	}else{
        name.classList.remove('is-invalid');
    }
    //Checkbox
	if (!document.getElementById("r1").checked && !document.getElementById("r2").checked) {
        t1ck = false;
        document.getElementById('err').classList.remove('hide');
        document.getElementById('err').classList.add('show');
    }else{
        document.getElementById('err').classList.remove('show');
        document.getElementById('err').classList.add('hide');
    }
    //Select menu
	if (document.getElementById("s1").value.length < 3) {
		t1ck = false;
        document.getElementById('selecterr').classList.remove('hide');
        document.getElementById('selecterr').classList.add('show');
	}else{
        document.getElementById('selecterr').classList.remove('show');
        document.getElementById('selecterr').classList.add('hide');
    }
	if (!document.getElementById("c1").checked) {
		t1ck = false;
   
	}

	//alert(msg + t1ck);

	if (t1ck) {
		document.getElementById("btnSignUp").disabled = false;
		msg = msg + " <b> Submit Button is enabled </b>";
	} else {
		document.getElementById("btnSignUp").disabled = true;
		msg = msg + " <b> Submit Button is disabled </b>";
	} // end of if checking status of t1ck variable 
	document.getElementById('my_msg').innerHTML = msg;
}

function resetForm() {
	document.getElementById("btnSignUp").disabled = true;
	var frmMain = document.forms[0];
	frmMain.reset();
}

window.onload = function () {

	var btnSignUp = document.getElementById("btnSignUp");
	var btnReset = document.getElementById("btnReset");

	var t1 = document.getElementById("t1");
	var r1 = document.getElementById("r1");
	var r2 = document.getElementById("r2");
	var s1 = document.getElementById("s1");
	var c1 = document.getElementById("c1");

	var t1ck = false;
    document.getElementById("btnSignUp").disabled = true;
    
	t1.onkeyup = formValidation;
	r1.onclick = formValidation;
	r2.onclick = formValidation;
	s1.onclick = formValidation;
	c1.onclick = formValidation;
	btnReset.onclick = resetForm;
}