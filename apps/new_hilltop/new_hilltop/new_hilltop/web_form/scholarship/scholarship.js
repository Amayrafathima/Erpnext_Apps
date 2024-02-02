// frappe.ready(function() {
// 	// bind events here
// 	frappe.web_form.after_load = () => {
		
// 		frappe.web_form.on('student_name',(field,value) => {
// 			frappe.msgprint('Hello');
// 		});
// 	};
// })



// frappe.ready(function() {
//     frappe.web_form.after_load = () => {
//         frappe.web_form.events.on('gender', (field, value) => {
//             frappe.msgprint('Hello');
//         });
//     };
// });


// frappe.ready(function() {
//     frappe.web_form.after_load = () => {
//         frappe.web_form.events.on('Gender', (field, value) => {
//             frappe.ui.messages.print({
//                 title: 'Message',
//                 message: 'Hello',
//                 indicator: 'green' // You can change the indicator color if needed
//             });
//         });
//     };
// });



frappe.ready(function() {

	// bind events here

	// frappe.web_form.after_load = () => {
	// 	frappe.msgprint('Please fill all values carefully');
	// };
	frappe.web_form.after_load = () => {
		// init script here
		frappe.web_form.on('Gender', (field, value) => {

			frappe.msgprint('Hi User');

		});
		// frappe.web_form.on('dob', (field, value) => {
		// 	if (value) {
		// 		dob = new Date(value);
		// 		var today = new Date();
		// 		var age = Math.floor((today-dob) / (365.25 * 24 * 60 * 60 * 1000));
		// 		frappe.web_form.set_value("age", [age])		}
		// });
	
	}