class Apartment
  attr_accessor :unit, :num_beds, :num_baths, :tenants, :price, :studio
  def initialize(unit, num_beds, num_baths, tenant)
    @unit = unit
    @num_beds = num_beds
    @num_baths = num_baths
    @tenants = []
    @tenants << tenant
    @price = (num_beds * 1000) + (num_baths * 500)
    @studio = num_beds * 1
    end

      def studio?
        if (num_beds  == 1)
         studio
          true
        else (num_beds != 1)
         studio
          false
        end
    end

    def move_in(tenant)
      @tenants << tenant
    end
end

