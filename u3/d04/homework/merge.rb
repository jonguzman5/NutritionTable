require_relative "tenant"
require_relative "apartment"
p1 = Tenant.new("Calvin", "Clifford", "male", "December 21st, 1929")
p1.nickname = "Bud"
p1.occupation = "Office Drone"
p p1.nickname
p p1.occupation
p1.full_name
a1 = Apartment.new("B", 1, 2, p1)
a1.unit = "unit1"
a1.num_beds = "9"
p a1.unit
p a1.num_beds
a2 = Apartment.new("A", 1, 2, 3)
p a2.price
a1 = Apartment.new("B", 1, 2, 3)
a2 = Apartment.new("A", 2, 2, 3)
a1.studio?
a2.studio?
p a1.studio?
p a2.studio?
t1 = Tenant.new("Fran", "Kubelik", "female", "May 8, 1935")
a1.move_in(t1)
a1.tenant
