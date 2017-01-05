class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.string :content
      t.references :topic, foreign_key: true
      t.references :user, foreign_key: true
      t.string :created_at

      t.timestamps
    end
  end
end