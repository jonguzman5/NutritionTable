class AddCountryToCheeses < ActiveRecord::Migration[5.0]
  def change
    add_reference :cheeses, :country, foreign_key: true
  end
end
