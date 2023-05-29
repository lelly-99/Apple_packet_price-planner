describe("Apple packet price planner", function(){
    it("should be able to get the number of packets", function(){
        var packets = applePacketPricePlanner()

        packets.setcostforBoxOfApples(100)
        packets.setpacketSizeApplesAreSoldIn(10)

        assert.equal(10, packets.getnumberOfPackets())

    })

    it("should be able to get the cost per apple", function(){
        var pricePerApple = applePacketPricePlanner()

        pricePerApple.setcostforBoxOfApples(100)
        pricePerApple.setapplesInTheBox(500)

        assert.equal(0.20, pricePerApple.getcostPricePerApple())

    })

    it("should be able to get the packet price to which apples are sold in", function(){
        var packetZize = applePacketPricePlanner()

        packetZize.setcostforBoxOfApples(100)
        packetZize.setpacketSizeApplesAreSoldIn(20)

        assert.equal(5, packetZize.getcostPricePerPacket())

    })

    it("should be able to get the recommended packet price", function(){
        var packetZize = applePacketPricePlanner()

        packetZize.setcostforBoxOfApples(100)
        packetZize.setpacketSizeApplesAreSoldIn(20)
        packetZize.setprofit(40)

        assert.equal(200, packetZize.getReccommendedPacketPrice())

    })

})