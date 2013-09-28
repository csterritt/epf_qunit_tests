class CreatePersonas < ActiveRecord::Migration
  def change
    create_table :personas do |t|
      t.string :name
      t.integer :age
      t.string :favorite_food

      t.timestamps
    end
  end
end
