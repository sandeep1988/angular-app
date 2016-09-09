class UsersController < ApplicationController
  respond_to :html, :json
  skip_before_filter :verify_authenticity_token, :only => :create
  before_action :get_user, except: [:index, :create]

  def index
    @users = User.all
    respond_to do |format|
      format.html # index.html.erb
      format.json { render :json => @users }
    end
  end

  # def edit
  #   respond_with(@user.as_json)
  # end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user.as_json, status: :ok
    else
      render json: {user: @user.errors, status: :no_content}
    end
  end

  def destroy
    @user.destroy
    render json: {status: :ok}
  end

  def show
    respond_with(@user.as_json)
  end

  def update
    if @user.update_attributes(user_params)
      render json: @user.as_json, status: :ok
    else
      render json: {user: @user.errors, status: :unprocessable_entity}
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name,:last_name, :email, :salary, :gender, :password, :password_confirmed)
  end

  def get_user
    @user = User.find(params[:id])
    render json: {status: :not_found} unless @user
  end
end
