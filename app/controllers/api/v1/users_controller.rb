module Api
  module V1
    class UsersController < ApplicationController
      before_action :get_user, except: [:index, :create]
      respond_to :json
      def index
        respond_with User.all
      end

      def show
        respond_with @user
      end

      def create
        respond_with User.create(user_params)
      end

      def update
        respond_with @user.update_attributes(user_params)
      end

      def destroy
        respond_with @user.destroy
      end

      private

      def user_params
        params.require(:user).permit(:first_name,:last_name, :email, :salary, :gender)
      end

      def get_user
        @user = User.find(params[:id])
        render json: {status: :not_found} unless @user
      end

    end
  end
end