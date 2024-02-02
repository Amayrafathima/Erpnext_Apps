// Copyright (c) 2024, jaya and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Scholarship", {
// 	refresh(frm) {

// 	},
// });


// frappe.ui.form.on('Scholarship', {
//     date_of_birth: function(frm) {
//         var dob = frm.doc.date_of_birth;
//         var currentDate = frappe.datetime.get_today();
//         if (dob >= currentDate) {
//             frappe.msgprint(__("Date of Birth should be a previous date."));
//             frappe.validated = false;
//         }
//     }
    
// });


//  frappe.ui.form.on('Scholarship', {
//     validate: function(frm) {
//         var email = frm.doc.email; // Replace 'email_field' with your actual email fieldname
//         if (!containsAtSymbol(email)) {
//             frappe.msgprint(__("Please enter a valid email address containing '@'"));
//             frappe.validated = false;
//         }
//     }
// });



// function containsAtSymbol(email) {
//     return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|edu|gov|mil|biz|info|in)$/.test(email);
// }




// frappe.ui.form.on('Scholarship',{

//      refresh: function(frm){
       

//    if(frm.is_new()){
//     frm.set_intro("Now, Enter your data carefullly!");
//    }
   
//  // frm.set_intro("Now you can enter your data!!");

//      }

    
   
// })


// frappe.ui.form.on('Scholarship',
// {
//     validate:function(frm){
//         let row = frm.add_child('marks_details',{
//             course_name : "English",
//             status : "Completed",
//         })
//     }
// })



frappe.ui.form.on('Scholarship',{
    student_name:function(frm){
        frm.set_df_property('branch','reqd',1);
    }
})