// Copyright (c) 2024, jaya and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Sales order hilltop", {
// 	refresh(frm) {

// 	},
// });



//Performing Add operation of two different feilds and set it into total_amount field

frappe.ui.form.on("Sales order hilltop",{
	validate: function(frm) {

	var number1 = frm.doc.amount; 
    var number2 = frm.doc.input_igst_amount;

    var totalSum = number1 + number2;

     frm.set_value('total_amount',totalSum);

	}
})

//Trigger for email validation

frappe.ui.form.on('Sales order hilltop', {
    validate: function(frm) {
        var email = frm.doc.from_email; 
        if (!containsAtSymbol(email)) {
            frappe.msgprint(__("Please enter a valid email address"));
            frappe.validated = false;
        }
    }
});



function containsAtSymbol(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|edu|gov|mil|biz|info|in)$/.test(email);
}


//Converting a Number into Words

frappe.ui.form.on('Sales order hilltop', {
    total_amount: function(frm) {
        var number = frm.doc.total_amount; // Get the number field value
        
        var words = convertNumberToWords(number);
        frm.set_value('total_amount_in_words',words);
    }
});


function convertNumberToWords(amount) {
    var words = new Array();
    words[0] = '';
    words[1] = 'One';
    words[2] = 'Two';
    words[3] = 'Three';
    words[4] = 'Four';
    words[5] = 'Five';
    words[6] = 'Six';
    words[7] = 'Seven';
    words[8] = 'Eight';
    words[9] = 'Nine';
    words[10] = 'Ten';
    words[11] = 'Eleven';
    words[12] = 'Twelve';
    words[13] = 'Thirteen';
    words[14] = 'Fourteen';
    words[15] = 'Fifteen';
    words[16] = 'Sixteen';
    words[17] = 'Seventeen';
    words[18] = 'Eighteen';
    words[19] = 'Nineteen';
    words[20] = 'Twenty';
    words[30] = 'Thirty';
    words[40] = 'Forty';
    words[50] = 'Fifty';
    words[60] = 'Sixty';
    words[70] = 'Seventy';
    words[80] = 'Eighty';
    words[90] = 'Ninety';
    amount = amount.toString();
    var atemp = amount.split(".");
    var number = atemp[0].split(",").join("");
    var n_length = number.length;
    var words_string = "";
    if (n_length <= 9) {
        var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
        var received_n_array = new Array();
        for (var i = 0; i < n_length; i++) {
            received_n_array[i] = number.substr(i, 1);
        }
        for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
            n_array[i] = received_n_array[j];
        }
        for (var i = 0, j = 1; i < 9; i++, j++) {
            if (i == 0 || i == 2 || i == 4 || i == 7) {
                if (n_array[i] == 1) {
                    n_array[j] = 10 + parseInt(n_array[j]);
                    n_array[i] = 0;
                }
            }
        }
        value = "";
        for (var i = 0; i < 9; i++) {
            if (i == 0 || i == 2 || i == 4 || i == 7) {
                value = n_array[i] * 10;
            } else {
                value = n_array[i];
            }
            if (value != 0) {
                words_string += words[value] + " ";
            }
            if ((i == 1 && value != 0) || (i == 0 && value != 0 && n_array[i + 1] == 0)) {
                words_string += "Crores ";
            }
            if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array[i + 1] == 0)) {
                words_string += "Lakhs ";
            }
            if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array[i + 1] == 0)) {
                words_string += "Thousand ";
            }
            if (i == 6 && value != 0 && (n_array[i + 1] != 0 && n_array[i + 2] != 0)) {
                words_string += "Hundred and ";
            } else if (i == 6 && value != 0) {
                words_string += "Hundred ";
            }
        }
        words_string = words_string.split("  ").join(" ");
    }
    if (atemp.length === 2) {
        var decimalPart = atemp[1];
        var decimalWords = "";

        if (decimalPart.length === 1) {
            decimalWords = words[parseInt(decimalPart)] || '';
        } else if (decimalPart.length === 2) {
            if (decimalPart[0] === '0') {
                decimalWords = words[parseInt(decimalPart[1])] || '';
            } else if (decimalPart[0] === '1') {
                decimalWords = words[parseInt(decimalPart)] || '';
            } else {
                decimalWords =
                    (words[parseInt(decimalPart[0] + '0')] || '') +
                    (words[parseInt(decimalPart[1])] || '');
            }
        }

        words_string += ' and ' + decimalWords + ' Paise only';
    }

    return words_string.trim();
}


