```
context.relations = frappe.db.sql(f"""select mnt.roll_no, 
mnt.full_name as tabMentee,
m.full_name as tabMentor
from tabRelation r join tabMentee mnt
ON r.student_id=mnt.name join
tabMentor m  ON r.mentor_id=m.name 
order by mnt.roll_no,m.full_name,mnt.full_name;
""")
```

