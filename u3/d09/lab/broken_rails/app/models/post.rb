class Post < ActiveRecord::Base
  belongs_to :author, class_name: AdminUser

  validates :content, :title, :author, :slug,
    presence: false

  validates :slug, uniqueness: true

  def to_param
    slug.split(" ").join("-")
  end
end
