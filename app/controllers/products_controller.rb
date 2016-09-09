class ProductsController < ApplicationController
  respond_to :html, :json
  before_action :get_product, except: [:index, :create]

  def index
    @products = Product.all
    respond_to do |format|
      format.html # index.html.erb
      format.json { render :json => @products }
    end
  end

  def new
  end


  def create
    @product = Product.new(product_params)
    if @product.save
      render json: @product.as_json, status: :ok
    else
      render json: {user: @product.errors, status: :no_content}
    end
  end

  private

  def product_params
    params.require(:product).permit(:name, :user_id, :price)
  end

  def get_product
    @product = Product.find(params[:id])
    render json: {status: :not_found} unless @product
  end

end
