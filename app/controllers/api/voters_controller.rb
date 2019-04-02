class Api::VotersController < ApplicationController
  def create
    @voter = Voter.new(voter_params)
      if @voter.save
        render json:@voter
      else
        debugger
        render json: @voter.errors.full_messages, status: 422
      end
  end

  def edit
    @voter = Voter.find(params[:id])
      if @voter.update(voter_params)
        render :show
      else
        render json: @voter.errors.full_messages, status: 422
      end
  end

  def show
    @voter = Voter.find(params[:id])
  end

  def index
    @voters = Voter.all
    return @voters
  end

  def destroy
    @voter = Voter.find(params[:id])
    @voter.destroy
  end

  private


  def voter_params
    params.require(:voter).permit(:id, :first_name, :last_name, :address, :apartment_number,:city,:state,:zip,:age,:can_share_contact_info,:phone_number,:email,:list_id,:contact_attempts,:enthusiasm,:poll_location_name,:poll_location_address,:poll_location_city,:poll_location_state,:sign_requested,:sign_delivered,:do_not_contact,:notes)
  end
end
