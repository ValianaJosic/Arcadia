require 'test_helper'

class JournalControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get journal_index_url
    assert_response :success
  end

end
