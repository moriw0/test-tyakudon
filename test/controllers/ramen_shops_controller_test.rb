require "test_helper"

class RamenShopsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @ramen_shop = ramen_shops(:one)
  end

  test "should get index" do
    get ramen_shops_url
    assert_response :success
  end

  test "should get new" do
    get new_ramen_shop_url
    assert_response :success
  end

  test "should create ramen_shop" do
    assert_difference("RamenShop.count") do
      post ramen_shops_url, params: { ramen_shop: { address: @ramen_shop.address, name: @ramen_shop.name, plate: @ramen_shop.plate } }
    end

    assert_redirected_to ramen_shop_url(RamenShop.last)
  end

  test "should show ramen_shop" do
    get ramen_shop_url(@ramen_shop)
    assert_response :success
  end

  test "should get edit" do
    get edit_ramen_shop_url(@ramen_shop)
    assert_response :success
  end

  test "should update ramen_shop" do
    patch ramen_shop_url(@ramen_shop), params: { ramen_shop: { address: @ramen_shop.address, name: @ramen_shop.name, plate: @ramen_shop.plate } }
    assert_redirected_to ramen_shop_url(@ramen_shop)
  end

  test "should destroy ramen_shop" do
    assert_difference("RamenShop.count", -1) do
      delete ramen_shop_url(@ramen_shop)
    end

    assert_redirected_to ramen_shops_url
  end
end
