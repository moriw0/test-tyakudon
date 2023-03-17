class RamenShopsController < ApplicationController
  before_action :set_ramen_shop, only: %i[ show edit update destroy ]

  # GET /ramen_shops or /ramen_shops.json
  def index
    @ramen_shops = RamenShop.all
  end

  # GET /ramen_shops/1 or /ramen_shops/1.json
  def show
  end

  # GET /ramen_shops/new
  def new
    @ramen_shop = RamenShop.new
  end

  # GET /ramen_shops/1/edit
  def edit
  end

  # POST /ramen_shops or /ramen_shops.json
  def create
    @ramen_shop = RamenShop.new(ramen_shop_params)

    respond_to do |format|
      if @ramen_shop.save
        format.html { redirect_to ramen_shop_url(@ramen_shop), notice: "Ramen shop was successfully created." }
        format.json { render :show, status: :created, location: @ramen_shop }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @ramen_shop.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /ramen_shops/1 or /ramen_shops/1.json
  def update
    respond_to do |format|
      if @ramen_shop.update(ramen_shop_params)
        format.html { redirect_to ramen_shop_url(@ramen_shop), notice: "Ramen shop was successfully updated." }
        format.json { render :show, status: :ok, location: @ramen_shop }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @ramen_shop.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /ramen_shops/1 or /ramen_shops/1.json
  def destroy
    @ramen_shop.destroy

    respond_to do |format|
      format.html { redirect_to ramen_shops_url, notice: "Ramen shop was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ramen_shop
      @ramen_shop = RamenShop.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def ramen_shop_params
      params.require(:ramen_shop).permit(:name, :address, :plate)
    end
end
