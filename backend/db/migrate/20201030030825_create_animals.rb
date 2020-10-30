class CreateAnimals < ActiveRecord::Migration[6.0]
  def change
    create_table :animals do |t|
      t.string :name 
      t.string :phylum
      t.string :order
      t.string :species
      t.integer :kingdom_id

      t.timestamps
    end
  end
end
