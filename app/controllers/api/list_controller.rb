class Api::VotersController < ApplicationController
  def create
    @list = List.new(list_params)
      if @list.save
        render json: @list
      else
        render json: @list.errors.full_messages
      end
  end

  def destroy
    @list = List.find(params[:id])
    @list.destroy
    @list
  end
end
