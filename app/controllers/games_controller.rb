class GamesController < ApplicationController
  def index
  end

  def new
    @game = Game.new
  end

  def create
    #render plain: params[:game].inspect

    @game = Game.new(game_params)
    if @game.save
      flash[:notice] = "Game is successfully saved"
      redirect_to game_path(@game)
    else
      render 'new'
    end
    
  end

  def show
    @game = Game.find(params[:id])
  end
  

  private
  def game_params
    params.require(:game).permit(:title,:url,:description)
  end


end
