class AnimalsController < ApplicationController
    
    before_action :set_animal, only: [:show, :update, :destroy]

    def index 
        animals = Animal.all 
        render json: animals 
    end 

    def show 
        if @animal 
            render json: @animal
        else 
            render json: {status: "error", code:3000, message: "This id does not exist" }
        end 
    end 

    def create 
        animal = Animal.new(animal_params)
        if animal.save 
            render json: animal
        else 
            render json: animal.errors 
        end 
    end 

    def update
        if @animal.update(animal_params)
            render json: @animal
        else 
            render json: @animal.errors 
        end 
    end 

    def destroy
        @animal.destroy
    end 

    private 
    def set_animal
        @animal = Animal.find_by_id(params[:id])
    end 

    def animal_params
        params.require(:animal).permit(:name, :phylum, :order, :species, :kingdom_id)
    end 
end
