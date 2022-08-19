// Copyright (c) 2022, Frappe Technologies and contributors
// For license information, please see license.txt

frappe.ui.form.on('Relation', {
	refresh: function(frm) {
        frm.add_custom_button('Add Student', () => {
            frappe.new_doc('Student', {
                relation: frm.doc.name
            })
        })
        frm.add_custom_button('Add Mentor', () => {
            frappe.new_doc('Mentor', {
                relation: frm.doc.name
            })
        })
    }
	
});



