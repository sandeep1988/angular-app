class InventoriesController < ApplicationController
  respond_to :html, :json

  def index
    @inventories = Inventory.all
    respond_to do |format|
      format.html # index.html.erb
      format.json { render :json => @inventories }
    end
  end

  def create
    @inventory = Inventory.new(inventory_params)
    @inventory.total_price = ((params[:inventory][:quantity].to_i) * (params[:inventory][:price].to_i))
    if @inventory.save
      render json: @inventory.as_json, status: :ok
    else
      render json: {user: @inventory.errors, status: :no_content}
    end
  end

  private

  def inventory_params
    params.require(:inventory).permit(:quantity, :price  ,:total_price)
  end

end
