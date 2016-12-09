class Project < ActiveRecord::Base
  belongs_to :users
  has_many :comments, dependent: :destroy #depended destroy is for later steps...
end
