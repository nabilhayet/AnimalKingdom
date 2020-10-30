class AnimalSerializer < ActiveModel::Serializer
  attributes :id, :name, :phylum, :order, :species, :kingdom_id
  belong_to :kingdom 
end
