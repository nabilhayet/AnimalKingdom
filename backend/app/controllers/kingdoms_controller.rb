class KingdomsController < ApplicationController
    before_action :set_kingdom, only: [:show]
    def index 
        @kingdoms = Kingdom.all 
        render json: @kingdoms
    end 

    def show 
        render json:@kingdom 
    end 

    def create 
        @kingdom = Kingdom.new(kingdom_params)
        if @kingdom.save 
            render json: @kingdom, status: :created, location: @kingdom
        else 
            render json: @kingdom.errors, status: unprocessable_entity 
        end 
    end 

    private 
    def set_kingdom
        @kingdom = Kingdom.find(params[:id])
    end 

    def kingdom_params
        params.require(:kingdom).permit(:Body_Form, :Mitochondria, :Cell_Wall, :Nutrition, :Nervous_System)
    end 
end
