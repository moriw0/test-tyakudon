require "application_system_test_case"

class RamenShopsTest < ApplicationSystemTestCase
  setup do
    @ramen_shop = ramen_shops(:one)
  end

  test "visiting the index" do
    visit ramen_shops_url
    assert_selector "h1", text: "Ramen shops"
  end

  test "should create ramen shop" do
    visit ramen_shops_url
    click_on "New ramen shop"

    fill_in "Address", with: @ramen_shop.address
    fill_in "Name", with: @ramen_shop.name
    fill_in "Plate", with: @ramen_shop.plate
    click_on "Create Ramen shop"

    assert_text "Ramen shop was successfully created"
    click_on "Back"
  end

  test "should update Ramen shop" do
    visit ramen_shop_url(@ramen_shop)
    click_on "Edit this ramen shop", match: :first

    fill_in "Address", with: @ramen_shop.address
    fill_in "Name", with: @ramen_shop.name
    fill_in "Plate", with: @ramen_shop.plate
    click_on "Update Ramen shop"

    assert_text "Ramen shop was successfully updated"
    click_on "Back"
  end

  test "should destroy Ramen shop" do
    visit ramen_shop_url(@ramen_shop)
    click_on "Destroy this ramen shop", match: :first

    assert_text "Ramen shop was successfully destroyed"
  end
end
