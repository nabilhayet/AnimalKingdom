class KingdomSerializer < ActiveModel::Serializer
  attributes :id, :name, :body_form, :mitochondria, :cell_wall, :nutrition, :nervous_system
  has_many :animals 
end
