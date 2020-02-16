class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :title
      t.string :url
      t.text :description
      t.datetime :created_at
      t.datetime :updated_at
    end
  end
end
