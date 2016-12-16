class CreateTopics < ActiveRecord::Migration[5.0]
  def change
    create_table :topics do |t|
      t.string :title
      t.string :content
      t.references :user, foreign_key: true
      t.string :created_at

      t.timestamps
    end
  end
end
