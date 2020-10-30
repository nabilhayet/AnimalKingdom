class CreateKingdoms < ActiveRecord::Migration[6.0]
  def change
    create_table :kingdoms do |t|
      t.string :name 
      t.string :body_form
      t.string :mitochondria
      t.string :cell_wall
      t.string :nutrition
      t.string :nervous_system

      t.timestamps
    end
  end
end
