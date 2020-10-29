class CreateKingdoms < ActiveRecord::Migration[6.0]
  def change
    create_table :kingdoms do |t|
      t.string :name 
      t.string :Body_Form
      t.string :Mitochondria
      t.string :Cell_Wall
      t.string :Nutrition
      t.string :Nervous_System

      t.timestamps
    end
  end
end
