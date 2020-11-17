class AnimalSerializer < ActiveModel::Serializer
  attributes :id, :name, :phylum, :order, :species, :kingdom_id 
  belongs_to :kingdom 
end
