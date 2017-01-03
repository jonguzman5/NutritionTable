require 'spec_helper'
require_relative '../lib/ruby_robot'

describe RubyRobot do

  describe "#introduce_yourself" do
    it "introduces Ruby Robot" do
      introduction = "Hi. I am Ruby Robot. Matz is nice, so then I am nice."
      expect(RubyRobot.new.introduce_yourself).to eq(introduction)
    end
  end

  describe "#say_back" do
    it "can repeat a phrase" do
      phrase = "Boop Bloop Blip Beep"
      expected_response = "BOOP BLOOP BLIP BEEP!"
      expect(RubyRobot.new.say_back(phrase)).to eq(expected_response)
    end
  end

  it "can repeat two phrases" do
    phrase_one =  "Boop Bloop Blip Beep"
    phrase_two = "Initiating Rubyness, Beauty, and Hope"
    expected_response = "BOOP BLOOP BLIP BEEP INITIATING RUBYNESS, BEAUTY, AND HOPE!"
    expect(RubyRobot.new.say_back(phrase_one, phrase_two)).to eq(expected_response)
  end
end
