class KingdomsController < ApplicationController
    before_action :set_kingdom, only: [:show]
    def index 
        @kingdoms = Kingdom.all 
        render json: @kingdoms 
    end 

    def show 
        if @kingdom 
            render json: @kingdom 
        else 
            render json: {status: "error", code:3000, message: "This id does not exist" }
        end 
    end 

    def create 
        @kingdom = Kingdom.new(kingdom_params)
        if @kingdom.save 
            render json: @kingdom 
        else 
            render json: @kingdom.errors 
        end 
    end 

    private 
    def set_kingdom
        @kingdom = Kingdom.find_by_id(params[:id])
    end 

    def kingdom_params
        params.require(:kingdom).permit(:name, :body_form, :mitochondria, :cell_wall, :nutrition, :nervous_system)
    end 
end
