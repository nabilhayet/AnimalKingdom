class KingdomSerializer < ActiveModel::Serializer 
    include FastJsonapi::ObjectSerializer
    attributes :id, :Body_Form, :Mitochondria

    has_many :animals 
  end