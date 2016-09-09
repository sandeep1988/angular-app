module Api
  module V1
    class ProductsController < ApplicationController
      before_action :get_product, except: [:index, :create]
      respond_to :json
      def index
        respond_with Product.all
      end

      def edit
        respond_with @product
      end

      def show
        respond_with @product
      end

      def create
        @product = Product.new(user_params)
        if @product.save
          render json: @product.as_json, status: :ok
        else
          render json: {user: @product.errors, status: :no_content}
        end
      end

      def update
        if @product.update_attributes(user_params)
          render json: @product.as_json, status: :ok
        else
          render json: {user: @product.errors, status: :unprocessable_entity}
        end
      end

      def destroy
        @product.destroy
        render json: {status: :ok}
      end

      private

      def user_params
        params.require(:product).permit(:name, :user_id, :price)
      end

      def get_product
        @product = Product.find(params[:id])
        render json: {status: :not_found} unless @product
      end
    end
  end
end