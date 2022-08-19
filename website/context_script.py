context.relations = frappe.db.sql(f"""select s.roll_no, s.full_name as tabStudent, 
m.full_name as tabMentor from tabRelation r
join tabStudent s
 ON r.student_id=s.name join tabMentor m 
 ON r.mentor_id=m.name
 order by s.roll_no,s.full_name,m.name;
""")
